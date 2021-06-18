<template>
  <v-container fill-height>
    <v-row justify="center" align="center" class="pa-5">
      <v-col cols="12" md="4" v-for="(item, n) in 6" :key="n">
        <v-card>
          <v-system-bar height="15" color="orange lighten-2">
            <v-spacer />
            <v-icon>
              mdi-
            </v-icon>
          </v-system-bar>
          <v-card-title>
            LMS
          </v-card-title>
          <v-card-subtitle>
            Learning management system
          </v-card-subtitle>
          <v-card-actions class="justify-end">
            <v-btn icon>
              <v-icon>
                mdi-github
              </v-icon>
            </v-btn>
          </v-card-actions>
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
