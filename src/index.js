import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import Landing from './pages/Landing/Landing';
import Itempage from './pages/ItemsPage/Itempage';
import Cart from './pages/Cart/Cart';
import Delete from './pages/Delete/Delete';
import Edit from './pages/Edit/Edit'
import Password from './pages/Password/Password'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
       <Route index={true} path='/' element={<Landing/>} />
      <Route  path='/admin/:id' element={<Admin/>} />
      <Route  path='/item/:id' element={<Itempage/>} />
      <Route  path='/item/add/:id' element={<Cart/>} />
      <Route  path='/item/delete/:id' element={<Delete/>} />
      <Route  path='/item/edit/:id' element={<Edit/>} />
      <Route  path='/admin/password/:name' element={<Password/>} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);
