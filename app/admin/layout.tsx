import GetCurrentUser from '../action/GetCurrentUser'
import SideBar from './component/Sidebar'




export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await GetCurrentUser()
  if(!user?.admin)
  return <div>YOU NOT ADMIN</div>
  return (
   <div>

     
      
        <div className='flex items-start max-sm:flex-col w-full overflow-hidden'>
        <SideBar/>
        {children}
        </div>
     
   </div>
      
  )
}
