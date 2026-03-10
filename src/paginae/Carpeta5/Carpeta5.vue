<script setup>
    import { Divide } from 'lucide-vue-next';

    import { House } from 'lucide-vue-next'
    import { ref } from 'vue'

    const videreMenu = ref(false)

    const galeriaActiva = ref(null)
    const indice = ref(0)

    const galerias = {
        boda1: [
            '/imagines/Fotografia/boda1.JPG',
            '/imagines/Fotografia/boda2.JPG',
            '/imagines/Fotografia/boda3.JPG',
            '/imagines/Fotografia/boda4.JPG'
        ],
        gr5: [
            '/imagines/Fotografia/gr1.JPG',
            '/imagines/Fotografia/gr2.JPG',
            '/imagines/Fotografia/gr3.JPG',
            '/imagines/Fotografia/gr4.JPG',
            '/imagines/Fotografia/gr5.JPG'
        ],
         irene3: [
            '/imagines/Fotografia/irene1.JPG',
            '/imagines/Fotografia/irene2.JPG',
            '/imagines/Fotografia/irene3.JPG',
            '/imagines/Fotografia/irene4.JPG'
        ],
        playa1: [
            '/imagines/Fotografia/playa1.JPG',
            '/imagines/Fotografia/playa2.JPG',
            '/imagines/Fotografia/playa3.JPG',
            '/imagines/Fotografia/playa4.JPG',
            '/imagines/Fotografia/playa5.JPG',
            '/imagines/Fotografia/playa6.JPG',
            '/imagines/Fotografia/playa7.JPG'
        ],
        jardin6: [
            '/imagines/Fotografia/jardin1.JPG',
            '/imagines/Fotografia/jardin2.JPG',
            '/imagines/Fotografia/jardin3.JPG',
            '/imagines/Fotografia/jardin4.JPG',
            '/imagines/Fotografia/jardin5.JPG',
            '/imagines/Fotografia/jardin6.JPG',
            '/imagines/Fotografia/jardin7.JPG',
            '/imagines/Fotografia/jardin8.JPG',
            '/imagines/Fotografia/jardin9.JPG',
            '/imagines/Fotografia/jardin10.JPG',
        ],
         laroles3: [
            '/imagines/Fotografia/laroles1.JPG',
            '/imagines/Fotografia/laroles2.JPG',
            '/imagines/Fotografia/laroles3.JPG',
            '/imagines/Fotografia/laroles4.JPG',
            '/imagines/Fotografia/laroles5.JPG',
            '/imagines/Fotografia/laroles6.JPG',
            '/imagines/Fotografia/laroles7.JPG',
            '/imagines/Fotografia/laroles8.JPG',
            '/imagines/Fotografia/laroles9.JPG'
           ],
         nav1: [
            '/imagines/Fotografia/nav1.jpg',
            '/imagines/Fotografia/nav2.JPG',
            '/imagines/Fotografia/nav3.JPG',
            '/imagines/Fotografia/nav4.JPG'
        ],
          retrato4: [
            '/imagines/Fotografia/retrato1.JPG',
            '/imagines/Fotografia/retrato2.JPG',
            '/imagines/Fotografia/retrato3.JPG',
            '/imagines/Fotografia/retrato4.JPG',
            '/imagines/Fotografia/retrato5.JPG',
            '/imagines/Fotografia/retrato6.JPG'
        ],
        trans3: [
            '/imagines/Fotografia/trans1.JPG',
            '/imagines/Fotografia/trans2.JPG',
            '/imagines/Fotografia/trans3.JPG',
            '/imagines/Fotografia/trans4.JPG',
            '/imagines/Fotografia/trans5.JPG',
            '/imagines/Fotografia/trans6.JPG',
            '/imagines/Fotografia/trans7.JPG',
            '/imagines/Fotografia/trans8.JPG'
        ],
        yeso1: [
            '/imagines/Fotografia/yeso1.JPG',
            '/imagines/Fotografia/yeso2.JPG',
            '/imagines/Fotografia/yeso3.JPG',
            '/imagines/Fotografia/yeso4.JPG'
        ],
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
        (indice.value + 1) % galerias[galeriaActiva.value].length
    }
    

    function anterior() {
    indice.value =
        (indice.value - 1 + galerias[galeriaActiva.value].length) %
        galerias[galeriaActiva.value].length
    }
</script>

