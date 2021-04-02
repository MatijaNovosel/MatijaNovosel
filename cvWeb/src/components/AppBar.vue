<template>
  <v-app-bar app class="elevation-1" clipped-left>
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')" v-if="$vuetify.breakpoint.smAndDown" />
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <span class="font-weight-bold grey--text">
            Matija Novosel v{{ appVersion }}
          </span>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-spacer />
    Other shit
  </v-app-bar>
</template>

<script>
export default {
  name: "app-bar",
  data: () => ({
    appVersion: process.env.PACKAGE_VERSION
  })
};
</script>
