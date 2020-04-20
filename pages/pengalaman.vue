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
                    <v-menu bottom offset-y>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on">
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list dense>
                            <v-list-item link>
                                <v-list-item-icon>
                                    <v-icon color="blue darken-2">mdi-file-excel-box</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Export to Excel</v-list-item-title>
                            </v-list-item>
                            <v-list-item link>
                                <v-list-item-icon>
                                    <v-icon color="green darken-2">mdi-file-word-box</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Export to Word</v-list-item-title>
                            </v-list-item>
                            <v-list-item link>
                                <v-list-item-icon>
                                    <v-icon color="red darken-2">mdi-file-pdf-box</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Export to PDF</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
            </v-col>
        </page-content-header>
        <!-- /header toolbar -->

        <!-- data table -->
        <v-card-text>
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="projects"
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

export default {
    components: {
        PageContentHeader,
        PageContentActions
    },
    fetch({ store }) {
        store.dispatch("pages/title", "Pengalaman Perusahaan");
        store.dispatch("pages/icon", "mdi-view-list");
        store.dispatch("projects/setProjects");
    },
    data: () => ({
        selected: [],
        search: "",
        headers: [
            {
                text: "Nama Proyek",
                align: "start",
                sortable: false,
                value: "name",
                class: "subtitle-2 font-weight-bold"
            },
            {
                text: "Klien",
                value: "client",
                class: "subtitle-2 font-weight-bold"
            },
            // { text: 'Lokasi', value: 'location', class: 'subtitle-2 font-weight-bold' },
            {
                text: "Type",
                value: "type",
                class: "subtitle-2 font-weight-bold"
            },
            {
                text: "Nilai Kontrak (Rp)",
                align: "right",
                value: "value",
                class: "subtitle-2 font-weight-bold"
            },
            {
                text: "Tanggal",
                align: "center",
                value: "date",
                class: "subtitle-2 font-weight-bold"
            },
            {
                text: "Progress",
                align: "center",
                value: "progress",
                class: "subtitle-2 font-weight-bold"
            },
            {
                text: "Actions",
                align: "center",
                value: "actions",
                class: "subtitle-2 font-weight-bold"
            }
        ]
    }),
    methods: {
        handleClick(value) {
            console.log(value);
        }
    },
    computed: {
        projects() {
            return this.$store.state.projects.project_list;
        },
    }
};
</script>

<style>
</style>
