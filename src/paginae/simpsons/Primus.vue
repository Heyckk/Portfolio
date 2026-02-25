<script lang= "ts"  setup>
import LogoSimpsons from '@/components/LogoSimpsons.vue';
import { Button} from '@/components/ui/button'

</script>


<template>
    
    <div class="bg-[#ffde00] min-h-screen text-center p-4 flex flex-col items-center justify-center">

        <LogoSimpsons estilus="w-[24rem] sm:w-[35rem]" />


        <h1 class="text-xl my-1 font-medium">
            Discover some of the most amazing Quotes from The Simpsons
        </h1>

        <div>
            <strong>This is an unofficial app (even though it looks so cool!)</strong>
        </div>

        <div className="mt-8 flex gap-5">
            <Button variant="tertiarius" size="elongatis">
                <RouterLink to="/">Exit</RouterLink>
            </Button>
            <Button variant="tertiarius" size="elongatis">
                <RouterLink to="/simpsons/about">Enter</RouterLink>
            </Button>
        </div>

<div class="flex gap-12">

    <img class="object-contain hidden md:block" src="/imagines/simpsons/bart.png" alt="" width="200px">
     <img class="object-contain mt-20 hidden md:block" src="/imagines/simpsons/homer.png" alt="" width="195px">
      <img class="object-contain mt-12 md:mt-0" src="/imagines/simpsons/moe.png" alt="" width="220px">

</div>


    </div>


</template>