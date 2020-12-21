<template>
  <v-app>
    <v-row>
      <v-col cols="12" sm="3">
        {{ country.countryName }}
        <vuetify-country-select outlined v-model="country" label="Choose your country" />
      </v-col>
      <v-col cols="12" sm="4">
        {{ region.name }}
        <vuetify-region-select v-model="region" filled label="Choose your State" />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import VuetifyCountrySelect from "@/components/vuetify-country-select";
import VuetifyRegionSelect from "@/components/vuetify-region-select";
export default {
  name: "App",
  components: {
    VuetifyCountrySelect,
    VuetifyRegionSelect,
  },
  data: () => ({
    country: "",
    region: "",
  }),
};
</script>

<style>
</style>
