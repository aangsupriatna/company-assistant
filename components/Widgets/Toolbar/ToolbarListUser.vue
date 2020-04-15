<template>
    <v-list dense>
        <v-list-item to="user-profile">
            <v-list-item-icon>
                <v-icon>mdi-face-profile</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item to="pengaturan">
            <v-list-item-icon>
                <v-icon>mdi-tools</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>Pengaturan</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item @click="handleFullScreen()">
            <v-list-item-icon>
                <v-icon>mdi-fullscreen</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>Full Screen</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item to="keluar">
            <v-list-item-icon>
                <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>Keluar</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
import Util from '@/util';

export default {
    name: 'toolbar-list-user',
    props: {
        user: {
            type: String
        }
    },
    methods: {
        handleFullScreen: () => {
            Util.toggleFullScreen();
        }
    }
}
</script>

<style>

</style>
