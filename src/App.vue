<script lang="ts">
import { RouterView } from 'vue-router';
export default {};
</script>

<template>
  <main class="w-full min-h-[100vh] px-[20%] overflow-hidden">
    <RouterView></RouterView>
    <footer class="w-full flex justify-around my-10">
      <a class="mx-3 no-underline text-black font-tomorrow" href="https://www.instagram.com/victtor_u/">
        @victtor_u
      </a>
      <a class="mx-3 no-underline text-black font-tomorrow" href="https://linkedin.com/in/victor-manoel-magalhães-timbo-873a67201">
        Linkedln
      </a>
      <a class="mx-3 no-underline text-black font-tomorrow" href="https://github.com/VictorManoel-Timbo">
        GitHub
      </a>
    </footer>
  </main>
</template>

