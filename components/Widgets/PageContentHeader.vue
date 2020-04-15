<template>
    <v-row align="center" class="mx-0">
        <v-col> 
            <v-btn icon text>
                <v-icon>{{ icon }}</v-icon>
            </v-btn>
            {{ title }}
        </v-col>
        <v-spacer></v-spacer>
        <slot></slot>
        
    </v-row>

    
    <!-- <v-toolbar flat>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn icon text>
                <v-icon>{{ icon }}</v-icon>
            </v-btn>
            <v-toolbar-title class="mt-4">{{ title }}</v-toolbar-title>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <slot></slot>
    </v-toolbar> -->
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
