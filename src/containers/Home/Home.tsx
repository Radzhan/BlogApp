import React from 'react';
import { Outlet } from 'react-router-dom';
import GetPosts from '../../components/GetPosts/GetPosts';

const Home = () => {
    return (
        <div>
            <Outlet />
            <GetPosts />
        </div>
    );
};

export default Home;