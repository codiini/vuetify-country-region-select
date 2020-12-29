# Installation
This package provides a pair of Vuetify components for countries/region selects. 

```
npm i vuetify-country-region-select

#or

yarn add vuetify-country-region-select
```

# Usage

```
<!-- main.js -->

import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/vuetify";
import vuetifyCountryRegionSelect from "vuetify-country-region-select"

Vue.use(vuetifyCountryRegionSelect)
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
```

```
<!-- Inside your .vue file -->

<template>
    <div>
        <vuetify-country-select outlined v-model="country" label="Choose your country"/>
        <vuetify-region-select v-model="region" filled label="Choose your State"/>
    </div>
</template>

<script>
    export default {
        name: "App",
        components: {},
        data: () => ({
            country: "",
            region: "",
        }),
    };
</script>
```
# Contributions
If there's a feature you'd like to add or think is necessary, please open up an issue or go ahead and make a PR on a different branch. Thank you.

# Credits
 [vue-country-region-select](https://github.com/gehrj/vue-country-region-select)

 # License
 MIT

