let pokemonList = [{
    name: 'Charizard',
    height: 1.7,
    weight: 90.5,
    type: ['fire', 'flying']
  },
   {
    name: 'Beedrill',
    height: 1,
    weight: 29.5,
    type: ['bug', 'poison']
  },
   {
    name: 'Bellsprout',
    height: 0.7,
    weight: 4,
    type: ['grass', 'poison']
  },
   {
    name: 'Dewgong',
    height: 1.7,
    weight: 120,
    type: ['ice', 'water']
  },
   {
    name: 'Zapdos',
    height: 1.6,
    weight: 52.6,
    type: ['electric', 'flying']
  },
   {
    name: 'Xatu',
    height: 1.5,
    weight: 15,
    type: ['psychic', 'flying']
  }
];
//Added in Loop to list according to size.
for (let i=0; i < pokemonList.length; i++){
  if(pokemonList[i].height > 1){
    document.write(pokemonList[i].name + "( height : " + pokemonList[i].height +")" + " -is a really BIG pokemon!");
 }else if (pokemonList[i].height < 1) {
   document.write(pokemonList[i].name + "( height : " + pokemonList[i].height +")" + " -is a really SMALL pokemon!");
 }
}
