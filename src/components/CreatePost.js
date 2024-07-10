import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/posts/', {
      title: title,
      content: content
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full px-4 py-2 border rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  );
};

export default CreatePost;
