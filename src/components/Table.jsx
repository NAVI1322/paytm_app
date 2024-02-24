
export const Orders = [
    {
      orderId: "ABC123",
      status: "Delivered",
      transactionId: "XYZ789",
      refundDate: null,
      orderAmount: 100.50
    },
    {
      orderId: "DEF456",
      status: "Processing",
      transactionId: "UVW123",
      refundDate: null,
      orderAmount: 75.25
    },
    {
      orderId: "GHI789",
      status: "Shipped",
      transactionId: "LMN456",
      refundDate: "2024-02-20",
      orderAmount: 50.75
    },
    {
      orderId: "JKL012",
      status: "Pending",
      transactionId: "OPQ789",
      refundDate: null,
      orderAmount: 120.00
    },
    {
      orderId: "MNO345",
      status: "Delivered",
      transactionId: "RST012",
      refundDate: "2024-02-15",
      orderAmount: 90.60
    },
    {
      orderId: "PQR678",
      status: "Processing",
      transactionId: "FGH234",
      refundDate: null,
      orderAmount: 85.75
    },
    {
      orderId: "STU901",
      status: "Shipped",
      transactionId: "IJK567",
      refundDate: null,
      orderAmount: 110.25
    },
    {
      orderId: "VWX234",
      status: "Delivered",
      transactionId: "YZA890",
      refundDate: "2024-02-18",
      orderAmount: 150.30
    },
    {
      orderId: "BCD567",
      status: "Pending",
      transactionId: "CDE901",
      refundDate: null,
      orderAmount: 60.40
    },
    {
      orderId: "EFG890",
      status: "Processing",
      transactionId: "HIJ234",
      refundDate: "2024-02-10",
      orderAmount: 200.00
    }
  ];

  

export function Table() {
    console.log(Orders)
  return (
    
    <div>
        <div>
      <div className="font-bold text-lg pt-6 pb-3">Transactions | This Month </div>
      <div className="flex pt-4">
      <button type="button" className="text-gray-900 bg-gray-100   border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 " >Payout (22)</button>
      <button type="button" className="text-white-900 bg-blue-400 border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 " >Refund (6)</button>
      </div>
      
    </div>
      <div class="relative  shadow-md lg  ">
        <table class="w-full text-sm text-left rtl:text-right ">
          <caption class="p-5 text-lg font-semibold text-left rtl:text-right bg-white ">
            <div className="flex justify-between ">
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none focus:border-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="bg-white-50 border border-gray-300 text-black-900 text-sm rounded-lg block pl-10 p-2.5 w-160 focus:border-gray-700"
                  placeholder="Search branch name..."
                  required
                />
              </div>

              <div className="flex space-x-2">
              <div className="flex-col flex justify-center">
    <button className=" flex items-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 m-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
</svg>

        <div className="font-extralight mr-2">Sort</div>
    </button>
</div>

                <div className=" flex-col flex justify-center ">
                <button className="flex-center flex-col text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-2">
                            <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
              </div>
            </div>
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-slate-100">
            <tr>
              <th scope="col" class="px-6 py-3">
                Order ID
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
               Transction ID
              </th>
              <th scope="col" class="px-6 py-3">
                Refund Date
              </th>
              <th scope="col" class="px-6 py-3">
                Amount 
              </th>
            </tr>
          </thead>
          <tbody>
            { Orders.map(order =>
            <tr class="bg-white border-b  dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
              {order.orderId}
              </th>
              <td class="px-6 py-4">{order.status}</td>
              <td class="px-6 py-4">{order.transactionId}</td>
              <td class="px-6 py-4">{order.refundDate}</td>
              <td class="px-6 py-4 ">
            {order.orderAmount}
              </td>
            </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
