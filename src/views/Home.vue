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
                @exportData="exportData"
                @nextResult="nextResult"
                @prevResult="prevResult"
                @removerecord="removeRecord"
                @search="onSearchType"
                app
        />
        <v-main>
            <v-container class="fill-height" fluid>
                <grid
                        :adopt="gridConfig.adopt"
                        :column-drag-toolbar-feature="gridConfig.dragColumns"
                        :column-picker-feature="gridConfig.columnPicker"
                        :columnLines="gridConfig.columnLines"
                        :columns="gridConfig.columns"
                        :data="gridConfig.data"
                        :filter-feature="gridConfig.filterColumns"
                        :minHeight="gridConfig.minHeight"
                        :searchFeature=true
                        :selectionMode="gridConfig.selectionMode"
                        @selectionchange="onSelectionChange"
                        class="fill-height"
                        context-menu-feature
                        quick-find-feature
                        ref="grid"
                        stripe-feature
                        search-feature="gridConfig.search"
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

        components: {
            Grid,
            AppForm,
        },

        data () {
            return {
                gridConfig,
                isSelected: false,
            }
        },

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

            exportData () {
                this.$refs.grid.gridEngine.features.PdfExport.showExportDialog()
            },

            prevResult () {
                // DomHelper.focusWithoutScrolling(this.$refs.grid.element)
                this.$refs.grid.gridEngine.features.search.gotoPrevHit(false, { animate: 300 })
            },

            nextResult () {
                // DomHelper.focusWithoutScrolling(this.$refs.grid.element)
                this.$refs.grid.gridEngine.features.search.gotoNextHit(false, { animate: 300 })
            },
        },
    }
</script>

<!-- eof -->
