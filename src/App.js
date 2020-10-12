import React, { useState } from "react";
import "./App.css";
import matrixSketch from "./matrixSketch";
import Sketch from "./Sketch";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// import fauno01 from "../public/fauno/fauno4.jpg";
// import fauno02 from "../public/fauno/faunoCCK1.jpg";
// import fauno03 from "../public/fauno/FaunoCCk.jpg";
// import fauno04 from "../public/fauno/faunoComposicion1.jpg";
// import fauno05 from "../public/fauno/faunoComposicion2.jpg";
// import fauno06 from "../public/fauno/faunoComposicion.jpg";
// import fauno07 from "../public/fauno/faunoConsola1.jpg";
// import fauno08 from "../public/fauno/faunoConsola.jpg";
// import fauno09 from "../public/fauno/faunoMardel.jpg";
// import fauno10 from "../public/fauno/faunoCarlCraig.jpg";

const FAUNO_IMAGES = [
  { id: "1", source: "/fauno/faunoConsola1.jpg" },
  { id: "2", source: "/fauno/faunoCCK1.jpg" },
  { id: "3", source: "/fauno/faunoCarlCraig.jpg" },
  { id: "4", source: "/fauno/faunoComposicion1.jpg" },
  { id: "6", source: "/fauno/faunoComposicion2.jpg" },
  { id: "7", source: "/fauno/faunoConsola.jpg" },
  { id: "8", source: "/fauno/fauno4.jpg" },
  { id: "9", source: "/fauno/faunoMardel.jpg" },
  { id: "10", source: "/fauno/faunoConsola1.jpg" },
];

const NOBOUNDS_IMAGES = [
  { id: "1", source: "/no-bounds/no-bounds_00.jpg" },
  { id: "2", source: "/no-bounds/no-bounds_01.jpg" },
  { id: "3", source: "/no-bounds/no-bounds_02.jpg" },
  { id: "4", source: "/no-bounds/no-bounds_03.jpg" },
  { id: "5", source: "/no-bounds/no-bounds_04.jpg" },
  { id: "6", source: "/no-bounds/no-bounds_05.jpg" },
];

