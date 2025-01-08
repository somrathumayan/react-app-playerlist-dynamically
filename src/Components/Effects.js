import React, { useEffect, useState } from 'react';

const Effects = () => {
    const [user, setUser] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUser(data))
    }, [1])

    return (
        <div>
            {
                user.map(usr => <li>
                    {usr.name}
                </li>)
            }
        </div>
    );
};

export default Effects;