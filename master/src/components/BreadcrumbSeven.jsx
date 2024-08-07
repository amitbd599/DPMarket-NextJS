import Link from "next/link";

const BreadcrumbSeven = () => {
    return (
        <section className="breadcrumb border-bottom p-0 d-block section-bg position-relative z-index-1">
        <div className="breadcrumb-two">
          <img
            src="assets/images/gradients/breadcrumb-gradient-bg.png"
            alt=""
            className="bg--gradient"
          />
          <div className="container container-two">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="breadcrumb-two-content text-center">
                  <ul className="breadcrumb-list flx-align gap-2 mb-2 justify-content-center">
                    <li className="breadcrumb-list__item font-14 text-body">
                      <Link scroll={false}
                        href="/"
                        className="breadcrumb-list__link text-body hover-text-main"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-list__item font-14 text-body">
                      <span className="breadcrumb-list__icon font-10">
                        <i className="fas fa-chevron-right" />
                      </span>
                    </li>
                    <li className="breadcrumb-list__item font-14 text-body">
                      <span className="breadcrumb-list__text">Blog</span>
                    </li>
                  </ul>
                  <h3 className="breadcrumb-two-content__title mb-0 text-capitalize">
                    Latest Blogs And Articles
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
}

export default BreadcrumbSeven;