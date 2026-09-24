import './globals.css'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

export const metadata = {
  title: 'Makeup Academy | Professional Makeup Education',
  description: 'Premium online makeup courses taught by industry professionals.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
