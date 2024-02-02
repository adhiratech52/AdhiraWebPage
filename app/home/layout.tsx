import '../globals.css';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';
import Home  from './page';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
       <Navbar/>
       <Home/>
       <Footer/>
    </>
  )
}
