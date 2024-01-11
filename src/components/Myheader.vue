<script >
//importo store
import { store } from '../store'



export default {
    name: "Myheader",

    data() {
        return {
            store,

        }
    }

}
</script>

<template>
    <header class="container">


        <div class="row row-cols-2 justify-content-between">

            <div class="col-auto my-5">
                <h1 class="text-start ">BOOLFIX</h1>
            </div>



            <div class="col-auto my-5">

                <div class="row">
                    <div class="col-auto">
                        <input type="text" class="form-control" placeholder="Cerca Film....."
                            v-model.trim="store.searchText">
                    </div>

                    <div class="col-auto">
                        <button type="submit" class="btn btn-secondary mb-2" @click.prevent="$emit('serchfilm')">
                            Cerca
                        </button>
                    </div>
                </div>

            </div>


        </div>

    </header>
</template>

<style lang="scss" scoped>
//Scss relativo alla sola sezione di header
@use '../styles/partials/variables' as *;

.container {
    background-color: $primary;

    .text-start {
        display: inline;
        color: $secondary;
    }

    .row {
        .form-control {
            display: inline-block;
        }

        .btn {
            display: inline-block;
            color: $tertiary;
        }

        .btn:hover {
            color: $primary;
        }
    }

}
</style>
