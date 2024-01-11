import { reactive } from 'vue'

export const store = reactive({
    FilmsList: [],
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=597563f67c5ecce31f9d90afb3d432f7",
    searchText: "",
    //loading: true,
    query: "query",

    ArchList: [],
    apiURL2: "https://db.ygoprodeck.com/api/v7/archetypes.php",
});