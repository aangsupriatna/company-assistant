<template>
    <v-list max-width="350" class="mx-auto pb-0">
        <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>
            <v-list-item v-if="item.title" :key="item.title" @click="handleClick()">
                <!-- Front icon -->
                <v-list-item-avatar>
                    <v-icon
                        :class="[item.iconClass]"
                        v-text="item.icon"
                    ></v-icon>
                </v-list-item-avatar>
                <!-- Title and time -->
                <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.name"></v-list-item-subtitle>
                </v-list-item-content>
                <!-- Information icon -->
                <v-list-item-action>
                    <v-btn icon>
                        <v-icon color="grey lighten-1" v-text="item.iconInfo"></v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
            <v-divider :key="index"></v-divider>
        </template>
        <!-- All button -->
        <v-btn block>All</v-btn>
    </v-list>
</template>

<script>
import API from "@/api";

export default {
  name: "toolbar-list-notification",

  data: () => ({
    items: API.getToolbarNotification()
  }),

  methods: {
    handleClick: e => {
      console.log(e);
    }
  }
};
</script>

<style>
</style>
