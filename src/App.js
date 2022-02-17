import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      <Link to="/topics">Topics</Link>
      {/* <button onClick={() => props.history.push("/topics")}>Topics</button> */}
      <h1>HOME PAGE</h1>
    </div>
  );
};
const TopicsList = (props) => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}`}></Link>
    </div>
  );
};
const TopicDetail = (props) => {
  console.log(props, " props for Topic Detail");
  return (
    <div>
      <h1>TOPIC DETAIL PAGE</h1>
      {/* <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1> */}
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/topics" element={<TopicsList />} />
        <Route path="/topics/:topicId" element={<TopicDetail />} />
      </Routes>
    </div>
  );
}

export default App;
