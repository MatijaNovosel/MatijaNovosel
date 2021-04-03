<template>
  <v-row class="pb-4" :class="{ 'px-3': $vuetify.breakpoint.smAndDown }">
    <v-col cols="12" class="mt-5" id="aboutMe" style="z-index: 3">
      <h2>About me</h2>
    </v-col>
    <v-col cols="12" style="z-index: 3">
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
    <v-col cols="12" id="workExperience" style="z-index: 3">
      <h2>Work experience</h2>
    </v-col>
    <v-col cols="12" style="z-index: 3">
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
              <a
                class="text-decoration-none orange--text font-weight-bold"
                :class="{ 'text-h6': $vuetify.breakpoint.mdAndUp, 'text-subtitle-1': $vuetify.breakpoint.smAndDown }"
                :href="workExperience.link"
              >
                {{ workExperience.title }}
                <v-icon small color="grey">mdi-open-in-new</v-icon>
              </a>
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
      <v-list rounded>
        <v-list-item v-for="(educationItem, i) in education" :key="i">
          <v-list-item-avatar tile>
            <v-img alt="" :src="educationItem.logo" v-if="educationItem.logo" />
            <v-icon large v-else>mdi-school</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="pb-2">
              <a
                class="text-decoration-none orange--text font-weight-bold text-h6"
                :href="educationItem.link"
              >
                {{ educationItem.title }}
                <v-icon small color="grey">mdi-open-in-new</v-icon>
              </a>
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ educationItem.subtitle }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
            class="ma-1"
            v-for="(technology, i) in technologies.filter(
              (x) => x.group == 'frontend'
            )"
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
            class="ma-1"
            v-for="(technology, i) in technologies.filter(
              (x) => x.group == 'backend'
            )"
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
            class="ma-1"
            v-for="(technology, i) in technologies.filter(
              (x) => x.group == 'other'
            )"
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
    <v-col cols="12">
      <v-row>
        <v-col cols="12" md="4" :key="i" v-for="(project, i) in projects">
          <v-card>
            <v-card-title class="orange--text">
              {{ project.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ project.description }}
            </v-card-subtitle>
            <v-divider />
            <v-card-actions class="justify-end">
              <v-btn
                @click="openInNew(link.url)"
                icon
                v-for="(link, j) in project.links"
                :key="j"
              >
                <v-icon v-text="link.icon" />
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-eye</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" id="contact">
      <h2>Contact</h2>
    </v-col>
    <v-col cols="12">
      <v-list>
        <v-list-item v-for="(contact, i) in contacts" :key="i">
          <v-list-item-avatar>
            <v-icon v-text="contact.icon" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="orange--text">
              {{ contact.title }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <a
                v-if="contact.title != 'Email'"
                class="text-decoration-none grey--text text--lighten-2"
                :href="contact.subtitle"
              >
                {{ contact.subtitle }}
                <v-icon small color="grey">mdi-open-in-new</v-icon>
              </a>
              <span v-else>
                {{ contact.subtitle }}
              </span>
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
    formatDistance,
    openInNew(url) {
      window.location.href = url;
    }
  },
  data: () => ({
    workExperiences: [
      {
        title: "Omega software",
        subtitle: "Junior software developer",
        description:
          "Software development on multiple company projects (Čistoća, Hrvatske Autoceste, Gradska plinara Zagreb, ePlatforma) using fullstack technologies. Mentoring and creating educational Javascript content for new and future employees.",
        from: new Date(1561932000000),
        to: null,
        link: "https://www.omega-software.hr/"
      },
      {
        title: "Maidea",
        subtitle: "Junior software developer",
        description: "Software development using fullstack technologies.",
        from: new Date(1525125600000),
        to: new Date(1547766000000),
        link: "https://www.maidea.hr/"
      }
    ],
    education: [
      {
        title: "Zagreb university of applied sciences",
        subtitle: "Master's degree (struc. spec. ing. techn. inf.)",
        from: "2020",
        to: "2022",
        logo: "/tvz-logo.svg",
        link: "https://www.tvz.hr/"
      },
      {
        title: "Zagreb university of applied sciences",
        subtitle:
          "Bachelor of Engineering in Information Technology (bacc. ing. techn. inf.)",
        from: "2017",
        to: "2020",
        logo: "/tvz-logo.svg",
        link: "https://www.tvz.hr/"
      },
      {
        title: "Tehnička škola Ruđera Boškovića",
        subtitle: "Computer technician",
        from: "2013",
        to: "2017",
        logo: null,
        link: "https://www.tsrb.hr/"
      }
    ],
    technologies: [
      {
        text: "Typescript",
        logo: "typescript",
        color: "#007acc",
        group: "frontend"
      },
      {
        text: "SASS&SCSS",
        logo: "sass",
        color: "#cc6699",
        group: "frontend"
      },
      {
        text: "Angular",
        logo: "angular",
        color: "#dd0031",
        group: "frontend"
      },
      {
        text: "Vue 3&2",
        logo: "vue-dot-js",
        color: "#2bbc8a",
        group: "frontend"
      },
      {
        text: "Vuetify",
        logo: "vuetify",
        color: "#1867c0",
        group: "frontend"
      },
      {
        text: "Quasar",
        logo: "quasar",
        color: "#1976d2",
        group: "frontend"
      },
      {
        text: "Buefy",
        logo: "buefy",
        color: "#7957d5",
        group: "frontend"
      },
      {
        text: "Electron",
        logo: "electron",
        color: "#47848f",
        group: "frontend"
      },
      {
        text: "React",
        logo: "react",
        color: "#61dafb",
        group: "frontend"
      },
      {
        text: "Spring",
        logo: "spring",
        color: "#6db33f",
        group: "backend"
      },
      {
        text: ".NET Core",
        logo: "dot-net",
        color: "#5c2d91",
        group: "backend"
      },
      {
        text: "PHP",
        logo: "php",
        color: "#777bb4",
        group: "backend"
      },
      {
        text: "Cake PHP",
        logo: "cakephp",
        color: "#d33c43",
        group: "backend"
      },
      {
        text: "NodeJS",
        logo: "node-dot-js",
        color: "#339933",
        group: "backend"
      },
      {
        text: "Typescript",
        logo: "typescript",
        color: "#007acc",
        group: "backend"
      },
      {
        text: "NestJS & TypeORM",
        logo: "nestjs",
        color: "black",
        group: "backend"
      },
      {
        text: "MySQL",
        logo: "mysql",
        color: "#4479a1",
        group: "other"
      },
      {
        text: "TSQL",
        logo: "microsoftsqlserver",
        color: "#cc2927",
        group: "other"
      },
      {
        text: "Firebase",
        logo: "firebase",
        color: "#ffca28",
        group: "other"
      },
      {
        text: "Firebase",
        logo: "firebase",
        color: "#e10098",
        group: "other"
      },
      {
        text: "JWT tokens",
        logo: "jsonwebtokens",
        color: "#000000",
        group: "other"
      },
      {
        text: "Flutter",
        logo: "flutter",
        color: "#02569b",
        group: "other"
      }
    ],
    projects: [
      {
        title: "LMS",
        description: "Learning management system.",
        links: [
          { url: "https://github.com/MatijaNovosel/lms", icon: "mdi-github" }
        ],
        images: []
      },
      {
        title: "FinApp",
        description: "App for managing finances.",
        links: [
          {
            url: "https://github.com/MatijaNovosel/fin-app",
            icon: "mdi-github"
          }
        ],
        images: []
      },
      {
        title: "FinApp mobile",
        description: "FinApp mobile implementation.",
        links: [
          {
            url: "https://github.com/MatijaNovosel/fin-app-mobile",
            icon: "mdi-github"
          }
        ],
        images: []
      },
      {
        title: "Downloader",
        description: "Electron song downloader.",
        links: [
          {
            url: "https://github.com/MatijaNovosel/downloader",
            icon: "mdi-github"
          }
        ],
        images: []
      },
      {
        title: "Onexprojekti",
        description: "Construction company website.",
        links: [
          {
            url: "https://onexprojekti.hr/",
            icon: "mdi-link"
          }
        ],
        images: []
      },
      {
        title: "Heroes of crimson",
        description: "Bullet hell RPG roguelike.",
        links: [
          {
            url: "https://github.com/MatijaNovosel/heroes-of-crimson",
            icon: "mdi-github"
          }
        ],
        images: []
      },
      {
        title: "GymDash",
        description: "Gym management web application.",
        links: [
          {
            url: "https://github.com/MatijaNovosel/gym-dash-ui",
            icon: "mdi-github"
          }
        ],
        images: []
      },
      {
        title: "Reddit clone",
        description: "Reddit react clone.",
        links: [
          {
            url: "https://github.com/MatijaNovosel/react-reddit-clone",
            icon: "mdi-github"
          }
        ],
        images: []
      }
    ],
    contacts: [
      {
        title: "Email",
        subtitle: "mnovosel5@gmail.com",
        icon: "mdi-email"
      },
      {
        title: "LinkedIn",
        subtitle: "https://www.linkedin.com/in/matija-novosel-616403161/",
        icon: "mdi-linkedin"
      },
      {
        title: "GitHub",
        subtitle: "https://github.com/MatijaNovosel",
        icon: "mdi-github"
      }
    ]
  })
};
</script>
