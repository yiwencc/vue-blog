<template>
<div class="col-md-8">
        <h1>最新发布</h1>
        <!-- 标题，标签，分类，留言总数，发布时间 -->
        <article>
          <h2><router-link to="/detail">这是我第一篇文章</router-link></h2>
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
          <p class="lead">一言是创建于 2016 年的项目，起初是用于个人目的</p>
          <p>
            一言是创建于 2016
            年的项目，起初是用于个人目的。目前已经转为公益项目，由萌创团队运营，为大家提供服务。
            所谓一言（ヒトコト），即一句话。这句话可以是传达了感动，可以是博人一笑，可以是发人深思。总之，一言，代表着言语的触动，灵魂的交流。
          </p>
          <p class="text-right">
            <a href="single_article.html">阅读全文...</a>
          </p>
          <hr />
        </article>

        <article>
          <h2><a href="#">这是我的第一篇文章</a></h2>
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
          <p class="lead">一言是创建于 2016 年的项目，起初是用于个人目的</p>
          <p>
            一言是创建于 2016
            年的项目，起初是用于个人目的。目前已经转为公益项目，由萌创团队运营，为大家提供服务。
            所谓一言（ヒトコト），即一句话。这句话可以是传达了感动，可以是博人一笑，可以是发人深思。总之，一言，代表着言语的触动，灵魂的交流。
          </p>
          <p class="text-right">
            <a href="single_article.html">阅读全文...</a>
          </p>
          <hr />
        </article>

        <article>
          <h2><a href="#">这是我的第一篇文章</a></h2>
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
          <p class="lead">一言是创建于 2016 年的项目，起初是用于个人目的</p>
          <p>
            一言是创建于 2016
            年的项目，起初是用于个人目的。目前已经转为公益项目，由萌创团队运营，为大家提供服务。
            所谓一言（ヒトコト），即一句话。这句话可以是传达了感动，可以是博人一笑，可以是发人深思。总之，一言，代表着言语的触动，灵魂的交流。
          </p>
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

    export default {
        name: 'Article',
        data() {
            return {
                
            }
        },
        components: {
            
        }
    }
</script>

<style scoped lang='scss'>
    
</style>