function App() {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const onGalleryChange = (open) => {
    setGalleryOpen(open);
  };

  return (
    <>
      <Navbar fixed={!galleryOpen} />
      <div className="App">
        <div className="bannerContainer">
          <video autoPlay muted loop className="myVideo">
            <source src="/output.mp4" type="video/mp4" />
            <source src="/output.webm" type="video/webm" />
          </video>
        </div>
        <div className="nameCont">
          <p className="name">Iris Saladino</p>
          <p className="sub">Sound programmer and designer</p>
          <div className="social">
            <a href="https://www.instagram.com/1ri5.5/" target="blank">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#61dafb" }}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UC8SisRxGJhcy0LpZnWVgvfQ?view_as=subscriber"
              target="blank"
            >
              <FontAwesomeIcon icon={faYoutube} style={{ color: "#61dafb" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/iris-saladino-986330ba/"
              target="blank"
            >
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "#61dafb" }} />
            </a>
          </div>
        </div>
        <div className="Container">
          <section id="about">
            <p className="title">About</p>

            <p className="desc1">
              Buenos Aires based creative coder, sound oriented. Studied Music
              Composition and Electronic Arts in UNTreF. Member of CLiC
              (Colectivo de Live Coders). Loves to live code music with{" "}
              <a href="https://tidalcycles.org" target="blank">
                TidalCycles
              </a>{" "}
              and visuals with{" "}
              <a href="https://hydra.ojack.xyz/" target="blank">
                Hydra
              </a>{" "}
              . Wants to understand creative programming languages and
              softwares. Venerates the existence of internet. Needs creative
              environments for social interaction. Currently experimenting with
              3D sound with{" "}
              <a href="https://supercollider.github.io/" target="blank">
                SuperCollider
              </a>{" "}
              and{" "}
              <a href="https://en.wikipedia.org/wiki/Ambisonics">Ambisonics</a>,
              3D modeling with{" "}
              <a href="https://www.blender.org/" target="blank">
                Blender
              </a>{" "}
              and 3D interaction with <a href="https://unity.com/">Unity</a> and{" "}
              <a href="https://threejs.org/">three.js</a>.<br></br>
              <br></br>
              Performed in:{" "}
              <a
                href="https://www.unsam.edu.ar/institutos/kagel/investigacion.asp?investigacion"
                target="blank"
              >
                UNSaM
              </a>
              ,{" "}
              <a
                href="https://exactas.uba.ar/wp-content/uploads/2019/10/Programacion-EXACTAS-en-LNDLM-2019-1.pdf"
                target="blank"
              >
                UBA
              </a>
              ,{" "}
              <a href="https://rolfart.com.ar/" target="blank">
                Rolf art gallery
              </a>
              ,{" "}
              <a
                href="https://www.buenosaires.gob.ar/museos/museo-sivori"
                target="blank"
              >
                Sívori Museum
              </a>
              ,{" "}
              <a href="https://www.museomoderno.org/en" target="blank">
                Museum of Modern Art
              </a>
              ,{" "}
              <a href="http://elculturalsanmartin.org/">
                San Martín Cultural Center
              </a>
              ,{" "}
              <a href="http://www.centroculturalrecoleta.org/" target="blank">
                Recoleta Cultural Center
              </a>
              ,{" "}
              <a href="http://ccciencia.gob.ar/" target="blank">
                Cultural Center of Science
              </a>
              ,{" "}
              <a href="https://planetario.buenosaires.gob.ar/" target="blank">
                Planetarium of Buenos Aires
              </a>
              ,{" "}
              <a href="https://planetariodebogota.gov.co/" target="blank">
                Bogotá Planetarium
              </a>
              , among others.
              <br></br>
              <br></br>
              Festivals:{" "}
              <a
                href="https://mutek.org/es/noticias/nano-mutek-ar-2019/"
                target="blank"
              >
                Amplify Nano Mutek 2019,BA
              </a>
              ,{" "}
              <a
                href="https://www.idartes.gov.co/es/lineas-estrategicas/arte-ciencia-tecnologia"
                target="blank"
              >
                Festival Domo Lleno,CO
              </a>
              ,{" "}
              <a href="https://networkmusicfestival.org/" target="blank">
                Network Music Festival,DE
              </a>
              ,
              <a href="http://noboundsfestival.co.uk/" target="blank">
                No Bounds Festival,UK
              </a>
              .
            </p>
          </section>

          <section id="technician">
            <p className="title">Technician</p>
            <p className="desc">
              LA SIESTA DEL FAUNO ESTUDIO-LABORATORIO<br></br>
              <br></br>
              Recording, editing and mixing assistant. <br></br>Analog synthesis
              designer.
              <br></br>
              <br></br>
              Worked with:<br></br>
              <b>
                <a
                  href="https://djmagla.com/ernesto-romeo-tengo-una-sensacion-de-total-gratitud-por-lo-que-significa-el-arte-y-la-musica-en-mi-vida/"
                  target="blank"
                >
                  Ernesto Romeo
                </a>
                ,{" "}
                <a href="https://juanamolina.com/" target="blank">
                  Juana Molina
                </a>
                ,{" "}
                <a
                  href="https://www.lanacion.com.ar/espectaculos/mutek-el-festival-con-lo-que-no-hay-que-perderse-nid2287318"
                  target="blank"
                >
                  Gonzalo Solimano
                </a>
                ,
                <a
                  href="https://www.instagram.com/amandachangr/?hl=en"
                  target="blank"
                >
                  Amanda Chang
                </a>
                ,
                <a href="https://carlcraig.net/about/" target="blank">
                  Carl Craig
                </a>
                .
              </b>
            </p>
            <Gallery
              images={FAUNO_IMAGES}
              index={1}
              onChange={onGalleryChange}
            />
          </section>

          <section id="soundspace">
            <p className="title">
              Sound space <br></br>researcher/artist
            </p>
            <div className="rowContainer">
              <div className="cell">
                <p className="desc">
                  NO BOUNDS FESTIVAL
                  <br></br>
                  <br></br>
                  Remote live coding performance with web-based collaborative
                  editor for octophonic sound system in the Cultural Industries
                  Quarter of Sheffield, UK (binaural stream) ft.{" "}
                  <a href="https://slab.org/" target="blank">
                    Alex McLean
                  </a>{" "}
                  and{" "}
                  <a href="http://malitzincortes.net/" target="blank">
                    CNDSD
                  </a>
                  <br></br>
                  <br></br>
                </p>
                <Gallery
                  images={NOBOUNDS_IMAGES}
                  index={1}
                  onChange={onGalleryChange}
                />
              </div>

              <div className="cell">
                <p className="desc">
                  Planetario de Bogotá
                  <br></br>
                  <br></br>
                  Live coding set in 5.1 sound system for fulldome livecoding
                  performance.
                  <br></br>
                  <br></br>
                </p>
                <Gallery
                  images={FAUNO_IMAGES}
                  index={1}
                  onChange={onGalleryChange}
                />
              </div>

              <div className="cell">
                <p className="desc">
                  Planetario de Buenos Aires
                  <br></br>
                  <br></br>
                  Live coding set for fulldome livecoding performance.
                  <br></br>
                  <br></br>
                </p>
                <Gallery
                  images={FAUNO_IMAGES}
                  index={1}
                  onChange={onGalleryChange}
                />
              </div>
            </div>
            <div className="rowContainer">
              <div className="cell">
                <p className="desc">
                  CENTRO CULTURAL GENERAL SAN MARTIN
                  <br></br>
                  <br></br>
                  Live coded processes over <br></br>
                  <a href="https://www.jackadlermckean.eu/">
                    Jack Adler-McKean
                  </a>{" "}
                  for quadraphonic sound system .<br></br>
                  <br></br>
                </p>
                <Gallery
                  images={FAUNO_IMAGES}
                  index={1}
                  onChange={onGalleryChange}
                />
              </div>

              <div className="cell">
                <p className="desc">
                  L.I.P.M. (CENTRO CULTURAL RECOLETA)
                  <br></br>
                  <br></br>
                  Live coding experimental set for quadraphonic sound system.
                  <br></br>
                  <br></br>
                </p>
                <Gallery
                  images={FAUNO_IMAGES}
                  index={1}
                  onChange={onGalleryChange}
                />
              </div>
              <div className="cell">
                <p className="desc">
                  MEMORY CANNOT BE READ
                  <br></br>
                  <br></br>
                  Binaural and located sound design for{" "}
                  <a
                    href="https://hubs.mozilla.com/9KV68Ve/spacex/"
                    targer="blank"
                  >
                    VR space
                  </a>{" "}
                  created by graphic designer and artist{" "}
                  <a href="https://veradg.com/" target="blank">
                    Vera DG
                  </a>
                  ,<br></br>exhibited at{" "}
                  <a href="https://madatac.es/" target="blank">
                    MATADAC
                  </a>
                  , New Media Art Festival, Spain based.
                  <br></br>
                  <br></br>
                </p>
                <Gallery
                  images={FAUNO_IMAGES}
                  index={1}
                  onChange={onGalleryChange}
                />
              </div>
            </div>
          </section>

          <section id="other">
            <div className="otherContainer">
              <div className="title">Other projects</div>

              <div className="desc2">
                BLACK CODED MIDI <br></br>
                <br></br>
                <a href="https://blackcodedmidi.github.io/" target="blank">
                  Black Coded MIDI
                </a>{" "}
                seeks for the upgrade and update of the new media art genre{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Black_Midi"
                  target="blank"
                >
                  Black MIDI
                </a>{" "}
                by hybridizing it with live coding languages.
              </div>
              <div className="desc2">
                XPLORE <br></br>
                <br></br>
                <a
                  href="https://colectivo-de-livecoders.gitlab.io/xplore/"
                  target="blank"
                >
                  xplore
                </a>{" "}
                is a collaborative web-based custom sound and visuals
                reproductor to show different explorations of TidalCycles made
                by students of{" "}
                <a
                  href="http://www.cceba.org.ar/medialab/live-coding-con-tidalcycle"
                  target="blank"
                >
                  a course
                </a>
                . Visuals are audioreactive, listening to the .mp3 directly
                through Web Audio.
              </div>
            </div>
          </section>
        </div>

        <Sketch>{matrixSketch}</Sketch>
      </div>
    </>
  );
}

export default App;
