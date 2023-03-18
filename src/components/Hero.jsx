import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from "@coreui/react";

// update soon...

export default function Hero() {
    return(
        <main className={window.innerHeight > 72 ? "Hero active" : "Hero"}>
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
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur eligendi aliquam molestiae nulla quos dicta provident quo? Asperiores inventore excepturi quam consequatur obcaecati aliquam sed consectetur vero, aperiam ullam porro laudantium totam ratione enim voluptas nobis perferendis corrupti fugit? Incidunt voluptas inventore harum minus eum vitae exercitationem soluta dolorem accusantium dolores! Nesciunt rerum architecto earum dignissimos, culpa dolorum, minus dolorem nulla omnis fugiat quis, id recusandae ab nihil nisi mollitia nemo ullam sit error laudantium dolore saepe. Quisquam porro, nobis impedit voluptatem quae ipsa placeat voluptatibus pariatur sed nam aspernatur eveniet inventore vitae cupiditate quasi illum doloribus repellat vero modi corrupti ipsum nulla? Officia maxime dolores, dolorem fugit libero facilis optio possimus eligendi voluptatum ut beatae accusantium voluptas, veniam numquam alias ullam consequatur eum distinctio. Nemo eveniet nostrum qui enim soluta adipisci ipsa laborum, illo omnis beatae voluptate dignissimos ipsam nisi optio autem mollitia nesciunt delectus alias est libero error?
            </p>
        </main>
    )
}