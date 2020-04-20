<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap>
            <v-flex sm12 align="center">
                <v-btn icon text>
                    <v-icon>mdi-account-multiple</v-icon>
                </v-btn>Daftar Tenaga Ahli
            </v-flex>
            <v-flex lg12>
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
                            <template v-slot:item.actions="{ item }">
                                <div>
                                    <v-btn rounded small outlined icon color="green darken-2">
                                        <v-icon small>mdi-pencil</v-icon>
                                    </v-btn>
                                    <v-dialog v-model="dialog" persistent max-width="400">
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                rounded
                                                small
                                                outlined
                                                icon
                                                color="red lighten-2"
                                                v-on="on"
                                                @click="btnClick(item)"
                                            >
                                                <v-icon small>mdi-trash-can</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title
                                                class="headline"
                                                primary-title
                                                condensed
                                            >Confirmation</v-card-title>
                                            <v-card-text>Are you sure want to delete?</v-card-text>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    color="green darken-1"
                                                    text
                                                    dark
                                                    @click="dialog = false"
                                                >Cancel</v-btn>
                                                <v-btn
                                                    color="red darken-1"
                                                    text
                                                    dark
                                                    @click="btnClick(item)"
                                                >Delete</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </div>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    head: {
        title: "Daftar Tenaga Ahli"
    },
    data: () => {
        return {
            dialog: false,
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
    fetch({ store }) {
        store.dispatch("experts/getExperts");
    },
    computed: {
        experts() {
            return this.$store.state.experts.expert_list;
        }
    },
    methods: {
        btnClick(value) {
            console.log(value);
            this.dialog = false
        },
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
