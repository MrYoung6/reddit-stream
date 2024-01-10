import React from 'react';
import { Header } from './features/Header/Header';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { NavSelect } from './features/NavSelect/NavSelect';
import { Home } from './features/Home/home';
import { PostAndComments } from './features/Comments/PostAndComments';
import { Subreddit } from './features/Subreddit/subreddit';
import { SearchResults } from './features/Header/SearchResults';
import { Communities } from './features/Communities/Communities';
import './features/Home/Home.css';
import './features/Communities/communities.css';

function App() {
  return (
    <Router>
      <Header />
      <NavSelect />
      <Communities />
      <div className="home-container">
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/r/:subreddit/comments/:id/:title' element={<PostAndComments />} />
          <Route path='/r/:subreddit' element={<Subreddit />} />
          <Route path='/search/:searchTerm' element={<SearchResults />} />
          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
