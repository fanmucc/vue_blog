<template>
  <div class="about">
    <page-view>
        <template slot="left">
            <div class="post-details">
                <div class="detail-header">
                    <p class="article-information"><span class="article-time">发布日期: 2020.8.26</span>  <span class="label">前端</span></p>
                    <h1 class="title">字符串String原始数据常用方法</h1>
                </div>
                <!--   <MarkdownPro :value="article" :toolbars="toolbars" @on-save="saveMarkdown"></MarkdownPro>-->
                 <div class="article-content">
                    <markdown-preview class="content" :initialValue="article" :copyCode="true" copyBtnText="复制代码"></markdown-preview>
                 </div>
            </div>
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
            <div class="nav">

            </div>
        </template>
    </page-view>
  </div>
</template>
<script>
import PageView from '../components/pageView'
import { MarkdownPro } from 'vue-meditor'     // 编辑组件
import { MarkdownPreview } from 'vue-meditor' // 渲染组件
import { Icon, Avatar, Card } from 'ant-design-vue'
const CardMeta = Card.Meta

// import marked from 'marked'

export default {
    name: 'About',
    components: {
        PageView,
        MarkdownPro,
        MarkdownPreview,
        'a-icon': Icon,
        'a-card': Card,
        'a-card-meta':CardMeta,
        'a-avatar': Avatar
    },
    data () {
        return {
            article: '',
            articledom: '',
            toolbars: {
                // strong: false,
                // italic: false,
                // overline: false,
                // h1: false,
                // h2: false,
                // h3: false,
                // h4: false,
                // h5: false,
                // hr: false,
                // quote: false,
                // ul: false,
                // ol: false,
                // code: false,
                // link: false,
                // image: false,
                // table: false,
                // checked: false,
                // notChecked: false,
                // preview: false,
                // split: false,
                // print: false,
                // theme: false,
                // fullscreen: false,
                // exportmd: false,
                // importmd: false,
                // save: false,
                // clear: false
            }
        }
    },
    mounted () {
      this.article = window.sessionStorage.getItem('markdown')
      this.articledom = window.sessionStorage.getItem('markdownDom')
      // console.log(this.articledom)
      let toc = this.articledom.match(/<h[1-6][^<]*id=.*?>.*?<\/h[1-6]>/g)
      console.log(toc)
      // const renderer = {
      //     heading(text, level) {
      //       const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      //       return `
      //               <h${level}>
      //                 <a name="${escapedText}" class="anchor" href="#${escapedText}">
      //                   <span class="header-link"></span>
      //                 </a>
      //                 ${text}
      //               </h${level}>`;
      //     }
      //   };
      //   marked.use({ renderer });
        // Run marked
        // console.log(marked('# heading+'));
        // console.log(marked('### heading+'));
    },
    methods: {
        saveMarkdown(e) {
            console.log(e)
            this.articledom = e.html
            window.sessionStorage.setItem('markdownDom', this.articledom)
            this.article = e.value
            window.sessionStorage.setItem('markdown', this.article)
            console.log(this.article)
        },
    }
}
</script>
<style lang="less" >
    .post-details {
        display: border-box;
        background: #fff;
        padding: 1rem;
        .detail-header {
            .article-information {
                color: #909090;
                font-size: .6rem;
                padding: 0;
                line-height: .6rem;
                .label {
                    margin-left: 1rem;
                }
            }
        }
    }
    .content > .markdown-preview {
       padding: 0 !important;
    }
</style>
