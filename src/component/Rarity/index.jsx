import React from "react";
import "./style.css";
import PeachPuff from "../../assets/images/peach puff.png";
import Alien from "../../assets/images/alien.png";
import Heliotrope from "../../assets/images/heliotrope.png";
import PineGreen from "../../assets/images/pine green.png";
import Rajah from "../../assets/images/rajah.png";
import Zombie from "../../assets/images/zombie.png";
import Very from "../../assets/images/very.png";
import ShadowNo from "../../assets/images/shadow-no.png";
import Shadow from "../../assets/images/shadow.png";
import ChainNo from "../../assets/images/chain no.png";
import ChainSilver from "../../assets/images/chain silver.png";
import ChainGold from "../../assets/images/chain gold.png";
import EaringNo from "../../assets/images/earing no.png";
import EaringSilver from "../../assets/images/earing silver.png";
import EaringGold from "../../assets/images/earing gold.png";
import GlassGold from "../../assets/images/glass gold.png";
import GlassRed from "../../assets/images/glass red.png";
import GlassBlue from "../../assets/images/glass blue.png";
import GlassTron from "../../assets/images/glass tron.png";
import GlassNormal from "../../assets/images/mouth normal.png";
import MouthBubble from "../../assets/images/mouth bubble.png";
import MouthBlunt from "../../assets/images/mouth blunt.png";
import MouthCigarette from "../../assets/images/mouth cigarette.png";
import MouthNo from "../../assets/images/mouth no.png";
import MouthNormal from "../../assets/images/mouth normal.png";
import Mouth from "../../assets/images/mouth.png";
import Spotted from "../../assets/images/spotted.png";
import SpottedNo from "../../assets/images/spotted no.png";
import TattoNo from "../../assets/images/mouth normal.png";
import TattoTear from "../../assets/images/tatto tear.png";
import Hatbackward from "../../assets/images/hat backward.png";
import HatBeanie from "../../assets/images/hat beanie.png";
import HatDoorag from "../../assets/images/hat doorag.png";
import HatForward from "../../assets/images/hat forward.png";
import HatPork from "../../assets/images/hat pork.png";
import HatNo from "../../assets/images/glass blue.png";

