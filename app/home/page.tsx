import Banner from "../components/Banner";
import Business from "../components/Business";
import Pricing from "../components/Pricing";
import Payment from "../components/Payment";

export default function Home() {
    return (
        <div>
            <Banner/>
            <Pricing/>
            <Business/>
            <Payment/>
        </div>
    )
}