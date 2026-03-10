import{ Button} from '@/components/ui/button'


<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const offsetX = ref(0)
const offsetY = ref(0)

const handleMouseMove = (e: MouseEvent) => {
  const { innerWidth, innerHeight } = window

  const x = e.clientX
  const y = e.clientY

  // Centro de la pantalla
  const centerX = innerWidth / 2
  const centerY = innerHeight / 2

  // Movimiento invertido y suavizado
  offsetX.value = (centerX - x) * 0.02
  offsetY.value = (centerY - y) * 0.02
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>


<template>
<div class="bg-[#f5f5f6] h-screen text-white font-sans text-center w-screen flex flex-col justify-center items-center gap-12 fixed overflow-hidden"> 
 
    <img 
    src="/imagines/Fondome.gif"
    alt=""
    class="absolute top-1/2 left-1/2 display-center w-160 h-160 object-cover pointer-events-none transition-transform duration-100"
    :style="{ transform: ` translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)` }"
    />

    

    <p class="titulo-porfolio justify-start -top-80 text-lg text-[#000042] font-bold md:text-2xl transition-all z-20 relative">
    Porfolio
    </p>

    <div class="z-10">
       <Button 
                class="absolute top-3 right-90 flex flex-col items-center bg-transparent hover:bg-blue-500/20 hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <RouterLink to="/indecision" class="flex flex-col items-center">
            <img 
                src="/imagines/Carpeti.png" 
                alt="Carpeta"
                class="w-20 h-20 object-contain"
            >
            <span class="text-indigo-900 font-bold text-bold leading-none ">Sí o No</span>
            </RouterLink>
        </Button>

        <Button 
                class="absolute top-60 right-32 flex flex-col items-center bg-transparent hover:bg-blue-500/20 hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <RouterLink to="/batman" class="flex flex-col items-center">
            <img 
                src="/imagines/Carpeti.png" 
                alt="Carpeta"
                class="w-20 h-20 object-contain"
            >
             <span class="text-indigo-900 font-bold leading-none">Batman</span>
            </RouterLink>
        </Button>

       <Button 
                 class="absolute top-160 right-5 flex flex-col items-center bg-transparent hover:bg-blue-500/20 hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <RouterLink to="/simpsons" class="flex flex-col items-center">
            <img 
                src="/imagines/Carpeti.png" 
                alt="Carpeta"
                class="w-20 h-20 object-contain"
            >
            <span class="text-indigo-900 font-bold leading-none">Simpsons</span>
            </RouterLink>
        </Button>

        <Button 
                class="absolute top-50 left-100 flex flex-col items-center bg-transparent hover:bg-blue-500/20 hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <RouterLink to="/Carpeta4" class="flex flex-col items-center">
            <img 
                src="/imagines/Carpeti.png" 
                alt="Carpeta"
                class="w-20 h-20 object-contain"
            >
            <span class="text-indigo-900 font-bold leading-none">Sobre mí</span>
            </RouterLink>
        </Button>

        <Button 
                class="absolute bottom-70 right-120 flex flex-col items-center bg-transparent hover:bg-blue-500/20 hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <RouterLink to="/Carpeta5" class="flex flex-col items-center">
                <img 
                    src="/imagines/Camara.png" 
                    alt="Carpeta"
                    class="w-20 h-20 object-contain"
                >
                <span class="mt-1 text-indigo-900 font-bold leading-none">Fotografía</span>
            </RouterLink>
        </Button>

        <Button 
                class="absolute top-10 left-40 flex flex-col items-center bg-transparent hover:bg-blue-500/20 hover:scale-105 transition-all duration-200 p-2 rounded-xl -translate-x-1/2"
            >
            <RouterLink to="/Carpeta6" class="flex flex-col items-center">
                <img 
                    src="/imagines/Carpeti.png" 
                    alt="Carpeta"
                    class="w-20 h-20 object-contain"
                >
                <span class="mt-1 text-indigo-900 font-bold leading-none">Carpeta 6</span>
            </RouterLink>
        </Button>

          <Button 
                class="absolute bottom-10 left-20 flex flex-col items-center bg-transparent hover:bg-blue-500/20 hover:scale-105 transition-all duration-200 p-2 rounded-xl -translate-x-1/2"
            >
            <RouterLink to="/Broma" class="flex flex-col items-center">
                <img 
                    src="/imagines/Carpeti.png" 
                    alt="Broma"
                    class="w-20 h-20 object-contain"
                >
                <span class="mt-1 text-indigo-900 font-bold leading-none">Mi experiencia</span>
            </RouterLink>
        </Button>

        

       
        

    </div>
 </div>
<div
  class="fixed bottom-50 left-55 w-72 z-50">
        <iframe 
            style="border-radius:12px" 
            src="https://open.spotify.com/embed/playlist/640MiXX1z3Aa5W2lXn6i5C?si=7454acc34c7b4695"
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowfullscreen
        ></iframe>
    </div>

</template>

<style scoped>
.titulo-porfolio {
  font-family: 'Lacquer';

}


</style>