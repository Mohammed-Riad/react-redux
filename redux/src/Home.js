import React from 'react'
import { connect } from 'react-redux'
// import { useSelector } from 'react-redux'
function Home(props) {
    // console.log(props.accounts)
    // const accounts = useSelector(state => {
    //     return state.accounts
    // })
    return (
        <div>
            
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg ">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                customerName
                            </th>
                            <th scope="col" class="py-3 px-6">
                                accountNumber
                            </th>
                            <th scope="col" class="py-3 px-6">
                                accountType
                            </th>

                        </tr>
                        {console.log(props.accounts)}
                        {props.accounts.map(std => {
                            return (
                                <>
                                    {/* <p>customerName : {std.customerName}</p>
                    <p>accountNumber : {std.accountNumber}</p>
                    <p>accountType : {std.accountType}</p> */}




                                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {std.customerName}
                                        </th>
                                        <td class="py-4 px-6">
                                            {std.accountNumber}                </td>
                                        <td class="py-4 px-6">
                                            {std.accountType}
                                        </td>

                                    </tr>


                                </>
                            )
                        })}



                    </thead>
                    <tbody>


                    </tbody>
                </table>
            </div>


        </div>
    )
}
const readState = (state) => {
    return {
        accounts: state.accounts
    }
}
export default connect(readState)(Home)
// export default Home