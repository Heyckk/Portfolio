<script setup lang="ts">

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

interface Props {
    photos: string[]
    basePath: string
    autoPlayDelay?: number
    loop?: boolean
    dragFree?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    autoPlayDelay: 2000,
    loop:true, 
    dragFree: true
}) 
</script>

<template>
    
            <Carousel
                class="w-full max-w-md md:max-w-2xl lg:max-w-4xl bg-gray-900"
                :opts="{
                    loop: props.loop,
                    dragFree: props.dragFree,
                }"
                            :plugins="[Autoplay({
                            delay: props.autoPlayDelay
                            })]"
                >
                    <CarouselContent>
                    <CarouselItem v-for="(photo, index) in props.photos" :key="index">
                        <div class="p-1">
                        <Card class="bg-gray-900 border-none">
                            <CardContent class="bg-gray-900 flex aspect-6/4 items-center justify-center p-6">
                            
                            <img 
                                :src="`${props.basePath} /${photo}.jpg`" 
                                :alt="`Image ${index + 1}`"
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

</template>



<style scoped>

</style>