<template>
    <v-list dense>
        <v-list-group>
            <!-- Current user profile -->
            <template v-slot:activator>
                <v-list-item class="px-0" link>
                    <v-list-item-avatar>
                        <v-img :src="user.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title v-text="user.name"></v-list-item-title>
                        <v-list-item-subtitle class="caption" v-text="user.level"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>
            <!-- User profile -->
            <v-list-item class="px-5" to="/profile">
                <v-list-item-icon class="mr-4">
                    <v-icon>mdi-circle-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-regular">User Profile</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <!-- Edit user profile -->
            <v-list-item class="px-5" to="/edit-profile">
                <v-list-item-icon class="mr-4">
                    <v-icon>mdi-circle-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-regular">Edit Profile</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-group>
    </v-list>
</template>

<script>
export default {
    name: 'aside-list-current-user',
    props: ['user']
}
</script>

<style>

</style>
