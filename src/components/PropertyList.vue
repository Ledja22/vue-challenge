<script setup lang="ts">
import PropertyRow from './PropertyRow.vue';

const { properties } = defineProps(["properties"]);
</script>

<template>
  <div>
    <div class="grid grid-cols-[100px_repeat(3,1fr)_50px] px-4 py-3">
      <div class="font-medium">Address</div>
      <div class="font-medium">Status</div>
      <div class="font-medium">Price</div>
      <div class="font-medium">Description</div>
      <div class="font-medium">Actions</div>
    </div>
    <PropertyRow
      v-for="property in properties"
      :key="property?.id",
      :property="property"
      @delete="$emit('delete', $event)"
      @submit="$emit('submit', $event)"
    />
  </div>
</template>
