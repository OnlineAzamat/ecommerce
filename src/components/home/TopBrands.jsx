import React from 'react'
import { Link } from 'react-router-dom'

function TopBrands() {
    return (
        <div className='container topbrands'>
            <div className="inner-wrapper">
                <div className="title">
                    <h2>Mashhur brendlar</h2>
                </div>
                <div className="topbrands__list">
                    <ul>
                        <li>
                            <Link to={"/products"}>
                                <div className="topbrands__item__image">
                                    <img src="https://images.zoodmall.com/app/homePageLayout/1594989896296.png" alt="brand" />
                                </div>
                                <div className="topbrands__item__name">Samsung</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/products"}>
                                <div className="topbrands__item__image">
                                    <img src="https://images.zoodmall.com/app/homePageLayout/1605625688424.png" alt="brand" />
                                </div>
                                <div className="topbrands__item__name">Artel</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/products"}>
                                <div className="topbrands__item__image">
                                    <img src="https://images.zoodmall.com/app/homePageLayout/1613723411561.png" alt="brand" />
                                </div>
                                <div className="topbrands__item__name">Apple</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/products"}>
                                <div className="topbrands__item__image">
                                    <img src="https://images.zoodmall.com/app/homePageLayout/1638774921287.png" alt="brand" />
                                </div>
                                <div className="topbrands__item__name">Lenovo</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/products"}>
                                <div className="topbrands__item__image">
                                    <img src="https://images.zoodmall.com/app/homePageLayout/1638774885503.png" alt="brand" />
                                </div>
                                <div className="topbrands__item__name">Neoline</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/products"}>
                                <div className="topbrands__item__image">
                                    <img src="https://images.zoodmall.com/app/homePageLayout/1638774946538.png" alt="brand" />
                                </div>
                                <div className="topbrands__item__name">Magicar</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/products"}>
                                <div className="topbrands__item__image">
                                    <img src="https://images.zoodmall.com/app/homePageLayout/1622007040166.jpg" alt="brand" />
                                </div>
                                <div className="topbrands__item__name">Infinix</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-12 mt-5">
                <h2>NewStore: Hozir xarid qiling, pulini keyinroq to'lang</h2>
                <p>Onlayn-xaridlar - taraqqiyot tomonga dadil qadamlarning namoyonidir. Bu sotuvchilar uchun ham, xaridorlar uchun ham qulay: mijoz o’ziga kerakli mahsulotlarni qidirishda vaqt tejaydi. Kerakli mahsulotni tanlashga bir nechagina daqiqa ajratib, qimmat bo’lmagan taklifni topish mumkin va bunda xaridingis uyizga yetkazilib ham beriladi. Shveytsariyaning OrientSwiss kompaniyasi NewStore deb nomlangan B2C formatidagi savdo maydonchasi ilovasini va saytini ishga tushirish orqali onlayn-xaridlarni takomillashtirmoqda va yanada hammabop qilmoqda.</p>
            </div>
        </div>
    )
}

export default TopBrands