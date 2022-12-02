import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import { ResponsePosts } from '../../types';



const Edit= () => {
    const [post, setPost] = useState<ResponsePosts>({
        date: '',
        title: '',
        description: '',
    })
    const {id} = useParams();

    const requestOnePost = useCallback(async () => {
        const request =  await axiosApi.get('/posts/' + id + '.json')

        const post = request.data.post

        setPost(post)
    } ,[id])

    useEffect(() => {
        requestOnePost().catch(console.error);
        
    }, [requestOnePost])
    return (
        <div className="card">
            <h5 className="card-header">{post.date}</h5>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <Link to="/" className="btn btn-primary">Close</Link>
            </div>
        </div>
    );
};

export default Edit;