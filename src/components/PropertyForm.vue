<script setup lang="ts">
const { property } = defineProps(["property"]);

const hasError = (field: any) => field["errors.value"];
</script>

<template>
  <div class="grid grid-cols-2 gap-y-8 gap-x-12">
    <div class="flex flex-col">
      <label for="name" class="mb-3">Address</label>
      <input
        v-model="property.address"
        type="text"
        id="name"
        :class="[
          'border text-gray-800 rounded-md p-4 focus:outline-none',
          hasError('name') ? 'border-red-600' : 'border-gray-300',
        ]"
        placeholder="Address"
      />
    </div>
    <div class="flex flex-col">
      <label for="username" class="mb-3">Price</label>
      <input
        v-model="property.price"
        type="text"
        id="username"
        :class="[
          'border text-gray-800 rounded-md p-4 focus:outline-none',
          hasError('username') ? 'border-red-600' : 'border-gray-300',
        ]"
        placeholder="Price"
      />
    </div>
    <div class="flex flex-col">
      <label for="email" class="mb-3">Description</label>
      <input
        v-model="property.description"
        type="email"
        id="email"
        :class="[
          'border text-gray-800 rounded-md p-4 focus:outline-none',
          hasError('email') ? 'border-red-600' : 'border-gray-300',
        ]"
        placeholder="Description"
      />
    </div>
    <div class="flex flex-col">
      <label for="phone" class="mb-3">Status</label>
      <input
        v-model="property.status"
        type="tel"
        id="phone"
        :class="[
          'border text-gray-800 rounded-md p-4 focus:outline-none',
          hasError('phone') ? 'border-red-600' : 'border-gray-300',
        ]"
        placeholder="Status"
      />
    </div>
  </div>
  <div class="grid justify-end mt-4">
    <button
      @click="$emit('submit', property)"
      class="text-center py-3 w-36 bg-blue-600 rounded-md text-white text-md"
    >
      Save
    </button>
  </div>
</template>
