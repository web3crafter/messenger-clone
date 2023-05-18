"use client"

import useConversation from "@/app/hooks/useConversation"
import useRoutes from "@/app/hooks/useRoutes"
import MobileItem from "./MobileItem"
import Avatar from "../Avatar"
import { User } from "@prisma/client"
import SettingModal from "./SettingModal"
import { useState } from "react"

interface MobileFooterProps {
  currentUser: User
}
const MobileFooter: React.FC<MobileFooterProps> = ({ currentUser }) => {
  const routes = useRoutes()
  const { isOpen } = useConversation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (isOpen) {
    return null
  }
  return (
    <>
      <SettingModal
        currentUser={currentUser}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="fixed bottom-0 z-40 flex items-center justify-between w-full bg-white border-t-[1px] lg:hidden">
        <div
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center w-full h-[68px] transition cursor-pointer hover:bg-gray-100"
        >
          <Avatar user={currentUser} />
        </div>
        {routes.map((route) => (
          <MobileItem
            key={route.label}
            href={route.href}
            active={route.active}
            icon={route.icon}
            onClick={route.onClick}
            setIsModalOpen={setIsModalOpen}
            currentUser={currentUser}
          />
        ))}
      </div>
    </>
  )
}
export default MobileFooter
