<template>
  <v-app>
    <drawer @show-snackbar="showSnackbar" v-model="drawer" />
    <app-bar v-if="$vuetify.breakpoint.smAndDown" @toggle-drawer="drawer = !drawer" />
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

export default {
  name: "App",
  components: {
    Drawer,
    AppBar
  },
  methods: {
    showSnackbar(data) {
      this.snackbarMessage = data.message;
      this.snackbarColor = data.color;
      this.snackbar = true;
    }
  },
  data: () => ({
    drawer: true,
    snackbar: false,
    snackbarMessage: "",
    snackbarColor: "primary"
  })
};
</script>
