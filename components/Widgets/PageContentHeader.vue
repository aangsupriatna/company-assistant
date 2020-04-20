<template>    
    <v-toolbar flat class="px-0">
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn icon text>
                <v-icon>{{ icon }}</v-icon>
            </v-btn>
            <v-toolbar-title class="mt-4">{{ title }}</v-toolbar-title>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "page-content-header",
    computed: {
        ...mapGetters({
            title: "pages/getTitle",
            icon: "pages/getIcon"
        })
    }
};
</script>

<style>
</style>
