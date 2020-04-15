<template>
    <v-list max-width="350" class="mx-auto pb-0">
        <v-subheader>Inbox</v-subheader>
        <v-divider></v-divider>
        <template v-for="(item, index) in items">
            <v-list-item :key="item.title" @click="handleClick()">
                <!-- User avatar -->
                <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>
                <!-- User name and message -->
                <v-list-item-content>
                    <v-list-item-title v-text="item.user"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.title"></v-list-item-subtitle>
                </v-list-item-content>
                <!-- Message time -->
                <v-list-item-action>
                    <v-list-item-action-text v-text="item.timeLabel"></v-list-item-action-text>
                    <v-icon>mdi-star-outline</v-icon>
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
    name: "toolbar-list-message",

    data: () => (
        {
            items: API.getToolbarMessageItems()
        }
    ),

    methods: {
        handleClick: e => {
        console.log(e);
        }
    }
};
</script>

<style>
</style>
