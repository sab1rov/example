import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { routes } from "./constants/routes";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          {routes.map((item) => (
            <Route path={item.path} element={item.element} key={item.id} />
          ))}
        </Routes>
      </main>
    </>
  );
}

export default App;
