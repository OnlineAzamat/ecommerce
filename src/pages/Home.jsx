import MainSlider from "../components/home/MainSlider";
import IconsHome from "../components/home/IconsHome";
import FlashSale from "../components/home/FlashSale";

export default function Hero() {
    return(
        <main className="Hero">
            <MainSlider />
            <IconsHome />
            <FlashSale />
        </main>
    )
}