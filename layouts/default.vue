<template>
    <v-app id="inspire">
        <default-aside></default-aside>
        <default-toolbar></default-toolbar>
        <v-content>
            <div class="page-wrapper">
                <Nuxt/>
            </div>
            <default-footer></default-footer>
        </v-content>
    </v-app>
</template>

<script>
import DefaultToolbar from '@/components/DefaultToolbar';
import DefaultAside from '@/components/DefaultAside';
import DefaultFooter from '@/components/DefaultFooter';

export default {
    head: {
        title: process.env.APP_TITLE
    },
    components:{
        DefaultToolbar,
        DefaultAside,
        DefaultFooter
    }
}
</script>

<style>

</style>
