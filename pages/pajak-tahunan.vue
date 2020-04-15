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
        this.$store.dispatch('pages/title', 'Pajak Tahunan');
        this.$store.dispatch('pages/icon', 'mdi-briefcase-clock');
    },
    components: {
        PageContentHeader
    },
}
</script>

<style>

</style>
