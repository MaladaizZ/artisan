import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import { Routes, Route} from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import ArtisanListe from './pages/artisanliste'
import ArtisanProfil from './pages/artisanprofil'

function App() {

  return (
    <div>
    <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/artisanliste" element={<ArtisanListe />} />
        <Route path="/artisanprofil" element={<ArtisanProfil />} />
      </Routes>
    
    <Footer />
    </div>
  )
}

export default App
