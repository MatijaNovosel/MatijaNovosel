<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown" class="px-5">
        <v-timeline-item fill-dot color="white">
          <template #opposite>
            <span class="white--text text-overline">
              July 2018 - Present
            </span>
          </template>
          <v-card class="elevation-2 white black--text">
            <v-card-title
              :class="{
                'text-subtitle-2': $vuetify.breakpoint.smAndDown
              }"
            >
              Junior fullstack software developer (student)
            </v-card-title>
            <v-card-subtitle class="grey--text">
              <a
                href="https://www.omega-software.hr"
                class="text-decoration-none grey--text"
              >
                Omega software
              </a>
              <v-icon small color="grey">
                mdi-link
              </v-icon>
            </v-card-subtitle>
            <v-divider />
            <v-card-text class="grey--text">
              Software development on multiple company projects (Čistoća,
              Hrvatske Autoceste, Gradska plinara Zagreb, ePlatforma) using
              fullstack technologies.
            </v-card-text>
            <v-card-text class="grey--text pt-0">
              Mentoring and creating educational Javascript content for new and
              future employees.
            </v-card-text>
            <v-divider v-if="$vuetify.breakpoint.smAndDown" />
            <v-card-text
              v-if="$vuetify.breakpoint.smAndDown"
              class="grey--text"
            >
              July 2018 - Present
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item fill-dot color="white" side="right">
          <template #opposite>
            <span class="white--text text-overline">
              May 2017 - February 2018
            </span>
          </template>
          <v-card class="elevation-2 white black--text">
            <v-card-title
              :class="{
                'text-subtitle-2': $vuetify.breakpoint.smAndDown
              }"
            >
              Junior fullstack software developer (student)
            </v-card-title>
            <v-card-subtitle class="grey--text">
              <a
                href="https://www.maidea.hr"
                class="text-decoration-none grey--text"
              >
                Maidea
              </a>
              <v-icon small color="grey">
                mdi-link
              </v-icon>
            </v-card-subtitle>
            <v-divider />
            <v-card-text class="grey--text">
              Software development using fullstack technologies.
            </v-card-text>
            <v-divider v-if="$vuetify.breakpoint.smAndDown" />
            <v-card-text
              v-if="$vuetify.breakpoint.smAndDown"
              class="grey--text"
            >
              May 2017 - February 2018
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Education"
};
</script>
