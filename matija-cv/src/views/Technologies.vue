<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" class="white--text">
        Work in progress ...
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
