<template>
  <div id="app">
       <h2>
          <!-- <router-link :to=" {name:'User',parmas:{uid:1,nationality:'usa'}}">User1 </router-link>
            <router-link :to=" {name:'User',parmas:{uid:2,nationality:'jap'}}">User1 </router-link>
             <router-link :to=" {name:'User',parmas:{uid:3,nationality:'korea'}}">User1 </router-link> -->
             <router-link to="/User/1/chia">User1 </router-link>
            <router-link to="/User/2/korea">User2 </router-link>
             <router-link to="/User/3/jap">User3 </router-link>
       </h2>
       <router-view></router-view>
    </div>
</template>

<script>
import './assets/my.css'
export default {
  name: 'App',
//   methods:{
//     btnClick(uid){
//         this.$router.push({path:'/player/'+uid});
//     }
//   },
//      beforeRouteUpdate(to,from,next){
//         this.stats='/Player/'+ to.params.uid +'/stats';
//         next();
// }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
