<template>
    <v-card flat>
        <!-- Header toolbar -->
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
            </v-col>
        </page-content-header>

        <v-card-text>            
            <!-- data table -->
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="items"
                :search="search"
                item-key="name"
                show-select
                class="elevation-0"
            >
                <template v-slot:item.pengalamanKerja="{ item }">
                    <v-chip :color="getColor(item.pengalamanKerja)" dark>{{ item.pengalamanKerja }}</v-chip>
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
            <!-- /data table -->
        </v-card-text>
    </v-card>
</template>

<script>
import PageContentHeader from "@/components/Widgets/PageContentHeader";
import DataTable from "@/components/Widgets/Table/DataTable";
import { mapMutations, mapGetters } from "vuex";

export default {
    mounted() {
        this.$store.dispatch("pages/title", "Tenaga Ahli");
        this.$store.dispatch("pages/icon", "mdi-account-multiple");
    },
    components: {
        PageContentHeader,
        DataTable
    },
    data: () => ({
        selected: [],
        search: '',
    }),    
    computed: {
        ...mapGetters({
            headers: "tenagaAhli/getHeader",
            items: "tenagaAhli/getTenagaAhli"
        })
    },
    methods: {
        getColor (pengalaman) {
            if (pengalaman > 25) return 'green'
            else if (pengalaman > 10) return 'orange'
            else return 'red'
        },
    }
};
</script>

<style>
</style>
