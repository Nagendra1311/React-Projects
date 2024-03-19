import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Header from "./layouts/Header";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='category/:slug' element={<Category />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
