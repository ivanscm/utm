<script setup>
defineProps({
  modelValue: String,
  title: String,
  name: String,
  placeholder: String,
  help: String
})
defineEmits(['update:modelValue'])
</script>

<template>
  <label>{{ title }}</label>
  <div class="flex">
    <div class="rounded-l-md border-2 border-m-black border-r w-5/12">
      <span class="inline-block align-middle">{{ name }}</span>
    </div>
    <input
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="['border-2 border-l border-m-black focus:border-gray-800 focus:outline-none inline-block align-middle w-full', help ? 'border-r-0' : 'rounded-r-md']">
    <button v-if="help" class="w-1/12 bg-m-red text-m-grey uppercase font-oswald font-bold rounded-r-md cursor-help" :title="help">?</button>
  </div>
</template>
