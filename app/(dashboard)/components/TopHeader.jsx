import { UserButton } from '@clerk/nextjs';
import { FaAlignLeft } from "react-icons/fa6";
import { ImDownload } from "react-icons/im";

const TopHeader = () => {
  return (
    <div className="flex p-5 border-b items-center justify-between md:justify-end">
      <FaAlignLeft
        className="md:hidden"
      />
      <ImDownload 
        size={35} 
        color="#3698f9" 
        className="md:hidden"
      />
      <UserButton />
    </div>
  )
}

export default TopHeader