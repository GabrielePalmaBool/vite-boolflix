<script >
import FilmCard from './FilmCard.vue'

//importo store
import { store } from '../store'

export default {
    name: "Mymain",

    components: {
        FilmCard
    },

    data() {
        return {
            store,

        }
    },
    computed: {
        numcard() {
            return store.FilmsList.length;
        }
    }

}




</script>

<template>
    <main class="container">

        <div class="row row-cols-5 " v-if="store.FilmsList == 0">

            <img src="/rick-astley-dance.gif" class="gif" alt="Footer non presente">

        </div>

        <div class="row row-cols-5 " v-else>
            <div v-for="(film, i) in store.FilmsList" :key="i" class="col p-2">
                <FilmCard :info="film" />
            </div>

        </div>



    </main>
</template>

<style lang="scss" scoped>
//Scss relativo alla sola sezione di header
@use '../styles/partials/variables' as *;


main {
    background-color: $Quaternary;

    .gif {
        width: 15%;
        margin-left: 45%;

        vertical-align: middle;
    }
}
</style>