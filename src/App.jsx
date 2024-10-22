import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { routes } from "./constants/routes";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
        <Routes>
          {routes.map((item) => (
            <Route path={item.path} element={item.element} key={item.id} />
          ))}
          <Route path="*" element={<About />} />
        </Routes>
    </>
  );
}

export default App;
