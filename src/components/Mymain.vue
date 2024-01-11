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
        <div class="row row-cols-5 ">
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
}
</style>