<template>
  <div class="home">
    <page-view>
      <template slot="left">
          <a-list class="itemList" item-layout="vertical" size="large" :data-source="listData">
            <div slot="footer"><b>加载完毕</b></div>
            <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
              <template v-for="{ type, text } in actions" slot="actions">
                <span :key="type">
                  <a-icon :type="type" style="margin-right: 8px" />
                  {{ text }}
                </span>
              </template>
              <img
                v-show="index % 2 === 0"
                slot="extra"
                width="272"
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
              <a-list-item-meta :description="item.description">
                <a slot="title" :href="item.href">{{ item.title }}</a>
              </a-list-item-meta>
              {{ item.content }}
            </a-list-item>
          </a-list>
      </template>
      <template slot="right">
          <a-card hoverable style="width: 300px">
              <img
                slot="cover"
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
              <template slot="actions" class="ant-card-actions">
                <a-icon key="setting" type="setting" />
                <a-icon key="edit" type="edit" />
                <a-icon key="ellipsis" type="ellipsis" />
              </template>
              <a-card-meta title="Card title" description="This is the description">
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </a-card-meta>
          </a-card>
      </template>
    </page-view>
  </div>
</template>

<script>
// @ is an alias to /src
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
import PageView from '../components/pageView'
import { Button,  Row, Col, Menu, Icon, List, Avatar, Card } from 'ant-design-vue'
const MenuItem = Menu.Item
const ListItem = List.Item
const ListItemMeta = ListItem.Meta
const CardMeta = Card.Meta
export default {
  name: 'Home',
  components: {
    'a-button': Button,
    'a-row': Row,
    'a-col': Col,
    'a-menu': Menu,
    'a-menu-item': MenuItem,
    'a-icon': Icon,
    'a-list': List,
    'a-list-item': ListItem,
    'a-avatar': Avatar,
    'a-list-item-meta': ListItemMeta,
    'a-card': Card,
    'a-card-meta':CardMeta,
    PageView
  },
  data() {
    return {
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 1,
      },
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
        { type: 'message', text: '查看详情' },
      ],
    };
  },
}
</script>
<style lang="less" scoped>
  .list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .list-item {
    background: #fff;
    margin: .5rem .5rem;
    padding: .5rem 1rem;
    border-radius: .3rem;
  }
  .ant-list-item {
    background: #fff;
    padding: .5rem 1rem;
  }
</style>
