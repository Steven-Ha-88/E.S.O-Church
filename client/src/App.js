import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/index";
import Navbar from "./Components/NavBar/index.js";
import CreateSong from "./Components/CreateSong/index";
import SongList from "./Components/HympList/index";
import AboutPage from "./Components/About/index";
import lyrics from "./Components/Lyrics/index";
import UpdateSong from "./Components/EditSong/index";
import { Footer } from "./Components/Footer/index";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/createsong' component={CreateSong} />
        <Route exact path='/edit/:id' component={UpdateSong} />
        <Route exact path='/hympsongs' component={SongList} />
        <Route exact path='/lyrics/:id' component={lyrics} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
