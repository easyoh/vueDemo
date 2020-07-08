<template>
    <div id="child">
        <span>第二层{{$attrs.temp}}</span>
        <Son v-bind="$attrs" v-on="$listeners"></Son>
    </div>
</template>
<script>
    import Son from './son'
    export default {
        components: {
            Son
        },
        inheritAttrs:false,
        data() {
            return {}
        },
        mounted() {
            console.log(this.$listeners);
        },
        methods: {}
    }
</script>