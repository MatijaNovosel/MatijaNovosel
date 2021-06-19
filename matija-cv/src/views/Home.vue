<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" class="text-center">
        <span
          :class="{
            'display-2': $vuetify.breakpoint.mdAndUp,
            'text-h4': $vuetify.breakpoint.smAndDown
          }"
          class="white--text font-weight-bold pb-5"
        >
          Hello, I'm Matija Novosel 👋
        </span>
      </v-col>
      <div
        class="white--text text-center"
        :style="$vuetify.breakpoint.mdAndUp ? { width: '800px' } : {}"
        :class="{
          'text-subtitle-2 px-5': $vuetify.breakpoint.smAndDown
        }"
      >
        <p>
          I am a Web Developer located in Zagreb, Croatia. Currently working as
          a student Junior Web Developer for Omega Software whilst finishing my
          Masters degree at the Zagreb University of Applied Sciences.
        </p>
        <p>
          I'm always looking for new opportunities and I strive to create as
          many quality projects in order to improve my knowledge and skills.
        </p>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>
