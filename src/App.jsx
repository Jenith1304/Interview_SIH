
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import InterVieweeDashboard from './components/IntervieweeDashboard/InterVieweeDashboard'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <div>
        <Navbar/>
        {/* <Home/> */}
        {/* <AboutUs/> */}
        {/* <ContactUs/> */}
        <InterVieweeDashboard/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
