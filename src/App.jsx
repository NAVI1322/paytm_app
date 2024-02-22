import { AmountProcessedCard } from "./components/AmountProcessed"
import { Appbar } from "./components/AppBar"
import { PayloadCard } from "./components/PayloadCard"
import { RevenueCard } from "./components/Revenue_card"

function App() {
  return (
    <div className=""> 

 <Appbar />
       {/* <PayloadCard className="grid-span-1" title={"Next Payload"} OrderCount={"23"} amount={"93292.32"} time={"Today, 4:00PM"} paymentdate={"Next Payment Date:"}  />
      <RevenueCard className=""title={"Amount Pending "} OrderCount={"14"} amount={"40000"} />
      <AmountProcessedCard title={"Amount Processed "}  amount={"40000"}  /> */}
    </div>
  )
}

export default App
