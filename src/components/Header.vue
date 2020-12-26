<template>
  <header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
			<div class="container">
				<div class="navbar-header">
					<button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
						<span class="sr-only">响应式导航</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a href="" class="navbar-brand">我的小屋</a>
				</div>
				<nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
					<ul class="nav navbar-nav">
						<li role="presentation" class="active"><a href="/">首页</a></li>
						<li role="presentation"><router-link to="/contact">联系</router-link></li>
						<li role="presentation"><router-link to="/about">关于我</router-link></li>
					</ul>
					<form class="navbar-form navbar-right" role="search">
						<div class="form-group">
							<input type="text" class="form-control" placeholder="请输入文章标题或者作者名称">
						</div>
						<button type="submit" class="btn btn-default">搜索</button>
					</form>
				</nav>
			</div>
		</header>
</template>

<script>

  export default {
    name: 'Header',
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
