<template>
  <div
    class="px-8 mt-8 bg-white w-[345px] md:w-[448px] rounded-[16px] p-5 flex flex-col gap-10"
    :class="$style.parent">
    <div class="flex flex-col gap-4">
      <h1 class="text-[20px] md:text-[30px] font-bold flex items-center gap-3">
        Book a Ride
      </h1>

      <!-- Assuming options is a reactive data property -->
      <div class="flex flex-col">
        <DropDown :options="rideTypes" label="Ride type" />
        <CheckBox label="This ride book for another person" id="ride" />
      </div>
      <DropDown
        :options="rideTypes"
        label="From"
        selectPlaceholder="Select airport" />

      <Location />
      <DateTimePicker />
      <TextField label="Flight number" placeholder="Enter flight number" />

      <CarClassSlider />
      <Fees />
      <TextArea
        label="A special comment"
        placeholder="Luggage information, special needs or tasks for driver" />

      <Summary />
    </div>

    <PaymentMethod />
  </div>
</template>

<script>
import style from "./mainParent.module.css";
import DropDown from "../dropdown/DropDown.vue";
import PaymentMethod from "../paymentMethod/PaymentMethod.vue";
import CheckBox from "../Checkbox/CheckBox.vue";
import Location from "../Location/Location.vue";
import TextField from "../TextField/TextField.vue";
import DateTimePicker from "../DateTimePicker/DateTimePicker.vue";
import CarClassSlider from "../CarClassSlider/CarClassSlider.vue";
import Fees from "../Fees/Fees.vue";
import TextArea from "../TextArea/TextArea.vue";
import Summary from "../Summary/Summary.vue";

export default {
  data() {
    return {
      rideTypes: [
        {
          id: 1,
          text: "Riyadh (RUH)",
          desc: "King Fahd International Airport",
          val: 1,
        },
        {
          id: 2,
          text: "Jeddah (JED)",
          desc: "King Abdulaziz International Airport",
          val: 2,
        },
        {
          id: 3,
          text: "Dammam (DMM)",
          desc: "King Fahd International Airport Dammam",
          val: 3,
        },
      ],
    };
  },
  components: {
    DropDown,
    PaymentMethod,
    CheckBox,
    Location,
    TextField,
    DateTimePicker,
    CarClassSlider,
    Fees,
    TextArea,
    Summary,
  },
  computed: {
    $style() {
      return style;
    },
  },
};
</script>
