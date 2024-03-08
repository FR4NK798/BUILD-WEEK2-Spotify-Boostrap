const urlPlaylistTopArtist = oggetto.tracklist;
console.log("url playlist", urlPlaylistTopArtist);

// secondo fetch playlist tracce top

fetch(urlPlaylistTopArtist, {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "09f73dade1msh056e8368f5d73cfp15ae56jsnd2209dc537f7",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
})
  .then((response) => {
    console.log("Response", response);
    if (response.ok) {
      return response.json();
    } else {
      if (response.status === 400) {
        throw new Error("400 - Errore lato client");
      }

      if (response.status === 404) {
        throw new Error("404 - Dato non trovato");
      }

      if (response.status === 500) {
        throw new Error("500 - Errore lato server");
      }

      throw new Error("Errore nel reperimento dati");
    }
  })
  .then((oggetto) => {
    console.log("oggetto tracklist top", oggetto);
    // dove inserire for each
  });
