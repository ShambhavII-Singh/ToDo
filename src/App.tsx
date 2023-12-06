import { ThemeProvider } from './components/theme-provider';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LogInPage } from './containers/LogInPage'
import { SignUpPage } from './containers/SignUpPage'
import { MainPage } from './containers/MainPage';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
