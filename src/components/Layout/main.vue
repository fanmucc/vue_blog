<template>
    <div>
        <a-affix class="affix" :offset-top="top">
            <Header style="padding: 0 .5rem;"/>
        </a-affix>
        <router-view/>
    </div>
</template>

<script>
    import Header from './components/Header'
    import { Affix } from 'ant-design-vue'
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

<style lang="less">
    .ant-affix  {
      z-index: 999 !important;
    }
</style>
