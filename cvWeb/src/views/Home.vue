<template>
  <v-row :class="{ 'px-3': $vuetify.breakpoint.smAndDown }">
    <v-col cols="12" class="mt-5" id="aboutMe">
      <h2>About me</h2>
    </v-col>
    <v-col cols="12">
      <v-card rounded="lg">
        <v-toolbar height="25" elevation="0" />
        <v-card-text>
          <p>
            I am a developer with a large interest in creating applications on
            the web and improving my knowledge and abilities as a person.
          </p>
          <p>
            Born in Croatia, I grew up in a rural farm area with future
            intentions of seeking a career in computer technologies which was
            later granted to me via the technical school of Ruđer Bošković where
            I spent 4 years of my secondary education and in the end receiving
            the title of Computer technician.
          </p>
          <p>
            During this time, however, I began getting interested in other
            topics such as programming and developing video games and thus
            enlisted in the Zagreb University of applied sciences, further
            improving my skills, getting two jobs as a junior developer and
            after 3 years getting the title of Bachelor of Engineering in
            Information Technology (bacc. ing. techn. inf.).
          </p>
          <p>
            In the present time I am finishing my education in the field of
            Information technology with the intention of acquiring a Master's
            degree (struc. spec. ing. techn. inf.).
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" id="workExperience">
      <h2>Work experience</h2>
    </v-col>
    <v-col cols="12">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
          color="orange"
          v-for="(workExperience, i) in workExperiences"
          fill-dot
          small
          :key="i"
        >
          <span slot="opposite" class="text-h6">
            <span>
              {{ format(workExperience.from, "MMMM, yyyy.") }}
            </span>
            <span class="mx-1">
              -
            </span>
            <span>
              {{
                workExperience.to
                  ? format(workExperience.to, "MMMM, yyyy.")
                  : "Present"
              }}
            </span>
            <span class="grey--text">
              ({{
                formatDistance(
                  workExperience.from,
                  workExperience.to ? workExperience.to : new Date()
                )
              }})
            </span>
          </span>
          <v-card class="pa-4" rounded="lg">
            <v-card-title class="orange--text font-weight-bold">
              {{ workExperience.title }}
            </v-card-title>
            <v-card-subtitle class="grey--text text--darken-2 font-weight-bold">
              {{ workExperience.subtitle }}
            </v-card-subtitle>
            <v-card-text>
              {{ workExperience.description }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
    <v-col cols="12" id="education">
      <h2>Education</h2>
    </v-col>
    <v-col cols="12">
      <v-expansion-panels>
        <v-expansion-panel v-for="(educationItem, i) in education" :key="i">
          <v-expansion-panel-header>
            <v-list-item>
              <v-list-item-avatar tile>
                <v-img
                  alt=""
                  :src="educationItem.logo"
                  v-if="educationItem.logo"
                />
                <v-icon large v-else>mdi-school</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title
                  class="orange--text font-weight-bold text-h6 pb-2"
                >
                  {{ educationItem.title }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ educationItem.subtitle }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
    <v-col cols="12" id="technologies">
      <h2>Technologies</h2>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="12" class="pb-0">
          <h3 class="grey--text text--lighten-1">Frontend</h3>
        </v-col>
        <v-col cols="12">
          <v-chip
            :color="technology.color"
            label
            class="mr-3"
            v-for="(technology, i) in technologies"
            :key="i"
          >
            <v-img
              max-height="15"
              max-width="15"
              class="mr-3"
              :src="`/icons/${technology.logo}.svg`"
            />
            {{ technology.text }}
          </v-chip>
        </v-col>
        <v-col cols="12" class="pb-0">
          <h3 class="grey--text text--lighten-1">Backend</h3>
        </v-col>
        <v-col cols="12">
          <v-chip
            :color="technology.color"
            label
            class="mr-3"
            v-for="(technology, i) in technologies"
            :key="i"
          >
            <v-img
              max-height="15"
              max-width="15"
              class="mr-3"
              :src="`/icons/${technology.logo}.svg`"
            />
            {{ technology.text }}
          </v-chip>
        </v-col>
        <v-col cols="12" class="pb-0">
          <h3 class="grey--text text--lighten-1">Other</h3>
        </v-col>
        <v-col cols="12">
          <v-chip
            :color="technology.color"
            label
            class="mr-3"
            v-for="(technology, i) in technologies"
            :key="i"
          >
            <v-img
              max-height="15"
              max-width="15"
              class="mr-3"
              :src="`/icons/${technology.logo}.svg`"
            />
            {{ technology.text }}
          </v-chip>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" id="projects">
      <h2>Projects</h2>
    </v-col>
    <v-col cols="12" id="contact">
      <h2>Contact</h2>
    </v-col>
    <v-col cols="12">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-email</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              Email
            </v-list-item-title>
            <v-list-item-subtitle>
              mnovosel5@gmail.com
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import { format, formatDistance } from "date-fns";

export default {
  name: "Home",
  methods: {
    format,
    formatDistance
  },
  data: () => ({
    workExperiences: [
      {
        title: "Omega software",
        subtitle: "Junior software developer",
        description:
          "Software development on multiple company projects (Čistoća, Hrvatske Autoceste, Gradska plinara Zagreb, ePlatforma) using fullstack technologies. Mentoring and creating educational Javascript content for new and future employees.",
        from: new Date(1561932000000),
        to: null
      },
      {
        title: "Maidea",
        subtitle: "Junior software developer",
        description: "Software development using fullstack technologies.",
        from: new Date(1525125600000),
        to: new Date(1547766000000)
      }
    ],
    education: [
      {
        title: "Zagreb university of applied sciences",
        subtitle: "Master's degree (struc. spec. ing. techn. inf.)",
        from: "2020",
        to: "2022",
        logo: "/tvz-logo.svg"
      },
      {
        title: "Zagreb university of applied sciences",
        subtitle:
          "Bachelor of Engineering in Information Technology (bacc. ing. techn. inf.)",
        from: "2017",
        to: "2020",
        logo: "/tvz-logo.svg"
      },
      {
        title: "Tehnička škola Ruđera Boškovića",
        subtitle: "Computer technician",
        from: "2013",
        to: "2017",
        logo: null
      }
    ],
    technologies: [
      {
        text: "Typescript",
        logo: "typescript",
        logoColor: "white",
        color: "#007acc"
      },
      {
        text: "SASS&SCSS",
        logo: "sass",
        logoColor: "white",
        color: "#cc6699"
      },
      {
        text: "Angular",
        logo: "angular",
        logoColor: "white",
        color: "#dd0031"
      },
      {
        text: "Vue 3&2",
        logo: "vue-dot-js",
        logoColor: "white",
        color: "#2bbc8a"
      },
      {
        text: "Vuetify",
        logo: "vuetify",
        logoColor: "white",
        color: "#1867c0"
      },
      {
        text: "Quasar",
        logo: "quasar",
        logoColor: "white",
        color: "#1976d2"
      },
      {
        text: "Buefy",
        logo: "buefy",
        logoColor: "white",
        color: "#7957d5"
      },
      {
        text: "Electron",
        logo: "electron",
        logoColor: "white",
        color: "#47848f"
      },
      {
        text: "React",
        logo: "react",
        logoColor: "white",
        color: "#61dafb"
      }
    ]
  })
};
</script>
