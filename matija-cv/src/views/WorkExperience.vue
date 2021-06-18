<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <div style="width: 800px">
        <v-timeline dark>
          <v-timeline-item v-for="n in 3" :key="n" large>
            <template #icon>
              <v-avatar>
                <img src="https://i.pravatar.cc/64" />
              </v-avatar>
            </template>
            <template #opposite>
              <span class="white--text text-overline">
                October 2017 - July 2020
              </span>
            </template>
            <v-card class="elevation-2 white black--text">
              <v-card-title>
                Junior software developer
              </v-card-title>
              <v-card-subtitle class="grey--text">
                Omega software
              </v-card-subtitle>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Education"
};
</script>
