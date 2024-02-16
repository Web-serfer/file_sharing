import './globals.css'
import { Outfit } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ToastContainer, toast } from 'react-toastify';


const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Home page || File sharing app',
  description: 'File Sharing App',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={outfit.className}>      
        {children}
        <ToastContainer />
      </body>   
    </html>
    </ClerkProvider>
    
  )
}
