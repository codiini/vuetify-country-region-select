<template>
  <v-select
    :items="countries"
    item-text="countryName"
    item-value="text"
    :value="value"
    v-model="country"
    :outlined="outlined"
    :filled="filled"
    :flat="flat"
    :label="label"
    :country="country"
    @input="selectCountry()"
    return-object
  ></v-select>
</template>


<script>
import countries from "@/data.js";
import { EventBus } from "../event-bus.js";

export default {
  name: "VuetifyCountrySelect",
  props: {
    countriess: {
      type: [Array],
    },
    backgroundColor: {
      type: String,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    filled: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    validateOnBlur: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    dense: {
      type: Boolean,
      default: false,
    },
    persistentHint: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    shaped: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Object],
      default: "",
    },
    label: {
      type: String,
    },
  },
  data() {
    return {
      countryList: [],
      country: "",
      countries,
    };
  },
  methods: {
    selectCountry() {
      this.$emit("input", this.country);
      EventBus.$emit("countryValue", this.country);
    },
  },
};
</script>