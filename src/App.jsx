import './index.css'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // main
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';    
import Dropdown from './Dropdown';
function App() {
 
 const handleMenu = ()=>{
  const navDialog = document.getElementById("nav-dialog");
  navDialog.classList.toggle("hidden") // when that on click button is clicked navDialog will appear!!!
 }
  return (
    <>
    
   <nav className='px-8 py-3 flex font-body bg-[#f0eded] items-center'>
  {/* Left side - Logo and Brand */}
  <div className="flex-1">
    <a href="#" id='brand' className='flex flex-row items-center gap-3'>
      <img className='object-cover max-h-12 max-w-12' src="/src/assets/logo.png" alt="" />
      <span className='text-xl font-medium font-display'>GigFloww</span>
    </a>
  </div>
  
  {/* Right side - Navigation Links */}
  <div id="nav-menu" className='hidden lg:flex gap-10 ml-auto items-center'>
    <a href="#" className='font-medium hover:text-primary px-3'>Pricing</a>
    <a href="#" className='font-medium hover:text-primary px-3'>Docs</a>
    <a href="#" className='font-medium hover:text-primary px-3'>Login</a>
    <a href="#" className='font-medium hover:text-primary px-3 mr-4'> <Dropdown/></a>
  </div>
  
  {/* Mobile Menu Button */}
  <button className='p-2 lg:hidden ml-4' onClick={handleMenu}>
    <FontAwesomeIcon className='text-gray-600' icon={faBars} />
  </button>
  
  {/* Mobile Menu Dialog */}
  <div id='nav-dialog' className='fixed z-10 lg:hidden bg-white inset-0 px-8 py-3'>
    <div id="nav-bar" className='flex justify-between'>
      <a href="#" id='brand' className='flex flex-row items-center gap-2'>
        <img className='object-cover max-h-12 max-w-12' src="/src/assets/logo.png" alt="" />
        <span className='text-xl font-medium font-display'>GigFloww</span>
      </a>
      <button className='p-2 lg:hidden' onClick={handleMenu}>
        <FontAwesomeIcon className='text-gray-600' icon={faXmark} />
      </button>
    </div>
    <div className='mt-8'>
      <a href="#" className='font-medium hover:text-primary block m-3 p-3 rounded-lg hover:bg-gray-50'>Pricing</a>
      <a href="#" className='font-medium hover:text-primary block m-3 p-3 rounded-lg hover:bg-gray-50'>Docs</a>
      <a href="#" className='font-medium hover:text-primary block m-3 p-3 rounded-lg hover:bg-gray-50'>Login</a>
      <a href="#" className='font-medium hover:text-primary block m-3 p-3 rounded-lg hover:bg-gray-50'> <Dropdown/> </a>
    </div>
  </div>
</nav>
 
    {/* <main>
     
      <div id="hero" className='min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 via-green-50 via-blue-50 to-transparent'>

        <div id="hero-container" className='max-w-4xl mx-auto flex flex-col px-6 pt-6 pb-32 sm:items-center sm:text-center sm:pt-12'>
         <div id="version-text" className='flex flex-row items-center  bg-yellow-50 rounded-lg border border-yellow-300 my-6 gap-2 px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group'>
          <div className='w-2 h-2 rounded-full bg-yellow-400 border border-yellow-600 '></div>
          <p className='font-display font-medium text-yellow-600'>v0.21.1 : <span className='text-yellow-800'>Find-in-page- bug fixes</span> </p>
          <FontAwesomeIcon className='text-yellow-600 group-hover:translate-x-1 transition duration-300 ease-in-out' icon={faArrowRight}/>
         </div>
         <div id='body-features' className='hidden sm:flex gap-6 my-6 '>
          <a href="" className='flex flex-row justify-center items-center gap-2'>
          <FontAwesomeIcon icon={faCode} />
          <p>Code Optional</p>
          </a>
          <a href="" className='flex flex-row justify-center items-center gap-2'>
          <FontAwesomeIcon icon={faHandBackFist} />
          <p>Drag and Drop Builder</p>
          </a>
          <a href="" className='flex flex-row justify-center items-center gap-2'>
          <FontAwesomeIcon icon={faLaptop} />
          <p>Windows, Mac, Linux</p>
          </a>
         
         </div>
         <div className='hidden'></div>
         <h1 className='text-4xl font-semibold leading-snug mt-4 sm:text-6xl sm:leading-normal'>Web app to desktop app in minutes</h1>
         <p className='text-xl mt-4 sm:text-2xl sm:mt-8'>Take your web app codebase and transform it into a cross platform desktop app with native functionality</p>
         <div id='buttons-container' className='mt-12 flex flex-col gap-4 sm:flex-row'>
          <button className='px-8 py-3 rounded-lg text-white bg-primary shadow-sm hover:opacity-90'>Download Now</button>
          <button className='px-8 py-3 rounded-lg font-semibold bg-white border border-gray-400 hover:border-gray-800'>Read docs</button>
         </div>
        </div>
        
      </div>
     
    </main> */}
    </>
  )
}

export default App
