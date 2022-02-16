import React from "react";
import "./style.css";

export default function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-10 col-12 ml-auto mr-auto">
            <h1 className="fw-light t-shadow text-center mb-5">
              <span className="text-light">Frequently Asked</span> Questions
            </h1>
            <div
              className="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="panel panel-default" data-aos="fade-left">
                <div
                  className="panel-heading p-3 mb-3"
                  role="tab"
                  id="heading0"
                >
                  <h3 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      title=""
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapse0"
                      aria-expanded="true"
                      aria-controls="collapse0"
                    >
                      What is the Jaguar Club?
                    </a>
                  </h3>
                </div>
                <div
                  id="collapse0"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="heading0"
                >
                  <div className="panel-body px-3 mb-4">
                    <p className="text-light">
                      The Jaguar Club is a 1,111 collection looking to take over
                      the Solana Metaverse!
                    </p>
                  </div>
                </div>
              </div>

              <div className="panel panel-default" data-aos="fade-left">
                <div
                  className="panel-heading p-3 mb-3"
                  role="tab"
                  id="heading1"
                >
                  <h3 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      title=""
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      What is the total Jaguar Club supply?
                    </a>
                  </h3>
                </div>
                <div
                  id="collapse1"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="heading1"
                >
                  <div className="panel-body px-3 mb-4">
                    <p className="text-light">
                      The total supply of Jaguar Club is 1,111.
                    </p>
                  </div>
                </div>
              </div>

              <div className="panel panel-default" data-aos="fade-left">
                <div
                  className="panel-heading p-3 mb-3"
                  role="tab"
                  id="heading2"
                >
                  <h3 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      title=""
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapse2"
                      aria-expanded="true"
                      aria-controls="collapse2"
                    >
                      What is the minting cost?
                    </a>
                  </h3>
                </div>
                <div
                  id="collapse2"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="heading2"
                >
                  <div className="panel-body px-3 mb-4">
                    <p className="text-light">
                      Each Jaguar will cost 0.35 SOL to mint.
                    </p>
                  </div>
                </div>
              </div>

              <div className="panel panel-default" data-aos="fade-left">
                <div
                  className="panel-heading p-3 mb-3"
                  role="tab"
                  id="heading3"
                >
                  <h3 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      title=""
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapse3"
                      aria-expanded="true"
                      aria-controls="collapse3"
                    >
                      What Solana wallets can I use?
                    </a>
                  </h3>
                </div>
                <div
                  id="collapse3"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="heading3"
                >
                  <div className="panel-body px-3 mb-4">
                    <p className="text-light"> Phantom, Sollet and Solflare.</p>
                  </div>
                </div>
              </div>

              <div className="panel panel-default" data-aos="fade-left">
                <div
                  className="panel-heading p-3 mb-3"
                  role="tab"
                  id="heading2"
                >
                  <h3 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      title=""
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapse4"
                      aria-expanded="true"
                      aria-controls="collapse4"
                    >
                      Where can I sell my Jaguar Club?
                    </a>
                  </h3>
                </div>
                <div
                  id="collapse4"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="heading2"
                >
                  <div className="panel-body px-3 mb-4">
                    <p className="text-light">Magic Eden.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel panel-default" data-aos="fade-left">
              <div className="panel-heading p-3 mb-3" role="tab" id="heading2">
                <h3 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    title=""
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse5"
                    aria-expanded="true"
                    aria-controls="collapse5"
                  >
                    What blockchain is the project hosted on?
                  </a>
                </h3>
              </div>
              <div
                id="collapse5"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading2"
              >
                <div className="panel-body px-3 mb-4">
                  <p className="text-light">Solana Blockchain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
