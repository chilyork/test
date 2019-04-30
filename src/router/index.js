import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Player from '@/components/Player'
import PlayerProfile from '@/components/Player/Profile'
import PlayerStats from '@/components/Player/Stats'
import User from '@/components/User'
import About  from  '@/components/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'HelloWorld',
      component:HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About,
       alias:'/aboutme'
      },
 
   {
     path:'/Player',
     name:'Player',
     component: Player
   },
   {
    path: '/player/:uid',
    name: 'Player',
    component: Player,
    children: [
        {
            path: 'profile',
            component: PlayerProfile
        },
        {
            path: 'stats',
            component: PlayerStats
        },
       
    ]
},
{
  path:'/curry',
  redirect:'/Player/1'
},
{
  path:'/User/:uid/:nationality',
  name:'User',
  component:User,
  props:true
}
  ]
})
