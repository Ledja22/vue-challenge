<script setup lang="ts">
import { ref } from "vue";
import PropertyForm from "./PropertyForm.vue";
import BlankModal from "./BlankModal.vue";
const { property } = defineProps(["property"]);

const emit = defineEmits();

const isModalOpen = ref(false);

const onSubmit = (val: any) => {
  emit("submit", { ...val });
};
</script>

<template>
  <div
    class="grid grid-cols-[100px_repeat(3,1fr)_50px] border border-gray-300 rounded-md py-3 px-4 mb-2 text-gray-500 font-light"
  >
    <span>{{ property.address }}</span>
    <span>{{ property.status }}</span>
    <span>{{ property.price }}</span>
    <span>{{ property.description }}</span>
    <div class="flex justify-evenly">
      <img
        @click="isModalOpen = true"
        src="../assets/pencil.svg"
        class="cursor-pointer w-5"
      />
      <img
        @click="$emit('delete', property.id)"
        src="../assets/trash.svg"
        class="cursor-pointer w-5"
      />
    </div>
  </div>

  <BlankModal
    title="Edit Property Info"
    :isOpen="isModalOpen"
    @close-modal="isModalOpen = false"
  >
    <PropertyForm :property="{ ...property }" @submit="onSubmit" />
  </BlankModal>
</template>
