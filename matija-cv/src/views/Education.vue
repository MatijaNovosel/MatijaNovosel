<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown" class="pa-10">
        <v-timeline-item
          fill-dot
          v-for="(item, n) in items"
          :key="n"
          color="white"
          :large="item.image != null"
        >
          <template #icon>
            <v-avatar v-if="item.image">
              <img :src="item.image" />
            </v-avatar>
          </template>
          <template #opposite>
            <span class="white--text text-overline">
              {{ item.opposite }}
            </span>
          </template>
          <v-card class="elevation-2 white black--text">
            <v-card-title
              :class="{
                'text-subtitle-2': $vuetify.breakpoint.smAndDown
              }"
            >
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle class="grey--text">
              <a :href="item.link" class="text-decoration-none grey--text">
                {{ item.subtitle }}
              </a>
              <v-icon small color="grey">
                mdi-link
              </v-icon>
            </v-card-subtitle>
            <v-divider v-if="item.attachments" />
            <v-card-text class="py-0" v-if="item.attachments">
              <v-list dense>
                <v-list-item two-line v-for="(item, i) in item.attachments" :key="i" @click="redirectTo(item.link)">
                  <v-list-item-avatar class="my-0">
                    <v-icon color="red" v-text="item.icon" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ item.subtitle }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-divider v-if="$vuetify.breakpoint.smAndDown" />
            <v-card-text v-if="$vuetify.breakpoint.smAndDown" class="grey--text">
              {{ item.opposite }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-row>
  </v-container>
</template>

<script>
import { redirectTo } from "../helpers";

export default {
  name: "Education",
  methods: {
    redirectTo
  },
  data: () => ({
    items: [
      {
        title: "Master's degree (struc. spec. ing. techn. inf.)",
        subtitle: "Zagreb university of applied sciences",
        opposite: "October 2020 - Present",
        image:
          "data:image/png;base64,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",
        link: "https://www.tvz.hr"
      },
      {
        title: "Bachelor's degree' (bacc. ing. techn. inf.)",
        subtitle: "Zagreb university of applied sciences",
        opposite: "October 2017 - July 2020",
        image:
          "data:image/png;base64,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",
        link: "https://www.tvz.hr",
        attachments: [
          {
            link: "https://drive.google.com/file/d/1_lZiW1ffznlU3fIBaDqnMld1JhqXKf1z/view?usp=sharing",
            title: "Diploma supplement (en)",
            subtitle: "Google drive",
            icon: "mdi-file-pdf"
          },
          {
            link: "https://drive.google.com/file/d/11yYwWIHhTV70wzne2YbVSEQzbwBCWKXG/view?usp=sharing",
            title: "Diploma supplement (hr)",
            subtitle: "Google drive",
            icon: "mdi-file-pdf"
          },
          {
            link: "https://drive.google.com/file/d/1R5Lxa0Uv4RjqcQ7qR0WZUsU7PAJmcKJm/view?usp=sharing",
            title: "Final thesis",
            subtitle: "Google drive",
            icon: "mdi-file-pdf"
          }
        ]
      },
      {
        title: "Computer technician",
        subtitle: "Tehnička škola Ruđera Boškovića",
        opposite: "September 2013 - May 2017",
        image: null,
        link: "https://www.tsrb.hr"
      }
    ]
  })
};
</script>
