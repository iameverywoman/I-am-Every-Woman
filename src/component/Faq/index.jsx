import React from "react";
import "./style.css";

export default function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-10 col-12 ml-auto mr-auto">
            <h1 className="fw-light t-shadow text-center mb-5">
              <span className="text-light">Frequently Asked</span> Questionss
            </h1>
            <div
              className="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="panel panel-default">
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
                      About us KAOS TRADING CLUB ?
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
                      We are a club with 4 years of experience made up of
                      members from all over the world We trade (Futures,
                      Cryptocurrencies, Forex).
                    </p>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
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
                      What are eSports ?
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
                      They are electronic sports that are competed
                      professionally moving millions of dollars in sponsorships
                      and others.
                    </p>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
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
                      How many pieces of supply ?
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
                    <p className="text-light">Only 888 pieces.</p>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
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
                      When is the date of the MINT ?
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
                    <p className="text-light">19 february</p>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
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
                      What will be the cost of the MINT ?
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
                    <p className="text-light">0.9 SOL</p>
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