<template>

    <RouterLink 
        to="/" 
        class="fixed top-4 left-4 bg-indigo-900 text-white p-3 rounded-full shadow-lg hover:scale-110 transition duration-300 z-50"
        >
        <House class="w-6 h-6" />
    </RouterLink>


  <div class="relative w-full h-screen bg-[#f5f5f6] overflow-hidden">


    <div class="absolute inset-0 flex items-center justify-center">
      <h1 class="titulo-fotografia text-indigo-900 text-6xl md:text-8xl font-bold text-center">
        fotografías
      </h1>
    </div>


    <div
      v-for="(imagen, index) in imagenes"
      :key="index"
      class="absolute"
      :class="imagen.posicion"
    >
      <a :href="imagen.src" target="_blank">
        <img
          :src="imagen.src"
          class="w-32 md:w-40 lg:w-48 rounded-xl shadow-2xl hover:scale-110 transition duration-500 cursor-pointer"
        />
      </a>
    </div>

  </div>

    <div class="z-10">
       <Button 
       @click="abrirGaleria('boda1')"
                class="absolute top-5 right-155 bg-transparent hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <img 
                src="/imagines/Fotografia/boda1.JPG" 
                alt="Carpeta"
                class="w-70 h-70 object-contain  grayscale hover:grayscale-0 
                        transition duration-500 
                        cursor-pointer"
            >
            <span class="text-indigo-900 font-bold text-bold leading-none -mt-10 text-left">Bodas</span>
            
        </Button>

        <Button 
         @click="abrirGaleria('gr5')"
                class="absolute -top-10 left-70 flex flex-col items-center bg-transparent hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <img 
                src="/imagines/Fotografia/gr5.JPG" 
                alt="Carpeta"
                class="w-70 h-70 object-contain  grayscale hover:grayscale-0 
                        transition duration-500 
                        cursor-pointer"
            >
            <span class="text-indigo-900 font-bold text-bold leading-none -mt-10">Granada</span>
        </Button>

         <Button 
          @click="abrirGaleria('irene3')"
                class="absolute top-30 left-5 flex flex-col items-center bg-transparent hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <img 
                src="/imagines/Fotografia/irene3.JPG" 
                alt="Carpeta"
                class="w-70 h-70 object-contain  grayscale hover:grayscale-0 
                        transition duration-500 
                        cursor-pointer"
            >
            <span class="text-indigo-900 font-bold text-bold leading-none mt-1">Referencias de retratos</span>
           
        </Button>
        
         <Button 
          @click="abrirGaleria('jardin6')"
                class="absolute bottom-10 left-3 flex flex-col items-center bg-transparent hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <img 
                src="/imagines/Fotografia/jardin6.JPG" 
                alt="Carpeta"
                class="w-70 h-70 object-contain  grayscale hover:grayscale-0 
                        transition duration-500 
                        cursor-pointer"
            >
            <span class="text-indigo-900 font-bold text-bold leading-none -mt-10">Naturaleza</span>
        </Button>

         <Button 
          @click="abrirGaleria('laroles3')"
                class="absolute bottom-2 left-78 flex flex-col items-center bg-transparent hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <img 
                src="/imagines/Fotografia/laroles3.JPG" 
                alt="Carpeta"
                class="w-70 h-70 object-contain  grayscale hover:grayscale-0 
                        transition duration-500 
                        cursor-pointer"
            >
            <span class="text-indigo-900 font-bold text-bold leading-none mt-1">Pueblos</span>
        </Button>

        <Button 
         @click="abrirGaleria('nav1')"
                class="absolute bottom-58 right-20 flex flex-col items-center bg-transparent hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <img 
                src="/imagines/Fotografia/nav1.jpg" 
                alt="Carpeta"
                class="w-70 h-70 object-contain  grayscale hover:grayscale-0 
                        transition duration-500 
                        cursor-pointer"
            >
            <span class="text-indigo-900 font-bold text-bold leading-none -mt-10">Nocturno</span>
        </Button>

        <Button 
         @click="abrirGaleria('playa1')"
                class="absolute -top-5 right-6 flex flex-col items-center bg-transparent hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <img 
                src="/imagines/Fotografia/playa1.JPG" 
                alt="Carpeta"
                class="w-70 h-70 object-contain  grayscale hover:grayscale-0 
                        transition duration-500 
                        cursor-pointer"
            >
            <span class="text-indigo-900 font-bold text-bold leading-none -mt-10">Playas</span>
        </Button>

        
        <Button 
         @click="abrirGaleria('retrato4')"
                class="absolute top-7 right-76 flex flex-col items-center bg-transparent hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <img 
                src="/imagines/Fotografia/retrato4.JPG" 
                alt="Carpeta"
                class="w-70 h-70 object-contain  grayscale hover:grayscale-0 
                        transition duration-500 
                        cursor-pointer"
            >
            <span class="text-indigo-900 font-bold text-bold leading-none mt-1">Retratos</span>
        </Button>

        <Button 
         @click="abrirGaleria('trans3')"
                class="absolute bottom-6 right-70 flex flex-col items-center bg-transparent hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <img 
                src="/imagines/Fotografia/trans3.JPG" 
                alt="Carpeta"
                class="w-70 h-70 object-contain  grayscale hover:grayscale-0 
                        transition duration-500 
                        cursor-pointer"
            >
            <span class="text-indigo-900 font-bold text-bold leading-none -mt-10">Proyecto transversal</span>
        </Button>

        <Button 
         @click="abrirGaleria('yeso1')"
                class="absolute bottom-21 left-155 flex flex-col items-center bg-transparent hover:scale-105 transition-all duration-200 p-2 rounded-xl"
            >
            <img 
                src="/imagines/Fotografia/yeso1.JPG" 
                alt="Carpeta"
                class="w-70 h-70 object-contain  grayscale hover:grayscale-0 
                        transition duration-500 
                        cursor-pointer"
            >
            <span class="text-indigo-900 font-bold text-bold leading-none -mt-10">Montajes</span>
        </Button>


    </div>

    <div
        v-if="galeriaActiva"
        class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
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


            <img
                :src="galerias[galeriaActiva][indice]"
                class="max-h-[80vh] rounded-xl shadow-2xl"
            >


            <button
                @click="siguiente"
                class="absolute right-10 text-white text-5xl"
            >
                ›
            </button>

</div>
</template>




<style scoped>
.titulo-fotografia {
  font-family: 'Lacquer';

}


</style>

