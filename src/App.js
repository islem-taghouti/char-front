 import Home from "./pages/home/Home";
 import Login from "./components/login/Login";
 import Register from "./components/register/Register";
 import { AuthContext } from "./context/AuthContext";
 import Profile from "./pages/profile/Profile";
 import Messenger from "./pages/messenger/Messenger";
 import { useContext } from "react";
 import {
     BrowserRouter,
     Routes,
     Route,
     Navigate

 } from "react-router-dom";

 function App() {
     const { user } = useContext(AuthContext);
     console.log(user);
     return ( < BrowserRouter >
         <
         Routes >
         <
         Route path = "/"
         element = { user ? < Home / > : < Register / > }
         /> <
         Route path = "/login"
         element = { user ? < Navigate to = "/" / > : ( < Login / > ) }
         /> <
         Route path = "/register"
         element = { user ? < Home / > : < Register / > }
         /> <
         Route path = "/messenger"
         element = {!user ? < Navigate to = "/" / > : ( < Messenger / > ) }
         /> <
         Route path = "/profile/:username"
         element = { < Profile / > }
         />

         <
         /Routes> < /
         BrowserRouter > );
 }

 export default App;