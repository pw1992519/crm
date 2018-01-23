<template>
  <div id="app">
    <HeadIndex />
    <div class="bottom-box">
      <div class="slide-bar" :class="{'hide': !slideBol}">
        <SlideIndex />
      </div>
      <div class="content" :class="{'margin': slideBol}" @click="changeSlide">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import HeadIndex from '@/components/head/HeadIndex'
import SlideIndex from '@/components/slide/SlideIndex'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions(["changeSlideBol"]),
    changeSlide() {
      if(this.slideBol){
        this.changeSlideBol();
      }
    }
  },
  computed: {
    ...mapState(["slideBol"]),

  },
  components: {
    HeadIndex,
    SlideIndex
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
body, html{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: scroll;
}
.bottom-box{
  position: relative;
}
.slide-bar{
  width: 200px;
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.5s;
}
.content{
  width: 100%;
  transition: all 0.5s;
}
.hide{
  display: none;
}
.margin{
  margin-left: 200px;
}
</style>
