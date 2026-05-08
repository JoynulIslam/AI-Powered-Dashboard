/**
 * App.jsx
 * Root Component: Sets up routing and global toast provider.
 */

import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
};

export default App;
