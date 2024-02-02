import Banner from '../app/components/Banner/index';
import People from '../app/components/People/index';
import Features from '../app/components/Features/index';
import Business from '../app/components/Business/index';
import Payment from '../app/components/Payment/index';
import Pricing from '../app/components/Pricing/index';


export default function Page() {
  return (
    <main>
      <Banner />
      {/* <People /> */}
      {/* <Features /> */}
      <Business />
      <Payment />
      <Pricing />
    </main>
  )
}
