import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/posts/${id}/`)
      .then(response => {
        setTitle(response.data.title);
        setContent(response.data.content);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/posts/${id}/`, {
      title: title,
      content: content
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full px-4 py-2 border rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default EditPost;
