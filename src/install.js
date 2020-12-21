import VuetifyCountrySelect from "@/components/vuetify-country-select";
import VuetifyRegionSelect from "@/components/vuetify-region-select";

const install = function(Vue) {
  const components = {VuetifyCountrySelect, VuetifyRegionSelect};
  Object.keys(components).forEach((name) => {
    Vue.component(name, components[name]);
  });
};

const VuetifyCountryRegionSelect = {
  VuetifyCountrySelect,
  VuetifyRegionSelect,
  install,
};

export default VuetifyCountryRegionSelect;
export {VuetifyCountrySelect, VuetifyRegionSelect};
