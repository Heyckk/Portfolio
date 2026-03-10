import { createRouter, createWebHashHistory } from "vue-router";

import Primus from "../paginae/simpsons/Primus.vue";
import Responsum from "../paginae/responsum/Responsum.vue";
import Domus from "../paginae/domus/Domus.vue";
import Batman from "../paginae/batman/Batman.vue";
import Layout from "@/paginae/simpsons/Layout.vue";
import Circa from "@/paginae/simpsons/Circa.vue";
import Collectione from "@/paginae/simpsons/Collectione.vue";
import Character from "@/paginae/simpsons/Character.vue";
import Carpeta4 from "@/paginae/Carpeta4/Carpeta4.vue";
import Carpeta5 from "@/paginae/Carpeta5/Carpeta5.vue";
import Carpeta6 from "@/paginae/Carpeta6/Carpeta6.vue";
import Broma from "@/paginae/Broma/Broma.vue";




export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
routes: [
{
   path: '/',
   name: 'home',
   component: Domus
},
{
   path: '/batman',
   name: 'batman',
   component: Batman
},
{
   path: '/simpsons',
   children: [
      {
         path: '',
         name:'simpsons',
         component: Primus
      },
      {
         path:'about',
         component: Layout,
         children: [{
            path: '',
            name: 'simpsons-about',
            component: Circa
         }
         ]
      },
      {
         path: 'gallery',
          component: Layout,
          children: [
            {
               path: '',
               name: 'simpsons-characters',
               component: Collectione
            },
            {
               path: ':id',
               name: 'simpsons-detail',
               component: Character
            }
          ]
      }
   ]
 
},
{
   path: '/indecision',
   name: 'indecision',
   component: Responsum
},
{
   path: '/:pathMatch(.*)*',
   redirect: '/'
},
{
   path: '/Carpeta4',
   name: 'Carpeta 4',
   component: Carpeta4
},
{
   path: '/Carpeta5',
   name: 'Carpeta 5',
   component: Carpeta5
},
{
   path: '/Carpeta6',
   name: 'Carpeta 6',
   component: Carpeta6
},
{
   path: '/Broma',
   name: 'Broma',
   component: Broma
},
]
})
