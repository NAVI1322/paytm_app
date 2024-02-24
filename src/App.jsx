
import { AppBar } from "./components/AppBar"
import { Table } from "./components/Table"
import { Overview } from "./components/overview"
import Sidebar from "./components/sideBar"


function App() {
  return (

    <div className="bg-white-50">
      <Sidebar />
      <div className="border-b border-black-150 sm:pl-64 bg-white-500">
        <AppBar />
      </div>

      <div className=" m-5 mb-0 sm:ml-64 grid gap-8">
      <Overview />
      <div className="grid gap-6">
    <Table/>
    </div>

      </div>
    </div>  
   
  )
}

export default App
