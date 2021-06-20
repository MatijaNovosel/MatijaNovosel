<template>
  <v-container fill-height>
    <v-row justify="center" align="center" class="text-center">
      <v-col
        cols="12"
        class="white--text"
        :class="{
          'text-h5': $vuetify.breakpoint.mdAndUp,
          'text-overline': $vuetify.breakpoint.smAndDown
        }"
      >
        Frontend
      </v-col>
      <v-col cols="12" class="d-flex justify-center flex-wrap">
        <img class="ma-2"
          src="https://img.shields.io/badge/%20Typescript%20💕-informational?style=for-the-badge&logo=typescript&logoColor=white&color=007ACC"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20SASS%20&%20SCSS-informational?style=for-the-badge&logo=sass&logoColor=white&color=CC6699"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20Angular-informational?style=for-the-badge&logo=angular&logoColor=white&color=DD0031"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20VueJS-3%20&%202-informational?style=for-the-badge&logo=vue.js&logoColor=white&color=2bbc8a"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20Vuetify-informational?style=for-the-badge&logo=vuetify&logoColor=white&color=1867c0"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20Quasar-informational?style=for-the-badge&logo=quasar&logoColor=white&color=1976d2"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20Buefy-informational?style=for-the-badge&logo=buefy&logoColor=white&color=7957D5"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20Electron-informational?style=for-the-badge&logo=electron&logoColor=white&color=47848F"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20React-informational?style=for-the-badge&logo=react&logoColor=white&color=61DAFB"
        />
      </v-col>
      <v-col
        cols="12"
        class="white--text"
        :class="{
          'text-h5': $vuetify.breakpoint.mdAndUp,
          'text-overline': $vuetify.breakpoint.smAndDown
        }"
      >
        Backend
      </v-col>
      <v-col cols="12" class="d-flex justify-center flex-wrap">
        <img class="ma-2"
          src="https://img.shields.io/badge/%20Spring-informational?style=for-the-badge&logo=spring&logoColor=white&color=6DB33F"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20.NET%20Core-informational?style=for-the-badge&logo=.net&logoColor=white&color=5C2D91"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20PHP-informational?style=for-the-badge&logo=php&logoColor=white&color=777BB4"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20CakePHP-informational?style=for-the-badge&logo=cakephp&logoColor=white&color=D33C43"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20NodeJS-informational?style=for-the-badge&logo=node.js&logoColor=white&color=339933"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20Typescript-informational?style=for-the-badge&logo=typescript&logoColor=white&color=007ACC"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20NestJS%20&%20TypeORM-informational?style=for-the-badge&logo=nestjs&logoColor=E0234E&color=black"
        />
      </v-col>
      <v-col
        cols="12"
        class="white--text"
        :class="{
          'text-h5': $vuetify.breakpoint.mdAndUp,
          'text-overline': $vuetify.breakpoint.smAndDown
        }"
      >
        Other
      </v-col>
      <v-col cols="12" class="d-flex justify-center flex-wrap">
        <img class="ma-2"
          src="https://img.shields.io/badge/%20MySQL-informational?style=for-the-badge&logo=mysql&logoColor=white&color=4479A1"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20TSQL-informational?style=for-the-badge&logo=microsoft-sql-server&logoColor=white&color=CC2927"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20Firebase%20&%20Firestore-informational?style=for-the-badge&logo=firebase&logoColor=f6820d&color=FFCA28"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20GraphQL-informational?style=for-the-badge&logo=graphql&logoColor=fd43c0&color=E10098"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/%20JSON%20Web%20Tokens-informational?style=for-the-badge&logo=json-web-tokens&logoColor=E10098&color=000000"
        />
        <img class="ma-2"
          src="https://img.shields.io/badge/Flutter-informational?style=for-the-badge&logo=flutter&logoColor=ffffff&color=02569B"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    initiallyOpen: ["public"],
    files: {
      html: "mdi-language-html5",
      js: "mdi-nodejs",
      json: "mdi-code-json",
      md: "mdi-language-markdown",
      pdf: "mdi-file-pdf",
      png: "mdi-file-image",
      txt: "mdi-file-document-outline",
      xls: "mdi-file-excel"
    },
    tree: [],
    items: [
      {
        name: "Frontend",
        children: [
          {
            name: "Vue",
            children: [
              {
                name: "Vue 2",
                file: "png"
              },
              {
                name: "Vue 3",
                file: "png"
              },
              {
                name: "Component libraries",
                children: [
                  {
                    name: "Vuetify",
                    file: "png"
                  },
                  {
                    name: "Bulma",
                    file: "png"
                  },
                  {
                    name: "Quasar",
                    file: "png"
                  }
                ]
              }
            ]
          },
          {
            name: "React",
            file: "png"
          },
          {
            name: "Angular",
            file: "png"
          },
          {
            name: "Svelte",
            file: "png"
          }
        ]
      },
      {
        name: "Backend",
        children: [
          {
            name: ".NET",
            children: [
              {
                name: "Core",
                file: "png"
              },
              {
                name: "MVC",
                file: "png"
              }
            ]
          },
          {
            name: "PHP",
            file: "png"
          },
          {
            name: "Java",
            file: "png"
          }
        ]
      }
    ]
  })
};
</script>
