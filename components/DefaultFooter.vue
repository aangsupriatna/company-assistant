<template>
    <!-- App Footer -->
    <v-footer height="auto" absolute>
        <span class="caption">&copy; {{ new Date().getFullYear() }}</span>
        <v-spacer></v-spacer>
        <span class="caption mr-1">Powered by</span>
        <v-icon color="green" small>mdi-nuxt</v-icon>
    </v-footer>
</template>

<script>
export default {
    name: 'default-footer'
}
</script>

<style lang="scss">

</style>
