import { Sidebar } from "./components/sidebarComponent/Sidebar"
import { Home } from "./views/Home/Home"
import { Temples } from "./views/Temples/Temples"
export const Body = () => {
    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1 hidden md:block">
            <Sidebar/>
            </div>
            <div className="col-span-4 md:col-span-3">
            <Temples/>
            </div>
            
            
        </div>
    )
}