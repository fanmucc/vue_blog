<template>
    <div class="header">
        <a-row type="flex" justify="center">
            <a-col :xs="24" :sm="24" :md="10" :lg="12" :xl="12">
                <span class="header-logo">You</span>
                <span class="header-text">一个每日更新信息的博客</span>
            </a-col>
            <a-col :xs="0" :sm="0" :md="14" :lg="8" :xl="5">
                <a-menu mode="horizontal" style="text-align: right;">
                    <a-menu-item key="home">首页</a-menu-item>
                    <a-menu-item key="about">标签</a-menu-item>
                </a-menu>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import './header.less'
    import { Row, Col, Menu, Icon } from 'ant-design-vue'
    const MenuItem = Menu.Item
    export default {
        name: 'Header',
        components: {
            'a-row': Row,
            'a-col': Col,
            'a-menu': Menu,
            'a-menu-item': MenuItem,
            'a-icon': Icon
        },
        data () {
            return {
                current: ['home']
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
