import getCurrentUser from "@/app/actions/getCurrentUser"
import DesktopSidebar from "./DesktopSidebar"
import MobileFooter from "./MobileFooter"
import { FullConversationType } from "@/app/types"

//test
interface SidebarProps {
  initialItems: FullConversationType[]
  children: React.ReactNode
}

async function Sidebar({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser()

  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter currentUser={currentUser!} />
      <main className="h-full lg:pl-20">{children}</main>
    </div>
  )
}

export default Sidebar
