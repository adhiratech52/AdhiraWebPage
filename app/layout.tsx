import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Page  from './page';


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
        {children}
       {/* <Navbar/>
       <Page/>
       <Footer/> */}
      </body>
    </html>
  )
}
