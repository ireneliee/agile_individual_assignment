import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AcademicPage from './pages/AcademicsPage';
import AdmissionPage from './pages/AdmissionPage';
import HomePage from './pages/HomePage';
import Appbar from './components/AppBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <>
          <Appbar />
          <HomePage />
        </>}
        >
        </Route>
        <Route path="/academics" element={
          <>
            <Appbar />
            <AcademicPage />
          </>

        } />
        <Route path="/admission" element={
          <>
            <Appbar />
            <AdmissionPage />
          </>

        } />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
