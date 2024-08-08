

'use client'
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DashboardInner = () => {

    let series = [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }]
    let options = {
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    }
    return (
        <div className="dashboard-body__content">
            {/* welcome balance Content Start */}
            <div className="welcome-balance mt-2 mb-40 flx-between gap-2">
                <div className="welcome-balance__left">
                    <h4 className="welcome-balance__title mb-0">Welcome back! Michel</h4>
                </div>
                <div className="welcome-balance__right flx-align gap-2">
                    <span className="welcome-balance__text fw-500 text-heading">
                        Available Balance:
                    </span>
                    <h4 className="welcome-balance__balance mb-0">$580.00</h4>
                </div>
            </div>
            {/* welcome balance Content End */}
            <div className="dashboard-body__item-wrapper">
                {/* dashboard body Item Start */}
                <div className="dashboard-body__item">
                    <div className="row gy-4">
                        <div className="col-xl-3 col-sm-6">
                            <div className="dashboard-widget">
                                <img
                                    src="assets/images/shapes/widget-shape1.png"
                                    alt=""
                                    className="dashboard-widget__shape one"
                                />
                                <img
                                    src="assets/images/shapes/widget-shape2.png"
                                    alt=""
                                    className="dashboard-widget__shape two"
                                />
                                <span className="dashboard-widget__icon">
                                    <img
                                        src="assets/images/icons/dashboard-widget-icon1.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                                    <div>
                                        <h4 className="dashboard-widget__number mb-1 mt-3">2M+</h4>
                                        <span className="dashboard-widget__text font-14">
                                            Total Products
                                        </span>
                                    </div>
                                    <img src="assets/images/icons/chart-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="dashboard-widget">
                                <img
                                    src="assets/images/shapes/widget-shape1.png"
                                    alt=""
                                    className="dashboard-widget__shape one"
                                />
                                <img
                                    src="assets/images/shapes/widget-shape2.png"
                                    alt=""
                                    className="dashboard-widget__shape two"
                                />
                                <span className="dashboard-widget__icon">
                                    <img
                                        src="assets/images/icons/dashboard-widget-icon2.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                                    <div>
                                        <h4 className="dashboard-widget__number mb-1 mt-3">
                                            $5289.00
                                        </h4>
                                        <span className="dashboard-widget__text font-14">
                                            Total Earnings
                                        </span>
                                    </div>
                                    <img src="assets/images/icons/chart-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="dashboard-widget">
                                <img
                                    src="assets/images/shapes/widget-shape1.png"
                                    alt=""
                                    className="dashboard-widget__shape one"
                                />
                                <img
                                    src="assets/images/shapes/widget-shape2.png"
                                    alt=""
                                    className="dashboard-widget__shape two"
                                />
                                <span className="dashboard-widget__icon">
                                    <img
                                        src="assets/images/icons/dashboard-widget-icon3.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                                    <div>
                                        <h4 className="dashboard-widget__number mb-1 mt-3">5,2458</h4>
                                        <span className="dashboard-widget__text font-14">
                                            Total Downloads
                                        </span>
                                    </div>
                                    <img src="assets/images/icons/chart-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="dashboard-widget">
                                <img
                                    src="assets/images/shapes/widget-shape1.png"
                                    alt=""
                                    className="dashboard-widget__shape one"
                                />
                                <img
                                    src="assets/images/shapes/widget-shape2.png"
                                    alt=""
                                    className="dashboard-widget__shape two"
                                />
                                <span className="dashboard-widget__icon">
                                    <img
                                        src="assets/images/icons/dashboard-widget-icon4.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                                    <div>
                                        <h4 className="dashboard-widget__number mb-1 mt-3">2,589</h4>
                                        <span className="dashboard-widget__text font-14">
                                            Total Sales
                                        </span>
                                    </div>
                                    <img src="assets/images/icons/chart-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* dashboard body Item End */}
                {/* dashboard body Item Start */}
                <div className="dashboard-body__item">
                    <div className="row gy-4">
                        <div className="col-xl-8">
                            <div className="dashboard-card">
                                <div className="dashboard-card__header flx-between gap-2">
                                    <h6 className="dashboard-card__title mb-0">Sales History</h6>
                                    <div className="select-has-icon d-inline-block">
                                        <select className="select common-input select-sm" defaultValue={1}>
                                            <option value={1}>Monthly</option>
                                            <option value={2}>Daily</option>
                                            <option value={3}>Yearly</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="dashboard-card__chart">
                                    <Chart options={options} series={series} type="area" height={"500"} width={"100%"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="dashboard-card">
                                <div className="dashboard-card__header">
                                    <h6 className="dashboard-card__title mb-0">Top Countries</h6>
                                </div>
                                <ul className="country-list">
                                    <li className="country-list__item flx-between gap-2">
                                        <div className="country-list__content flx-align gap-2">
                                            <span className="country-list__flag">
                                                <img src="assets/images/thumbs/flag1.png" alt="" />
                                            </span>
                                            <span className="country-list__name">United States</span>
                                        </div>
                                        <span className="country-list__amount">$58.00</span>
                                    </li>
                                    <li className="country-list__item flx-between gap-2">
                                        <div className="country-list__content flx-align gap-2">
                                            <span className="country-list__flag">
                                                <img src="assets/images/thumbs/flag2.png" alt="" />
                                            </span>
                                            <span className="country-list__name">Maxico</span>
                                        </div>
                                        <span className="country-list__amount">$69.00</span>
                                    </li>
                                    <li className="country-list__item flx-between gap-2">
                                        <div className="country-list__content flx-align gap-2">
                                            <span className="country-list__flag">
                                                <img src="assets/images/thumbs/flag3.png" alt="" />
                                            </span>
                                            <span className="country-list__name">Brazil</span>
                                        </div>
                                        <span className="country-list__amount">$120.00</span>
                                    </li>
                                    <li className="country-list__item flx-between gap-2">
                                        <div className="country-list__content flx-align gap-2">
                                            <span className="country-list__flag">
                                                <img src="assets/images/thumbs/flag4.png" alt="" />
                                            </span>
                                            <span className="country-list__name">Canada</span>
                                        </div>
                                        <span className="country-list__amount">$25.00</span>
                                    </li>
                                    <li className="country-list__item flx-between gap-2">
                                        <div className="country-list__content flx-align gap-2">
                                            <span className="country-list__flag">
                                                <img src="assets/images/thumbs/flag5.png" alt="" />
                                            </span>
                                            <span className="country-list__name">Ireland</span>
                                        </div>
                                        <span className="country-list__amount">$85.00</span>
                                    </li>
                                    <li className="country-list__item flx-between gap-2">
                                        <div className="country-list__content flx-align gap-2">
                                            <span className="country-list__flag">
                                                <img src="assets/images/thumbs/flag6.png" alt="" />
                                            </span>
                                            <span className="country-list__name">Newzealand</span>
                                        </div>
                                        <span className="country-list__amount">$99.00</span>
                                    </li>
                                    <li className="country-list__item flx-between gap-2">
                                        <div className="country-list__content flx-align gap-2">
                                            <span className="country-list__flag">
                                                <img src="assets/images/thumbs/flag7.png" alt="" />
                                            </span>
                                            <span className="country-list__name">Spain</span>
                                        </div>
                                        <span className="country-list__amount">$89.00</span>
                                    </li>
                                    <li className="country-list__item flx-between gap-2">
                                        <div className="country-list__content flx-align gap-2">
                                            <span className="country-list__flag">
                                                <img src="assets/images/thumbs/flag8.png" alt="" />
                                            </span>
                                            <span className="country-list__name">Turkey</span>
                                        </div>
                                        <span className="country-list__amount">$72.00</span>
                                    </li>
                                    <li className="country-list__item flx-between gap-2">
                                        <div className="country-list__content flx-align gap-2">
                                            <span className="country-list__flag">
                                                <img src="assets/images/thumbs/flag9.png" alt="" />
                                            </span>
                                            <span className="country-list__name">Italy</span>
                                        </div>
                                        <span className="country-list__amount">$465.00</span>
                                    </li>
                                    <li className="country-list__item flx-between gap-2">
                                        <div className="country-list__content flx-align gap-2">
                                            <span className="country-list__flag">
                                                <img src="assets/images/thumbs/flag10.png" alt="" />
                                            </span>
                                            <span className="country-list__name">Argentina</span>
                                        </div>
                                        <span className="country-list__amount">$45.00</span>
                                    </li>
                                    <li className="country-list__item flx-between gap-2">
                                        <div className="country-list__content flx-align gap-2">
                                            <span className="country-list__flag">
                                                <img src="assets/images/thumbs/flag11.png" alt="" />
                                            </span>
                                            <span className="country-list__name">Maxico</span>
                                        </div>
                                        <span className="country-list__amount">$42.00</span>
                                    </li>
                                    <li className="country-list__item flx-between gap-2">
                                        <div className="country-list__content flx-align gap-2">
                                            <span className="country-list__flag">
                                                <img src="assets/images/thumbs/flag12.png" alt="" />
                                            </span>
                                            <span className="country-list__name">Newzealand</span>
                                        </div>
                                        <span className="country-list__amount">$89.00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* dashboard body Item End */}
                {/* dashboard body Item Start */}
                <div className="dashboard-body__item">
                    <div className="table-responsive">
                        <table className="table style-two">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Item Sales</th>
                                    <th>Earning</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> Saturday, 10</td>
                                    <td> 2</td>
                                    <td> $89.00</td>
                                </tr>
                                <tr>
                                    <td> Sunday, 11</td>
                                    <td> 3 </td>
                                    <td>$150.00</td>
                                </tr>
                                <tr>
                                    <td> Monday, 12</td>
                                    <td> 2 </td>
                                    <td>$15.00</td>
                                </tr>
                                <tr>
                                    <td> Tuesday, 15</td>
                                    <td> 2 </td>
                                    <td>$25.00</td>
                                </tr>
                                <tr>
                                    <td> Wednesday, 16</td>
                                    <td> 5 </td>
                                    <td>$20.00</td>
                                </tr>
                                <tr>
                                    <td> Thursday, 17</td>
                                    <td> 3 </td>
                                    <td>$35.00</td>
                                </tr>
                                <tr>
                                    <td> Wednesday, 18</td>
                                    <td> 1 </td>
                                    <td>$15.00</td>
                                </tr>
                                <tr>
                                    <td> Thursday, 20</td>
                                    <td> 5 </td>
                                    <td>$22.00</td>
                                </tr>
                                <tr>
                                    <td> Wednesday, 22</td>
                                    <td> 8 </td>
                                    <td>$10.00</td>
                                </tr>
                                <tr>
                                    <td> Tuesday, 23</td>
                                    <td> 6 </td>
                                    <td>$125.00</td>
                                </tr>
                                <tr>
                                    <td> Wednesday, 24</td>
                                    <td> 3 </td>
                                    <td>$15.00</td>
                                </tr>
                                <tr>
                                    <td> Tuesday, 23</td>
                                    <td> 9 </td>
                                    <td>$15.00</td>
                                </tr>
                                <tr>
                                    <td>Wednesday, 24</td>
                                    <td> 5 </td>
                                    <td>$23.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* dashboard body Item End */}
            </div>
        </div>
    );
}

export default DashboardInner;