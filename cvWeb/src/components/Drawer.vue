<template>
  <v-navigation-drawer
    v-model="drawerOpen"
    app
    clipped
    class="elevation-3"
    @input="inputChanged"
  >
    <v-list nav dense>
      <v-list-item
        :disabled="item.disabled"
        exact
        v-for="(item, i) in items"
        :key="i"
        :to="item.route"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon" />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text" />
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="logOut" color="primary">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ $t("logOut") }}</v-list-item-title>
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
  methods: {
    inputChanged(val) {
      this.drawerOpen = val;
      this.$emit("input", val);
    }
  },
  watch: {
    value(val) {
      this.drawerOpen = val;
    }
  },
  data: () => ({
    drawerOpen: false,
    items: []
  })
};
</script>
