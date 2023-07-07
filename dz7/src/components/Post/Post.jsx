import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

const Post = ({}) => {

    const [data, setData] = useState([])
    const params = useParams()
    const fetchData = async () => {
        const getData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        const response = await getData.json()
        setData(response)
    }

    useEffect(() => {fetchData()}, [params.id])

    return (
        <div>
            <h2>{data.body}</h2>
        </div>
    );
};

export default Post;