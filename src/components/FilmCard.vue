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
        <div v-if="info.backdrop_path" class="poster">
            <img :src="'https://image.tmdb.org/t/p/w342' + info.backdrop_path" alt="immagine film">
        </div>

        <!-- in caso non sia così -->
        <div v-else>

            <img src="/rick-astley-dance.gif" class="gif" alt="rick-astley-dance">
            <p>image not found</p>
        </div>

        <ul>
            <li>
                <div v-if="info.title">

                    <h4>Titolo: {{ info.title }}</h4>

                </div>
                <div v-else>

                    <h4>Titolo: {{ info.name }}</h4>

                </div>

            </li>
            <li>
                <div v-if="info.original_title">

                    <h5>Titolo Originale: {{ info.original_title }}</h5>

                </div>
                <div v-else>

                    <h5>Titolo Originale: {{ info.original_name }}</h5>

                </div>
            </li>
            <li>

                <!-- Gestione bandiere nazionalità films -->
                <div v-if="info.original_language == 'en'">

                    <h4>Lingua:</h4> <img src="/flags/united-states.png" class="flag" alt="bandiera americana">

                </div>
                <div v-else-if="info.original_language == 'fr'">

                    <h4>Lingua:</h4> <img src="/flags/france.png" class="flag" alt="bandiera francese">

                </div>
                <div v-else-if="info.original_language == 'it'">

                    <h4>Lingua:</h4> <img src="/flags/italy.png" class="flag" alt="bandiera italiana">

                </div>
                <div v-else-if="info.original_language == 'es'">

                    <h4>Lingua:</h4> <img src="/flags/spain.png" class="flag" alt="bandiera spagnola">

                </div>
                <div v-else-if="info.original_language == 'ja'">

                    <h4>Lingua:</h4> <img src="/flags/japan.png" class="flag" alt="bandiera giapponese">

                </div>
                <div v-else-if="info.original_language == 'de'">

                    <h4>Lingua:</h4> <img src="/flags/german.png" class="flag" alt="bandiera tedesca">

                </div>
                <div v-else-if="info.original_language == 'ko'">

                    <h4>Lingua:</h4> <img src="/flags/south-korea.png" class="flag" alt="bandiera corea del sud">

                </div>
                <div v-else-if="info.original_language == 'zh' || info.original_language == 'cn'">

                    <h4>Lingua:</h4> <img src="/flags/china.png" class="flag" alt="bandiera cinese">

                </div>
                <div v-else>

                    <h4>Lingua: {{ info.original_language }}</h4>

                </div>
            </li>

            <!-- genere-->
            <li>
                <div v-if="info.media_type == 'tv'">

                    <h4>Genere: Serie tv</h4>

                </div>

                <div v-else>

                    <h4>Genere: {{ info.media_type }}</h4>

                </div>

            </li>

            <!-- gestione icona stella -->
            <li>
                <div v-if="info.vote_average == 10">

                    <font-awesome-icon icon="fa-solid fa-star" class="icon" v-for=" n in 5" />

                </div>
                <div v-if="info.vote_average >= 7 && info.vote_average < 10">

                    <font-awesome-icon icon="fa-solid fa-star" class="icon" v-for=" n in 4" />

                </div>
                <div v-else-if="info.vote_average >= 3.5 && info.vote_average < 7">

                    <font-awesome-icon icon="fa-solid fa-star" class="icon" v-for=" n in 3" />

                </div>
                <div v-else-if="info.vote_average > 0 && info.vote_average < 3.5">

                    <font-awesome-icon icon="fa-solid fa-star" class="icon" v-for=" n in 2" />

                </div>

                <div v-else-if="info.vote_average == 0">

                    <font-awesome-icon icon="fa-solid fa-thumbs-down" class="down" />
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
    height: 480px;

    .poster {
        height: 260px;


        img {
            border-radius: 5px;
            height: 100%;
        }
    }

    ul {
        list-style: none;

        h4 {
            text-transform: capitalize;
            font-size: 15px;
            display: inline-block;
        }

        h5 {
            font-size: 15px;
        }


        .flag {
            width: 10%;

        }

        .icon {
            color: $Quintenary;
        }

        .down {
            color: $secondary;
        }
    }



}
</style>