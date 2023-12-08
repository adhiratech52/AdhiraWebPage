import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Home from './page';


export const metadata = {
  title: 'Adhira Tech',
  description: 'Building Tech Products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{overflowX:'hidden'}} className='no-scrollbar'>
        <Navbar />
        <Home/>
        <Footer />
      </body>
    </html>
  )
}
