<template>
  <div id="body" class="container">
    <div class="row">
      <router-view></router-view>
      <div class="col-md-4">
        <!-- RSS订阅，最新文章（5），分类，标签云，最新评论 -->
        <div class="well text-center">
          <p class="lead">不想错过好文章，赶紧订阅吧</p>
          <button type="button" class="btn btn-primary btn-lg">
            订阅我的博客
          </button>
        </div>

        <!--最新文章 -->
        <div class="panel panel-primary" id="mypanel">
          <!-- Default panel contents -->
          <div class="panel-heading">
            <h4>最新文章</h4>
          </div>
          <!-- List group -->
          <ul class="list-group">
            <li class="list-group-item"><a href="">1. 最新文章8月27日</a></li>
            <li class="list-group-item"><a href="">2. 最新文章8月26日</a></li>
            <li class="list-group-item"><a href="">3. 最新文章8月25日</a></li>
            <li class="list-group-item"><a href="">4. 最新文章8月24日</a></li>
            <li class="list-group-item"><a href="">5. 最新文章8月23日</a></li>
          </ul>
        </div>

        <!-- 分类目录 -->
        <div class="panel panel-primary">
          <!-- Default panel contents -->
          <div class="panel-heading">
            <h4>分类目录</h4>
          </div>
          <!-- List group -->
          <ul class="list-group">
            <li class="list-group-item"><a href="">水果</a></li>
            <li class="list-group-item"><a href="">蔬菜</a></li>
            <li class="list-group-item"><a href="">电脑3C</a></li>
            <li class="list-group-item"><a href="">明星八卦</a></li>
            <li class="list-group-item"><a href="">政治事件</a></li>
          </ul>
        </div>

        <!-- 标签云 -->
        <div class="panel panel-primary">
          <!-- Default panel contents -->
          <div class="panel-heading">
            <h4>标签云</h4>
          </div>
          <!-- List group -->
          <div class="panel-body">
            <ul class="list-inline">
              <li><a href="">子鼠</a></li>
              <li><a href="">丑牛</a></li>
              <li><a href="">寅虎</a></li>
              <li><a href="">卯兔</a></li>
              <li><a href="">申龙</a></li>
              <li><a href="">巳蛇</a></li>
            </ul>
          </div>
        </div>

        <!-- 最新评论 -->
        <div class="panel panel-primary">
          <!-- Default panel contents -->
          <div class="panel-heading">
            <h4>最新评论</h4>
          </div>
          <!-- List group -->
          <ul class="list-group">
            <li class="list-group-item"><a href="">1. 最新文章8月27日</a></li>
            <li class="list-group-item"><a href="">2. 最新文章8月26日</a></li>
            <li class="list-group-item"><a href="">3. 最新文章8月25日</a></li>
            <li class="list-group-item"><a href="">4. 最新文章8月24日</a></li>
            <li class="list-group-item"><a href="">5. 最新文章8月23日</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Context",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>

</style>