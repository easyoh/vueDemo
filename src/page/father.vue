<template>
    <div>
        <span>多级组件传值案例</span>
        <Child :temp="tempdata" @tempFn="fatherFn"  v-on="$listeners">
        </Child>
    </div>
</template>
<script>
    import Child from './child.vue'
    export default {
        name:'attr',
        components: { Child },
        data() {
            return{
                tempdata: '我是父组件内容'
            }
        },
        // 需要注入的方法---在子组件中inject['father']
        provide: function() {   
            return {
                father: this.fatherFn
            };
        },
        methods: {
            fatherFn: function() {
               this.$msgbox("我是父组件方法");
            }
        }
    }
</script>