import Link from "next/link";

const BlogTwo = () => {
  return (
    <section className="article padding-y-120">
      <div className="container container-two">
        <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
          <div className="section-heading__inner">
            <h3 className="section-heading__title">
              Browse all latest blogs and articles
            </h3>
          </div>
          <Link scroll={false} href="/blog" className="btn btn-outline-light btn-lg pill">
            Browse All Articles
          </Link>
        </div>
        <div className="article-item-wrapper">
          <div className="article-item">
            <div className="article-item__inner d-flex position-relative">
              <div className="article-item__start">
                <div className="user-info">
                  <div className="user-info__thumb">
                    <img src="assets/images/thumbs/user-info-img1.png" alt="" />
                  </div>
                  <span className="user-info__text mt-2 mb-1 font-14 text-heading">
                    Posted by
                  </span>
                  <h6 className="user-info__name font-16 font-body fw-600 mb-0">
                    Ralph Edwards
                  </h6>
                </div>
              </div>
              <div className="article-item__center d-flex align-items-center">
                <div className="article-item__content">
                  <div className="article-item__top flx-align">
                    <Link scroll={false} href="/blog" className="article-item__tag font-14">
                      Startup
                    </Link>
                    <Link scroll={false} href="/blog" className="article-item__tag font-14">
                      Marketing
                    </Link>
                    <span className="text-heading font-16 fw-500">
                      June 24, 2024
                    </span>
                  </div>
                  <h4 className="article-item__title mb-3">
                    <Link scroll={false} href="/blog-details" className="link">
                      Data-Driven Insights Unlock The Hidden Potential
                    </Link>
                  </h4>
                  <p className="article-item__desc">
                    Etiam id euismod odio. Ut euismod sem a lacus ringill a
                    hendrerit. facilisi orbi a arcu turpis...
                  </p>
                </div>
                <div className="article-item__thumb">
                  <img src="assets/images/thumbs/blog1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="article-item__end flex-shrink-0">
              <Link scroll={false} href="/blog-details" className="btn-simple">
                Read More
                <span className="icon font-26">
                  <i className="las la-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
          <div className="article-item">
            <div className="article-item__inner d-flex position-relative">
              <div className="article-item__start">
                <div className="user-info">
                  <div className="user-info__thumb">
                    <img src="assets/images/thumbs/user-info-img2.png" alt="" />
                  </div>
                  <span className="user-info__text mt-2 mb-1 font-14 text-heading">
                    Posted by
                  </span>
                  <h6 className="user-info__name font-16 font-body fw-600 mb-0">
                    Jacob Jones
                  </h6>
                </div>
              </div>
              <div className="article-item__center d-flex align-items-center">
                <div className="article-item__content">
                  <div className="article-item__top flx-align">
                    <Link scroll={false} href="/blog" className="article-item__tag font-14">
                      Startup
                    </Link>
                    <Link scroll={false} href="/blog" className="article-item__tag font-14">
                      Marketing
                    </Link>
                    <span className="text-heading font-16 fw-500">
                      June 24, 2024
                    </span>
                  </div>
                  <h4 className="article-item__title mb-3">
                    <Link scroll={false} href="/blog-details" className="link">
                      we offer best training for individuals and teams
                    </Link>
                  </h4>
                  <p className="article-item__desc">
                    Etiam id euismod odio. Ut euismod sem a lacus ringill a
                    hendrerit. facilisi orbi a arcu turpis...
                  </p>
                </div>
                <div className="article-item__thumb">
                  <img src="assets/images/thumbs/blog2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="article-item__end flex-shrink-0">
              <Link scroll={false} href="/blog-details" className="btn-simple">
                Read More
                <span className="icon font-26">
                  <i className="las la-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
          <div className="article-item">
            <div className="article-item__inner d-flex position-relative">
              <div className="article-item__start">
                <div className="user-info">
                  <div className="user-info__thumb">
                    <img src="assets/images/thumbs/user-info-img1.png" alt="" />
                  </div>
                  <span className="user-info__text mt-2 mb-1 font-14 text-heading">
                    Posted by
                  </span>
                  <h6 className="user-info__name font-16 font-body fw-600 mb-0">
                    Jenny Wilson
                  </h6>
                </div>
              </div>
              <div className="article-item__center d-flex align-items-center">
                <div className="article-item__content">
                  <div className="article-item__top flx-align">
                    <Link scroll={false} href="/blog" className="article-item__tag font-14">
                      Startup
                    </Link>
                    <Link scroll={false} href="/blog" className="article-item__tag font-14">
                      Marketing
                    </Link>
                    <span className="text-heading font-16 fw-500">
                      June 24, 2024
                    </span>
                  </div>
                  <h4 className="article-item__title mb-3">
                    <Link scroll={false} href="/blog-details" className="link">
                      The analytics feature is like having a personal fortune.
                    </Link>
                  </h4>
                  <p className="article-item__desc">
                    Etiam id euismod odio. Ut euismod sem a lacus ringill a
                    hendrerit. facilisi orbi a arcu turpis...
                  </p>
                </div>
                <div className="article-item__thumb">
                  <img src="assets/images/thumbs/blog3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="article-item__end flex-shrink-0">
              <Link scroll={false} href="/blog-details" className="btn-simple">
                Read More
                <span className="icon font-26">
                  <i className="las la-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTwo;
