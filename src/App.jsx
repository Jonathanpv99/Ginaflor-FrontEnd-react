import { Body } from "./Body"
import {Footer} from "./components/footerComponent/Footer"
import { Header } from "./components/headerComponent/Header"

function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <div>
        <Header/>
      </div>
      
      <div className="flex-grow">
        <Body/>
      </div>

      <div>
        <Footer/>
      </div>


    </div>
      
    </>
  )
}

export default App
