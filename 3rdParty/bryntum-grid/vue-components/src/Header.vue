/* eslint-disable */

<!--
 * Header component
-->
<template>
    <header class="demo-header">
        <h1><a :href="link">{{ title }}</a></h1>
    </header>
</template>

<script>
    export default {
        name: 'demo-header',
        props: {
            link: { type: String, default: '..' },
            title: { type: String, default: 'Example Header' },
        },
        mounted () {
            document.title = this.$props.title
        },
    } // exports the header components
</script>

<style lang="scss">
    .demo-header {
        padding: 2.1em .5em 2.1em 5em;
        background: url(~bryntum-resources/images/logo_bryntum_bw.png) #2667c8;
        background-repeat: no-repeat;
        background-size: 40px;
        background-position: center left 1.5em;
        display: flex;
    }

    .demo-header h1 {
        margin: 0;
        font-size: 1.8em;
        color: #fff;
        font-weight: normal;
        flex: 1;
        align-self: center;
    }

    .demo-header a {
        color: inherit;
        text-decoration: none;
    }

    .demo-header button {
        width: 2.8em;
        background: #8BC34A;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 1em;
        font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, sans-serif;
        border-radius: 2px;
        margin-right: .5em;
    }

    .demo-header button:hover {
        background: #9CCC65;
    }

    .demo-header button:active {
        background: #9CCC65;
    }

    .demo-header button:disabled {
        background: #ccbdb8 !important;
        cursor: default;
    }

    .demo-header button.red {
        background: #F44336;
    }

    .demo-header button.red:hover {
        background: #EF5350;
    }
</style>

<!-- eof -->
