import ActiveStatus from "./components/ActiveStatus"
import AuthContext from "./context/AuthContex"
import ToasterContext from "./context/ToasterContext"
import "./globals.css"

export const metadata = {
  title: "Messenger",
  description: "Messenger Clone",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
