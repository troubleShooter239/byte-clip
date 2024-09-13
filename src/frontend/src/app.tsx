import { Route, Routes } from 'react-router-dom'
import AuthRootPage from './pages/auth/auth_root_page'

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* <Route element={<PrivateRoute />}>
          <Route>
            Some private routes
          </Route>
        </Route> */}
        <Route path="/sign-in" element={<AuthRootPage />} />
        <Route path="/sign-up" element={<AuthRootPage />} />
      </Routes>
    </div>
  )
}

export default App
