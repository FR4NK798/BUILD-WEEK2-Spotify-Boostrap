window.onload = () => {
  //   e.preventDefault();
  const bntPlayListJazz = document.getElementById("playListJazz");
  console.log("tasto", bntPlayListJazz);
  bntPlayListJazz.addEventListener("click", () => {
    console.log("prova");
    const idEndpoint = "";
    // window.location.assign("./album.html");

    // inizio fetch
    const urlPlayList = "https://deezerdevs-deezer.p.rapidapi.com/playlist/";
    const idPlaylist = "1615514485";
    console.log(urlPlayList + idPlaylist);

    fetch(urlPlayList + idPlaylist, {
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
        console.log("oggetto", oggetto);
        // prendere la home
        const sezCentrale = document.getElementById("scroll");
        // sotto
        const divUnderHeader = document.querySelector("#scroll header+div");
        // console.log("sotto sez centrale");

        divUnderHeader.classList.add("d-none");
        console.log("sotto sez centrale", divUnderHeader);
      });
  });
};
