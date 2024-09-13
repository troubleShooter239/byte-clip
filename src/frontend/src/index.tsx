import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { CssVarsProvider } from '@mui/joy/styles/CssVarsProvider'
// import darkTheme from "./themes/dark";
import '@fontsource/nunito'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <CssVarsProvider theme={darkTheme}> */}
        <CssVarsProvider>
          <App />
        </CssVarsProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)

reportWebVitals()
