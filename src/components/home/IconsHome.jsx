import React from 'react'
import { Link } from 'react-router-dom'

function IconsHome() {
    return (
        <div className="icons-home">
            <section className="container">
                <div className="row">
                    <div className="icons-home__item col-md-3">
                        <Link to="/delivery">
                            <div className="icons-home__icon">
                                <img src="https://upload.zoodmall.com/app/homePageLayout/1676608922648.png" alt="Express Delivery" width="50" height="50" className="el-image__inner" style={{objectFit: "contain;"}} />
                            </div>
                            <span className="icons-home__title">
                                Express Delivery
                            </span>
                        </Link>
                    </div>
                    <div className="icons-home__item col-md-3">
                        <Link to="/installment">
                            <div className="icons-home__icon">
                                <img src="https://upload.zoodmall.com/app/homePageLayout/1667195999217.png" alt="Express Delivery" width="50" height="50" className="el-image__inner" style={{objectFit: "contain;"}} />
                            </div>
                            <span className="icons-home__title">
                                Installment
                            </span>
                        </Link>
                    </div>
                    <div className="icons-home__item col-md-3">
                        <Link to="/favorite-brands">
                            <div className="icons-home__icon">
                                <img src="https://upload.zoodmall.com/app/homePageLayout/1676371900441.png" alt="Favorite Brands" width="50" height="50" className="el-image__inner" style={{objectFit: "contain;"}} />
                            </div>
                            <span className="icons-home__title">
                                Favorite Brands
                            </span>
                        </Link>
                    </div>
                    <div className="icons-home__item col-md-3">
                        <Link to="/promotions">
                            <div className="icons-home__icon">
                                <img src="https://upload.zoodmall.com/app/homePageLayout/1678340533915.png" alt="Promotions🔥" width="50" height="50" className="el-image__inner" style={{objectFit: "contain;"}} />
                            </div>
                            <span className="icons-home__title">
                                Promotions🔥
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IconsHome