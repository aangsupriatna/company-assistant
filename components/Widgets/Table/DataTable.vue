<template>
    <v-card outlined>
        <v-toolbar flat color="white">
            <v-text-field
                flat
                solo
                prepend-icon="mdi-magnify"
                placeholder="Type something"
                v-model="search"
                hide-details
                class="hidden-sm-and-down"
            ></v-text-field>
            <v-btn icon>
                <v-icon>mdi-filter</v-icon>
            </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text class="pa-0">
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="experts"
                :search="search"
                item-key="name"
                show-select
                class="elevation-0"
            >
                <template v-slot:item.pengalamanKerja="{ item }">
                    <v-chip
                        small
                        :color="getColor(item.pengalamanKerja)"
                        dark
                    >{{ item.pengalamanKerja }}</v-chip>
                </template>
                <template v-slot:item.actions>
                    <div>
                        <v-btn rounded small outlined icon color="green darken-2">
                            <v-icon small>mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn rounded small outlined icon color="red lighten-2">
                            <v-icon small>mdi-trash-can</v-icon>
                        </v-btn>
                    </div>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
import { items as Users } from "@/data/users";

export default {
    name: "data-table",
    data() {
        return {
            search: "",
            selected: [],
            headers: [
                {
                    text: "Nama",
                    align: "start",
                    sortable: false,
                    value: "name"
                },
                {
                    text: "TTL",
                    value: "ttl",
                    class: "subtitle-2 font-weight-bold"
                },
                {
                    text: "Riwayat Pendidikan",
                    value: "riwayatPendidikan",
                    class: "subtitle-2 font-weight-bold"
                },
                {
                    text: "Pengalaman",
                    value: "pengalamanKerja",
                    align: "center",
                    class: "subtitle-2 font-weight-bold"
                },
                {
                    text: "Profesi Keahlian",
                    value: "profesiKeahlian",
                    align: "center",
                    class: "subtitle-2 font-weight-bold"
                },
                {
                    text: "Actions",
                    align: "center",
                    value: "actions",
                    align: "center",
                    class: "subtitle-2 font-weight-bold",
                    width: "150px"
                }
            ]
        };
    },
    computed: {
        experts() {
            return this.$store.state.experts.expert_list;
        },
        projects() {
            return this.$store.state.projects.project_list;
        },
    },
    methods: {
        getColor(pengalaman) {
            if (pengalaman > 25) return "green";
            else if (pengalaman > 10) return "orange";
            else return "red";
        }
    }
};
</script>

<style>
</style>