<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue";
import PropertyService from "./services/property";
import { Property } from "./interfaces/property";
import PropertyForm from "./components/PropertyForm.vue";
import PropertyList from "./components/PropertyList.vue";
import BlankModal from "./components/BlankModal.vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

let properties = ref<Property[]>([]);
const selectedStatus = ref<any>({ label: "All", value: "all" });
const isModalOpen = ref(false);
const searchQuery = ref("");

const getAllProperties = () => {
  PropertyService.getAll()
    .then((response: Property[]) => {
      properties.value = response;
    })
    .catch((error: any) => {
      console.error("Error fetching properties:", error);
    });
};
onMounted(getAllProperties);

const createProperty = (property: Property) => {
  PropertyService.create(property)
    .then(() => (isModalOpen.value = false))
    .then(getAllProperties)
    .catch((err: Error) => {
      console.log(err);
    });
};

const updateProperty = (property: Property) => {
  PropertyService.update(property)
    .then(() => (isModalOpen.value = false))
    .then(getAllProperties)
    .catch((err: Error) => {
      console.log(err);
    });
};

const deleteProperty = (id: string) => {
  PropertyService.delete(id).then(getAllProperties);
};

const statusOptions = [
  { label: "All", value: "all" },
  { label: "Sold", value: "sold" },
  { label: "Available", value: "available" },
  { label: "Under contract", value: "under_contract" },
];

watch(selectedStatus, () => {
  console.log("Selected Status:", selectedStatus.value);
  console.log("Filtered Properties:", filteredProperties.value);
});

const filteredProperties = computed(() => {
  return selectedStatus.value.value !== "all"
    ? properties.value?.filter((property) => {
        return property.status === selectedStatus.value.value;
      })
    : properties.value;
});

const filteredPropertiesByQS = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return filteredProperties.value.filter((property) => {
    return (
      property.address.toLowerCase().includes(query) ||
      property.description.toLowerCase().includes(query)
    );
  });
});
</script>

<template>
  <div class="flex justify-between mx-10 mt-10">
    <v-select
      :options="statusOptions"
      placeholder="Sort"
      v-model="selectedStatus"
      style="width: 200px"
    >
      <template #option="selectedStatus">
        <span>{{ selectedStatus.label }}</span>
      </template>
      <template #label="selectedStatus">
        <span v-if="selectedStatus">{{ selectedStatus.label }}</span>
        <span v-else>Sort</span>
      </template>
    </v-select>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search address or description"
      class="border rounded-md px-3 py-1 focus:outline-none focus:ring focus:border-blue-300"
      style="width: 300px"
    />
    <button
      @click="isModalOpen = true"
      class="flex items-center bg-blue-600 rounded-md text-white px-4 py-1 text-md"
    >
      <img src="./assets/plus.svg" class="w-5 h-5 text-white pr-2" />
      Create New Property
    </button>
  </div>
  <div class="p-8 grid grid-rows-[50px_1fr] gap-4">
    <PropertyList
      :properties="!!searchQuery ? filteredPropertiesByQS : filteredProperties"
      @submit="updateProperty"
      @delete="deleteProperty"
    />
  </div>
  <BlankModal
    title="New Property Info"
    :isOpen="isModalOpen"
    @close-modal="isModalOpen = false"
  >
    <PropertyForm :property="{}" @submit="createProperty" />
  </BlankModal>
</template>

<!-- <style>
@import "vue-select/dist/vue-select.css";
</style> -->
