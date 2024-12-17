import { Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { NoMatch } from "./pages/NoMatch";
import About from "./pages/About";
import { ProductItem } from "./pages/ProductItem";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductItem />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
