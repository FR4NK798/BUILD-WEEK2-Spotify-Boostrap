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

    console.log("prima della funzione");
    fetchPlaylist(urlPlayList, idPlaylist);
    console.log("Grande stefanooooh");
  });
};

const fetchPlaylist = (urlPlayList, idPlaylist) => {
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

      const durationObj = Math.ceil(oggetto.duration / 60);

      // inizio
      sezCentrale.innerHTML = `
            <div class="middle-album-col text-white">
              <div class="middle-album-section d-flex flex-column" style="height: calc(100% - 1rem)">
                <div class="p-3 d-none d-md-block">
                  <div class="d-flex justify-content-between">
                    <div class="d-none d-md-block">
                      <button class="btn p-0 bg-black rounded-circle bg-opacity-75" style="width: 25px; height: 25px">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="12.5" viewBox="0 0 320 512" class="pb-1">
                          <path
                            fill="#c2c2c2"
                            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                          />
                        </svg>
                      </button>
                      <button class="btn p-0 ps-1 bg-black rounded-circle bg-opacity-50" style="width: 25px; height: 25px">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="12.5" viewBox="0 0 320 512" class="pb-1 me-1">
                          <path
                            fill="#c2c2c2"
                            d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div class="dropdown-center d-flex d-none d-md-block">
                      <button
                        class="btn bg-black dropdown-toggle text-white ps-0 py-0 fs-8 rounded-5 bg-opacity-75"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src="./assets/imgs/search/image-37.jpeg" alt="" width="24px" class="rounded-4" />
                        Epicode
                      </button>
                      <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="row">
                    <div class="col-2 d-md-none d-flex justify-content-center">
                      <i class="bi bi-arrow-left fs-1"></i>
                    </div>
                    <div class="col-8 col-md-3 pe-0 d-flex align-items-center">
                      <div class="py-3 px-4 album-img">
                        <img
                          src="${oggetto.picture}"
                          alt="album-copertina"
                          class="w-100"
                        />
                      </div>
                    </div>
                    <div class="col-9 d-flex flex-column justify-content-end px-3 ps-md-0">
                      <div class="p-3">
                        <p class="mb-0 verified d-none d-md-block">${oggetto.type}</p>
                        <h1 class="mb-3 fw-bolder display-3">${oggetto.title}</h1>
                        <p class="fs-07 fw-bold d-none d-md-block">
                          <img
                            src="assets/imgs/metric-scaled-modified.jpg"
                            alt="band"
                            style="width: 20px; border-radius: 50%; aspect-ratio: 1"
                          />
                          ${oggetto.creator.name} &#x2022; ${new Date(oggetto.creation_date).getFullYear()} &#x2022; ${
        oggetto.nb_tracks
      }, <span class="fw-normal">${durationObj} min.</span>
                        </p>
                        <p class="d-md-none fw-bold fs-6">
                          <img
                            src="assets/imgs/metric-scaled-modified.jpg"
                            alt="band"
                            style="width: 25px; border-radius: 50%; aspect-ratio: 1"
                            class="me-1"
                          />
                          Metric
                        </p>
                        <p class="fs-6 text-light d-md-none">Album &#x2022; 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="songs-album-section">
                <div class="container px-3" id="doveAggiungere">
                  <div class="d-flex align-items-center py-2">
                    <div>
                      <span><i class="bi bi-play-circle-fill fs-1"></i></span>
                    </div>
                    <div>
                      <span class="px-3 fs-5"><i class="bi bi-heart"></i></span>
                    </div>
                    <div>
                      <span class="pe-3 fs-5"><i class="bi bi-arrow-down-circle"></i></span>
                    </div>
                    <div>
                      <span><i class="bi bi-three-dots fs-3"></i></span>
                    </div>
                  </div>
                  <!-- canzoni -->
                  <div class="row px-2 mb-0 gy-0">
                    <div class="col-4">
                      <p class="mb-1 ps-2 text-secondary"># TITOLO</p>
                    </div>
                    <div class="col-4">
                      <p class="text-end mb-1 text-secondary">RIPRODUZIONI</p>
                    </div>
                    <div class="col-4">
                      <p class="text-end mb-1 pe-3 text-secondary"><i class="bi bi-clock"></i></p>
                    </div>
                  </div>
                  <hr class="mx-2 mt-0" />
                </div>
              </div>
            </div>
          `;
      //   aggiungere

      const doveAggObj = document.getElementById("doveAggiungere");

      console.log("array", oggetto.tracks.data);

      const arrTracks = oggetto.tracks.data;

      let arrNum = 1;

      arrTracks.forEach((element) => {
        const singTrack = document.createElement("div");
        singTrack.classList.add("row", "px-2", "mb-0", "gy-0");

        console.log("element", element);

        singTrack.innerHTML = ` 
               
                <div class="col-4">
                  <div class="row g-2 mb-1 px-1">
                    <div class="col-1 d-flex align-items-center ps-2 me-1">
                      <div>${arrNum}</div>
                    </div>
                    <div class="col-10">
                      <div>${element.title}</div>
                      <div class="text-secondary">${element.artist.name}</div>
                    </div>
                  </div>
                </div>
                <div class="col-4 d-none d-md-block">
                  <p class="text-end text-secondary">${element.rank}</p>
                </div>
                <div class="col-4 d-none d-md-block">
                  <p class="text-end text-secondary pe-3">0:30</p>
                </div>
              `;

        arrNum = arrNum + 1;

        doveAggObj.appendChild(singTrack);
      });
    });
};
