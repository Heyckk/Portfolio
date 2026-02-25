<script lang="ts" setup>
import {House, Phone, Mail, MapPin, Loader2, X, Instagram, Linkedin, MessageCircle, Menu, MenuIcon, MenuSquare } from 'lucide-vue-next'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

import { Calendar } from '@/components/ui/calendar'
import type { DateValue } from 'reka-ui'
import { onMounted, onUnmounted, ref } from 'vue'
import { Toggle } from '@/components/ui/toggle'



const scrollToSection = (sectionId: string) => {
 if (sectionId === '#') {
    window.scrollTo ({ top: 0 , behavior: 'smooth'})
 }

 const element= document.querySelector <HTMLElement>(sectionId)

    if (element){
        element.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }
}

const photos = ["justice", "arkham", "superman", "varios", "villana", "villano", "grupo", "robin", "anne", "joker", "resplandor", "cat", "gafas", "league", "fondoVerde"]; 

const dies = ref<DateValue>()

    const videreMenu = ref<boolean>(true)



        const handleResize = () => {
            if(window.innerWidth <= 640){
                videreMenu.value = false;
            }else {
                videreMenu.value= true
            }
        }

        onMounted (() => {
            handleResize()
            window.addEventListener('resize', handleResize)
        })

        onUnmounted(() => {
            window.removeEventListener ('resize', handleResize)
        })

</script>


