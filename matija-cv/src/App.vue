<template>
  <v-app>
    <v-navigation-drawer permanent app width="350">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Matija Novosel
          </v-list-item-title>
          <v-list-item-subtitle>
            Fullstack web developer
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item
          color="orange"
          exact
          :to="{
            name: item.name
          }"
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <div class="d-flex justify-center pa-3">
        <v-btn icon small>
          <v-icon> mdi-linkedin </v-icon>
        </v-btn>
        <v-btn icon small class="mx-2">
          <v-icon> mdi-github </v-icon>
        </v-btn>
        <v-btn icon small>
          <v-icon> mdi-email </v-icon>
        </v-btn>
      </div>
    </v-navigation-drawer>
    <v-main class="orange">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    items: [
      { title: "About me", icon: "mdi-account", name: "home" },
      { title: "Education", icon: "mdi-school", name: "education" },
      {
        title: "Work experience",
        icon: "mdi-briefcase",
        name: "work-experience"
      },
      { title: "Projects", icon: "mdi-layers-triple", name: "projects" },
      { title: "Technologies", icon: "mdi-tools", name: "technologies" }
    ]
  })
};
</script>
