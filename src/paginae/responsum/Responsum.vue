<script setup>
    import { Divide } from 'lucide-vue-next';

    import { House } from 'lucide-vue-next'
    import { ref } from 'vue'

    const videreMenu = ref(false)

    const galeriaActiva = ref(null)
    const indice = ref(0)

    const galerias = {
        ilustracion1:{
         imagenes:[
            '/imagines/Ilustraciones/ilustracion1.jpeg',
            '/imagines/Ilustraciones/ilustracion12.jpeg',
        ],
        texto:"Ilustración realizada con técnica digital en procreate, se trata de Guts, protagonista de Berserk, en forma de gato",
    },

        ilustracion2:{
        imagenes:[
            '/imagines/Ilustraciones/ilustracion2.jpeg',
            '/imagines/Ilustraciones/portadailustracion2.jpeg',
         
        ],
        texto:"Ilustración realizada como encargo de la Delegación FBBAA de su mascota, Coco"
    },

         ilustracion3:{
        imagenes:[
            '/imagines/Ilustraciones/ilustracion3.jpeg',
        ],
         texto:"Ilustración de Robe Iniesta, cantante y poeta, con una frase de una de sus canciones 'La cancion más triste del mundo'"
    },

        ilustracion4:{
        imagenes:[
            '/imagines/Ilustraciones/ilustracion4.jpg',
            '/imagines/Ilustraciones/portadailustracion4.jpg',
        ],
         texto:"Collage para la asigantura de Ilustración, de un cartel sobre música mediterránea"
    },

        ilustracion5: {
        imagenes:[
           '/imagines/Ilustraciones/portadailustracion5.png', 
           '/imagines/Ilustraciones/ilustracion5.png',
           '/imagines/Ilustraciones/ilustracion52.png',
           '/imagines/Ilustraciones/ilustracion53.png',
           '/imagines/Ilustraciones/ilustracion54.png',
        ],
         texto:"Colección de ilustraciones para el montaje del libro 'La vuelta al mundo en 80 días' para la asignatura de Ilustración"
    },
        ilustracion6:{
        imagenes:[
           '/imagines/Ilustraciones/portadailustracion6.png',
           '/imagines/Ilustraciones/ilustracion6.png',
           '/imagines/Ilustraciones/ilustracion62.jpg',
           ],
        texto:"Viñetas de cómic para la asignatura de Ilustración"
    },
         ilustracion7: {
        imagenes:[
           '/imagines/Ilustraciones/portadailustracion7.jpeg',
           '/imagines/Ilustraciones/ilustracion7.jpeg',
           '/imagines/Ilustraciones/ilustracion72.jpeg',
           '/imagines/Ilustraciones/ilustracion73.jpeg',
           '/imagines/Ilustraciones/ilustracion74.jpeg',
           '/imagines/Ilustraciones/ilustracion75.jpeg',
        ],
        texto:"Ilustraciones realizadas para el evento de San Valentín organizado por la Delegacion de FBBAA"
    },
         
        }

    function abrirGaleria(nombre) {
    galeriaActiva.value = nombre
    indice.value = 0
    }

    function cerrarGaleria() {
    galeriaActiva.value = null
    }

    function siguiente() {
    indice.value =
        (indice.value + 1) % galerias[galeriaActiva.value].imagenes.length
    }
    

    function anterior() {
    indice.value =
        (indice.value - 1 + galerias[galeriaActiva.value].imagenes.length) %
        galerias[galeriaActiva.value].imagenes.length
    }
</script>

<template>

    <RouterLink 
        to="/" 
        class="fixed top-4 left-4 bg-indigo-900 text-white p-3 rounded-full shadow-lg hover:scale-110 transition duration-300 z-50"
        >
        <House class="w-6 h-6" />
    </RouterLink>


<div class="relative w-full bg-indigo-900 py-20">


    <div class="absolute inset-0 flex justify-center mt-19">
      <h1 class="titulo-ilustracion text-[#ddddeb] text-5xl md:text-7xl font-bold text-center">
        ILUSTRACIONES Y TRABAJOS
      </h1>
    </div>


  

    <div class="z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 mt-40 justify-items-center">
       <Button 
       @click="abrirGaleria('ilustracion1')"
                class="bg-transparent hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <img 
                src="/imagines/Ilustraciones/ilustracion1.jpeg" 
                alt="Carpeta"
                class="w-70 h-70 object-cover  grayscale hover:grayscale-0 
                        transition duration-500 
                        cursor-pointer"
            >
          
            
        </Button>

        <Button 
         @click="abrirGaleria('ilustracion2')"
                class="flex flex-col items-center bg-transparent hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <img 
                src="/imagines/Ilustraciones/portadailustracion2.jpeg" 
                alt="Carpeta"
                class="w-70 h-70 object-cover   grayscale hover:grayscale-0 
                        transition duration-500 
                        cursor-pointer"
            >
        </Button>

         <Button 
          @click="abrirGaleria('ilustracion3')"
                class="flex flex-col items-center bg-transparent hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <img 
                src="/imagines/Ilustraciones/ilustracion3.jpeg" 
                alt="Carpeta"
                class="w-70 h-70 object-cover   grayscale hover:grayscale-0 
                        transition duration-500"
            >
           
        </Button>
        
         <Button 
          @click="abrirGaleria('ilustracion4')"
                class=" flex flex-col items-center bg-transparent hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <img 
                src="/imagines/Ilustraciones/portadailustracion4.jpg" 
                alt="Carpeta"
                class="w-70 h-70 object-cover   grayscale hover:grayscale-0 
                        transition duration-500 
                        cursor-pointer"
            >
        </Button>

         <Button 
          @click="abrirGaleria('ilustracion5')"
                class=" flex flex-col items-center bg-transparent hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <img 
                src="/imagines/Ilustraciones/portadailustracion5.png" 
                alt="Carpeta"
                class="w-70 h-70 object-cover   grayscale hover:grayscale-0 
                        transition duration-500 
                        cursor-pointer"
            >
        </Button>

        <Button 
         @click="abrirGaleria('ilustracion6')"
                class=" flex flex-col items-center bg-transparent hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <img 
                src="/imagines/Ilustraciones/portadailustracion6.png" 
                alt="Carpeta"
                class="w-70 h-70 object-cover   grayscale hover:grayscale-0 
                        transition duration-500 
                        cursor-pointer"
            >
        </Button>

        <Button 
         @click="abrirGaleria('ilustracion7')"
                class="flex flex-col items-center bg-transparent hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <img 
                src="/imagines/Ilustraciones/portadailustracion7.jpeg" 
                alt="Carpeta"
                class="w-70 h-70 object-cover   grayscale hover:grayscale-0 
                        transition duration-500 
                        cursor-pointer"
            >
        </Button>

    </div>

    <div
        v-if="galeriaActiva"
        class="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-50 p-6"
        >
        
            <button
                @click="cerrarGaleria"
                class="absolute top-5 right-5 text-white text-4xl"
            >
                ✕
            </button>

            <button
                @click="anterior"
                class="absolute left-10 text-white text-5xl"
            >
                ‹
            </button>

             <div class="max-w-xl text-center text-white mb-6 px-6 text-lg">
             {{ galerias[galeriaActiva].texto }}
        </div>

            <img
                :src="galerias[galeriaActiva].imagenes[indice]"
                class="max-h-[80vh] rounded-xl shadow-2xl"
            >

            <button
                @click="siguiente"
                class="absolute right-10 text-white text-5xl"
            >
                ›
            </button>
       
    </div>
</div>
</template>




<style scoped>
.titulo-ilustracion {
  font-family: 'Lacquer';

}


</style>

