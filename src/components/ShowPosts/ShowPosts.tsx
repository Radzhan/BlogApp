import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import Spiners from '../Spiners/Spiners';

interface Props {
    date: string;
    title: string;
    id: string;
}

const ShowPosts: React.FC<Props> = ({ date, title, id}) => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const remove = async () => {
        setLoading(true)

        try {
            await axiosApi.delete('/posts/' + id + '.json')
        } finally {
            navigate('/')
            setLoading(false)
        }
    }

    let newPost = (
        <>
            <div className="card-header">
                {date}
            </div><div className="card-body">
                <h5 className="card-title">{title}</h5>
                <Link to={'/read/' + id} className="btn btn-primary mt-4">Read more</Link>
                <button className='btn btn-danger ms-3 mt-4' onClick={remove}>Delete</button>
                <Link to={'/edit-post/' + id} className='btn btn-danger ms-3 mt-4'>Edit</Link>
            </div>
        </>
    )

    if (loading) {
        newPost = <Spiners />
    }


    return (
        <>
            <div className="card">
                {newPost}
            </div>
        </>
    );
};

export default ShowPosts;