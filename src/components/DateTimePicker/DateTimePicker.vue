<template>
  <div class="relative text-left bg-[#F6F6F6] rounded-md px-[14px] py-2">
    <div class="flex items-center gap-3">
      <div class="flex w-[43%] items-center justify-between">
        <div class="flex flex-col w-1/2">
          <span class="text-[12px] font-[400]">Trip Date</span>
          <VDatePicker v-model="date" :open="true">
            <template #default="{ inputValue, inputEvents }">
              <input
                type="text"
                :value="formatDate(new Date(inputValue))"
                v-on="inputEvents"
                class="bg-transparent focus:outline-none font-[500]" />
            </template>
          </VDatePicker>
        </div>

        <div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 1.5V3.75"
              stroke="black"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M12 1.5V3.75"
              stroke="black"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M2.625 6.81738H15.375"
              stroke="black"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z"
              stroke="black"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M11.771 10.2749H11.7778"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M11.771 12.5249H11.7778"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M8.99661 10.2749H9.00335"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M8.99661 12.5249H9.00335"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M6.22073 10.2749H6.22747"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M6.22073 12.5249H6.22747"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <svg
        width="1"
        height="28"
        viewBox="0 0 1 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 27L0.5 1" stroke="black" stroke-linecap="square" />
      </svg>

      <div class="flex w-[50%] items-center">
        <div
          class="relative text-left bg-[#F6F6F6] rounded-md px-[14px] py-2 w-full">
          <div class="flex flex-col items-start">
            <label for="timePicker" class="text-[12px] font-[400]"
              >Trip Time</label
            >
            <input
              type="time"
              id="timePicker"
              :iconPosition="'none'"
              v-model="selectedTime"
              class="bg-transparent focus:outline-none font-[500]"
              @input="handleTimeChange" />
          </div>
        </div>

        <!-- <div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.5 9C16.5 13.14 13.14 16.5 9 16.5C4.86 16.5 1.5 13.14 1.5 9C1.5 4.86 4.86 1.5 9 1.5C13.14 1.5 16.5 4.86 16.5 9Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M11.7825 11.3851L9.4575 9.99757C9.0525 9.75757 8.7225 9.18007 8.7225 8.70757V5.63257"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedTime = ref("");

const handleTimeChange = (event) => {
  selectedTime.value = event.target.value;
};

const date = ref(new Date());

// Function to format the date in "DD MMM. YYYY" format
const formatDate = (date) => {
  // Months array for mapping month index to month name abbreviation
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get day, month, and year from the Date object
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Format the date as "DD MMM. YYYY"
  const formattedDate = `${day} ${months[monthIndex]}. ${year}`;

  return formattedDate;
};
</script>
