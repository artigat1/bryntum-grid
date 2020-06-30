<!--
/**
 * Home.vue
 */
-->
<template>
    <v-app>
        <app-form
                :selection="isSelected"
                @addrecord="addRecord"
                @removerecord="removeRecord"
                @search="onSearchType"
                app
        />
        <v-main>
            <v-container class="fill-height" fluid>
                <grid
                        :adopt="gridConfig.adopt"
                        :columnLines="gridConfig.columnLines"
                        :columns="gridConfig.columns"
                        :data="gridConfig.data"
                        :minHeight="gridConfig.minHeight"
                        :searchFeature=true
                        :selectionMode="gridConfig.selectionMode"
                        @selectionchange="onSelectionChange"
                        class="fill-height"
                        ref="grid"
                />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    // grid and its config
    import Grid from 'bryntum-vue-grid-shared/src/Grid.vue'
    import AppForm from '@/components/Form.vue'
    import gridConfig from '@/components/gridConfig.js'

    // App
    export default {
        name: 'app',

        // local components
        components: {
            Grid,
            AppForm,
        },

        // function that returns data
        data () {
            return {
                gridConfig,
                isSelected: false,
            }
        }, // eo function data

        methods: {
            onSearchType (v) {
                this.$refs.grid.gridEngine.features.search.search(v)
            },

            addRecord () {
                this.$refs.grid.gridEngine.store.insert(0, {})
            },

            removeRecord () {
                this.$refs.grid.removeRow()
            },

            onSelectionChange ({ action }) {
                this.isSelected = action === 'select'
            },
        },
    } // eo export App
</script>

<!-- eof -->
