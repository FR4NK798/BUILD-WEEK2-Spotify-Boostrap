window.onload = () => {
  //   e.preventDefault();

  const bntPlayListJazz = document.getElementById("playListJazz");
  console.log("tasto", bntPlayListJazz);
  bntPlayListJazz.addEventListener("click", (e) => {
    console.log("prova");
    e.preventDefault();

    // window.location.assign("./album.html");

    // inizio fetch
    const urlPlayList = "https://deezerdevs-deezer.p.rapidapi.com/playlist/";
    const idPlaylist = "1615514485";
    console.log(urlPlayList + idPlaylist);

    console.log("prima della funzione");
    fetchPlaylist(urlPlayList, idPlaylist);
  });

  const playListBuongiorno = document.getElementById("playListBuongiorno");
  console.log("tasto", playListBuongiorno);
  playListBuongiorno.addEventListener("click", (e) => {
    console.dir("prova");
    e.preventDefault();

    // window.location.assign("./album.html");

    // inizio fetch
    const urlPlayList = "https://deezerdevs-deezer.p.rapidapi.com/playlist/";
    const idPlaylist = "10676141442";
    console.log(urlPlayList + idPlaylist);

    console.log("prima della funzione");
    fetchPlaylist(urlPlayList, idPlaylist);
    console.log("Grande stefanooooh");

    idPlaylist = "";
  });

  const playlistNextgen = document.getElementById("playlistNextgen");
  console.log("tasto", playListBuongiorno);
  playlistNextgen.addEventListener("click", (e) => {
    console.dir("prova");
    e.preventDefault();

    // window.location.assign("./album.html");

    // inizio fetch
    const urlPlayList = "https://deezerdevs-deezer.p.rapidapi.com/playlist/";
    const idPlaylist = "705411775";
    console.log(urlPlayList + idPlaylist);

    console.log("prima della funzione");
    fetchPlaylist(urlPlayList, idPlaylist);

    idPlaylist = "";
  });

  const playlistSottoladoccia = document.getElementById("playlistSottoladoccia");
  console.log("tasto", playListBuongiorno);
  playlistSottoladoccia.addEventListener("click", (e) => {
    console.dir("prova");
    e.preventDefault();

    // window.location.assign("./album.html");

    // inizio fetch
    const urlPlayList = "https://deezerdevs-deezer.p.rapidapi.com/playlist/";
    const idPlaylist = "8708591282";
    console.log(urlPlayList + idPlaylist);

    console.log("prima della funzione");
    fetchPlaylist(urlPlayList, idPlaylist);

    idPlaylist = "";
  });

  const playlistBuonumore = document.getElementById("playlistBuonumore");
  console.log("tasto", playListBuongiorno);
  playlistBuonumore.addEventListener("click", (e) => {
    console.dir("prova");
    e.preventDefault();

    // window.location.assign("./album.html");

    // inizio fetch
    const urlPlayList = "https://deezerdevs-deezer.p.rapidapi.com/playlist/";
    const idPlaylist = "2824340844";
    console.log(urlPlayList + idPlaylist);

    console.log("prima della funzione");
    fetchPlaylist(urlPlayList, idPlaylist);

    idPlaylist = "";
  });

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

          //   console.log("element", element);

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
      })
      .catch((err) => console.log(err));
  };

  const fetchArtist = (ulrArtist, idArtist) => {
    const urlArtista = ulrArtist + idArtist;
    console.log("url artista", urlArtista);
    fetch(urlArtista, {
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

        // const durationObj = Math.ceil(oggetto.duration / 60);

        // inizio
        sezCentrale.innerHTML = `<div class="middle-col">
        <div class="hero-section text-white d-flex flex-column justify-content-between" style="
        background-image: url(${oggetto.picture_xl});
    ">
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
    
            <h1 class="mb-1 mb-md-3 fw-bolder display-3">${oggetto.name}</h1>
            <p class="d-none d-md-block">${oggetto.nb_fan} ascoltatori mensili</p>
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
    
            <p class="d-md-none mb-0 pt-3 text-secondary fs-5">${oggetto.nb_fan} ascoltatori mensili</p>
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
              <div class="col-12 col-md-7 order-2 order-md-1 fs-6" id="singolaCanzone">
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
                        <img src="${oggetto.picture}" alt="copertina" class="rounded-circle w-100" />
                      </div>
                    </div>
                    <div class="col-10 d-flex align-items-center">
                      <div>
                        <h6>Hai messo mi piace a 11 brani</h6>
                        <p class="text-secondary mb-0">Di ${oggetto.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row g-0 d-md-none">
                  <div class="col-2">
                    <div>
                      <img src="${oggetto.picture}" alt="copertina" class="rounded-circle w-75" />
                    </div>
                  </div>
                  <div class="col-10 d-flex align-items-center">
                    <div>
                      <h6>Brani che ti piacciono</h6>
                      <p class="text-secondary mb-0">11 brani di ${oggetto.name}</p>
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
        // RISOLVERE
        // const doveAggObj = document.getElementById("doveAggiungere");
        // risolvere ROW
        const doveAggObj = document.getElementById("singolaCanzone");

        console.log("oggetto ottenuto fetcj", oggetto);

        // console.log("array", oggetto.tracks.data);

        // const arrTracks = oggetto.tracks.data;

        let arrNum = 1;

        console.log("console log prima del for each");

        const urlPlaylistTopArtist = `https://striveschool-api.herokuapp.com/api/deezer/artist/${oggetto.id}/top?limit=10`;

        console.log("url playlist", urlPlaylistTopArtist);

        // secondo fetch playlist tracce top
        // RISOLVERE

        fetch(urlPlaylistTopArtist, {
          method: "GET",
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
            const canzoni = oggetto.data;
            canzoni.forEach((element) => {
              console.log("dentro for each");
              const singTrack = document.createElement("div");
              singTrack.classList.add("row", "px-2", "mb-0", "gy-0");

              //   console.log("element", element);

              singTrack.innerHTML = `
              <div class="row g-2 mb-3 px-1 px-md-3 linkAlbum">
              <div class="col-1 d-flex align-items-center justify-content-center">
                <div>${arrNum}</div>
              </div>
              <div class="col-1 d-flex align-items-center">
                <div>
                  <img src="${element.album.cover}" alt="copertina" class="w-100" />
                </div>
              </div>
              <div class="col-9 col-md-6 d-md-flex align-items-center">
                <div>${element.title}</div>
                <div class="text-secondary d-md-none">${element.rank}</div>
              </div>
              <div class="col-1 d-md-none d-flex align-items-center">
                <i class="bi bi-three-dots-vertical"></i>
              </div>
              <div class="d-none d-md-block col-3 d-flex align-items-center">
                <div class="text-secondary d-none d-md-block">${element.rank}</div>
              </div>
              <div class="d-none d-md-block col-1 d-flex align-items-center">
                <div class="text-secondary d-none d-md-block">0:30</div>
              </div>
            </div>
           `;

              arrNum = arrNum + 1;

              doveAggObj.appendChild(singTrack);

              // prova bottone

              const linkAlbum = document.querySelector(".linkAlbum");
              // console.log("linkAlbum", linkAlbum);

              // linkAlbum[element].addEventListener("click", () => {
              //   console.log("cliccato");
              // });

              // prova album
            });
          });
      })
      .catch((err) => console.log(err));
  };

  const tastoCerca = document.querySelector(".navbar-nav li+li");
  console.log("tasto cerca", tastoCerca);

  tastoCerca.addEventListener("click", () => {
    console.log("tasto cerca premuto");
    const sezCentrale = document.getElementById("scroll");
    // sotto
    const divUnderHeader = document.querySelector("#scroll header+div");
    // console.log("sotto sez centrale");

    // da nascondere

    const daNascondere = document.querySelector(".col-12 .middle-album-col .middle-album-section");
    console.log("da nascondere 1", daNascondere);

    const daNascondere2 = document.querySelector(".songs-album-section");
    console.log("da nascondere 2", daNascondere2);

    if (daNascondere === null) {
      divUnderHeader.classList.add("d-none");
      console.log("sotto sez centrale", divUnderHeader);
    } else {
      // ci sono solo quando abbiamo messo una playlist
      daNascondere.classList.add("d-none");
      daNascondere2.classList.add("d-none");
    }

    console.log("nascosto");

    console.log("da mostrare:", sezCentrale);

    // inizio

    // dove chiamare funzione
    sezCentrale.innerHTML = `            <header class="my-2 py-3 bg-back-black">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center column-gap-2">
        <button class="btn p-0 bg-black rounded-circle" style="width: 25px; height: 25px">
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="12.5" viewBox="0 0 320 512" class="pb-1">
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
        <div>
          <div style="width: 18rem">
          
            <form onsubmit="seachForm(event)">
              <input
                class="form-control me-2 rounded-pill bg-search border-0"
                type="search"
                placeholder="Cosa vuoi ascoltare?"
                aria-label="Search" id="searchArtist"
              />
            </form>
            <div class="d-flex search-cont">
            <button type="submit" id="btnSearch">
              <span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                  />
                </svg>
              </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown-center d-flex">
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
  </header>

  <div>
    <div>
      <div class="container g-0">
        <div class="row">
          <h3 class="fs-10">Sfoglia tutto</h3>
        </div>
        <div class="row mt-2">
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos">
                  <h2>Musica</h2>
                  <img src="./assets/imgs/search/image-1.jpeg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos2">
                  <h2>Original</h2>
                  <img src="./assets/imgs/search/image-2.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos3">
                  <h2>Pollen</h2>
                  <img src="./assets/imgs/search/image-3.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos4">
                  <h2>Mint</h2>
                  <img src="./assets/imgs/search/image-4.jpg" alt="" /></div
              ></a>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos5">
                  <h2>Latino</h2>
                  <img src="./assets/imgs/search/image-5.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos6">
                  <h2>Are & BE</h2>
                  <img src="./assets/imgs/search/image-6.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos7">
                  <h2>Rock</h2>
                  <img src="./assets/imgs/search/image-7.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos8">
                  <h2>Palestra</h2>
                  <img src="./assets/imgs/search/image-8.jpg" alt="" /></div
              ></a>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos9">
                  <h2>Nija</h2>
                  <img src="./assets/imgs/search/image-9.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos10">
                  <h2>Lo-Fi</h2>
                  <img src="./assets/imgs/search/image-10.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos11">
                  <h2>On yhe Road</h2>
                  <img src="./assets/imgs/search/image-11.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos12">
                  <h2>All Out</h2>
                  <img src="./assets/imgs/search/image-12.jpg" alt="" /></div
              ></a>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos13">
                  <h2>Summer</h2>
                  <img src="./assets/imgs/search/image-13.jpeg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos14">
                  <h2>Global</h2>
                  <img src="./assets/imgs/search/image-14.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos15">
                  <h2>Parcast</h2>
                  <img src="./assets/imgs/search/image-15.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos16">
                  <h2>Soul Lounge</h2>
                  <img src="./assets/imgs/search/image-16.jpg" alt="" /></div
              ></a>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos17">
                  <h2>Relief</h2>
                  <img src="./assets/imgs/search/image-17.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos18">
                  <h2>Sleep</h2>
                  <img src="./assets/imgs/search/image-18.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos19">
                  <h2>Pop</h2>
                  <img src="./assets/imgs/search/image-19.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos20">
                  <h2>Jazz</h2>
                  <img src="./assets/imgs/search/image-20.jpg" alt="" /></div
              ></a>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos21">
                  <h2>Musica</h2>
                  <img src="./assets/imgs/search/image-21.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos22">
                  <h2>Indigo</h2>
                  <img src="./assets/imgs/search/image-22.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos23">
                  <h2>Deep</h2>
                  <img src="./assets/imgs/search/image-23.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos24">
                  <h2>Guitar</h2>
                  <img src="./assets/imgs/search/image-24.jpg" alt="" /></div
              ></a>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos25">
                  <h2>Out now</h2>
                  <img src="./assets/imgs/search/image-25.jpeg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos26">
                  <h2>Friday</h2>
                  <img src="./assets/imgs/search/image-26.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos27">
                  <h2>Party hits</h2>
                  <img src="./assets/imgs/search/image-27.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos28">
                  <h2>Afro hits</h2>
                  <img src="./assets/imgs/search/image-28.jpg" alt="" /></div
              ></a>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos29">
                  <h2>Classic</h2>
                  <img src="./assets/imgs/search/image-29.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos30">
                  <h2>L.O.L.</h2>
                  <img src="./assets/imgs/search/image-30.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos31">
                  <h2>Metal</h2>
                  <img src="./assets/imgs/search/image-31.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos32">
                  <h2>Nu-Funk</h2>
                  <img src="./assets/imgs/search/image-32.jpg" alt="" /></div
              ></a>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos33">
                  <h2>Punk</h2>
                  <img src="./assets/imgs/search/image-33.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos34">
                  <h2>Ambient</h2>
                  <img src="./assets/imgs/search/image-34.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos35">
                  <h2>K-Pop</h2>
                  <img src="./assets/imgs/search/image-35.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos36">
                  <h2>The Blues</h2>
                  <img src="./assets/imgs/search/image-36.jpg" alt="" /></div
              ></a>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos37">
                  <h2>Electric</h2>
                  <img src="./assets/imgs/search/image-37.jpeg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos38">
                  <h2>Musica</h2>
                  <img src="./assets/imgs/search/image-38.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos39">
                  <h2>Country</h2>
                  <img src="./assets/imgs/search/image-39.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos40">
                  <h2>Frequency</h2>
                  <img src="./assets/imgs/search/image-40.jpg" alt="" /></div
              ></a>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos41">
                  <h2>Arab Pop</h2>
                  <img src="./assets/imgs/search/image-41.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos42">
                  <h2>Pop Mix</h2>
                  <img src="./assets/imgs/search/image-42.png" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos43">
                  <h2>Radar</h2>
                  <img src="./assets/imgs/search/image-43.png" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos44">
                  <h2>Pop 4 Kids</h2>
                  <img src="./assets/imgs/search/image-44.png" alt="" /></div
              ></a>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos45">
                  <h2>Daily Drive</h2>
                  <img src="./assets/imgs/search/image-45.png" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos46">
                  <h2>Musica</h2>
                  <img src="./assets/imgs/search/image-46.jpeg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos47">
                  <h2>Top Hits</h2>
                  <img src="./assets/imgs/search/image-47.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos48">
                  <h2>Christian</h2>
                  <img src="./assets/imgs/search/image-48.jpeg" alt="" /></div
              ></a>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos49">
                  <h2>Rap Caviar</h2>
                  <img src="./assets/imgs/search/image-49.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos50">
                  <h2>Rockeras</h2>
                  <img src="./assets/imgs/search/image-50.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos51">
                  <h2>Mood Booster</h2>
                  <img src="./assets/imgs/search/image-51.jpg" alt="" /></div
              ></a>
            </div>
          </div>
          <div class="col-3">
            <div>
              <a href="">
                <div class="fotos fotos52">
                  <h2>Gaming Tracks</h2>
                  <img src="./assets/imgs/search/image-52.jpg" alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div class="container g-0"></div>
      </main>
    </div>
  </div>

  <footer class="my-14">
    <div class="row g-0">
      <div class="d-flex gap-2">
        <div class="col-2 p-0 fs-11">
          <ul class="list-style-none p-0 text-card-p-gray">
            <li class="text-white fw-bold">
              <a href="" class="text-decoration-none text-card-p-gray">Azienda</a>
            </li>
            <li><a href="" class="text-decoration-none text-card-p-gray">Chi siamo</a></li>
            <li><a href="" class="text-decoration-none text-card-p-gray">Opportunità di lavoro</a></li>
            <li><a href="" class="text-decoration-none text-card-p-gray">For the Record</a></li>
          </ul>
        </div>
        <div class="col-2 p-0 fs-11">
          <ul class="list-style-none p-0 text-card-p-gray">
            <li class="text-white fw-bold">
              <a href="" class="text-decoration-none text-card-p-gray">Community</a>
            </li>
            <li><a href="" class="text-decoration-none text-card-p-gray">Per artisti</a></li>
            <li><a href="" class="text-decoration-none text-card-p-gray">Sviluppatori</a></li>
            <li><a href="" class="text-decoration-none text-card-p-gray">Pubblicità</a></li>
            <li><a href="" class="text-decoration-none text-card-p-gray">Investitori</a></li>
            <li><a href="" class="text-decoration-none text-card-p-gray">Venditori</a></li>
          </ul>
        </div>
        <div class="col-3 p-0 fs-11 pe-2">
          <ul class="list-style-none p-0 text-card-p-gray">
            <li class="text-white fw-bold">
              <a href="" class="text-decoration-none text-card-p-gray">Link utili</a>
            </li>
            <li><a href="" class="text-decoration-none text-card-p-gray">Assistenza</a></li>
            <li><a href="" class="text-decoration-none text-card-p-gray">App per cellulare gratuita</a></li>
            <li><a href="" class="text-decoration-none text-card-p-gray">Diritti del consumatore</a></li>
          </ul>
        </div>

        <div class="col-2 ms-auto">
          <div class="d-flex gap-lg-1 justify-content-between">
            <div class="pt-0 px-2 pb-15 rounded-circle bg-icon-gray">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  class="bi bi-instagram text-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                  />
                </svg>
              </a>
            </div>
            <div class="pt-0 px-2 pb-15 rounded-circle bg-icon-gray">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  class="bi bi-twitter text-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"
                  />
                </svg>
              </a>
            </div>
            <div class="pt-0 px-2 pb-15 rounded-circle bg-icon-gray">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  class="bi bi-facebook text-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="mb-4" />

    <div class="d-flex">
      <div class="d-flex column-gap-3 flex-wrap">
        <p class="mb-1 fs-12">
          <a href="" class="text-decoration-none text-card-p-gray"> Informazioni legali </a>
        </p>

        <p class="mb-1 fs-12">
          <a href="" class="text-decoration-none text-card-p-gray"> Sicurezza e Centro sulla privacy </a>
        </p>

        <p class="mb-1 fs-12">
          <a href="" class="text-decoration-none text-card-p-gray"> Informativa alla privacy </a>
        </p>

        <p class="mb-1 fs-12">
          <a href="" class="text-decoration-none text-card-p-gray"> Impostazioni cookie </a>
        </p>

        <p class="mb-1 fs-12"><a href="" class="text-decoration-none text-card-p-gray"> Info annunci </a></p>

        <p class="mb-1 fs-12"><a href="" class="text-decoration-none text-card-p-gray"> Accessibilità</a></p>
      </div>
      <div class="d-flex" style="width: 10rem">
        <p class="fs-11 text-card-p-gray">&copy;2024 Spotify AB</p>
      </div>
    </div>
  </footer>`;

    // const form = document.querySelector("form");
    // console.log("form", form);

    let form = document;
    console.log("form", form);

    const btnSearchArtist = document.getElementById("btnSearch");

    btnSearchArtist.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("premuto");
      // console.log("e", e);
      const cercaArtist = document.getElementById("searchArtist");
      const valueSearch = cercaArtist.value;
      console.log("valore ricerca: ", valueSearch);

      // da far scomparire
      const divUnderHeader = document.querySelector("header+div");
      console.log(divUnderHeader);
      divUnderHeader.classList.add("d-none");
      // dove aggiungere
      const col12 = document.querySelector(".col-3 + .col-12");

      const ulrArtist = "https://deezerdevs-deezer.p.rapidapi.com/artist/";
      const idArtist = valueSearch;
      fetchArtist(ulrArtist, idArtist);
    });
  });
};
