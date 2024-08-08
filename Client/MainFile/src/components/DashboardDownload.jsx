import Link from "next/link";

const DashboardDownload = () => {
  return (
    <div className="dashboard-body__content">
  <div className="row gy-4">
    <div className="col-lg-12">
      <div className="search-box">
        <input
          type="text"
          className="common-input common-input--lg pill border border-gray-five"
          placeholder="Search Your Downloads"
        />
        <button type="submit" className="btn btn-main btn-icon icon border-0">
          <img src="assets/images/icons/search.svg" alt="" />
        </button>
      </div>
    </div>
    <div className="col-lg-12">
      <div className="download-wrapper bg-white border border-gray-five">
        <div className="download-item flx-between gap-3">
          <div className="download-item__content flx-align flex-nowrap gap-3 flex-grow-1">
            <div className="download-item__thumb flex-shrink-0">
              <img src="assets/images/thumbs/rejected1.png" alt="" />
            </div>
            <div className="download-item__info">
              <h6 className="download-item__title mb-1">
                <Link scroll={false} href="#" className="link">
                  CityScape - Real Estate HTML Template
                </Link>
              </h6>
              <Link scroll={false}
                href="#"
                className="download-item__text text-main mb-3 font-12 hover-text-decoration-underline"
              >
                Tools License
              </Link>
              <div className="common-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="checkbox"
                  id="notifiedd"
                />
                <label
                  className="form-check-label text-body fw-400 mb-0"
                  htmlFor="notifiedd"
                >
                  Get notified by email if this item is updated
                </label>
              </div>
            </div>
          </div>
          <div className="download-item__right flex-shrink-0 d-inline-flex flex-column gap-2 align-items-center">
            <button type="button" className="btn btn-main pill px-4">
              Download{" "}
              <span className="icon-right icon ms-0">
                {" "}
                <i className="las la-download" />
              </span>
            </button>
            <div className="bg-white py-1 px-2 rounded d-inline-block">
              <ul className="star-rating justify-content-center">
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="download-item flx-between gap-3">
          <div className="download-item__content flx-align flex-nowrap gap-3 flex-grow-1">
            <div className="download-item__thumb flex-shrink-0">
              <img src="assets/images/thumbs/rejected2.png" alt="" />
            </div>
            <div className="download-item__info">
              <h6 className="download-item__title mb-1">
                <Link scroll={false} href="#" className="link">
                  FixTurbo - Car Repairing HTML Template
                </Link>
              </h6>
              <Link scroll={false}
                href="#"
                className="download-item__text text-main mb-3 font-12 hover-text-decoration-underline"
              >
                Tools License
              </Link>
              <div className="common-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="checkbox"
                  id="notified"
                />
                <label
                  className="form-check-label text-body fw-400 mb-0"
                  htmlFor="notified"
                >
                  Get notified by email if this item is updated
                </label>
              </div>
            </div>
          </div>
          <div className="download-item__right flex-shrink-0 d-inline-flex flex-column gap-2 align-items-center">
            <button type="button" className="btn btn-main pill px-4">
              Download{" "}
              <span className="icon-right icon ms-0">
                {" "}
                <i className="las la-download" />
              </span>
            </button>
            <div className="bg-white py-1 px-2 rounded d-inline-block">
              <ul className="star-rating justify-content-center">
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="download-item flx-between gap-3">
          <div className="download-item__content flx-align flex-nowrap gap-3 flex-grow-1">
            <div className="download-item__thumb flex-shrink-0">
              <img src="assets/images/thumbs/rejected1.png" alt="" />
            </div>
            <div className="download-item__info">
              <h6 className="download-item__title mb-1">
                <Link scroll={false} href="#" className="link">
                  CityScape - Real Estate HTML Template
                </Link>
              </h6>
              <Link scroll={false}
                href="#"
                className="download-item__text text-main mb-3 font-12 hover-text-decoration-underline"
              >
                Tools License
              </Link>
              <div className="common-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="checkbox"
                  id="notifiedddd"
                />
                <label
                  className="form-check-label text-body fw-400 mb-0"
                  htmlFor="notifiedddd"
                >
                  Get notified by email if this item is updated
                </label>
              </div>
            </div>
          </div>
          <div className="download-item__right flex-shrink-0 d-inline-flex flex-column gap-2 align-items-center">
            <button type="button" className="btn btn-main pill px-4">
              Download{" "}
              <span className="icon-right icon ms-0">
                {" "}
                <i className="las la-download" />
              </span>
            </button>
            <div className="bg-white py-1 px-2 rounded d-inline-block">
              <ul className="star-rating justify-content-center">
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="download-item flx-between gap-3">
          <div className="download-item__content flx-align flex-nowrap gap-3 flex-grow-1">
            <div className="download-item__thumb flex-shrink-0">
              <img src="assets/images/thumbs/rejected2.png" alt="" />
            </div>
            <div className="download-item__info">
              <h6 className="download-item__title mb-1">
                <Link scroll={false} href="#" className="link">
                  FixTurbo - Car Repairing HTML Template
                </Link>
              </h6>
              <Link scroll={false}
                href="#"
                className="download-item__text text-main mb-3 font-12 hover-text-decoration-underline"
              >
                Tools License
              </Link>
              <div className="common-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="checkbox"
                  id="notifieds"
                />
                <label
                  className="form-check-label text-body fw-400 mb-0"
                  htmlFor="notifieds"
                >
                  Get notified by email if this item is updated
                </label>
              </div>
            </div>
          </div>
          <div className="download-item__right flex-shrink-0 d-inline-flex flex-column gap-2 align-items-center">
            <button type="button" className="btn btn-main pill px-4">
              Download{" "}
              <span className="icon-right icon ms-0">
                {" "}
                <i className="las la-download" />
              </span>
            </button>
            <div className="bg-white py-1 px-2 rounded d-inline-block">
              <ul className="star-rating justify-content-center">
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
                <li className="star-rating__item font-14">
                  <i className="fas fa-star" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default DashboardDownload;