<template>
  <v-navigation-drawer
    :permanent="$vuetify.breakpoint.mdAndUp"
    v-model="drawerOpen"
    app
    clipped
    class="elevation-0"
    @input="inputChanged"
    color="grey darken-4"
  >
    <template #prepend>
      <div class="py-4 d-flex flex-column align-center">
        <v-avatar tile size="130" color="grey darken-3 rounded-lg">
          <v-avatar rounded="lg" tile size="120" class="rounded-lg">
            <v-img alt="Me" src="/me.png" />
          </v-avatar>
        </v-avatar>
        <span class="gradient-text font-weight-bold text-h5 mt-4">
          Matija Novosel
        </span>
      </div>
    </template>
    <v-divider />
    <v-list dense nav>
      <v-list-item
        @click="scrollTo(item.target)"
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-icon>
          <v-icon color="grey lighten-1" v-text="item.icon" />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider />
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <div class="d-flex justify-center mt-3">
        <v-img
          @click="switchLocale('en')"
          style="cursor: pointer"
          class="mr-4"
          max-height="30"
          max-width="30"
          alt=""
          src="/uk-alt.svg"
        />
        <v-img
          @click="switchLocale('hr')"
          style="cursor: pointer"
          max-height="30"
          max-width="30"
          alt=""
          src="/hr-alt.svg"
        />
      </div>
    </template>
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
      this.drawerOpen = false;
      const el = document.getElementById(target);
      const y = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y + -65 });
    },
    switchLocale(locale) {
      if (this.locale == locale) {
        return;
      }
      this.setLocale(locale);
      this.$i18n.locale = locale;
      this.$vuetify.lang.current = locale;
    }
  },
  computed: {
    items() {
      return [
        {
          icon: "mdi-account",
          text: this.$t("sections.aboutMe"),
          target: "aboutMe"
        },
        {
          icon: "mdi-briefcase",
          text: this.$t("sections.workExperience"),
          target: "workExperience"
        },
        {
          icon: "mdi-school",
          text: this.$t("sections.education"),
          target: "education"
        },
        {
          icon: "mdi-tools",
          text: this.$t("sections.technologies"),
          target: "technologies"
        },
        {
          icon: "mdi-clipboard-check-multiple",
          text: this.$t("sections.projects"),
          target: "projects"
        },
        {
          icon: "mdi-phone",
          text: this.$t("sections.contact"),
          target: "contact"
        }
      ];
    }
  },
  data: () => ({
    drawerOpen: false
  })
};
</script>
