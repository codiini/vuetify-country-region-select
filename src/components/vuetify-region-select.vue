<template>
  <v-select
    :items="regionList"
    item-value="name"
    item-text="name"
    :value="value"
    v-model="region"
    :outlined="outlined"
    :filled="filled"
    :flat="flat"
    :label="label"
    return-object
    @input="selectRegion()"
  ></v-select>
</template>

<script>
import states from "@/data.js";
import { EventBus } from "../event-bus";

export default {
  name: "VuetifyRegionSelect",
  props: {
    countryValue: {
      type: String,
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
    singleLine: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Object, String],
    },
    label: {
      type: String,
    },
  },
  data() {
    return {
      states,
      countryName: null,
      region: "",
    };
  },
  computed: {
    regionList() {
      return this?.countryName?.regions || [];
    },
  },
  mounted() {
    EventBus.$on("countryValue", (country) => {
      this.countryName = country;
    });
  },
  methods: {
    selectRegion() {
      this.$emit("input", this.region);
    },
  },
};
</script>