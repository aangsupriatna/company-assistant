<template>
    <v-navigation-drawer id="app-drawer" :value="drawer" app>
        <!-- Logo -->
        <v-app-bar color="indigo" dark>
            <v-icon>mdi-vuetify</v-icon>
            <v-toolbar-title class="ml-5 align-center">{{ title }}</v-toolbar-title>
        </v-app-bar>
        <VuePerfectScrollbar class="scroll-area" v-once :settings="settings">
            <!-- User avatar -->
            <aside-list-current-user :user="user"></aside-list-current-user>
            <v-divider></v-divider>
            <!-- Menu sidebar items -->
            <aside-list-menu></aside-list-menu>
        </VuePerfectScrollbar>
    </v-navigation-drawer>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import AsideListMenu from "@/components/Widgets/Aside/AsideListMenu";
import AsideListCurrentUser from "@/components/Widgets/Aside/AsideListCurrentUser";
import { mapGetters } from 'vuex';

export default {
    name: "default-drawer",
    components: {
        VuePerfectScrollbar,
        AsideListMenu,
        AsideListCurrentUser
    },
    data: () => ({
        settings: {
            maxScrollbarLength: 180,
            wheelSpeed: 0.3
        }
    }),
    computed: {
        title() {
            return process.env.APP_TITLE;
        },
        ...mapGetters({
            getUserById: "users/getUserById",
            drawer:  "drawer/getDrawerState"
        }),
        user() {
            return this.getUserById('0001');
        },
    },
};
</script>

<style lang="scss">
#app-drawer {
    overflow: hidden;
    .scroll-area {
        position: relative;
        margin: auto;
        height: calc(100% - 65px);
    }
}
</style>
