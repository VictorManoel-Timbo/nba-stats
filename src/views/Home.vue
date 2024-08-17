<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      nav: [
        { name: 'Jogadores', link: '/Jogadores', current: false },
        { name: 'Medias', link: '/Medias', current: false },
        { name: 'Times', link: '/times', current: false },
        { name: 'Jogos', link: '/Jogos', current: false },
        { name: 'Estatisticas', link: '/Estatisticas', current: false },
      ]
    }
  },
})
</script>

<template>
  <main class="flex flex-col items-center">
    <div class="font-tourney text-9xl flex flex-col w-96 h-80 justify-center">
      <div class="flex justify-end">INFO</div>
      <div class="flex justify-start">NBA</div>
    </div>
    <div class="text-center font-tomorrow font-bold text-2xl mb-4">
      <RouterLink v-for="item in nav" :key="item.name" :to="item.link"
        class="text-black hover:bg-black hover:text-white mx-[3rem] rounded-[10px] p-3">
        {{ item.name }}
      </RouterLink>
    </div>
    <div class="w-[1200px] h-[500px] bg-black rounded-[10px] m-4"></div>
  </main>
</template>
