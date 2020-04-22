<template>
    <v-list dense>
        <template v-for="(item, i) in menu">
            <template v-if="item.header">
                <v-subheader class="ml-3" :key="i" v-text="item.title"></v-subheader>
            </template>
            <!-- menu with children -->
            <v-list-group :key="i" v-else-if="item.items" no-action>
                <template v-slot:activator>
                    <v-list-item-icon class="mr-5">
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" class="font-weight-regular"></v-list-item-title>
                    </v-list-item-content>
                </template>

                <!-- display submenu items -->
                <template v-for="(subItem, i) in item.items">
                    <v-list-item :key="i" :to="subItem.href" class="pl-4">
                        <v-list-item-icon class="mr-5">
                            <v-icon v-text="subItem.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="subItem.title" class="font-weight-regular"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
                <!-- /display submenu items -->
            </v-list-group>

            <!-- menu without children -->
            <v-list-item v-else :key="i" :to="item.href" link>
                <v-list-item-icon class="mr-5">
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="item.title" class="font-weight-regular"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <!-- /menu without children -->
        </template>
    </v-list>
</template>

<script>
import API from "@/data";

export default {
    name: "aside-list-menu",
    data: () => ({
        menu: API.getMenuItems(),
        model: 1
    })
};
</script>

<style>
</style>
