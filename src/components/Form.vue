<template>
    <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            app
            class="demo-header"
            color="blue darken-3"
            dark
    >
        <v-toolbar-title
                class="ml-0 pl-4"
                style="width: 400px"
        >
            <v-avatar item size="50px">
                <v-img
                        alt="Bryntum Vue Grid Advanced"
                        src="../assets/logo_bryntum_bw.png"
                />
            </v-avatar>
            Bryntum Vue Grid Advanced
        </v-toolbar-title>
        <v-text-field
                @click:clear="onSearchType"
                @keyup="onSearchType"
                class="hidden-sm-and-down"
                clearable
                flat
                hide-details
                label="Search"
                prepend-inner-icon="mdi-magnify"
                solo-inverted
                v-model="search"
        />
        <v-spacer />
<!--        <v-btn-->
<!--                @click="exportData"-->
<!--                icon-->
<!--                color="accent">-->
<!--            <v-icon right light>mdi-cloud-download</v-icon>-->
<!--        </v-btn>-->
        <v-btn
                @click="addRecord"
                class="mr-4"
                text
        > Add record
        </v-btn>
        <v-btn
                :disabled="!selection"
                @click="removeRecord"
                class="my-2"
                color="red"
        > Remove record
        </v-btn>

    </v-app-bar>
</template>

<script>
    export default {
        props: {
            selection: {
                default: false,
                type: Boolean,
            },
        },

        data: () => {
            return { search: '' }
        },

        methods: {
            onSearchType (v) {
                this.$emit('search', v.target.value)
            },

            addRecord () {
                this.$emit('addrecord')
            },

            removeRecord () {
                this.$emit('removerecord')
            },

            exportData () {
                this.$emit('exportData')
            },
        },
    }
</script>
