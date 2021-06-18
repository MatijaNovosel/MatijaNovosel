<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4" v-for="(item, n) in 6" :key="n">
        <v-card>
          <v-card-title>
            Project title
          </v-card-title>
          <v-card-subtitle>
            Project subtitle
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>
