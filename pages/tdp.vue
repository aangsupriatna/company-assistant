<template>
    <v-card flat>
        <!-- Header toolbar -->
        <v-toolbar flat>
            <page-content-header></page-content-header>
        </v-toolbar>

    </v-card>
</template>

<script>
import PageContentHeader from '@/components/Widgets/PageContentHeader';

export default {
    mounted() {
        this.$store.dispatch('pages/title', 'Tanda Daftar Perusahaan');
        this.$store.dispatch('pages/icon', 'mdi-account-multiple');
    },
    components: {
        PageContentHeader
    },
}
</script>

<style>

</style>
