import Link from "next/link";

const NewsletterTwo = () => {
    return (
        <section className="newsletter-two padding-t-60 padding-b-120 section-bg position-relative z-index-1 overflow-hidden">
        <img
          src="assets/images/gradients/breadcrumb-gradient-bg.png"
          alt=""
          className="bg--gradient"
        />
        <img
          src="assets/images/shapes/element-moon3.png"
          alt=""
          className="element one"
        />
        <img
          src="assets/images/shapes/element-moon1.png"
          alt=""
          className="element three"
        />
        <div className="container container-two">
          <div className="flx-between gap-3">
            <div className="newsletter-two-content">
              <h3 className="newsletter-two-content__title mb-3">
                Get all items for just $59!
              </h3>
              <p className="newsletter-two-content__desc text-heading font-18">
                With our broad assortment of components, making and tweaking designs
                becomes natural. Disregard coding and partake in our topics.
              </p>
            </div>
            <Link scroll={false} href="/all-product" className="btn btn-main btn-lg pill">
              Grabe All Product
            </Link>
          </div>
        </div>
      </section>
      
    );
}

export default NewsletterTwo;