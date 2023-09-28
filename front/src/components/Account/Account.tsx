import {AccountItem} from "./AccountItem.tsx";

const accounts = [
    {
        title: "Argent Bank Checking (x8349)",
        amount: "$2,082.79",
        description: "Available Balance"
    },
    {
        title: "Argent Bank Savings (x6712)",
        amount: "$10,928.42",
        description: "Available Balance"
    },
    {
        title: "Argent Bank Credit Card (x8349)",
        amount: "$184.30",
        description: "Current Balance"
    },
]

export function Account() {
    return (
        <>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map((account) => <AccountItem title={account.title} amount={account.amount} description={account.description} key={account.title}/>)}
        </>
    )
}