<template>
    <v-card flat>
        <!-- Header toolbar -->
        <v-toolbar flat>
            <page-content-header></page-content-header>
        </v-toolbar>

        <v-layout justify-center align-center>
        <v-flex shrink>
            <v-btn color="test" large @click="$vuetify.theme.dark = !$vuetify.theme.dark"><v-icon>mdi-theme-light-dark</v-icon></v-btn>
        </v-flex>
        </v-layout>

    </v-card>
</template>

<script>
import PageContentHeader from '@/components/Widgets/PageContentHeader';
export default {
    mounted() {
        this.$store.dispatch('pages/title', 'Dashboard');
        this.$store.dispatch('pages/icon', 'mdi-view-dashboard');
    },
    components: {
        PageContentHeader
    },
}
</script>

<style>

</style>
