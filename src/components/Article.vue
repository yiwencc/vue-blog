<template>
<div class="col-md-8">
        <h1>最新发布</h1>
        <!-- 标题，标签，分类，留言总数，发布时间 -->
        <article v-for="article in articles" :key='article.id'>
          <h2><router-link to="/detail">{{article.title}}</router-link></h2>
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <span class="glyphicon glyphicon-folder-open"></span
              >&nbsp;&nbsp;<a href="">标签</a> &nbsp;&nbsp;<span
                class="glyphicon glyphicon-tags"
              ></span
              >&nbsp;&nbsp;<a href="">分类1</a>，<a href="">分类2</a>，<a
                href=""
                >分类3</a
              >
            </div>
            <div class="col-md-6 col-sm-6">
              <span class="glyphicon glyphicon-comment"></span>&nbsp;&nbsp;<a
                href=""
                >200条评论</a
              >
              &nbsp;&nbsp;<span class="glyphicon glyphicon-time"></span
              >&nbsp;&nbsp;<a href="">2020年8月27日上午10点03分</a>
            </div>
          </div>
          <hr />

          <img src="http://placekitten.com/900/300" class="img-responsive" />
          <br />
          <p class="lead">{{article.abstract}}</p>
          <p class="text-right">
            <a href="single_article.html">阅读全文...</a>
          </p>
          <hr />
        </article>
        <!-- 分页 -->
        <ul class="pager">
          <li class="previous">
            <a href="#"><span aria-hidden="true">&larr;</span> 上一页</a>
          </li>
          <li class="next">
            <a href="#">下一页 <span aria-hidden="true">&rarr;</span></a>
          </li>
        </ul>
      </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'Article',
        data() {
            return {
                articles: []
            }
        },
        components: {
            
        },
        mounted(){
          axios.get("http://127.0.0.1:8000/article/").then(res => {
            this.articles = res.data
          });
        }
    }
</script>

<style scoped lang='scss'>
    
</style>