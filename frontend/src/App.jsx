import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import Rewards from "./pages/Rewards";
import TopicDetails from "./pages/TopicDetails";
import LearningPage from "./pages/LearningPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/home" element={<Home />} />

        <Route path="/topics" element={<Topics />} />

        <Route path="/tasks" element={<Tasks />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/rewards" element={<Rewards />} />

        <Route path="/topics/:category" element={<TopicDetails />} />
      
        <Route path="/learn/:category/:topic" element={<LearningPage />} />
      </Routes>
  );
}

export default App;
