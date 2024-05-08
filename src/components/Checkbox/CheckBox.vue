<template>
  <div class="flex items-center w-full">
    <label
      class="relative flex items-center p-3 rounded-full cursor-pointer pl-0"
      :htmlFor="id">
      <input
        type="checkbox"
        class="before:content[''] bg-[#f2f2f2] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
        :id="id" />
      <span
        class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-[30%] -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3.5 w-3.5"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1">
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"></path>
        </svg>
      </span>
    </label>
    <label
      class="mt-px font-[500] text-gray-700 w-full text-[15px] cursor-pointer select-none flex items-center justify-between gap-1"
      :htmlFor="id">
      <div
        class="flex items-center gap-1 text-[14px] font-[400] whitespace-nowrap">
        {{ label }}

        <svg
          v-if="haveIcon"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.166748 5.99959C0.166748 2.78018 2.78008 0.16626 6.00008 0.16626C9.22591 0.16626 11.8334 2.78018 11.8334 5.99959C11.8334 9.22018 9.22591 11.8329 6.00008 11.8329C2.78008 11.8329 0.166748 9.22018 0.166748 5.99959ZM5.48675 3.78876C5.48675 3.50934 5.72008 3.27543 6.00008 3.27543C6.28008 3.27543 6.50758 3.50934 6.50758 3.78876V6.36709C6.50758 6.64768 6.28008 6.87459 6.00008 6.87459C5.72008 6.87459 5.48675 6.64768 5.48675 6.36709V3.78876ZM6.00591 8.73018C5.72008 8.73018 5.49258 8.49684 5.49258 8.21684C5.49258 7.93684 5.72008 7.70934 6.00008 7.70934C6.28591 7.70934 6.51341 7.93684 6.51341 8.21684C6.51341 8.49684 6.28591 8.73018 6.00591 8.73018Z"
            fill="#6F6F6F" />
        </svg>
      </div>
      <div
        v-if="price"
        class="font-[500] md:font-[700] text-[14px] whitespace-nowrap">
        SAR {{ price }}
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    id: String,
    haveIcon: Boolean,
    price: String,
  },
};
</script>
