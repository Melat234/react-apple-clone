import React from 'react'
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import {Route, Routes,useParams } from 'react-router'
import MiddleMain from './components/Middle/MiddleMain';
import Iphone from './components/Iphone/Iphone';
import SharedLayout from './components/SharedLayout/SharedLayout';
import SingleAppleProduct from './components/SingleAppleProduct/SingleAppleProduct';
import PageNotFound from './components/PageNotFound/PageNotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<MiddleMain />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/iphone/:productId" element={<SingleAppleProduct />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App