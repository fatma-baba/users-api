import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([])
    const fetchUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setListOfUsers(response.data)

            })
            .catch(err => alert('error'))
    }

    useEffect(()=>{
        fetchUsers()
    }, [])

    return (
        <React.Fragment>
            <h1>List of users</h1>
            <div>
                {listOfUsers.length > 0 ? <ol>
                    {listOfUsers.map(user => (
                        <li>{user.name}  -  {user.email}</li>
                    ))}
                </ol> : <p>
                    There is no users
                </p>}
            </div>
        </React.Fragment>
    )
}

export default UserList