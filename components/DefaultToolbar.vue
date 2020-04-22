<template>
    <v-app-bar fixed color="indigo" dark app>
        <v-app-bar-nav-icon @click.stop="toggle()"></v-app-bar-nav-icon>
        <!-- Top pages -->
        <template v-for="(item, index) in items">
            <v-btn text :to="item.href" class="hidden-sm-and-down" :key="index" v-text="item.title"></v-btn>
        </template>
        <!-- Search input -->
        <v-text-field
            flat
            solo-inverted
            hide-details
            clearable
            single-line
            rounded
            prepend-inner-icon="mdi-magnify"
            label="Search"
            class="hidden-sm-and-down mx-5"
            v-model="search"
        >
        </v-text-field>
        <v-spacer></v-spacer>
        <!-- Message button -->
        <v-menu bottom offset-y :nudge-bottom="14" origin="top right" transition="slide-y-transition">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-badge right content="12" color="green" overlap>
                        <v-icon>mdi-email-outline</v-icon>
                    </v-badge>
                </v-btn>
            </template>
            <!-- Display message list -->
            <toolbar-list-message></toolbar-list-message>
        </v-menu>
        <!-- Notification button -->
        <v-menu offset-y :nudge-bottom="14" origin="top right" transition="slide-y-transition">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-badge right content="5" color="red" overlap>
                        <v-icon>mdi-bell-outline</v-icon>
                    </v-badge>
                </v-btn>
            </template>
            <!-- Display notification list -->
            <toolbar-list-notification></toolbar-list-notification>
        </v-menu>
        <!-- User button -->
        <v-menu offset-y :nudge-bottom="14" origin="top right" transition="slide-y-transition">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>
            <!-- Display notification list -->
            <toolbar-list-user></toolbar-list-user>
        </v-menu>
    </v-app-bar>
</template>

<script>
import ToolbarListNotification from '@/components/Widgets/Toolbar/ToolbarListNotification';
import ToolbarListMessage from '@/components/Widgets/Toolbar/ToolbarListMessage';
import ToolbarListUser from '@/components/Widgets/Toolbar/ToolbarListUser';
import { mapMutations } from 'vuex';
import API from '@/data';

export default {
    name: 'default-toolbar',
    components: {
        ToolbarListNotification,
        ToolbarListMessage,
        ToolbarListUser
    },
    data() {
        return {
            items: API.getToolbarMenuItems(),
            search: ""
        }
    },
    methods: {
        ...mapMutations({ toggle:  "drawer/toggle" })
    },
}
</script>

<style>

</style>
