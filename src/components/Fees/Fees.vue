<template>
  <div class="flex flex-col">
    <span class="text-[#898989] self-end">Fees</span>

    <div class="flex flex-col">
      <CheckBox label="Name-Board" id="board" :haveIcon="true" price="0.0" />
      <CheckBox label="Child's seat" id="Child's seat" price="130.0" />
      <CheckBox
        label="Altanfithi Accsess"
        id="Altanfithi Accsess"
        price="2,000.0" />
      <CheckBox
        label="Additional car for luggages"
        :haveIcon="true"
        price="250.0"
        id="Additional car for luggages" />
    </div>
  </div>
</template>

<script>
import CheckBox from "../Checkbox/CheckBox.vue";
export default {
  data() {
    return {};
  },
  components: {
    CheckBox,
  },
};
</script>
