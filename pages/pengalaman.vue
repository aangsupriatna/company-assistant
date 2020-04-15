<template>
    <v-card flat>
        <!-- header toolbar -->
            <page-content-header>
                <v-col align="right">
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        flat
                        dense
                        hide-details
                        clearable
                        single-line
                    ></v-text-field>
                    <!-- <page-content-actions></page-content-actions> -->
                    <span>
                        <v-menu bottom offset-y>
                            <template v-slot:activator="{ on }">
                                <v-btn icon v-on="on">
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </template>
                            <v-list dense>
                                <v-list-item link>
                                    <v-list-item-icon><v-icon color="blue darken-2">mdi-file-excel-box</v-icon></v-list-item-icon>
                                    <v-list-item-title>Export to Excel</v-list-item-title>
                                </v-list-item>
                                <v-list-item link>
                                    <v-list-item-icon><v-icon color="green darken-2">mdi-file-word-box</v-icon></v-list-item-icon>
                                    <v-list-item-title>Export to Word</v-list-item-title>
                                </v-list-item>
                                <v-list-item link>
                                    <v-list-item-icon><v-icon color="red darken-2">mdi-file-pdf-box</v-icon></v-list-item-icon>
                                    <v-list-item-title>Export to PDF</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </span>
                </v-col>
            </page-content-header>
        <!-- /header toolbar -->

        <!-- data table -->
        <v-card-text>
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="items"
                :search="search"
                item-key="name"
                show-select
                class="elevation-0"
                @click:row="handleClick"
            >
                <template v-slot:item.name="{ item }">{{ item.name | truncate2(3) }}</template>
                <template v-slot:item.progress="{ item }">
                    <v-progress-linear :value="item.progress"></v-progress-linear>
                </template>
                <template v-slot:item.actions>
                    <div>
                        <v-btn icon color="green darken-2">
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn icon color="red lighten-2">
                            <v-icon>mdi-trash-can</v-icon>
                        </v-btn>
                    </div>
                </template>
            </v-data-table>
        </v-card-text>
        <!-- /data Table -->
    </v-card>
</template>

<script>
import PageContentHeader from "@/components/Widgets/PageContentHeader";
import PageContentActions from "@/components/Widgets/PageContentActions";
import { mapMutations, mapGetters } from "vuex";

export default {
    mounted() {
        this.$store.dispatch("pages/title", "Pengalaman Perusahaan");
        this.$store.dispatch("pages/icon", "mdi-view-list");
    },
    components: {
        PageContentHeader,
        PageContentActions
    },
    data: () => ({
        selected: [],
        search: '',
    }),
    methods: {
        handleClick(value) {
            console.log(value);
        }
    },
    computed: {
        ...mapGetters({
            headers: "projects/getHeader",
            items: "projects/getProjects"
        })
    }
};
</script>

<style>
</style>
