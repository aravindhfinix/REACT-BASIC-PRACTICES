import { useState } from "react"
import './User-list.css'

let users = [
    {
        "id": 1,
        "name": "John Doe",
        "age": 30,
        "verified": false,
        "email": "john.doe@example.com"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "age": 25,
        "verified": true,
        "email": "jane.smith@example.com"
    },
    {
        "id": 3,
        "name": "Bob Johnson",
        "age": 28,
        "verified": false,
        "email": "bob.johnson@example.com"
    }
]



function UserList() {
    let [selectedIndex, setSelectedIndex] = useState(0)
    return <>
        <h1>List Users</h1>
        {users.length <= 0 && <p>no users</p>}
        <ul>
            {users.map((user, index) => <li className={`${selectedIndex === index ? "selected" : ""}`} key={user.id} onClick={() => setSelectedIndex(index)}>
                {user.name}
                {user.verified ? <p>verified</p> : <p>not-verified</p>}
             </li>)}
        </ul>
    </>
}

export default UserList