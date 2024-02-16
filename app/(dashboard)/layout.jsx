import SideNav from "./components/SideNav"
import TopHeader from "./components/TopHeader"


export const metadata = {
  title: 'Upload page || File sharing app',
  description: 'Upload page',
}


function layout({children}) {
  return (
    <div>
      <div className="h-full w-64 flex-col fixed inset-y-0 z-50 md:flex hidden">
        <SideNav />     
      </div>
      <div className="md:ml-64">
        <TopHeader />
        {children}        
      </div>     
    </div>
  )
}

export default layout