<template>
  <div class="recommend">
    <Title>推荐歌单</Title>
    <ul class="recommendList">
      <router-link
        v-for="rem in recommendMusicList"
        :key="rem.id"
        to="/"
        tag="li"
      >
        <div>
          <img :src="rem.picUrl" />
          <span>{{ rem.playCount | formatNum }}</span>
        </div>
        <p>{{rem.name}}</p>
      </router-link>
    </ul>
    <Title>最新音乐</Title>
    <MuiscItem :newMusicList="newMusicList"></MuiscItem>
  </div>
</template>

<script>
import Title from "../components/Title";
import MuiscItem from '../components/MusicItem';
export default {
  components: {
    Title,
    MuiscItem
  },
  data() {
    return {
      recommendMusicList: [],
      newMusicList:[]
    };
  },
  beforeRouteEnter(to, from, next) {
    //在路径进入之前获取数据
    next((vm) => {
      vm.$http.get("/personalized?limit=6").then((data) => {
        vm.recommendMusicList = data.data.result;
      });
      vm.$http.get('/personalized/newsong?limit=15').then((data)=>{
        vm.newMusicList=data.data.result
      })
    });
  },
  filters: {
    formatNum(value) {
      return (value / 1000).toFixed(1) + "万";
    },
  },
};
</script>

<style lang="less" scoped>
ul.recommendList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    width: 33%;
    margin-top: 20px;
    div {
      position: relative;
      span {
        position: absolute;
        right: 3px;
        top: 2px;
        color: #fff;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        font-size: 12px;
      }
    }
    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      min-height: 30px;
      line-height: 1.2;
      font-size: 13px;
      text-align: left;
      padding: 0 8px;
    }
  }
}
</style>
