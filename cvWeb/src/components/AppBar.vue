<template>
  <v-app-bar app class="elevation-1" clipped-left>
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')" />
    <v-spacer />
    <v-img
      @click="switchLocale('en')"
      class="mr-4"
      max-height="30"
      max-width="30"
      alt=""
      src="/uk-alt.svg"
      style="cursor: pointer"
    />
    <v-img
      style="cursor: pointer"
      @click="switchLocale('hr')"
      max-height="30"
      max-width="30"
      alt=""
      src="/hr-alt.svg"
    />
  </v-app-bar>
</template>

<script>
import LocaleMixin from "../mixins/localeMixin";

export default {
  name: "app-bar",
  mixins: [LocaleMixin],
  methods: {
    switchLocale(locale) {
      if (this.locale == locale) {
        return;
      }
      this.setLocale(locale);
      this.$i18n.locale = locale;
      this.$vuetify.lang.current = locale;
    }
  }
};
</script>
