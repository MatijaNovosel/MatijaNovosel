<template>
  <v-row>
    <v-col cols="12" class="mt-5">
      <h1>About me</h1>
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
    <v-col cols="12">
      <h1>Work experience</h1>
    </v-col>
    <v-col cols="12">
      <v-timeline>
        <v-timeline-item
          color="orange darken-4"
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
            <v-card-title class="orange--text text--darken-4 font-weight-bold">
              {{ workExperience.title }}
            </v-card-title>
            <v-card-text>
              {{ workExperience.description }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
    <v-col cols="12">
      <h1>Education</h1>
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
        description:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
        from: new Date(1561932000000),
        to: null
      },
      {
        title: "Maidea",
        description:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
        from: new Date(1525125600000),
        to: new Date(1547766000000)
      }
    ]
  })
};
</script>
