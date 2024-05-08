<template>
  <nav :class="$style.parent">
    <div :class="$style.routerParent">
      <button class="flex md:hidden">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 9H19"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round" />
          <path
            d="M5 15H19"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round" />
        </svg>
      </button>
      <router-link to="/" :class="$style.routerLink">
        <svg
          class="h-[20px] md:h-auto"
          width="142"
          height="28"
          viewBox="0 0 142 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M49.1044 4.64347H44.4609V7.00497C42.5021 5.52344 40.0661 4.64347 37.4212 4.64347C30.968 4.64347 25.7429 9.87358 25.7429 16.3217C25.7429 22.7699 30.973 28 37.4212 28C40.0661 28 42.5021 27.12 44.4609 25.6385V28H52.3359V23.3565H49.0994V4.64347H49.1044ZM37.4261 23.6697C33.3693 23.6697 30.0781 20.3786 30.0781 16.3217C30.0781 12.2649 33.3693 8.97372 37.4261 8.97372C41.483 8.97372 44.7741 12.2649 44.7741 16.3217C44.7741 20.3786 41.483 23.6697 37.4261 23.6697ZM11.6783 23.6697C7.62145 23.6697 4.33026 20.3786 4.33026 16.3217C4.33026 12.2649 7.62145 8.97372 11.6783 8.97372C14.343 8.97372 16.6697 10.3956 17.9574 12.5185H22.0192V4.64347H17.9872V6.50284C16.1676 5.32955 14.005 4.64347 11.6783 4.64347C5.23011 4.64347 0 9.86861 0 16.3217C0 22.7749 5.23011 28 11.6783 28C16.7543 28 21.0646 24.7585 22.6754 20.2393L18.5938 18.7876C17.5795 21.6314 14.875 23.6697 11.6783 23.6697ZM101.654 4.64347V9.28693H106.298V23.3615H101.654V28.005H115.58V23.3615H110.936V9.28196H115.58V4.64347H101.654ZM129.967 4.64347C123.514 4.64347 118.289 9.87358 118.289 16.3217C118.289 22.7699 123.519 28 129.967 28C136.415 28 141.646 22.7699 141.646 16.3217C141.646 9.87358 136.415 4.64347 129.967 4.64347ZM129.967 23.6697C125.911 23.6697 122.619 20.3786 122.619 16.3217C122.619 12.2649 125.911 8.97372 129.967 8.97372C134.024 8.97372 137.315 12.2649 137.315 16.3217C137.315 20.3786 134.024 23.6697 129.967 23.6697ZM85.2777 28H89.9212V9.28196H97.6321V4.64347H85.2777V28ZM70.0796 4.63849C67.4347 4.63849 64.9986 5.51847 63.0398 7V0H55.1648V4.64347H58.4013V28H63.0447V25.6385C65.0035 27.12 67.4396 28 70.0845 28C76.5376 28 81.7628 22.7699 81.7628 16.3217C81.7628 9.87358 76.5327 4.64347 70.0845 4.64347M70.0845 23.6697C66.0277 23.6697 62.7365 20.3786 62.7365 16.3217C62.7365 12.2649 66.0277 8.97372 70.0845 8.97372C74.1413 8.97372 77.4325 12.2649 77.4325 16.3217C77.4325 20.3786 74.1413 23.6697 70.0845 23.6697Z"
            fill="white" />
        </svg>
      </router-link>

      <ul class="md:flex gap-[40px] hidden">
        <li :class="$style.liStyle">
          <router-link to="/" :class="$style.normalRouterLink">
            Company Profile
          </router-link>
        </li>

        <li :class="$style.liStyle">
          <router-link to="/" :class="$style.normalRouterLink">
            <span class="font-[700]">Book a Ride</span>
          </router-link>
          <span
            class="w-[7px] h-[7px] bg-white rounded-full absolute top-full left-1/2 mt-1"></span>
        </li>
        <li :class="$style.liStyle">
          <router-link to="/" :class="$style.normalRouterLink">
            Rides
          </router-link>
        </li>
      </ul>
    </div>

    <div>
      <div class="hidden md:flex gap-7 items-center">
        <div class="flex flex-col text-white text-right">
          <span class="text-[12px]">Balance</span>
          <span class="text-[16px] font-[600]"> 50,600.0 SAR</span>
        </div>

        <div class="h-[65px] border-r border-r-gray-500"></div>
        <button
          id="dropdownNavbarLink"
          data-dropdown-toggle="dropdownNavbar"
          class="flex items-center gap-[64px] justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white dark:focus:text-white">
          <div class="flex justify-between gap-3">
            <ProfileSvg />
            <div class="flex flex-col items-baseline">
              <span class="font-[500] text-[16px]">Khuzimah A.</span>
              <span class="font-[300] text-[12px]">Cabrio Co.</span>
            </div>
          </div>
          <svg
            class="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import style from "./Navbar.module.css";
import ProfileSvg from "./svg.vue";

export default {
  computed: {
    $style() {
      return style; // Expose the styles object to the template
    },
  },
  components: {
    ProfileSvg,
  },
};
</script>