export default function Rarity() {
  return (
    <section className="rarity mt-5" id="rarity">
      <div className="container" style={{ borderBottom: "1px solid white" }}>
        <h1>Rarity</h1>
        <div className="row skin">
          <div className="col-md-12">
            <p className="attribut">Skin</p>
            <div className="row">
              <div className="col-md-3 col-6 my-2">
                <img src={PeachPuff} alt="rarity-img" className="img-fluid" />
                <p>20% 0f birdz</p>
                <div className="progbar">
                  <div className="_20"></div>
                </div>
                <p>Peach Puff</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={Heliotrope} alt="rarity-img" className="img-fluid" />
                <p>18% 0f birdz</p>
                <div className="progbar">
                  <div className="_18"></div>
                </div>
                <p>Heliotrope</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={Rajah} alt="rarity-img" className="img-fluid" />
                <p>16% 0f birdz</p>
                <div className="progbar">
                  <div className="_16"></div>
                </div>
                <p>Rajah</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={Very} alt="rarity-img" className="img-fluid" />
                <p>15% 0f birdz</p>
                <div className="progbar">
                  <div className="_15"></div>
                </div>
                <p>Very Pale Yellow</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={PineGreen} alt="rarity-img" className="img-fluid" />
                <p>14% 0f birdz</p>
                <div className="progbar">
                  <div className="_14"></div>
                </div>
                <p>Pine Green</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={Alien} alt="rarity-img" className="img-fluid" />
                <p>9% 0f birdz</p>
                <div className="progbar">
                  <div className="_9"></div>
                </div>
                <p>Alien</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={Zombie} alt="rarity-img" className="img-fluid" />
                <p>8% 0f birdz</p>
                <div className="progbar">
                  <div className="_8"></div>
                </div>
                <p>Zombie</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row shadoww">
          <div className="col-md-12">
            <p className="attribut">Shadow</p>
            <div className="row">
              <div className="col-md-3 col-6 my-2">
                <img src={Shadow} alt="rarity-img" className="img-fluid" />
                <p>66% 0f birdz</p>
                <div className="progbar">
                  <div className="_66"></div>
                </div>
                <p>No</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={ShadowNo} alt="rarity-img" className="img-fluid" />
                <p>34% 0f birdz</p>
                <div className="progbar">
                  <div className="_34"></div>
                </div>
                <p>Shadow</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row chain">
          <div className="col-md-12">
            <p className="attribut">Chain</p>
            <div className="row">
              <div className="col-md-3 col-6 my-2">
                <img src={ChainNo} alt="rarity-img" className="img-fluid" />
                <p>95% 0f birdz</p>
                <div className="progbar">
                  <div className="_95"></div>
                </div>
                <p>No</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={ChainSilver} alt="rarity-img" className="img-fluid" />
                <p>4% 0f birdz</p>
                <div className="progbar">
                  <div className="_4"></div>
                </div>
                <p>Silver</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={ChainGold} alt="rarity-img" className="img-fluid" />
                <p>1% 0f birdz</p>
                <div className="progbar">
                  <div className="_4"></div>
                </div>
                <p>Gold</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row earing">
          <div className="col-md-12">
            <p className="attribut">Earing</p>
            <div className="row">
              <div className="col-md-3 col-6 my-2">
                <img src={EaringNo} alt="rarity-img" className="img-fluid" />
                <p>76% 0f birdz</p>
                <div className="progbar">
                  <div className="_76"></div>
                </div>
                <p>No</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img
                  src={EaringSilver}
                  alt="rarity-img"
                  className="img-fluid"
                />
                <p>17% 0f birdz</p>
                <div className="progbar">
                  <div className="_17"></div>
                </div>
                <p>Silver</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={EaringGold} alt="rarity-img" className="img-fluid" />
                <p>7% 0f birdz</p>
                <div className="progbar">
                  <div className="_7"></div>
                </div>
                <p>Gold</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row glasses">
          <div className="col-md-12">
            <p className="attribut">Glasses</p>
            <div className="row">
              <div className="col-md-3 col-6 my-2">
                <img src={GlassNormal} alt="rarity-img" className="img-fluid" />
                <p>35% 0f birdz</p>
                <div className="progbar">
                  <div className="_35"></div>
                </div>
                <p>Normal</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={GlassRed} alt="rarity-img" className="img-fluid" />
                <p>20% 0f birdz</p>
                <div className="progbar">
                  <div className="_20"></div>
                </div>
                <p>Red</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={GlassBlue} alt="rarity-img" className="img-fluid" />
                <p>18% 0f birdz</p>
                <div className="progbar">
                  <div className="_18"></div>
                </div>
                <p>Blue</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={GlassTron} alt="rarity-img" className="img-fluid" />
                <p>17% 0f birdz</p>
                <div className="progbar">
                  <div className="_17"></div>
                </div>
                <p>Tron</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={GlassGold} alt="rarity-img" className="img-fluid" />
                <p>10% 0f birdz</p>
                <div className="progbar">
                  <div className="_10"></div>
                </div>
                <p>Gold</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mouth-attribute">
          <div className="col-md-12">
            <p className="attribut">Mouth Attribute</p>
            <div className="row">
              <div className="col-md-3 col-6 my-2">
                <img src={MouthNo} alt="rarity-img" className="img-fluid" />
                <p>68% 0f birdz</p>
                <div className="progbar">
                  <div className="_68"></div>
                </div>
                <p>No</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={MouthBubble} alt="rarity-img" className="img-fluid" />
                <p>12% 0f birdz</p>
                <div className="progbar">
                  <div className="_12"></div>
                </div>
                <p>Bubble Gum</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img
                  src={MouthCigarette}
                  alt="rarity-img"
                  className="img-fluid"
                />
                <p>11% 0f birdz</p>
                <div className="progbar">
                  <div className="_11"></div>
                </div>
                <p>Cigarette</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={MouthBlunt} alt="rarity-img" className="img-fluid" />
                <p>9% 0f birdz</p>
                <div className="progbar">
                  <div className="_9"></div>
                </div>
                <p>Blunt</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mouth">
          <div className="col-md-12">
            <p className="attribut">Mouth</p>
            <div className="row">
              <div className="col-md-3 col-6 my-2">
                <img src={MouthNormal} alt="rarity-img" className="img-fluid" />
                <p>51% 0f birdz</p>
                <div className="progbar">
                  <div className="_51"></div>
                </div>
                <p>Normal</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={Mouth} alt="rarity-img" className="img-fluid" />
                <p>49% 0f birdz</p>
                <div className="progbar">
                  <div className="_49"></div>
                </div>
                <p>Beak</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row spotted">
          <div className="col-md-12">
            <p className="attribut">Spotted</p>
            <div className="row">
              <div className="col-md-3 col-6 my-2">
                <img src={SpottedNo} alt="rarity-img" className="img-fluid" />
                <p>76% 0f birdz</p>
                <div className="progbar">
                  <div className="_76"></div>
                </div>
                <p>No</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={Spotted} alt="rarity-img" className="img-fluid" />
                <p>24% 0f birdz</p>
                <div className="progbar">
                  <div className="_24"></div>
                </div>
                <p>Spotted</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row tatto">
          <div className="col-md-12">
            <p className="attribut">Tattoo</p>
            <div className="row">
              <div className="col-md-3 col-6 my-2">
                <img src={TattoNo} alt="rarity-img" className="img-fluid" />
                <p>87% 0f birdz</p>
                <div className="progbar">
                  <div className="_87"></div>
                </div>
                <p>No</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={TattoTear} alt="rarity-img" className="img-fluid" />
                <p>13% 0f birdz</p>
                <div className="progbar">
                  <div className="_13"></div>
                </div>
                <p>Tear Drop</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row hat">
          <div className="col-md-12">
            <p className="attribut">Hat</p>
            <div className="row">
              <div className="col-md-3 col-6 my-2">
                <img src={HatNo} alt="rarity-img" className="img-fluid" />
                <p>50% 0f birdz</p>
                <div className="progbar">
                  <div className="_50"></div>
                </div>
                <p>No</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={HatPork} alt="rarity-img" className="img-fluid" />
                <p>12% 0f birdz</p>
                <div className="progbar">
                  <div className="_12"></div>
                </div>
                <p>PorkPie</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={HatBeanie} alt="rarity-img" className="img-fluid" />
                <p>11% 0f birdz</p>
                <div className="progbar">
                  <div className="_11"></div>
                </div>
                <p>Beanie</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={HatForward} alt="rarity-img" className="img-fluid" />
                <p>10% 0f birdz</p>
                <div className="progbar">
                  <div className="_10"></div>
                </div>
                <p>Forwards Cap</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={Hatbackward} alt="rarity-img" className="img-fluid" />
                <p>9% 0f birdz</p>
                <div className="progbar">
                  <div className="_9"></div>
                </div>
                <p>Backward Cap</p>
              </div>
              <div className="col-md-3 col-6 my-2">
                <img src={HatDoorag} alt="rarity-img" className="img-fluid" />
                <p>8% 0f birdz</p>
                <div className="progbar">
                  <div className="_8"></div>
                </div>
                <p>Doorag</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
