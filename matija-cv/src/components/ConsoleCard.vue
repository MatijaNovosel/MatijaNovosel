<template>
  <v-card class="black">
    <v-system-bar height="20" color="orange lighten-2">
      <v-spacer />
      <v-icon>
        mdi-window-minimize
      </v-icon>
      <v-icon>
        mdi-window-maximize
      </v-icon>
      <v-icon v-ripple @click="$emit('close')">
        mdi-close
      </v-icon>
    </v-system-bar>
    <v-card-title class="white--text">
      > {{ title }}
    </v-card-title>
    <v-card-subtitle class="grey--text">
      > {{ subtitle }}
    </v-card-subtitle>
    <v-card-actions class="justify-end">
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: [
    "title",
    "subtitle"
  ]
};
</script>
