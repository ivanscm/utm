<script setup>
import {computed} from "vue";

const props = defineProps({
  modelValue: String,
  name: String,
  title: String
})

const isChecked = computed(() => {
  return props.modelValue === props.name;
});
</script>

<template>
  <div class="flex">
    <input type="radio" :id="name"
           :value="name"
           :checked="isChecked"
           @change="$emit('update:modelValue', $event.target.value)"
           class="shrink-0 mt-0.5 border-gray-200 rounded-full text-m-red focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
    <label :for="name" class="text-sm text-gray-500 ml-2 dark:text-gray-400">{{ title }}</label>
  </div>
</template>