import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from "@coreui/react";

// update soon...

export default function Hero() {
    return(
        <CCarousel controls indicators>
            <CCarouselItem>
                <CImage className="d-block w-100 hero-img scale-img" src="https://trocobuy.s3.amazonaws.com/ficheros/0/15cada88540fbb3731bd482dad70209f.jpg" alt="slide 1" />
                <CCarouselCaption style={{top: "50%", transform: "translateY(-50%)", bottom: "0", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start"}}>
                    <h1 style={{fontSize: "4rem"}}>NEW SEASON ARRIVALS</h1>
                    <p>CHECK OUT ALL THE TRENDS</p>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 hero-img" src="https://static.vecteezy.com/system/resources/previews/000/669/988/original/vector-shopping-online-banner.jpg" alt="slide 2" />
            </CCarouselItem>
        </CCarousel>
    )
}