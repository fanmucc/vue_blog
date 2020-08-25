<template>
  <div class="comm">
    <a-row class="comm-main" type="flex" justify="center">
        <a-col class="comm-left" :xs="24" :sm="24" :md="10" :lg="12" :xl="12">
           <slot name="left"></slot>
        </a-col>
        <a-col class="comm-right" :xs="0" :sm="0" :md="14" :lg="6" :xl="5">
            <slot name="right"></slot>
        </a-col>
    </a-row>
  </div>
</template>

<script>
// @ is an alias to /src
import './PageView.less'
import {Row, Col, Menu, Icon} from 'ant-design-vue'
const MenuItem = Menu.Item
export default {
  name: 'Home',
  components: {
    'a-row': Row,
    'a-col': Col,
    'a-menu': Menu,
    'a-menu-item': MenuItem,
    'a-icon': Icon
  }
}
</script>
