
import './App.css'
import FeaturedServices from './components/FeaturedServices/FeaturedServices';
import NavBar from './components/Navbar/NavBar'
import dataSlides from './components/slider2/dataSlides'; 
import Slider2 from './components/slider2/Slider2'
import dataFeature from './components/FeaturedServices/bataFeature'
import NeedHelp from './components/NeedHelp /NeedHelp';
import About from './components/About/About';
import Nambers from './components/Counter/Nambers';
import dataNamber from './components/Counter/dataNamber';
import Lab from './components/Lab/Lab';
import Services from './components/Services/Services';
import dataServices  from "./components/Services/dataServices" 
import Appointment from './components/APPOINTMENT/Appointment';
import Departments from './components/Departments/Departments';
import departments from './components/Departments/depaetments';
import ScrollButton from './components/ScrollButton/ScrollButton';
import Doctors from './components/Doctors/Doctors';
import doctor from './components/Doctors/doctor';
import { images } from './components/Gallery/dataGallery';
import Gallery from './components/Gallery/Gallery'
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonials from './components/Testimonials/Testimonials';
import { data } from './components/Testimonials/dataTestimonials';
import Pricing from './components/Pricing/Pricing';
import dataPricing from './components/Pricing/dataPricing'
import Questions from './components/Questions/Questions';
import dataQuestions from './components/Questions/dataQuestions'
import Contact from './components/Contact/Contact';


import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
    <NavBar btn="Make an Appointment" />
    <Slider2 slider={dataSlides} />
    <ScrollButton/>
    <FeaturedServices feature={dataFeature}/> 
    <NeedHelp/>
    <About/>
    <Nambers info={dataNamber}/>
    <Lab/>
    <Services item={dataServices}/>
    <Appointment/>
    <Departments departments={departments}/>
    <Testimonials data={data}/>
    <Doctors doctor={doctor}/>
    <Gallery images={images}/>
    <Pricing dataPricing={dataPricing}/>
    <Questions data={dataQuestions}/>
    <Contact />
    <Footer/>


    </>
        
  )
}

export default App
