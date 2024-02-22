

export function PayloadCard({ 
    title,
    OrderCount,
    amount,
    paymentdate,
    time
 }) {
  return (
<div className=" text-slate-50 rounded-lg bg-blue-500 ">
        <div className="bg-white rounded shadow-md p-4 rounded-t-lg bg-blue-500 hover:bg-blue-800 ">
      <div className="flex  ">
      <div className="text-gray-700 text-slate-50">
      {title} 
      </div>
      <div className="flex justify-center  flex-col p-1 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <       path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
         </svg>
      </div>

      </div>
      <div className="flex justify-between pt-2">

        <div className="font-bold text-3xl ">
            ${amount} 
        </div>

        {OrderCount 
        ?
         <div className="flex text-blue-700 cursor-pointer underline font-medium flex-col justify-center  text-slate-50"> 
            <div className="flex">
            {OrderCount} orders 
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            </div>
            </div>

        </div> : null}
      </div>
     </div >
      <div className="flex justify-between pt-1 bg-white rounded-b-lg  shadow-md p-2 bg-blue-800">
        <div>
            {paymentdate}
        </div>
        <div>
            {time}
        </div>
      </div>
</div>
  );
}
