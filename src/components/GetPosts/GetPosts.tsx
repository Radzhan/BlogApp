import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import { RequestPosts } from '../../types';
import ShowPosts from '../ShowPosts/ShowPosts';

const GetPosts = () => {
    const [answer, setAnswer] = useState<RequestPosts[]>([])
    const location = useLocation();

    const fetchPost = useCallback(async () => {
        const response = await axiosApi.get('/posts.json')

        if (response.data !== null){
            const setPosts = Object.keys(response.data).map(key => {
                const post = response.data[key]
                post.id = key
    
                return post
            })
    
            setAnswer(setPosts)
        }
    }, [])

    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/home') {
            fetchPost().catch(console.error);
        }
    }, [fetchPost, location])

    const enterPosts = answer.map(post => {
        return <ShowPosts key={post.id} id={post.id} date={post.post.date} title={post.post.title}/>
    })

    return (
        answer.length !== 0 ? <div>
            {enterPosts}
        </div> : <h2>no posts</h2>
    );
};

export default GetPosts;