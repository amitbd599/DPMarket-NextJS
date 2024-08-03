const BlogOne = () => {
  return (
    <section className="blog padding-y-120 section-bg position-relative z-index-1 overflow-hidden">
      <img
        src="assets/images/shapes/pattern-five.png"
        className="position-absolute end-0 top-0 z-index--1"
        alt=""
      />
      <div className="container container-two">
        <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
          <div className="section-heading__inner">
            <h3 className="section-heading__title">
              Browse all latest blogs and articles
            </h3>
          </div>
          <a href="blog.html" className="btn btn-main btn-lg pill">
            Browse All Articles
          </a>
        </div>
        <div className="row gy-4">
          <div className="col-lg-4 col-sm-6">
            <div className="post-item">
              <div className="post-item__thumb">
                <a href="blog-details.html" className="link">
                  <img
                    src="assets/images/thumbs/blog1.png"
                    className="cover-img"
                    alt=""
                  />
                </a>
              </div>
              <div className="post-item__content">
                <div className="post-item__top flx-align">
                  <a
                    href="blog.html"
                    className="post-item__tag pill font-14 text-heading fw-500 hover-text-main"
                  >
                    Hiring
                  </a>
                  <div className="post-item__date font-14 flx-align gap-2 font-14 text-heading fw-500">
                    <span className="icon">
                      <img
                        src="assets/images/icons/calendar.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/calendar-white.svg"
                        alt=""
                        className="dark-version"
                      />
                    </span>
                    <span className="text">Jan 17, 2024</span>
                  </div>
                </div>
                <h5 className="post-item__title">
                  <a href="blog-details.html" className="link">
                    How to hire a right business executive for your company
                  </a>
                </h5>
                <a
                  href="blog-details.html"
                  className="btn btn-outline-light pill fw-600"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="post-item">
              <div className="post-item__thumb">
                <a href="blog-details.html" className="link">
                  <img
                    src="assets/images/thumbs/blog2.png"
                    className="cover-img"
                    alt=""
                  />
                </a>
              </div>
              <div className="post-item__content">
                <div className="post-item__top flx-align">
                  <a
                    href="blog.html"
                    className="post-item__tag pill font-14 text-heading fw-500 hover-text-main"
                  >
                    Workshop
                  </a>
                  <div className="post-item__date font-14 flx-align gap-2 font-14 text-heading fw-500">
                    <span className="icon">
                      <img
                        src="assets/images/icons/calendar.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/calendar-white.svg"
                        alt=""
                        className="dark-version"
                      />
                    </span>
                    <span className="text">Jan 17, 2024</span>
                  </div>
                </div>
                <h5 className="post-item__title">
                  <a href="blog-details.html" className="link">
                    The Gig Economy: Adapting to a Flexible Workforce
                  </a>
                </h5>
                <a
                  href="blog-details.html"
                  className="btn btn-outline-light pill fw-600"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="post-item">
              <div className="post-item__thumb">
                <a href="blog-details.html" className="link">
                  <img
                    src="assets/images/thumbs/blog3.png"
                    className="cover-img"
                    alt=""
                  />
                </a>
              </div>
              <div className="post-item__content">
                <div className="post-item__top flx-align">
                  <a
                    href="blog.html"
                    className="post-item__tag pill font-14 text-heading fw-500 hover-text-main"
                  >
                    Project Management
                  </a>
                  <div className="post-item__date font-14 flx-align gap-2 font-14 text-heading fw-500">
                    <span className="icon">
                      <img
                        src="assets/images/icons/calendar.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/calendar-white.svg"
                        alt=""
                        className="dark-version"
                      />
                    </span>
                    <span className="text">Jan 17, 2024</span>
                  </div>
                </div>
                <h5 className="post-item__title">
                  <a href="blog-details.html" className="link">
                    The Future of Remote Work: Strategies for Success
                  </a>
                </h5>
                <a
                  href="blog-details.html"
                  className="btn btn-outline-light pill fw-600"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOne;
