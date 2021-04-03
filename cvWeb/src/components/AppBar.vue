<template>
  <v-app-bar app class="elevation-1" clipped-left>
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')" />
    <v-spacer />
    <v-img
      class="mr-4"
      max-height="30"
      max-width="30"
      alt=""
      src="/uk-alt.svg"
    />
    <v-img max-height="30" max-width="30" alt="" src="/hr-alt.svg" />
  </v-app-bar>
</template>

<script>
export default {
  name: "app-bar"
};
</script>
