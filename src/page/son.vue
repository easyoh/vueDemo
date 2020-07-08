<template>
    <div id="son" @click='click'>
       第三层点我 {{ $attrs.temp }}
    </div>
</template>
<script>
    export default {
        inject:['father'],
        prop: {},
        data() {
            return {}
        },
        methods: {
          click(){
            // this.$emit('tempFn');
            this.father();
          }  
        },
        mounted() {
            console.log(this.$attrs);
        }
    }
</script>
<style>
    #son{
        cursor: pointer;
    }
</style>