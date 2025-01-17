import './index.css'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // main
import { faArrowRight, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';    
function App() {
 
 const handleMenu = ()=>{
  const navDialog = document.getElementById("nav-dialog");
  navDialog.classList.toggle("hidden") // when that on click button is clicked navDialog will appear!!!
 }
  return (
    <>
    <nav className='p-3 flex font-body bg-white justify-between items-center'>
    <a href="#" id='brand' className='flex flex-row items-center gap-2'>
      <img className='object-cover max-h-12 max-w-12' src="/src/assets/logo.png" alt="" />
      <span className='text-lg font-medium font-display'>ToDesktop</span>
      </a>
      <div id="nav-menu" className=' hidden lg:flex gap-12'>
        <a href="#" className='font-medium hover:text-primary'>Pricing</a>
        <a href="#" className='font-medium hover:text-primary'>Docs</a>
        <a href="#" className='font-medium hover:text-primary'>Changelog</a>
        <a href="#" className='font-medium hover:text-primary'>Blogs</a>
        <a href="#" className='font-medium hover:text-primary'>Login</a>
      </div>
      {/* Mobile first approach follow ho rhi h to mobile ke liye ye hidden lekin uske baad large ke liye visible */}
      <button className='hidden  lg:flex gap-2 items-center border px-6 py-2 rounded-lg border-gray-400  hover:border-gray-600'>
        <img src="/src/assets/electron-icon.svg" alt="" />
       <span>Electron Developer</span>
       <FontAwesomeIcon icon={faArrowRight}/>
        </button>

        {/* Menu starts */}
      {/* large size pe hide krdo menu */}
      <button className='p-2 lg:hidden' onClick={handleMenu}>
      <FontAwesomeIcon className='text-gray-600' icon={faBars} />
      </button>
      
      {/* logic for when menu is opened */}
      {/* ye div saari jagah le lega */}
      <div id='nav-dialog' className='fixed z-10 lg:hidden bg-white inset-0 p-3'>
        <div id="nav-bar" className='flex justify-between'>
        <a href="#" id='brand' className='flex flex-row items-center gap-2'>
        <img className='object-cover max-h-12 max-w-12' src="/src/assets/logo.png" alt="" />
        <span className='text-lg font-medium font-display'>ToDesktop</span>
      </a>
      <button className='p-2 lg:hidden' onClick={handleMenu}>
      <FontAwesomeIcon className='text-gray-600' icon={faXmark} />
      </button>
        </div>
        <div className='mt-6'>
        <a href="#" className='font-medium hover:text-primary block m-3 p-3 rounded-lg hover:bg-gray-50'>Pricing</a>
        <a href="#" className='font-medium hover:text-primary block m-3 p-3 rounded-lg hover:bg-gray-50'>Docs</a>
        <a href="#" className='font-medium hover:text-primary block m-3 p-3 rounded-lg hover:bg-gray-50'>Changelog</a>
        <a href="#" className='font-medium hover:text-primary block m-3 p-3 rounded-lg hover:bg-gray-50'>Blogs</a>
        <a href="#" className='font-medium hover:text-primary block m-3 p-3 rounded-lg hover:bg-gray-50'>Login</a>
        </div>
        {/* Electron wala button */}
      <div className='h-[1px] bg-gray-300'></div>
        <div>
        <button className='lg:hidden flex w-full gap-2 items-center px-6 py-6 rounded-lg hover:border-gray-600 hover:bg-gray-50 mt-6'>
        <img src="/src/assets/electron-icon.svg" alt="" />
       <span>Electron Developer</span>
      
        </button> 
        </div>
        
      </div>
    </nav>
    {/* Main */}fixes
    <main>
      {/* Hero */}
      <div id="hero" className='min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent'>

        <div id="hero-container" className='max-w-4xl mx-auto flex flex-col px-6 pb-32'>
         <div id="version-text" className='flex flex-row items-center  bg-yellow-50 rounded-lg border border-yellow-300 my-6 gap-2 px-3 py-1 w-fit'>
          <div className='w-2 h-2 rounded-full bg-yellow-400 border border-yellow-600'></div>
          <p className='font-display'>v0.21.1 : <span>Find-in-page- bug fixes</span> </p>
          <FontAwesomeIcon className='text-yellow-600' icon={faArrowRight}/>
         </div>
        </div>
        
      </div>
     
    </main>
    </>
  )
}

export default App
