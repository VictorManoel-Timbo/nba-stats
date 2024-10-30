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
    <main class="text-white font-inter text-lg leading-10 h-full">
        <section v-if="resumeType === 'Jogadores'" class="custom-section">
            <img src="/src/assets/prancheta.jpg" alt="foto de prancheta" class="w-[45%] h-[440px] border border-white">
            <div class="custom-content">
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
        <section v-else-if="resumeType === 'Jogos'" class="custom-section">
            <img src="/src/assets/partida-nba.jpg" alt="foto de jogo da nba" class="w-[45%] h-[440px] border border-white">
            <div class="custom-content">
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
        <section v-else class="custom-section">
            <img src="/src/assets/times-nba.png" alt="foto dos times" class="w-[45%] h-[440px]">
            <div class="custom-content">
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

.custom-section {
    @apply flex items-center justify-between text-justify h-full;
}

.custom-content {
    @apply w-1/2 h-full flex flex-col justify-around;
}

</style>