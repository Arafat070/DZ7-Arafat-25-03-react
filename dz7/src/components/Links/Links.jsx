import React, {useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";

const Links = () => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        const getData = await fetch('https://jsonplaceholder.typicode.com/posts')
        const response = await getData.json()
        const sliceResponse = response.slice(0, 10)
        setData(sliceResponse)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {data.map(post => (
                <div key={post.id}>
                    <Link to={`/links/${post.id}`}>{post.id}</Link>
                </div>
            ))}
            <Outlet/>
        </>
    );
};

export default Links;