import './globals.css'
import NavBar from './Navbar'
import Footer from './footer'

export const metadata = {
  title: 'TrevorWebsite',
  description: 'Trevor Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
         <NavBar />
         {children}
          <Footer />
      </body>
    </html>
  )
}
