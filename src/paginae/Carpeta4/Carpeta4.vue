<script setup>

 import { House, Instagram, Mail, Linkedin, InstagramIcon  } from 'lucide-vue-next'


</script>



<template>
    <RouterLink 
        to="/" 
        class="fixed top-4 left-4 bg-indigo-900 text-white p-3 rounded-full shadow-lg hover:scale-110 transition duration-300 z-50"
        >
        <House class="w-6 h-6" />
    </RouterLink>

<div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 md:px-12 mt-10">

   <div class="lg:w-2/3">

    <p class="titulo-porfolio text-5xl md:text-7xl text-indigo-900 font-bold px-8 md:px-12 pt-20 transition-all z-20 relative">
      SOBRE MÍ
    </p>

    <p class="text-1xl  md:text-1xl text-indigo-900 font-bold px-8 md:px-12 pt-20 transition-all z-20 relative">
      Hola! Soy Elena, una estudiante de 19 años que intenta crear cosas, dejar huella con sus trabajos y diseños en este gran mundo. Me encuentro en el segundo año de Diseño y Tecnologías Creativas en la UPV donde me formo como diseñadora gráfica, ilustradora, directora creativa y muchas más cosas. Mi estilo es muy flexible y puede adaptarse a lo que el cliente pida, aunque me caracterizo por colores vivos y alegres. He participado fuera del ámbito universitario en proyectos muy diversos, incluyendo diseño de logos, cortometrajes y fotografía, encargos de ilustraciones y portadas de libros. Creo que la esencia e historia detrás de cada proyecto es única y merece ser vista.

    </p>

    <p class="text-1xl  md:text-1xl text-indigo-900 font-bold px-8 md:px-12 pt-9 transition-all z-20 relative">
        Te invito a tomarte un momento para explorar mi porfolio, donde podrás encontrar una selección de algunos de mis trabajos. Si estás interesad@ en trabajar juntos o tienes alguna pregunta, me encantaría escucharte. Gracias por visitar mi porfolio!

    </p>

     <p class="titulo-porfolio text-3xl md:text-5xl text-indigo-900 font-bold px-8 md:px-12 pt-20 transition-all z-20 relative lg:">
      PROGRAMAS QUE UTILIZO
    </p>
   <div class="grid grid-cols-3 gap-3 mt-6 md:mt-10 px-25 place-items-center">
     <img
      src="/imagines/iconoai.png"
      class=" rounded-2xl flex rotate-2 h-[100px] lg:h-[100px]"
    />
    <img
      src="/imagines/iconoid.png"
      class="rounded-2xl flex -rotate-3 translate h-[90px] lg:h-[90px]"
    />
     <img
      src="/imagines/iconolr.png"
      class="rounded-2xl flex rotate-6 h-[100px] lg:h-[100px]"
    />
     <img
      src="/imagines/iconopr.png"
      class="rounded-2xl flex -rotate-5 h-[90px] lg:h-[100px]"
    />
     <img
      src="/imagines/iconoprocreate.png"
      class="rounded-2xl flex -rotate-5 h-[100px] lg:h-[100px]"
    />
     <img
      src="/imagines/iconops.png"
      class="rounded-2xl flex  h-[100px] lg:h-[100px]"
    />

    <div class="flex flex-col gap-4 px-8 md:px-12 mt-6 text-indigo-900 font-bold">
 <p class="titulo-porfolio text-3xl md:text-5xl text-indigo-900 font-bold px-8 md:px-12 pt-20 transition-all z-20 relative">
      CONTACTA CONMIGO
    </p>

  <a href="mailto:tucorreo@email.com" class="flex items-center gap-3 hover:underline">
     <Mail class="w-6 h-6 " /> elenaqueroutrilla2@gmail.com
  </a>


  <a href="https://instagram.com/tuusuario" target="_blank" class="flex items-center gap-3 hover:underline">
    <Instagram class="w-6 h-6"  /> @heyckk
  </a>

  <a href="https://linkedin.com/in/tuusuario" target="_blank" class="flex items-center gap-3 hover:underline lg:mb-16">
   <Linkedin class="w-6 h-6"  /> tuusuario
  </a>

</div>  
  
    </div> 
</div>

  <div class="flex flex-col items-end gap-9">

    <img
      src="/imagines/Yo/yo1.png"
      class="rounded-2xl flex  h-[300px] lg:h-[400px] lg:w-[700px]"
    />

    <div class="flex gap-2 lg:flex-col ">

      <img
        src="/imagines/Yo/yo2.png"
        class=" rounded-xl md:px- translate-y-6 h-[200px] lg:h-[300px]"
      />

      <img
        src="/imagines/Yo/yo3.png"
        class="rounded-xl translate-y-6 h-[200px] lg:w-[400px] lg:h-[500px] "
      />

    </div>

  </div>

</div>

    


</template>

<style scoped>
.titulo-porfolio {
  font-family: 'Lacquer';

}


</style>