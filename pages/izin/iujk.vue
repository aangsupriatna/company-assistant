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
        this.$store.dispatch('pages/title', 'Izin Usaha Jasa Konsultasi');
        this.$store.dispatch('pages/icon', 'mdi-view-carousel');
    },
    components: {
        PageContentHeader
    },
}
</script>

<style>

</style>
