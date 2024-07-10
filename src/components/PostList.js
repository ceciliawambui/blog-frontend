import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/posts/')
      .then(response => {
        setPosts(response.data);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded">Create New Post</Link>
      <div className="mt-4">
        {posts.map(post => (
          <div key={post.id} className="border p-4 mb-4">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.content}</p>
            <Link to={`/edit/${post.id}`} className="text-blue-500">Edit</Link>
            <button onClick={() => deletePost(post.id)} className="text-red-500 ml-4">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );

  function deletePost(id) {
    axios.delete(`http://localhost:8000/api/posts/${id}/`)
      .then(() => {
        setPosts(posts.filter(post => post.id !== id));
      });
  }
};

export default PostList;
