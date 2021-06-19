<template>
  <v-app>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mdAndUp"
      app
      permanent
      mini-variant
      dark
    >
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
          <v-tooltip right>
            <template #activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" v-text="item.icon" />
            </template>
            <span>
              {{ item.title }}
            </span>
          </v-tooltip>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="orange">
      <v-slide-x-transition mode="out-in">
        <router-view />
      </v-slide-x-transition>
    </v-main>
    <v-bottom-navigation
      app
      v-if="$vuetify.breakpoint.smAndDown"
      dark
      mandatory
      color="orange"
    >
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        exact
        :to="{
          name: item.name
        }"
      >
        <v-icon v-text="item.icon" />
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    sheet: false,
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

<style>
.v-navigation-drawer__content {
  display: flex;
  align-items: center;
}
</style>
