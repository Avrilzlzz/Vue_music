<template>
  <ul class="topnav">
    <li><router-link tag="a" to="/">推荐歌单</router-link></li>
    <li><router-link tag="a" to="/hot">热歌榜</router-link></li>
    <li><router-link tag="a" to="/sesarch">搜索</router-link></li>
  </ul>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .topnav{
        display: flex;
        border-bottom: 1px solid #ddd;
        li{
            line-height: 40px;
            flex: 1 1 auto;
            font-size: 15px;
            a{
                display: inline-block;
                text-decoration: none;
                color: #000;
                &.router-link-exact-active{
                    color:red;
                    border-bottom: 2px solid red;
                }
            }
        }
        
    }
</style>
