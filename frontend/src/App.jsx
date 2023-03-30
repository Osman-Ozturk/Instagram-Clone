import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import { useState ,useContext} from "react";
import Share from "./components/share/Share.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Messenger from "./pages/messenger/Messenger.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "./context/AuthContext.js";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { user } = useContext(AuthContext)
  return (
    <BrowserRouter>
    <AuthContextProvider>
      
    
    
    <div className="App">
      <Share open={open} handleClose={handleClose} />
      <ToastContainer />
        {user && <Header handleOpen={handleOpen} />}
        <Routes>
          
          <Route path="/" element={user ? <Home />:<Login/>} />
          <Route path="/profile/:userName" element={user ? <Profile />:<Login/>} />
          <Route path="/messenger" element={user ? <Messenger />:<Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      
    </div>
    </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
