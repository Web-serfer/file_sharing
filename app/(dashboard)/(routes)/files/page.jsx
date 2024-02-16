import { UserButton } from "@clerk/nextjs";

const Files = () => {
  return (
    <div>
      <h2>Files</h2>
      <UserButton afterSignOutUrl="/"/>      
    </div>
  )
}

export default Files