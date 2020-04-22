<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap>
            <v-toolbar flat>
                <v-icon>mdi-account-multiple</v-icon>
                <v-toolbar-title class="pl-2">Daftar Tenaga Ahli</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn small>
                    <v-icon small class="pr-2">mdi-account-plus</v-icon> Tambah
                </v-btn>
            </v-toolbar>
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
                            :headers="header"
                            :items="experts"
                            :search="search"
                            item-key="_id"
                            show-select
                            class="elevation-0"
                        >
                            <template v-slot:item="props">
                                <tr>
                                    <td>
                                        <v-checkbox primary hide-details v-model="props.selected" class="ma-0"></v-checkbox>
                                    </td>
                                    <td>{{ props.item.name }}</td>
                                    <td>{{ props.item.ttl }}</td>
                                    <td>{{ props.item.riwayatPendidikan }}</td>
                                    <td align="center">
                                        <v-chip
                                            small
                                            :color="getColor(props.item.pengalamanKerja)"
                                            dark
                                        >{{ props.item.pengalamanKerja }}</v-chip>
                                    </td>
                                    <td align="center">{{ props.item.profesiKeahlian }}</td>
                                    <td align="center">
                                        <v-btn rounded small outlined icon color="green darken-2">
                                            <v-icon small>mdi-pencil</v-icon>
                                        </v-btn>
                                        <v-dialog
                                            v-model="dialog[props.item._id]"
                                            scrollable
                                            max-width="500"
                                            :key="props.item._id"
                                        >
                                            <template v-slot:activator="{ on }">
                                                <v-btn
                                                    rounded
                                                    small
                                                    outlined
                                                    icon
                                                    color="red lighten-2"
                                                    v-on="on"
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
                                                <v-card-text>Are you sure want to delete {{ props.item.name }}?</v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                        color="green darken-1"
                                                        text
                                                        dark
                                                        @click.stop="$set(dialog, props.item._id, false)"
                                                    >Cancel</v-btn>
                                                    <v-btn
                                                        color="red darken-1"
                                                        text
                                                        dark
                                                        @click.stop="btnClick(props)"
                                                    >Delete</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Data from "@/data";

export default {
    head: {
        title: "Daftar Tenaga Ahli"
    },
    data: () => ({
        dialog: {},
        search: "",
        selected: [],
        header: Data.getExpertsTableHeader()
    }),
    async fetch({ store }) {
        await store.dispatch("experts/get");
    },
    computed: {
        experts() {
            return this.$store.state.experts.list;
        }
    },
    methods: {
        btnClick(props) {
            console.log(props);
            this.$set(this.dialog, props.item._id, false);
        },
        getColor(pengalaman) {
            if (pengalaman > 25) return "green";
            else if (pengalaman > 10) return "orange";
            else return "red";
        },
        deleteItem() {
            for (var i = 0; i < this.selected.length; i++) {
                const index = this.desserts.indexOf(this.selected[i]);
                this.desserts.splice(index, 1);
            }
            this.dialog = false;
        }
    }
};
</script>

<style>
</style>

