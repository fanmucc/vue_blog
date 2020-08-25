<template>
    <div>
        <a-affix :offset-top="top">
            <Header/>
        </a-affix>
        <router-view/>
    </div>
</template>

<script>
    import Header from './components/Header'
    import {Affix} from 'ant-design-vue'
    export default {
        name: 'Main',
        components: {
            Header,
            'a-affix': Affix
        },
        data () {
            return {
                top: 0
            }
        }
    }
</script>

<style lang="less" scoped>

</style>