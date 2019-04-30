<template>
    <div>
            <h1>球员简介</h1>
        <ul>
           <li>id:{{detail.uid}}</li>
            <li>球员:{{detail.name}}</li>
            <li>得分:{{detail.point}}</li>
        </ul>
     <router-link :to="profile">简介</router-link>
     <router-link :to="stats">数据</router-link>
   <router-view/>
    </div>
</template>

<script>
export default {
    name:'Player',
    data(){
    return  {
        detail:{ },
        profile:' ',
        stats:' ',
        };
    },
    mounted(){
        this.detail = this.getPlayer(this.$route.params.uid);
         this.profile = '/Player/'+ this.$route.params.uid +'/profile';
          this.stats = '/Player/'+ this.$route.params.uid+'/stats';
    },
    beforeRouteUpdate(to,from,next){
        this.detail=this.getPlayer(to.params.uid);
        this.profile='/player/'+ to.params.uid +'/profile';
        this.stats='/Player/'+ to.params.uid +'/stats';
        next();
    },
    methods:{
        getPlayer(uid){
            switch (uid.toString()){
                case '1':
                return {uid: 1, name:'库里',point:26};
                case '2':
                return {uid: 2, name:'哈登',point:30};
                default:
                return {uid : -1};
            }
        }
    }
}
</script>

