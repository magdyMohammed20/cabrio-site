<template>
  <div class="relative text-left bg-[#F6F6F6] rounded-md px-[14px] py-2">
    <div>
      <button
        type="button"
        class="inline-flex w-full justify-between items-center gap-x-1.5 text-sm font-semibold text-gray-900"
        id="menu-button"
        :aria-expanded="menuOpen"
        aria-haspopup="true"
        @click="toggleMenu">
        <div class="flex flex-col items-start">
          <label class="text-[12px] font-[400]">{{ label }}</label>

          <div class="text-[14px] font-[500]">
            {{
              selectedOption
                ? selectedOption
                : selectPlaceholder
                ? selectPlaceholder
                : "Select option"
            }}
          </div>
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.8334 7.08325L10.0001 12.9166L4.16675 7.08325"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>
    </div>

    <!-- Dropdown menu -->
    <div
      v-if="menuOpen"
      class="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1">
      <div class="py-1 px-2" role="none">
        <!-- Menu items -->

        <a
          href="#"
          v-if="options.length > 0"
          v-for="option in options"
          :class="{
            'font-bold': selectedOption == option.text,
            'bg-[#000]': selectedOption == option.text,
            'text-white': selectedOption == option.text,
          }"
          class="text-gray-700 block px-4 py-2 my-1 text-[16px] rounded-md hover:bg-black hover:text-white transition-all duration-200 ease-in-out"
          role="menuitem"
          tabindex="-1"
          id="menu-item-0"
          @click="selectOption(option.text)">
          {{ option.text }}
          <div v-if="option.desc" class="text-[12px] font-[300]">
            {{ option.desc }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: {
    options: Array,
    label: String,
    selectPlaceholder: String,
  },
  data() {
    return {
      menuOpen: false,
      selectedOption: "",
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.menuOpen = false;
    },
  },
};
</script>
