import { createStore } from "redux";

const initState = {
    accounts: [
        {
            id: 1,
            customerName: "Israa Othman",
            accountNumber: "123456",
            accountType: "Savings"
        },
        {
            id: 2,
            customerName: "Ahmad Zahran",
            accountNumber: "987654",
            accountType: "Student accounts"
        },
       
        {
            id: 3,
            customerName: "mohammed Zahran",
            accountNumber: "987654",
            accountType: "Student accounts"
        },
       
        {
            id: 3,
            customerName: "riad Zahran",
            accountNumber: "987654",
            accountType: "Student accounts"
        },
       
        {
            id: 4,
            customerName: "anzor Zahran",
            accountNumber: "987654",
            accountType: "Student accounts"
        },
       
        {
            id: 5,
            customerName: "jafer Zahran",
            accountNumber: "987654",
            accountType: "Student accounts"
        },
       


    ]

}

const reduser = (state = initState , action) => {
    return state;
}

const store = createStore(reduser)

export default store ; 