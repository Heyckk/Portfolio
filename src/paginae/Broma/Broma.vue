
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
    
 <img 
    src="/imagines/fondobroma.avif"
    alt=""
    class="w-screen h-screen object-cover"
    />

</template>