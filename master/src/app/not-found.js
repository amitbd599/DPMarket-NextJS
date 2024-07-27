import Link from "next/link";
import { Fragment } from "react";

export default function NotFound() {
  return (
    <Fragment>
      {/* Error Section start */}
      <section className="error-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wrapper">
                <div
                  className="img-file"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img
                    className="img-fluid"
                    src="/assets/img/error.png"
                    alt=""
                  />
                </div>
                <div className="text-file">
                  <h4 data-aos="fade-up" data-aos-delay="300">
                    PAGE NOT FOUND!
                  </h4>
                  <p data-aos="fade-up" data-aos-delay="400">
                    Sorry we can't find that page! The page you are looking
                    <br />
                    for was never existed.
                  </p>
                </div>
                <div
                  className="d-adjust"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <Link className="default-btn" href="/">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