<template>
 <nav class="batman">

 <Toggle
 class="fixed top-2 right-4 bg-slate-500"
 @click="videreMenu= !videreMenu"
 >
  <MenuSquare />

 </Toggle>


    <nav v-if="videreMenu" class="extra-nav flex flex-col sm:flex-row justify-between px-3">
        <RouterLink to="/">
             <House class="icon-home"/>
        </RouterLink>   
        
    <NavigationMenu>
        <NavigationMenuList class="flex flex-col sm:flex-row ">

        <NavigationMenuItem>
            <a href="#" @click.prevent="scrollToSection('#')">
                <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-[#6A5ACD] hover:text-white transition-all']">
                Portada
                </NavigationMenuLink>
            </a>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <a href="#" @click.prevent="scrollToSection('#vehiculis')">
                <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-[#6A5ACD] hover:text-white transition-all']">
                Vehículos
                </NavigationMenuLink>
            </a>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <a href="#" @click.prevent="scrollToSection('#videre')">
                <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-[#6A5ACD] hover:text-white transition-all']">
                Imágenes
                </NavigationMenuLink>
        
            </a>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <a href="#" @click.prevent="scrollToSection('#contactus')">
                <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-[#6A5ACD] hover:text-white transition-all']">
                Contacto
                </NavigationMenuLink>
            </a>
        </NavigationMenuItem>

        </NavigationMenuList>
    </NavigationMenu>

 </nav>



<header class="titulus">
    <h1>Batman</h1>
    <div id="titulus-batman" class="titulus-img"></div>
    <p>Él puede tomar la decisión que nadie más puede, la decisión correcta</p>
</header>

<section id="vehiculis">
  <div class="vehiculis-arca">
    <div class="item unus">
        <div class="notitia">
          <h2>Avión</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vulputate elit eget fermentum. Ut laoreet ante lacus. Quisque ut tincidunt metus. Curabitur congue, arcu nec tempus sodales, neque sem ultrices mauris, eu tincidunt nibh nibh eu massa. Aenean rhoncus quis nibh ac facilisis.</p>
          <small>Fabricado en 2005</small>
        </div>
        <img src="/imagines/batman/avion.jpg"/>
      </div>

      <div class="item duo">
        <div class="notitia">
          <h2>Moto</h2>
          <p>Nulla aliquip cupidatat voluptate veniam nostrud aliquip sit enim officia. Sit eu pariatur officia qui dolor adipisicing cupidatat. Sit consectetur et eu ut esse laboris nulla.</p>
          <small>Fabricado en 2006</small>
        </div>
        <img src="/imagines/batman/moto.jpg"/>
      </div>
      
      <div class="item tribus">
        <div class="notitia">
          <h2>Coche</h2>
          <p>Irure adipisicing est minim eu ad dolor. Eu ea commodo pariatur ut occaecat in cupidatat reprehenderit ut laborum duis. Sunt minim ex fugiat reprehenderit. Lorem consectetur reprehenderit commodo non</p>
          <small>Fabricado en 2007</small>
        </div>
        <img src="/imagines/batman/car.jpg"/>
      </div>
    </div>

    <div class="vehiculis-titulus">
      <h1>Vehículos de Batman</h1>
    </div>
 </section>

    <section id="videre" class=" bg-gray-900 w-full flex justify-center items-center min-h-[60vh] lg:min-h-[95vh]">

        <Carousel
          class="w-full max-w-md md:max-w-2xl lg:max-w-4xl bg-gray-900"
          :opts="{
            loop:true,
            dragFree: true
          }"
                    :plugins="[Autoplay({
                    delay: 2000,
                    })]"
          >
            <CarouselContent>
            <CarouselItem v-for="i in photos.length" :key="i">
                <div class="p-1">
                <Card class="bg-gray-900 border-none">
                    <CardContent class="bg-gray-900 flex aspect-6/4 items-center justify-center p-6">
                    
                    <img 
                        :src="`/imagines/batman/${photos[i - 1]}.jpg`" 
                        alt="`Image ${i} de Batman"
                        class="w-full h-full object-cover"
                    >
            

                    </CardContent>
                </Card>
                </div>
            </CarouselItem>
            </CarouselContent>

            <CarouselPrevious class="bg-gray-900 text-white hidden md:flex justify-center items-center" />
            <CarouselNext class="bg-gray-900 text-white hidden md:flex justify-center items-center" />

        </Carousel>

    </section>

        <section id="contactus" class="w-full py-12 bg-gray-100">

    <div class="container mx-auto max-w-5xl px-4">

        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Contacta con Batman</h2>
            
        <div class="flex flex-col lg:flex-row gap-8 items-center">

                <!-- Mapa de Google Maps -->
        <div class="hidden lg:block w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <div class="aspect-square">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.362755252682!2d-0.3462209825561562!3d39.48372270000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60488259073375%3A0xfb410ba707ca33c9!2sUPV%20-%20Facultad%20de%20Bellas%20Artes%20BBAA!5e0!3m2!1ses!2ses!4v1771977341683!5m2!1ses!2ses"
                width="600" 
                height="450" 
                class="w-full h-full rounded-lg"
                :style="{ border: 0 }" 
                allowfullscreen 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                
            ></ iframe>

            </div>
        </div>

                <!-- Formulario -->
        <div class="w-full max-w-md mx-auto lg:max-w-none lg:w-1/2 ">
            <form  class="space-y-6 bg-white p-8 rounded-lg shadow-lg aspect-square">
            <div class="space-y-2">
                  <Label for="nomen">Nombre</Label>
                <Input id="nomen" required />  
             </div>    

           
                    
            <div class="space-y-2">
                <Label for="cognomen">Apellidos</Label>
                <Input id="cognomen" required />
              </div>   

           

            <div class="space-y-2">

               <Select required >
                        <SelectTrigger class=" border-gray-200 bg-white text-gray-900">
                        <SelectValue placeholder="Selecciona una misión" />
                        </SelectTrigger>
                        <SelectContent class="bg-white">

                        <SelectItem value="rescatare">
                            Rescate de rehenes
                        </SelectItem>
                        <SelectItem value="investigare">
                            Investigación criminal
                        </SelectItem>
                        <SelectItem value="persequi">
                            Persecución de villanos
                        </SelectItem>
                        <SelectItem value="defendere">
                            Defensa de Gotham
                        </SelectItem>
                        
                        </SelectContent>
                    </Select>

            </div>

            <div class="space-y-2">

                <Label> Fecha de la misión</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline">
                                <span v-if="dies"> 
                                  {{ dies.day }}/{{ dies.month }}/{{ dies.year }}
                                </span>
                                <span v-else> 
                                    Selecciona una fecha
                                </span>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <Calendar v-model="dies" />
                        </PopoverContent>
                    </Popover>

            </div>

          <Button
          type="submit"
          class="w-full bg-[rgb(106,90,205)] hover:bg-[rgb(88,75,171)] text-white text-md mt-4"
          >
            Enviar solicitud
          </Button>
                
            </form>
        </div>
        </div>
    </div>
