<script >
export default {
    name: "FilmCard",

    props: {
        info: Object
    }
}




</script>

<template>
    <div class="card">

        <!-- controllo che il percorso dell'immagine ci sia -->
        <div v-if="info.backdrop_path">
            <img :src="'https://image.tmdb.org/t/p/w342' + info.backdrop_path" alt="immagine film">
        </div>

        <!-- in caso non sia così -->
        <div v-else>

            <img src="/rick-astley-dance.gif" class="gif" alt="rick-astley-dance">
            <p>image not found</p>
        </div>

        <ul>
            <li>
                <h4>Titolo: {{ info.title }}</h4>
            </li>
            <li>
                <h5>Titolo Originale: {{ info.original_title }}</h5>
            </li>
            <li>
                <h4>Lingua: {{ info.original_language }}</h4>
            </li>
            <li>
                <div v-if="info.vote_average > 5">

                    <font-awesome-icon icon="fa-solid fa-star" v-for=" n in 5" />

                </div>
                <div v-else>
                    <h4>Voto: {{ info.vote_average }}</h4>
                </div>
            </li>
        </ul>


    </div>
</template>

<style lang="scss" scoped>
//Scss relativo alla sola sezione di header
@use '../styles/partials/variables' as *;

.card {
    text-align: center;

    ul {
        list-style: none;

        h4 {
            text-transform: capitalize;
            font-size: 15px;

        }

        h5 {
            font-size: 15px;
        }
    }



}
</style>