<template>
  <v-container fill-height>
    <v-row justify="center" align="center" class="pa-5">
      <v-col cols="12" md="4" v-for="project in projects" :key="project.id">
        <console-card
          @close="cardClosed(project.id)"
          :title="project.title"
          :subtitle="project.subtitle"
        >
          <template #actions>
            <v-btn
              v-for="(link, i) in project.links"
              :key="i"
              class="ml-2"
              @click="redirectTo('https://www.tsrb.hr')"
              icon
            >
              <v-icon color="white">
                mdi-github
              </v-icon>
            </v-btn>
          </template>
        </console-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ConsoleCard from "../components/ConsoleCard.vue";

export default {
  components: { ConsoleCard },
  name: "Home",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "LMS",
          subtitle: "Learning management system",
          links: [
            {
              url: "",
              github: true
            }
          ]
        },
        {
          id: 2,
          title: "FinApp",
          subtitle: "Web app for managing finances",
          links: [
            {
              url: "",
              github: true
            }
          ]
        },
        {
          id: 3,
          title: "FinApp mobile",
          subtitle: "FinApp mobile implementation",
          links: [
            {
              url: "",
              github: true
            }
          ]
        },
        {
          id: 4,
          title: "GymDash",
          subtitle: "Gym management web applcation",
          links: [
            {
              url: "",
              github: true
            }
          ]
        },
        {
          id: 5,
          title: "OnexProjekti",
          subtitle: "Construction company website",
          links: [
            {
              url: "",
              github: true
            }
          ]
        },
        {
          id: 6,
          title: "Heroes of crimson",
          subtitle: "Bullet hell RPG roguelike",
          links: [
            {
              url: "",
              github: true
            }
          ]
        }
      ]
    };
  },
  methods: {
    redirectTo(url) {
      window.location.href = url;
    },
    cardClosed(id) {
      this.projects = this.projects.filter((x) => x.id !== id);
    }
  }
};
</script>
