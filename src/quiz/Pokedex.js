
class Pokedex {
    constructor(){
        const Dex = require("pokeapi-js-wrapper");
        this.P = new Dex.Pokedex();
    }
    async getEntryByID(id){
        // var response = await this.P.getPokemonSpeciesByName(id);
        // return response;
        this.P.getPokemonSpeciesByName(id).then(function(response){
            console.log(response)
        });
        return 1;
    }
}

export default Pokedex;

