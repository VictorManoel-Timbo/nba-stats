<script lang="ts">
import { defineComponent } from 'vue';
import Resumes from '@/components/resumes.vue';

export default defineComponent({
  components: {
    Resumes
  },
  data() {
    return {
      nav: [
        { name: 'Times', link: '/Times' },
        { name: 'Jogadores', link: '/Jogadores' },
        { name: 'Jogos', link: '/Jogos' }
      ],
      selectedContent: '',
      isContentVisible: false,
    };
  },
  methods: {
    showContent(item: string) {
      this.selectedContent = item
      this.isContentVisible = true;
    },
    hideContent(item: string) {
      this.isContentVisible = false;
    },
  },
});
</script>

<template>
  <main class="flex flex-col items-center">
    <section class="font-tourney flex flex-col justify-center w-96 h-[90vh] text-9xl">
      <span class="flex justify-start hover:text-red-600 duration-300">INFO</span>
      <span class="flex justify-end hover:text-blue-600 duration-300">NBA</span>
    </section>
    <div class="flex items-center justify-around font-tomorrow w-[70%]">
      <RouterLink v-for="item in nav" :key="item.name" :to="item.link" class="btn" @mouseenter="showContent(item.name)"
        @mouseleave="hideContent(item.name)">
        {{ item.name }}
        <span class="before-content"></span>
      </RouterLink>
    </div>
    <section class="w-full h-[50rem] p-5 bg-black rounded-3xl relative">
      <transition name="fade">
        <div v-show="isContentVisible" class="border-4 rounded-lg border-orange-500 h-[100%] w-[100%] p-[5%] overflow-hidden  opacity-100">
            <Resumes :resumeType="selectedContent" />
        </div>
      </transition>
    </section>
  </main>
</template>

<style scoped>
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 0px 0px;
  padding: 12px 24px;
  font-size: 1.45rem;
  font-weight: 500;
  color: black;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  transition: color 250ms ease-in-out;
}

.before-content {
  content: "";
  position: absolute;
  inset: 0;
  background-color: black;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 250ms ease-in-out;
  z-index: -1;
}

.btn:hover {
  color: white;
}

.btn:hover .before-content {
  transform: scaleY(1);
  transform-origin: top;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>