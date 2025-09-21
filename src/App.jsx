import './App.css'
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Connection from './pages/Connection';
import About from './pages/About';
import Profile from './pages/Profile';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Dummy from './pages/Dummy';
import Help from './pages/Help';
import Playground from './pages/Playground';
import Users from './pages/Users';
import Todo from './pages/Todo';


export default function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/connection" element={<Connection />} />
      <Route path="/about" element={<About/>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/help" element={<Help />} />
      <Route path="/dummy" element={<Dummy />} />
      <Route path="/users" element={<Users />} />
      <Route path="/playground" element={<Playground/>}/>
      <Route path="/todo" element={<Todo/>}/>
      <Route path="*" element={<Signup />} />

    </Routes>
    </>
  );
}





