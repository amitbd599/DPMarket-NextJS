import Link from "next/link";

const BlogDetails = () => {
    return (
        <>

        {/* Blog Details Section */}
        <section className="blog-details padding-y-120 position-relative overflow-hidden">
          <div className="container container-two">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {/* blog details top Start */}
                <div className="blog-details-top mb-64">
                  <div className="blog-details-top__info flx-align gap-3 mb-4">
                    <div className="blog-details-top__thumb flx-align gap-2">
                      <img src="assets/images/thumbs/blog-details-user.png" alt="" />
                      <span className="text-heading fw-500">Michel Smith</span>
                    </div>
                    <span className="blog-details-top__date flx-align gap-2">
                      <img src="assets/images/icons/clock.svg" alt="" />
                      25 Jan 2024
                    </span>
                  </div>
                  <h2 className="blog-details-top__title mb-4 text-capitalize">
                    How to hire a right business executive for your company
                  </h2>
                  <p className="blog-details-top__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi
                    pellentesque lorem turpis feugiat non sed sed sed aliquam lectus
                    sodales gravida turpis maassa odio faucibus accumsan.
                  </p>
                </div>
                {/* blog details top End */}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {/* blog details content Start */}
                <div className="blog-details-content">
                  <div className="blog-details-content__thumb mb-32">
                    <img src="assets/images/thumbs/blog-details-thumb1.png" alt="" />
                  </div>
                  <p className="blog-details-content__desc mb-40">
                    Design and development may seem like two separate worlds, but they
                    can work together seamlessly to create stunning and functional
                    software. In this post, we'll explore the benefits of integrating
                    design and development early on in a project.
                  </p>
                  <h4 className="blog-details-content__title mb-24">
                    Interview multiple candidates
                  </h4>
                  <p className="blog-details-content__desc mb-40">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi
                    pellentesque lorem turpis feugiat non sed sed sed aliquam lectus
                    sodales gravida turpis maassa.
                  </p>
                  <div className="blog-details-content__thumbs mb-40">
                    <div className="row gy-4">
                      <div className="col-sm-5 col-6">
                        <div className="blog-details-content__thumb">
                          <img
                            src="assets/images/thumbs/blog-details-thumb2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-7 col-6">
                        <div className="blog-details-content__thumb">
                          <img
                            src="assets/images/thumbs/blog-details-thumb3.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h5 className="blog-details-content__title mb-3">
                    Search for the right experience
                  </h5>
                  <p className="blog-details-content__desc mb-32">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi
                    pellentesque lorem turpis feugiat non sed sed sed aliquam lectus
                    sodales gravida turpis maassa odio. we'll explore the importance
                    of design in the software development process and how it can lead
                    to more successful projects.
                  </p>
                  <p className="blog-details-content__desc mb-24">
                    Lorem ipsum dolor sit amet consectetur. Ipsum vitae tincidunt
                    adipiscing sed tellus nulla sit ultrices. Arcu maecenas quam
                    iaculis ullamcorper id posuere. Leo congue nulla quam pharetra.
                    Pellentesque morbi dictumst congue risus luctus.
                  </p>
                  <ul className="product-list mb-40">
                    <li className="product-list__item font-18 fw-500 text-heading">
                      Morbi dictumst congue risus luctus
                    </li>
                    <li className="product-list__item font-18 fw-500 text-heading">
                      Porttitor nibh est vulputate vitae sem vitae.
                    </li>
                    <li className="product-list__item font-18 fw-500 text-heading">
                      Amet tellus nisl risus lorem vulputate velit eget.
                    </li>
                    <li className="product-list__item font-18 fw-500 text-heading">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                  {/* Quote Text Start */}
                  <div className="quote-text mb-40">
                    <img
                      src="assets/images/icons/quote-icon.svg"
                      alt=""
                      className="quote-text__icon"
                    />
                    <p className="quote-text__desc mb-3 font-20 fw-500 text-heading">
                      “Through their vision, determination, and exacting standards,
                      the winning young developers inspire not only their peers in the
                      Apple developer.
                    </p>
                    <h6 className="quote-text__name">Esabela Marun</h6>
                  </div>
                  {/* Quote Text Ebd */}
                  <h5 className="blog-details-content__title mb-3">
                    Once you hire them, give them access for all tools &amp; resources
                    for success
                  </h5>
                  <p className="blog-details-content__desc mb-40">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    suspendisse convallis enim tincidunt nunc condimentum facilisi
                    accumsan tempor donec.
                  </p>
                  {/* Post Tag & Share Start */}
                  <div className="flx-between gap-2 mb-40 mt-40">
                    <div className="post-tag flx-align gap-3">
                      <span className="post-tag__text text-heading fw-500">
                        Post Tag:{" "}
                      </span>
                      <ul className="post-tag__list flx-align gap-2">
                        <li className="post-tag__item">
                          <Link scroll={false}
                            href="/blog"
                            className="post-tag__link font-14 text-heading pill fw-500"
                          >
                            Business
                          </Link>
                        </li>
                        <li className="post-tag__item">
                          <Link scroll={false}
                            href="/blog"
                            className="post-tag__link font-14 text-heading pill fw-500"
                          >
                            Marketing
                          </Link>
                        </li>
                        <li className="post-tag__item">
                          <Link scroll={false}
                            href="/blog"
                            className="post-tag__link font-14 text-heading pill fw-500"
                          >
                            Strategy
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="socail-share flx-align gap-3">
                      <span className="socail-share__text text-heading fw-500">
                        Share On:{" "}
                      </span>
                      <ul className="social-icon-list colorful-style">
                        <li className="social-icon-list__item">
                          <Link scroll={false}
                            href="https://www.facebook.com"
                            className="social-icon-list__link text-heading font-16 flex-center"
                          >
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li className="social-icon-list__item">
                          <Link scroll={false}
                            href="https://www.twitter.com"
                            className="social-icon-list__link text-heading font-16 flex-center"
                          >
                            {" "}
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li className="social-icon-list__item">
                          <Link scroll={false}
                            href="https://www.google.com"
                            className="social-icon-list__link text-heading font-16 flex-center"
                          >
                            {" "}
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Post Tag & Share End */}
                  {/* Advisor content Start */}
                  <div className="advisor p-3 p-lg-4 mt-40 mb-64 section-bg d-flex flex-sm-row flex-column align-items-start gap-md-4 gap-3">
                    <div className="advisor__thumb flex-shrink-0">
                      <img src="assets/images/thumbs/advisor-img.png" alt="" />
                    </div>
                    <div className="advisor__content flex-grow-1">
                      <h6 className="advisor__name font-18 mb-2">Brooklyn Simmons</h6>
                      <span className="advisor__designation text-heading mb-3 fw-500">
                        Chief Advisor{" "}
                      </span>
                      <p className="advisor__desc">
                        Lorem ipsum dolor sit amet consectetur. Nec nunc pellentesque
                        massa pretium. Quam sapien nec venenatis vivamus sed cras
                        faucibus.
                      </p>
                    </div>
                  </div>
                  {/* Advisor content End */}
                  {/* Comment Form Start */}
                  <div className="comment-form mt-64 mb-64" id="comment-box">
                    <h5 className="mb-32">Post a comment</h5>
                    <form action="#" autoComplete="off">
                      <div className="row gy-4">
                        <div className="col-sm-6 col-xs-6">
                          <label
                            htmlFor="name"
                            className="form-label mb-2 font-18 font-heading fw-600"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="common-input common-input--grayBg border"
                            id="name"
                            placeholder="Your name here"
                          />
                        </div>
                        <div className="col-sm-6 col-xs-6">
                          <label
                            htmlFor="email"
                            className="form-label mb-2 font-18 font-heading fw-600"
                          >
                            Your Mail
                          </label>
                          <input
                            type="email"
                            className="common-input common-input--grayBg border"
                            id="email"
                            placeholder="Your email here "
                          />
                        </div>
                        <div className="col-sm-12">
                          <label
                            htmlFor="comment"
                            className="form-label mb-2 font-18 font-heading fw-600"
                          >
                            Your Comment
                          </label>
                          <textarea
                            className="common-input common-input--grayBg border"
                            id="comment"
                            placeholder="Type your comment"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-sm-12">
                          <div className="common-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkbox"
                              id="agree"
                            />
                            <label
                              className="form-check-label mb-0 fw-400 font-16 text-body"
                              htmlFor="agree"
                            >
                              Save my details for future purchase
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <button className="btn btn-main btn-lg pill">
                            {" "}
                            Submit
                            <span className="icon icon-right line-height-1 font-20">
                              <i className="las la-arrow-right" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* Comment Form End */}
                  {/* Comment Start */}
                  <div className="comment mt-64 mb-64">
                    <h5 className="mb-32">2 Comments</h5>
                    <ul className="comment-list">
                      <li className="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                        <div className="comment-list__thumb flex-shrink-0">
                          <img
                            src="assets/images/thumbs/comment1.png"
                            className="cover-img"
                            alt=""
                          />
                        </div>
                        <div className="comment-list__content">
                          <div className="flx-between gap-2 align-items-start">
                            <div>
                              <h6 className="comment-list__name font-18 mb-sm-2 mb-1">
                                Jenny Wilson
                              </h6>
                              <span className="comment-list__date font-14">
                                Jan 21, 2024 at 11:25 pm
                              </span>
                            </div>
                            <a
                              className="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline"
                              href="#comment-box"
                            >
                              Reply
                              <span className="icon">
                                <img
                                  src="assets/images/icons/reply-icon.svg"
                                  alt=""
                                />
                              </span>
                            </a>
                          </div>
                          <p className="comment-list__desc mt-3">
                            Lorem ipsum dolor sit amet consectetur. Nec nunc
                            pellentesque massa pretium. Quam sapien nec venenatis
                            vivamus sed cras faucibus mi viverra. Quam faucibus morbi
                            cras vitae neque. Necnunc pellentesque massa pretium.
                          </p>
                        </div>
                      </li>
                      <li>
                        <ul className="comment-list comment-list--two">
                          <li className="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                            <div className="comment-list__thumb flex-shrink-0">
                              <img
                                src="assets/images/thumbs/comment2.png"
                                className="cover-img"
                                alt=""
                              />
                            </div>
                            <div className="comment-list__content">
                              <div className="flx-between gap-2 align-items-start">
                                <div>
                                  <h6 className="comment-list__name font-18 mb-sm-2 mb-1">
                                    Courtney Henry
                                  </h6>
                                  <span className="comment-list__date font-14">
                                    Jan 21, 2024 at 11:25 pm
                                  </span>
                                </div>
                                <a
                                  className="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline"
                                  href="#comment-box"
                                >
                                  Reply
                                  <span className="icon">
                                    <img
                                      src="assets/images/icons/reply-icon.svg"
                                      alt=""
                                    />
                                  </span>
                                </a>
                              </div>
                              <p className="comment-list__desc mt-3">
                                Lorem ipsum dolor sit amet consectetur. Nec nunc
                                pellentesque massa pretium. Quam sapien nec venenatis
                                vivamus sed cras faucibus.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* Comment End */}
                </div>
                {/* blog details content End*/}
              </div>
            </div>
          </div>
        </section>

        {/* Article Section */}
        <section className="article padding-y-120 section-bg">
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
                          {" "}
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
                    Read More{" "}
                    <span className="icon font-26">
                      <i className="las la-arrow-right" />
                    </span>{" "}
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
                    Read More{" "}
                    <span className="icon font-26">
                      <i className="las la-arrow-right" />
                    </span>{" "}
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
                    Read More{" "}
                    <span className="icon font-26">
                      <i className="las la-arrow-right" />
                    </span>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      
    );
}

export default BlogDetails;