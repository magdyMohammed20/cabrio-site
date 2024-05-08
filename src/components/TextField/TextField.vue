<template>
  <div class="relative text-left bg-[#F6F6F6] rounded-md px-[14px] py-2">
    <div>
      <div class="flex flex-col items-start">
        <label class="text-[12px] font-[400]">{{ label }}</label>

        <input
          :placeholder="placeholder"
          type="text"
          class="w-full flex-1 bg-transparent focus:outline-none font-[300] text-[14px]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: {
    label: String,
    placeholder: String,
  },
  data() {
    return {
      menuOpen: false,
      selectedOption: "",
    };
  },
  methods: {},
};
</script>
