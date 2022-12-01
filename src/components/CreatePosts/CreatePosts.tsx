import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import { ResponsePosts } from '../../types';

const CreatePosts = () => {
    const navigate = useNavigate()
    const [post, setPost] = useState<ResponsePosts>({
        title: '',
        description: '',
    })

    const [loading, setLoading] = useState(false)

    const customerChanged = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target

        setPost(prev => ({
            ...prev,
            [name]: value,
        }))
    }
    const onFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const order = {
            post
        }

        try {
            await axiosApi.post('/posts.json', order)
        } finally {
            navigate('/')
        }
    };
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        name='title'
                        placeholder="Title"
                        value={post.title}
                        onChange={customerChanged}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control" value={post.description} onChange={customerChanged} id="exampleFormControlTextarea1" name='description' rows={3}></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Save</button>
            </form>

        </div>
    );
};

export default CreatePosts;