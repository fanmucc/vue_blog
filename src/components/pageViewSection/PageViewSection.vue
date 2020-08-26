<template>
  <div class="comm">
    <a-row class="comm-main" type="flex" justify="center">
        <a-col class="comm-left" :xs="24" :sm="24" :md="17" :lg="17" :xl="17">
           <slot></slot>
        </a-col>
    </a-row>
  </div>
</template>

<script>
// @ is an alias to /src
import './PageViewSection.less'
import {Row, Col, Menu, Icon} from 'ant-design-vue'
const MenuItem = Menu.Item
export default {
  name: 'PageViewSection',
  components: {
    'a-row': Row,
    'a-col': Col,
    'a-menu': Menu,
    'a-menu-item': MenuItem,
    'a-icon': Icon
  }
}
</script>
