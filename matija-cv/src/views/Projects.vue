<template>
  <v-container fill-height>
    <v-row justify="center" align="center" class="pa-5">
      <v-col cols="12">
        <v-alert type="info" color="orange lighten-2">
          To view projects, maximize the windows or swipe right on phones.
        </v-alert>
      </v-col>
      <v-col cols="12" md="4" v-for="project in projects" :key="project.id">
        <console-card
          @close="cardClosed(project.id)"
          @maximize="redirectTo(project.links[0].url)"
          :title="project.title"
          :subtitle="project.subtitle"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ConsoleCard from "../components/ConsoleCard.vue";
import { redirectTo } from "../helpers";

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
              url: "https://github.com/MatijaNovosel/lms",
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
              url: "https://github.com/MatijaNovosel/fin-app",
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
              url: "https://github.com/MatijaNovosel/fin-app-mobile",
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
              url: "https://github.com/MatijaNovosel/gym-dash-ui",
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
              url: "https://github.com/MatijaNovosel/heroes-of-crimson",
              github: true
            }
          ]
        },
        {
          id: 7,
          title: "This website",
          subtitle: "My personal CV website",
          links: [
            {
              url: "https://github.com/MatijaNovosel/MatijaNovosel",
              github: true
            }
          ]
        }
      ]
    };
  },
  methods: {
    redirectTo,
    cardClosed(id) {
      this.projects = this.projects.filter((x) => x.id !== id);
    }
  }
};
</script>
