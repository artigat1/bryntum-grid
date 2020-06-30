<template>
    <div class="b-grid-container"/>
</template>

<script>
    import { Grid } from 'bryntum-grid'

    // Defines a Vue component that wraps Bryntum Grid
    export default {

        name: 'grid',

        props: {
            // Configs
            rowHeight: Number,
            fixedRowHeight: { type: Boolean, default: undefined },
            defaultRowHeight: Number,
            emptyText: String,
            fullRowRefresh: { type: Boolean, default: undefined },
            readOnly: { type: Boolean, default: undefined },
            hideHeaders: { type: Boolean, default: undefined },
            showRemoveRowInContextMenu: { type: Boolean, default: undefined },
            autoHeight: { type: Boolean, default: undefined },
            minHeight: String,
            alignSelf: String,
            flex: Number,
            store: Object,
            data: Array,
            columns: Array,
            defaultRegion: String,
            destroyStore: { type: Boolean, default: undefined },
            enableTextSelection: { type: Boolean, default: undefined },
            loadMask: String,
            syncMask: String,
            columnLines: { type: Boolean, default: undefined },
            fillLastColumn: { type: Boolean, default: undefined },
            resizeToFitIncludesHeader: { type: Boolean, default: undefined },
            animateRemovingRows: { type: Boolean, default: undefined },
            disableGridRowModelWarning: { type: Boolean, default: undefined },
            loadMaskErrorIcon: String,
            headerClass: Function,
            testPerformance: { type: Boolean, default: undefined },
            positionMode: String,
            rowScrollMode: String,
            monitorResize: { type: Boolean, default: undefined },
            features: { type: [Object, Boolean], default: undefined },
            subGridConfigs: Object,
            scrollable: Object,
            scrollerClass: Object,
            showDirty: { type: Boolean, default: undefined },
            loadMaskHideTimeout: Number,
            transitionDurationTimeout: Number,
            refreshSuspended: Number,
            transitionDuration: Number,
            contextMenuTriggerEvent: String,
            localizableProperties: Array,
            localeClass: String,
            selectionMode: Object,
            selectedRecordCollection: Object,
            responsiveLevels: Object,

            // features
            cellEditFeature: { type: [Object, Boolean], default: undefined },
            cellTooltipFeature: { type: [Object, Boolean], default: undefined },
            columnDragToolbarFeature: { type: [Object, Boolean], default: undefined },
            columnPickerFeature: { type: [Object, Boolean], default: undefined },
            columnReorderFeature: { type: [Object, Boolean], default: undefined },
            columnResizeFeature: { type: [Object, Boolean], default: undefined },
            contextMenuFeature: { type: [Object, Boolean], default: undefined },
            filterFeature: { type: [Object, Boolean], default: undefined },
            filterBarFeature: { type: [Object, Boolean], default: undefined },
            groupFeature: { type: [Object, Boolean], default: undefined },
            groupSummaryFeature: { type: [Object, Boolean], default: undefined },
            quickFindFeature: { type: [Object, Boolean], default: undefined },
            regionResizeFeature: { type: [Object, Boolean], default: undefined },
            searchFeature: { type: [Object, Boolean], default: undefined },
            sortFeature: { type: [Object, Boolean], default: undefined },
            stripeFeature: { type: [Object, Boolean], default: undefined },
            summaryFeature: { type: [Object, Boolean], default: undefined },
            treeFeature: { type: [Object, Boolean], default: undefined },
        }, // eo props

        // runs after the component is attached to DOM (mounted)
        mounted () {
            const propKeys = Object.keys(this.$props)

            const config = {
                // Render grid to components element
                appendTo: this.$el,

                // Listeners, will relay events using $emit
                listeners: {
                    catchAll (event) {
                        // Uncomment this line to log events being emitted to console
                        // console.log(event.type);
                        this.$emit(event.type, event)
                    },

                    thisObj: this,
                },

                features: {},
            }

            // Apply all props to grid config
            propKeys.forEach(prop => {
                let match
                if ((match = prop.match(/(.*)Feature/)) && this[prop] !== undefined) {
                    config.features[match[1]] = this[prop]
                } else if (prop === 'config') {
                    // Prop is a config object
                    Object.assign(config, this[prop])
                } else {
                    // Prop is a config
                    if (this[prop] !== undefined) {
                        config[prop] = this[prop]
                    }

                    // Set up a watcher
                    this.$watch(prop, newValue => {
                        this.gridEngine[prop] = Array.isArray(newValue) ? newValue.slice() : newValue
                    })
                }
            }, this)

            // Create a Bryntum Grid with props as configs
            const grid = this.gridEngine = new Grid(config)

            grid.store && grid.store.relayAll(grid, 'store')
        },

        // cleanup before destroy
        beforeDestroy () {
            // Make sure Bryntum Grid is destroyed when vue component is
            this.gridEngine.destroy()
        },

        watch: {
            columns (newValue) {
                // New columns assigned, use as grid columns
                this.gridEngine.columns.data = newValue
            },
        },

        methods: {
            addRow (data) {
                // Add a row using the supplied data
                return this.gridEngine.store.add(data)
            },

            removeRow () {
                // Remove selected row (if any)
                this.gridEngine.selectedRecord && this.gridEngine.selectedRecord.remove()
            },
        },

    }
</script>
<!-- eof -->
