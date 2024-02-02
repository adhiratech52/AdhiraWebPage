import '../globals.css';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';
import Blog from './page';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
       <Navbar/>
       <Blog/>
       <Footer/>
    </>
  )
}
