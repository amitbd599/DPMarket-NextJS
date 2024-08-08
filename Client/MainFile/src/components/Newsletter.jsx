const Newsletter = () => {
  return (
    <section className="newsletter position-relative z-index-1 overflow-hidden">
      <img
        src="assets/images/gradients/newsletter-gradient-bg.png"
        alt=""
        className="bg--gradient"
      />
      <img
        src="assets/images/shapes/element1.png"
        alt=""
        className="element two"
      />
      <img
        src="assets/images/shapes/element2.png"
        alt=""
        className="element one"
      />
      <img
        src="assets/images/shapes/line-vector-one.png"
        alt=""
        className="line-vector one"
      />
      <img
        src="assets/images/shapes/line-vector-two.png"
        alt=""
        className="line-vector two"
      />
      <img
        src="assets/images/thumbs/newsletter-man.png"
        alt=""
        className="newsletter-man"
      />
      <div className="container container-two">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="newsletter-content">
              <h3 className="newsletter-content__title text-white mb-2 text-center">
                Get update Newsletter
              </h3>
              <p className="newsletter-content__desc pb-2 text-white text-center font-18 fw-300">
                Subscribe our newsletter to get the latest news
              </p>
              <form
                action="#"
                className="mt-4 newsletter-box position-relative"
              >
                <input
                  type="text"
                  className="form-control common-input common-input--lg pill text-white"
                  placeholder="Enter Mail"
                />
                <button
                  type="submit"
                  className="btn btn-main btn-lg pill flx-align gap-1"
                >
                  Subscribe <span className="text d-sm-flex d-none">Now</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
