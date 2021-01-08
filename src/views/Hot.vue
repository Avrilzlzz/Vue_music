<template>
  <div class="hotlist">
      <div class="hotop">
        <div class="hoticon"></div>
        <div class="hottime">更新日期: 01月07日</div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotMusicList:[]
    };
  },
  beforeRouteEnter (to, from, next) {
    next((vm)=>{
      vm.$http.get('/top/list?idx=1').then((data)=>{
        console.log(data);
      })
    })
  }
};
</script>
<style lang="less">
  .hotop{
    width: 100%;
    padding-top: 38.9%;
    position: relative;
    background-image: url(../assets/hot_music_bg_2x.jpg);
    background-size: 100%;
    .hoticon{
      width: 142px;
      height: 67px;
      background-image: url(../assets/index_icon_2x.png);
      background-position: -24px -30px;
      background-size: 166px 97px;
      position: absolute;
      top: 30px;
      left: 25px;
    }
    .hottime{
      margin-top: 10px;
      color:#fff;
      font-size: 12px;
      transform: scale(.91);
      transform-origin: left top;
      position: absolute;
      top: 95px;
      left: 25px;
    }
  }
</style>
