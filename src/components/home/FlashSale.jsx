import React from 'react'
import Timer from './Timer'
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from "@coreui/react"

function FlashSale() {
    const time = new Date();
    time.setMinutes(time.getMinutes() + 720);

    return (
        <div className='container flash-sale'>
            <div className="row justify-content-between align-items-center flash-sale__container">
                <div className="col-md-5">
                    <h2>Eng yaxshi elektronika x12-gacha muddatli to'lovda</h2>
                    <Timer expiryTimestamp={time} />
                </div>
                <div className="col-md-6">
                    <CCarousel controls indicators interval={2000}>
                        <CCarouselItem>
                            <CCarouselCaption>
                                <h2>Yakubbaev Azamat</h2>
                            </CCarouselCaption>
                        </CCarouselItem>
                        <CCarouselItem>
                            <CCarouselCaption>
                                <h2>Yakubbaev Azamat</h2>
                            </CCarouselCaption>
                        </CCarouselItem>
                        <CCarouselItem>
                            <CCarouselCaption>
                                <h2>Yakubbaev Azamat</h2>
                            </CCarouselCaption>
                        </CCarouselItem>
                    </CCarousel>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque enim blanditiis vel? Quisquam, rem accusantium praesentium pariatur repellat explicabo eaque facilis ipsa, alias animi rerum id at iure fugit! Sunt nisi animi amet recusandae expedita in, accusamus nihil consectetur ut tempore explicabo impedit vero illo placeat nemo commodi, iure a mollitia rerum, fugit veniam. Mollitia quaerat voluptatum quos quibusdam tempora quasi officiis rem, perferendis architecto quis, pariatur corrupti sapiente sunt voluptatibus illo nisi culpa quod animi sint expedita quisquam et deserunt ipsum. Exercitationem id necessitatibus libero ea commodi rerum accusamus, quia neque minima sint praesentium? Sequi, ab. Ex, eveniet?</p>
        </div>
    )
}

export default FlashSale