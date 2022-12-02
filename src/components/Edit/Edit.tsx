import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import { ResponsePosts } from '../../types';
import Spiners from '../Spiners/Spiners';

const Edit = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const [post, setPost] = useState<ResponsePosts>({
        date: '',
        title: '',
        description: '',
    })

    const customerChanged = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target

        setPost(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const fethOnePost = useCallback(async () => {
        setLoading(true)
        try {
            const postResponse = await axiosApi.get('/posts/' + id + '.json');
            setPost(postResponse.data.post);
        } finally {
            setLoading(false)
        }
    }, [id])

    const onFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true)

        const order = {
            post
        }

        try {
            await axiosApi.put('/posts/' + id + '.json', order)
        } finally {
            setLoading(false)
            navigate('/')
        }
    };

    useEffect(() => {
        fethOnePost().catch(console.error);
    }, [fethOnePost])

    let newForm = (
        <form onSubmit={onFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        name='title'
                        placeholder="Title"
                        value={post?.title}
                        onChange={customerChanged}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        value={post?.description}
                        onChange={customerChanged}
                        id="exampleFormControlTextarea1"
                        name='description'
                        rows={3}
                    ></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Save</button>
            </form>
    )

    if (loading) {
        newForm = <Spiners />
    }
    return (
        <div>
            {newForm}
        </div>
    );
};

export default Edit;