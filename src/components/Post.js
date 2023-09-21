import React, { useState, useEffect } from 'react';

function Post() {

    const [posts, setPosts] = useState([]);


    useEffect(() => {

        const authenticationEndpoint = 'http://localhost:8080/posts';

        fetch(authenticationEndpoint, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqdW5haWQudGFsYWF0MTk5MEBnbWFpbC5jb20iLCJpYXQiOjE2OTUzMTIzNzQsImV4cCI6MTY5NTM5ODc3NH0.oEoinJq-XpQRBb7ExMEDokNKhS5wy5Gzgj7REuQ2qUE'
            },
        })
            .then((response) => {;

                if (response.ok) {
                    return response.json().then((data) => {
                        console.log("ok")
                        setPosts(data);

                    });
                } else {

                    throw new Error('Erreur lors de la récupération des posts');
                }
            })
            .catch((error) => {

                console.error('Erreur :', error.message);
            });
    }, []);

    return (

        <div>
            <h1> Posts available </h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>Event Name:</strong> {post.eventName}<br />
                        <strong>Event Date:</strong> {new Date(post.eventDate).toLocaleDateString()}<br />
                        <strong>Price:</strong> {post.price}<br />
                        <strong>Details:</strong> {post.details}<br />
                        <strong>State:</strong> {post.state}<br />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Post ;