<script setup>

 import { House } from 'lucide-vue-next'


</script>



<template>
    <RouterLink 
        to="/" 
        class="fixed top-4 left-4 bg-indigo-900 text-white p-3 rounded-full shadow-lg hover:scale-110 transition duration-300 z-50"
        >
        <House class="w-6 h-6" />
    </RouterLink>

 <p class="titulo-porfolio text-5xl md:text-7xl text-indigo-900 font-bold px-8 md:px-12 pt-20 transition-all z-20 relative">
    SOBRE MÍ
    </p>

     <p class="text-1xl w-1/2 md:text-1xl text-indigo-900 font-bold px-8 md:px-12 pt-20 transition-all z-20 relative">
    Hola! Soy Elena, una estudiante de 19 años que intenta crear cosas, dejar huella con sus trabajos y diseños en este gran mundo. Me encuentro en el segundo años de Diseño y Tecnologías Creativas en la UPV donde me formo como diseñadora gráfica, ilustradora, directora creativa y muchas más cosas. Mi estilo es muy flexible y puede adaptarse a lo que el cliente pida, aunque me caracterizo por colores vivos y alegres. He participado fuera del ámbito universitario en proyectos muy diversos, incluyendo diseño de logos, cortometrajes y fotografía, encargos de ilustraciones y portadas de libros. Creo que la esencia e historia detrás de cada proyecto es única y merece ser vista.

Te invito a tomarte un momento para explorar mi porfolio, donde podrás encontrar una selección de algunos de mis trabajos. Si estás interesad@ en trabajar juntos o tienes alguna pregunta, me encantaría escucharte. Gracias por visitar mi porfolio!

    </p>


 <div class="flex justify-end pr-10 lg:pr-20 flex-col items-end gap-9 mt-70 lg:mt-15">

    <img
      src="/imagines/Yo/yo1.png"
      class="rounded-2xl flex justify-center min-w-min h-[300px] lg:h-[400px]"
    />

    <div class="flex gap-2">

      <img
        src="/imagines/Yo/yo2.png"
        class=" rounded-xl  translate-y-6 h-[200px] lg:h-[300px]"
      />

      <img
        src="/imagines/Yo/yo3.png"
        class="rounded-xl -translate-y-4 h-[200px] lg:h-[300px]"
      />

    </div>

  </div>



    


</template>

<style scoped>
.titulo-porfolio {
  font-family: 'Lacquer';

}


</style>