<template>
    <v-col class="mx-5" align="right">
        <!-- Add projects -->
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on }">
                <v-btn
                    color="indigo"
                    class="ma-2 white--text"
                    v-on="on"
                >
                    <v-icon left dark>mdi-plus-circle-outline</v-icon>
                    Tambah
                </v-btn>
            </template>
            <project-add-dialog @close-dialog="closeDialog"></project-add-dialog>
        </v-dialog>
        <!-- Export buttons -->
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
            
        </v-col>
</template>

<script>
import ProjectAddDialog from '@/components/Widgets/Dialog/ProjectAddDialog';

export default {
    name: 'page-content-actions',
    components: {
        ProjectAddDialog
    },
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
        closeDialog() {
            this.dialog = !this.dialog
        }
    },
}
</script>

<style>

</style>
