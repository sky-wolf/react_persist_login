import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
// import Editor from './components/Editor';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Users from './components/Users';
import PersistLogin from './components/PersistLogin';
// import Events from './components/Events';
// import AddEvent from './components/AddEvent';
// import Test from './components/Test';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        {/* <Route path='test' element={<Test/>} /> */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */} */}
        <Route element={<PersistLogin/>}>
          <Route element={<RequireAuth allowedRoles={['organisator']} />}>
            
            {/* <Route path="editor" element={<Editor />} /> */}
            {/* <Route path='events' element={<Events />} /> */}
          </Route>

          <Route element={<RequireAuth allowedRoles={['administrator']} />}>
          </Route>

          <Route element={<RequireAuth allowedRoles={['user']} />}>
            <Route path="/" element={<Home />} />
            <Route path="admin" element={<Admin />} />
            <Route path="users" element={<Users />} />
            <Route path="lounge" element={<Lounge />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={['organisator', 'administrator']} />}>
            
            {/* <Route path='addevent' element={<AddEvent/>} /> */}
          </Route>  
        </Route> 

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
