import React from "react";
import "./style.css";
import AboutOne from "../../assets/images/aboutOne.png";
import AboutTwo from "../../assets/images/aboutTwo.png";
import AboutThree from "../../assets/images/aboutThree.png";
import AboutFour from "../../assets/images/aboutFour.png";
import AboutFive from "../../assets/images/aboutFive.png";

export default function Explore() {
  return (
    <section class="explore" id="explore">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <div class="col-12 py-5">
              <div className="cardExplore" data-aos="fade-left">
                <h4>
                  <span>
                    <img src={AboutThree} alt="about-1" />
                  </span>{" "}
                  Explore a lifetime opportunity
                </h4>
                <p>
                  We know how hard it is for women in the world we live in. The
                  societal norms have been unfavorably giving women little or
                  less opportunity than their counterparts. This is why we
                  created this NFT place, I am Every Woman.
                </p>
              </div>
              <div className="cardExplore" data-aos="fade-left">
                <h4>
                  <span>
                    <img src={AboutTwo} alt="about-1" />
                  </span>{" "}
                  Build a brand with us
                </h4>
                <p>
                  Join a community that thinks highly of you. A community of
                  Blockchain professionals and experts that are ready to support
                  your every effort. Create, build, and collaborate with other
                  investors to publish your NFTs on our channel. Let's give you
                  the platform you need to build your brand.
                </p>
              </div>
              <div className="cardExplore" data-aos="fade-left">
                <h4>
                  <span>
                    <img src={AboutOne} alt="about-1" />
                  </span>{" "}
                  An opportunity like no other
                </h4>
                <p>
                  Once you register with us, there are so many opportunities to
                  enjoy. We support your every move. Your progress and success
                  are our concerns. We'll provide you opportunities to have your
                  designs featured in our official collections giving it the
                  platform you need. There are also opportunities to meet with
                  top brands owned by your fellow women.
                </p>
              </div>
              <div className="cardExplore" data-aos="fade-left">
                <h4>
                  <span>
                    <img src={AboutFour} alt="about-1" />
                  </span>{" "}
                  Join a Community That’s Committed to your Growth{" "}
                </h4>
                <p>
                  I am Every woman is keen on your growth as a creator on our
                  NFT Platform. That's why everything we designed and put in
                  place is to achieve your excellence. These tools will assist
                  you on your journey to greatness.
                </p>
              </div>
              <div className="cardExplore" data-aos="fade-left">
                <h4>
                  <span>
                    <img src={AboutFive} alt="about-1" />
                  </span>{" "}
                  Your security, privacy, and ownership comes first{" "}
                </h4>
                <p>
                  Although we might showcase your art once in a while, you own
                  the total claim to them. We will in no way breach the privacy
                  and security in place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
