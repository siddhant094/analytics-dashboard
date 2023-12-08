import { useState, useEffect } from 'react';
import axios from 'axios';

const stats = () => {
    const [posts, setPosts] = useState('empty');

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/test`)
            .then((response) => {
                console.log(response.data);
                setPosts(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            stats
            <span>{posts}</span>
        </div>
    );
};

export default stats;
