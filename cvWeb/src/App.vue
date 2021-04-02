<template>
  <v-app>
    <drawer @show-snackbar="showSnackbar" v-model="drawer" />
    <app-bar @toggle-drawer="drawer = !drawer" />
    <v-main>
      <v-container>
        <router-view @show-snackbar="showSnackbar" />
      </v-container>
    </v-main>
    <v-snackbar
      app
      timeout="2000"
      v-model="snackbar"
      bottom
      :color="snackbarColor"
      content-class="text-center"
      rounded="lg"
    >
      {{ snackbarMessage }}
    </v-snackbar>
  </v-app>
</template>

<script>
import Drawer from "./components/Drawer";
import AppBar from "./components/AppBar";
import LocaleMixin from "./mixins/localeMixin";

export default {
  name: "App",
  components: {
    Drawer,
    AppBar
  },
  mixins: [LocaleMixin],
  methods: {
    showSnackbar(data) {
      this.snackbarMessage = data.message;
      this.snackbarColor = data.color;
      this.snackbar = true;
    },
    updatePreferences() {
      this.$i18n.locale = this.locale.toLowerCase();
      this.$vuetify.lang.current = this.locale.toLowerCase();
    }
  },
  created() {
    this.updatePreferences();
  },
  updated() {
    this.updatePreferences();
  },
  data: () => ({
    drawer: false,
    snackbar: false,
    snackbarMessage: "",
    snackbarColor: "primary"
  })
};
</script>
