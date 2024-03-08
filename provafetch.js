const fetchArtist = (ulrArtist, idArtist) => {
  fetch(ulrArtist + idPlaylist, {
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
      sezCentrale.innerHTML = `<div class="middle-col">
      <div class="hero-section text-white d-flex flex-column justify-content-between">
        <div class="p-3 d-md-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="grey"
            class="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
            />
          </svg>
        </div>
        <div class="p-3">
          <div class="d-flex justify-content-between">
            <div class="d-none d-md-block">
              <button class="btn p-0 bg-black rounded-circle" style="width: 25px; height: 25px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="12.5"
                  viewBox="0 0 320 512"
                  class="pb-1"
                >
                  <path
                    fill="#c2c2c2"
                    d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                  />
                </svg>
              </button>
              <button class="btn p-0 ps-1 bg-black rounded-circle" style="width: 25px; height: 25px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="12.5"
                  viewBox="0 0 320 512"
                  class="pb-1 me-1"
                >
                  <path
                    fill="#c2c2c2"
                    d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                  />
                </svg>
              </button>
            </div>
            <div class="dropdown-center d-flex d-none d-md-block">
              <button
                class="btn bg-black dropdown-toggle text-white ps-0 py-0 fs-8 rounded-5"
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
  
        <div class="p-3">
          <div class="d-none d-md-block">
            <p class="mb-0 verified d-flex align-items-center">
              <span><i class="bi bi-patch-check-fill fs-6 me-1"></i></span> Artista verificato
            </p>
          </div>
  
          <h1 class="mb-1 mb-md-3 fw-bolder display-3">Metric</h1>
          <p class="d-none d-md-block">3.549.403 ascoltatori mensili</p>
        </div>
      </div>
      <div class="songs-section">
        <div class="container-fluid mx-1">
          <div class="d-none d-md-block">
            <div class="d-flex align-items-center py-4">
              <div>
                <span><i class="bi bi-play-circle-fill fs-2"></i></span>
              </div>
              <div>
                <button class="btn btn-follow">FOLLOWING</button>
              </div>
              <div>
                <span><i class="bi bi-three-dots fs-3"></i></span>
              </div>
            </div>
          </div>
  
          <p class="d-md-none mb-0 pt-3 text-secondary fs-5">3.549.403 ascoltatori mensili</p>
          <div class="d-flex justify-content-between d-md-none py-3 fs-3 me-3">
            <div class="d-flex align-items-center">
              <button class="btn btn-seguiti me-5">Seguiti</button>
              <i class="bi bi-three-dots-vertical"></i>
            </div>
            <div class="d-flex align-items-center">
              <i class="bi bi-shuffle"></i>
              <span><i class="bi bi-play-circle-fill play-sm ms-4 display-1"></i></span>
            </div>
          </div>
  
  
  
  
          <div class="row">
            <div class="col-12 col-md-7 order-2 order-md-1 fs-6">
              <h4 class="mb-4">Popolari</h4>
  
  
              <!-- singola canzone generata da foreach -->
         
  
  
  <!-- fine canzoni -->
  
  
  
            </div>
            <div class="col-12 col-md-5 order-1 order-md-2 py-4 py-md-0">
              <h4 class="mb-4 d-none d-md-block">Brani che ti piacciono</h4>
              <div class="d-none d-md-block">
                <div class="row g-2">
                  <div class="col-2 d-flex align-items-center">
                    <div>
                      <img src="./assets/imgs/main/image-15.jpg" alt="copertina" class="rounded-circle w-100" />
                    </div>
                  </div>
                  <div class="col-10 d-flex align-items-center">
                    <div>
                      <h6>Hai messo mi piace a 11 brani</h6>
                      <p class="text-secondary mb-0">Di Metric</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row g-0 d-md-none">
                <div class="col-2">
                  <div>
                    <img src="./assets/imgs/main/image-15.jpg" alt="copertina" class="rounded-circle w-75" />
                  </div>
                </div>
                <div class="col-10 d-flex align-items-center">
                  <div>
                    <h6>Brani che ti piacciono</h6>
                    <p class="text-secondary mb-0">11 brani di Metric</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="px-4 d-none d-md-block">VISUALIZZA ALTRO</p>
        </div>
      </div>
    </div>`;
      //   aggiungere

      const doveAggObj = document.getElementById("doveAggiungere");

      console.log("array", oggetto.tracks.data);

      const arrTracks = oggetto.tracks.data;

      let arrNum = 1;

      arrTracks.forEach((element) => {
        const singTrack = document.createElement("div");
        singTrack.classList.add("row", "px-2", "mb-0", "gy-0");

        //   console.log("element", element);

        singTrack.innerHTML = `<div class="row g-2 mb-3 px-1 px-md-3">
        <div class="col-1 d-flex align-items-center justify-content-center">
          <div>1</div>
        </div>
        <div class="col-1 d-flex align-items-center">
          <div>
            <img src="./assets/imgs/main/image-12.jpg" alt="copertina" class="w-100" />
          </div>
        </div>
        <div class="col-9 col-md-6 d-md-flex align-items-center">
          <div>Now or Never Now</div>
          <div class="text-secondary d-md-none">2.455.344</div>
        </div>
        <div class="col-1 d-md-none d-flex align-items-center">
          <i class="bi bi-three-dots-vertical"></i>
        </div>
        <div class="d-none d-md-block col-3 d-flex align-items-center">
          <div class="text-secondary d-none d-md-block">2.455.344</div>
        </div>
        <div class="d-none d-md-block col-1 d-flex align-items-center">
          <div class="text-secondary d-none d-md-block">3:18</div>
        </div>
      </div>`;

        arrNum = arrNum + 1;

        doveAggObj.appendChild(singTrack);
      });
    })
    .catch((err) => console.log(err));
};
