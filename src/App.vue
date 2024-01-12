<script >
//importo libreria axios
import axios from 'axios'

//importo componenti figli
import Myheader from './components/Myheader.vue'
import Mymain from './components/Mymain.vue'
import Myfooter from './components/Myfooter.vue'

//importo store
import { store } from './store'


export default {

    components: {
        Myheader,
        Mymain,
        Myfooter
    },

    data() {
        return {
            store,
        }

    },

    methods: {
        getFilms() {

            let myURL = store.apiURL

            let call = false

            //Se è stato selezionato qualcosa dal selettore
            if (store.searchText !== "") {

                myURL += `&${store.query}=${store.searchText}`,

                    call = true

            }

            console.log(myURL);
            //prima chiamata axios
            if (call === true) {

                axios.get(myURL).then((res => { store.FilmsList = res.data.results; console.log(store.FilmsList); })).catch((err) => {
                    console.log("Errori", err);
                });
            }


        }
    },

    created() {
        this.getFilms();
    }

}
</script>

<template>
    <Myheader @serchfilm="getFilms" />
    <Mymain />
    <Myfooter />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
