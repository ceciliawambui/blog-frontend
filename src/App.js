import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto">
            <ul className="flex">
              <li className="mr-6">
                <Link to="/" className="text-white">Home</Link>
              </li>
              <li>
                <Link to="/create" className="text-white">Create Post</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
