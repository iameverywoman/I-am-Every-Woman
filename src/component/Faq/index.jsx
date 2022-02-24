import React from "react";
import "./style.css";

export default function Faq() {
  return (
    <section id="faq" className="faq">
      <div className="container py-5">
        <h1>Frequently Asked Questions</h1>
        <div className="row mt-5">
          <div className="col-md-12  mt-3">
            <div className="card-faq p-3">
              <h4>Birdz of a Refined Feather.</h4>
              <p>
                We deconstructed many layers from the ThugBirdz collection and
                subsequently reconstructed a collection, ensuring each xThugBird
                is uniquely different from the Birdz in the ThugBirdz
                collection.
              </p>
              <p>
                The team has chosen just a single color for the background; a
                stunning shade of yellow. This background color offers an
                obvious distinction from those in the ThugBirdz collection.
              </p>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="card-faq p-3">
              {" "}
              <h4>Generational Birdz?</h4>
              <p>
                Expansion ThugBirdz look out for one another, and family is
                everything to these warm-blooded vertebrates. In order to ensure
                their loved ones are taken care of, each transaction related to
                the buying and selling of xThugBirdz will incur a 7% creator
                royalty that ultimately goes back to the community. The proceeds
                generated will facilitate two things:
              </p>
              <ol type="1">
                <li>
                  <p>
                    {" "}
                    80% of the proceeds will be used to acquire Expansion
                    ThugBirdz will be locked in the XTB Vault forever (unless
                    voted upon by the community to release them in an agreed
                    manner I.e. giveaways etc).
                  </p>
                </li>
                <li>
                  <p>
                    20% of the proceeds will be used to maintain the Expansion
                    ThugBirdz ecosystem i.e. community moderators, social media
                    manager, development, etc.
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="card-faq p-3">
              <h4>The Launch</h4>
              <p>
                There will be no whitelist. There will be no presale. There will
                be no mint limit. Expansion ThugBirdz will be instantly revealed
                and able to be minted on March 8th, 2022.
              </p>
              <p>
                Max Supply: 3,333 <br /> Price: 1 SOL <br /> Date: Tuesday,
                March 8th 2022 at 8PM UTC <br /> Rarity Ranking: Initiated the
                day of launch <br /> Follow our communication channels for the
                latest updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
