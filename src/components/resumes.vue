<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Remuses',
    props: {
        resumeType: String,
    }
})
</script>
<template>
    <main class="text-white font-inter text-lg leading-10">
        <section v-if="resumeType === 'Jogadores'" class="flex items-center justify-between text-justify">
            <img src="/src/assets/prancheta.jpg" alt="foto de prancheta" class="w-[45%] border border-white">
            <div class="w-[50%] h-[100%]">
                <h3>Armador - Point Guard (PG):</h3>
                <p>
                    Líder do time em quadra, controla o ritmo e distribui a bola.
                </p>
                <h3>Ala-Armador - Shooting Guard (SG):</h3>
                <p>
                    Principal pontuador, especializado em arremessos e movimentação rápida.
                </p>
                <h3>Ala - Small Forward (SF):</h3>
                <p>
                    Jogador versátil, contribui tanto no ataque quanto na defesa em várias áreas.
                </p>
                <h3>Ala-Pivô - Power Forward (PF):</h3>
                <p>
                    Jogador versátil, contribui tanto no ataque quanto na defesa em várias áreas.
                </p>
                <h3>Pivô - Center (C):</h3>
                <p>
                    Protetor do aro, domina o garrafão com bloqueios e rebotes.
                </p>
            </div>
        </section>
        <section v-else-if="resumeType === 'Jogos'" class="flex flex-wrap items-center justify-between text-justify">
            <img src="" alt="foto de quadra" class="w-[45%] border border-white">
            <div class="w-[50%] h-[100%]">
                <h3>Armador - Point Guard (PG):</h3>
                <p>
                    Líder do time em quadra, controla o ritmo e distribui a bola.
                </p>
                <h3>Ala-Armador - Shooting Guard (SG):</h3>
                <p>
                    Principal pontuador, especializado em arremessos e movimentação rápida.
                </p>
                <h3>Ala - Small Forward (SF):</h3>
                <p>
                    Jogador versátil, contribui tanto no ataque quanto na defesa em várias áreas.
                </p>
                <h3>Ala-Pivô - Power Forward (PF):</h3>
                <p>
                    Jogador versátil, contribui tanto no ataque quanto na defesa em várias áreas.
                </p>
                <h3>Pivô - Center (C):</h3>
                <p>
                    Protetor do aro, domina o garrafão com bloqueios e rebotes.
                </p>
            </div>
        </section>
        <section v-else class="flex flex-wrap items-center justify-between text-justify">
            <img src="" alt="foto dos times" class="w-[45%] border border-white">
            <div class="w-[50%] h-[100%]">
                <h3>Armador - Point Guard (PG):</h3>
                <p>
                    Líder do time em quadra, controla o ritmo e distribui a bola.
                </p>
                <h3>Ala-Armador - Shooting Guard (SG):</h3>
                <p>
                    Principal pontuador, especializado em arremessos e movimentação rápida.
                </p>
                <h3>Ala - Small Forward (SF):</h3>
                <p>
                    Jogador versátil, contribui tanto no ataque quanto na defesa em várias áreas.
                </p>
                <h3>Ala-Pivô - Power Forward (PF):</h3>
                <p>
                    Jogador versátil, contribui tanto no ataque quanto na defesa em várias áreas.
                </p>
                <h3>Pivô - Center (C):</h3>
                <p>
                    Protetor do aro, domina o garrafão com bloqueios e rebotes.
                </p>
            </div>
        </section>
    </main>
</template>

<style scoped>
h3 {
  font-family: 'Tourney';
  font-size: x-large;
  text-decoration: underline;
}
</style>