</section>

        <footer class="w-full bg-gray-900 text-gray-300 py-12">
        <div class="flex flex-col md:flex-row md:justify-around gap-8 max-w-3xl mx-auto">

            <div class="space-y-4 text-center md:text-left">

            <h3 class="text-xl font-bold text-white">Información de Contacto</h3>
                    
                <div class="space-y-2">
                <p class="flex items-center gap-2 justify-center md:justify-start">

                    <Phone class="w-5 h-5"/>
                    +1 (555) 123-4567

                </p>
                <p class="flex items-center gap-2 justify-center md:justify-start">
 
                    <Mail class="w-5 h-5"/>
                    batman@wayneenterprises.com

                </p>
                <p class="flex items-center gap-2 justify-center md:justify-start">

                    <MapPin class="w-5 h-5"/>
                    Wayne Manor, Gotham City

                </p>
                </div>
            </div>

            <!-- Redes sociales -->
            <div class="space-y-4 text-center md:text-left text-gray-400">
                <h3 class="text-xl font-bold text-white">Síguenos</h3>
                <div class="flex gap-8 justify-center">
                
                    <X class="w-10 h-10 hover:text-white"/>
                    <Instagram class="w-10 h-10 hover:text-white"/>
                    <Linkedin class="w-10 h-10 hover:text-white"/>
                    <MessageCircle class="w-10 h-10 hover:text-white"/>
             
                    
                </div>
            </div>
        </div>
        </footer>



    </nav>


</template>

<style scoped>
.batman{
     font-family: Arial, Helvetica, sans-serif;
}

.icon-home{
    color: slateblue;
    width: 3rem;
    height: 3rem;
}

.icon-home:hover{
    color: white;
    background-color: slateblue;
   
}

.extra-nav {
  background-color: white;
  opacity: 0.7;
  box-shadow: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  width: 11rem;
  border-radius: 0 0 1rem 0;
  z-index: 1;
}

@media (min-width: 640px){
  .extra-nav {
    width: 100%;
    border-radius: 0;
    opacity: 1;
    left: 0;
  }
}

.titulus-img {
  background-size: 100% 100%;
  background-position: center center;
  background-image: url("../imagines/batman/batman.jpg");
  aspect-ratio: 8/7;
}

.titulus-img:hover {
  background-size: 115% 115%;
}

.titulus > h1 {
  position: absolute;
  top: calc(100vw * 0.5);
  width: 100%;
  text-align: center;
  font-size: 5rem; 
  color: white;
  pointer-events:none; 
  font-family:batman ;
}

.titulus > p {
  position: absolute;
  top: calc(100vw * 0.25);
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: white;
  pointer-events:none;
  display: none;
  font-family:batman ;
}


@media (min-width: 768px) {
    .titulus > p {
        display: block;
    }
}

#vehiculis {
  max-width: 510px;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
}

 .vehiculis-arca{
order: 1;
display: flex;
flex-direction: column;
 }


.vehiculis-titulus {
  height: 5.5rem; /* 88px */
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  padding: 1.5rem 0;
  height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.item > img{
    width: 450px;
}

.unus {
  background-color: rgba(220, 220, 220, 0.2) ; 
  order: 2;
}

.duo {
  background-color: rgba(220, 220, 220, 0.8);
}

.tribus {
  background-color: rgba(220, 220, 220, 0.8);
  order: 3;
}

.notitia {
    width: 90%;
    display:flex;
    flex-direction: column;
    align-items: center;
}
 
.notitia > small {
  font-weight: bold;
  padding: 1rem;
}
 
.notitia > h2 {
 font-size: 1.7rem; 
 font-weight: 600;
 color: rgba(0, 0, 0, 0.7);
 padding-bottom: 1rem;
} 

@media (min-width: 640px){
    #vehiculis {
         max-width: 576px;
    }
}

@media (min-width: 768px){
    #vehiculis {
         max-width: 900px;
    }

.item {
    flex-direction: row;
    height: 320px;
    }

    .notitia {
        width: 40%;
    }

    .unus > img {
order: -1;
    }
}

@media (min-width: 1024px){
 #vehiculis {
         max-width: 1280px;
    }
    .item {
        flex-direction: column;
        height: 560px;
    }
    .vehiculis-arca{
        flex-direction: row;
    }

    .notitia{
        width: 90%;
    }
}
</style>
