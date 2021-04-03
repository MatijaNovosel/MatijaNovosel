<template>
  <v-navigation-drawer
    :permanent="$vuetify.breakpoint.mdAndUp"
    v-model="drawerOpen"
    app
    clipped
    class="elevation-0"
    @input="inputChanged"
  >
    <template #prepend>
      <div class="py-6 grey darken-4 d-flex flex-column align-center">
        <v-avatar size="110" color="grey darken-3">
          <v-avatar size="100">
            <v-img alt="Me" src="/me.png" class="rounded-circle" />
          </v-avatar>
        </v-avatar>
        <span class="gradient-text font-weight-bold text-h5 mt-4">
          Matija Novosel
        </span>
      </div>
    </template>
    <v-divider />
    <v-list nav dense>
      <v-list-item
        @click="scrollTo(item.target)"
        class="ml-2"
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon" />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import LocaleMixin from "../mixins/localeMixin";

export default {
  name: "drawer",
  props: {
    value: Boolean
  },
  mixins: [LocaleMixin],
  watch: {
    value(val) {
      this.drawerOpen = val;
    }
  },
  methods: {
    inputChanged(val) {
      this.drawerOpen = val;
      this.$emit("input", val);
    },
    scrollTo(target) {
      const el = document.getElementById(target);
      const y = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y + -65 });
    }
  },
  data: function() {
    return {
      drawerOpen: false,
      items: [
        {
          icon: "mdi-account",
          text: "About me",
          target: "aboutMe"
        },
        {
          icon: "mdi-briefcase",
          text: "Work experience",
          target: "workExperience"
        },
        {
          icon: "mdi-school",
          text: "Education",
          target: "education"
        },
        {
          icon: "mdi-tools",
          text: "Technologies",
          target: "technologies"
        },
        {
          icon: "mdi-clipboard-check-multiple",
          text: "Projects",
          target: "projects"
        },
        {
          icon: "mdi-phone",
          text: "Contact",
          target: "contact"
        }
      ]
    };
  }
};
</script>
