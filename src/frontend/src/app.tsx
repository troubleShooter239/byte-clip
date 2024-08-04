import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/feed/feed";
import PrivateRoute from "./utils/router";
import AuthRootPage from "./pages/auth/auth_root_page";

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* <Route element={<PrivateRoute />}>
          <Route>
            Some private routes
          </Route>
        </Route> */}
        <Route path="/signin" element={<AuthRootPage />} />
        <Route path="/signup" element={<AuthRootPage />} />
      </Routes>
    </div>
  );
};

export default App;
