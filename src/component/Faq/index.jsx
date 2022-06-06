import React from "react";
import "./style.css";

export default function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-10 col-12 ml-auto mr-auto">
            <h1 className="fw-light t-shadow text-center mb-5 title-font">
              <span className="text-light ">Frequently Asked</span> Questions
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
                      What is the minting cost?
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
                    <p className="text-light">TBA (We will make it public 2 week before mint)</p>
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
                      What is the supply?
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
                      There will be a total of 1111 I am Every Woman
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
                      What Solana wallet can I use?
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
                    <p className="text-light">Phanton, Sollet and Solflare.</p>
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
                      When is the mint?
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
                    <p className="text-light">16 July 2022 20:00:00 UTC</p>
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
                      What blockchain is the project hosted on?
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
                    <p className="text-light">Solana</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
