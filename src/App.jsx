import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Typewriter } from 'react-simple-typewriter'
import EducationSection from './components/Education'
import { motion } from 'framer-motion'
import AOS from 'aos'
import './App.css'
import { BsGithub } from 'react-icons/bs';
import { ImInfinite, ImLinkedin } from 'react-icons/im';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import Lottie from "lottie-react";
import myImg from './assets/shubhadeep.png'
import jsLogo from './assets/javaScript.png'
import java from './assets/java.png'
import python from './assets/python.png'
import react from './assets/react.svg'
import html from './assets/htmlLogo.png'
import tailwindLogo from './assets/tailwind.png'
import nodeLogo from './assets/nodeLogo.png'
import expressLogo from './assets/expressjs.webp'
import firebaseLogo from './assets/fireBase.png'
import mongoLogo from './assets/mongoDB.png'
import reactNativeLogo from './assets/reactNativeLogo.png'
import coding from "./lotties/coding.json";
import gitLogo from './assets/gitLogo.png'
import iPhone from './assets/iPhone.png'
import macbook from './assets/Imac.png'
import gitHubLogo from "./lotties/gitHubLogo.json";
import video from './assets/videoWeb.mp4'
import webApps from '../ProjectsData/WebProjects.json'
import mobileApps from "../ProjectsData/MobileAppProjects.json"
import routeData from '../ProjectsData/NavaigateRoutes.json'
import AlertCard from './components/AlertCard'
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom'




import githubLogo from './assets/github.png'
import ProjectCard from './components/ProjectCard'



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertPrompted, setIsAlertPrompted] = useState(false);
  const addresses = [
    {
      name: 'John Doe',
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      phone: '(123) 456-7890',
      email: 'john@example.com',
    },
    // Add more addresses as needed
  ];
  let handleContactAlert=()=>{
    setIsAlertPrompted(!isAlertPrompted)
  }
  // let navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, [])
  // console.log(webApps);
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Disable scrolling on the whole page
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling on the whole page
  };
  const disableScroll = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  }



  return (
    <div className='overflow-hidden'>
      {/* <--------Header Modal-------> */}
      {isModalOpen && <div id='modal' style={{ overflow: 'hidden', }} className='bg-slate-400 h-screen  w-screen absolute z-10 md:hidden'>
        <div className='p-4 relative h-15 '>
          <RxCross1 onClick={closeModal}  className='h-6 w-6 absolute top-5 right-10 ' />
        </div>
        <div className='mt-6 border-fuchsia-700 border-b-2  mx-2'>
          <a href='#skills' onClick={disableScroll} style={{ fontFamily: 'monospace', }} className='mt-[3rem] '>
            <p className='cursor-pointer font-bold text-white text-center'>Skills</p>
          </a>
        </div>

        <div className='mt-6 border-fuchsia-700 border-b-2  mx-2'>
          <a href='#specialization' onClick={disableScroll} style={{ fontFamily: 'monospace' }} className='mt-[3rem]'>
            <p className='cursor-pointer  font-bold text-white text-center'>Specialization</p>
          </a>
        </div>
        <div className='mt-6 border-fuchsia-700 border-b-2  mx-2'>
          <a href='#education' onClick={disableScroll} style={{ fontFamily: 'monospace' }} className='mt-[3rem]'>
            <p className='cursor-pointer font-bold text-white text-center'>Education</p>
          </a>
        </div>
        <div className='mt-6 border-fuchsia-700 border-b-2 mx-2 '>
          <a href='#experiance' onClick={disableScroll} style={{ fontFamily: 'monospace' }} className='mt-[3rem] '>
            <p className='cursor-pointer font-bold text-white text-center'>Experiance</p>
          </a>
        </div>




      </div>}
      <div id='/' className={`bg-[url("./assets/backGImage.jfif")] z-0 border-b-2 border-black bg-cover bg-left font-bold text-[20px] h-screen w-screen`}>
        <div className='bg-black bg-opacity-40 h-[100vh] w-[100vw]'>
          {/* -------Header------ */}
          <header className='w-full text-white h-50 flex sticky top-0 justify-between py-5 px-10'>
            <div className='w-[40%]'>
              <motion.p
                initial={{ x: -400 }}
                animate={{ x: 0, duration: 3 }}
                op
                className='text-sm md:text-lg font-sans'>Shubhadeep Mahato
              </motion.p>
            </div>
            <div className='w-[60%]  hidden md:flex font-extrabold text-white text-[20px] font-mono  justify-end space-x-[4rem]'>

              <a href='#skills' className='cursor-pointer'>Skills</a>
              <a href='#specialization' className=' cursor-pointer '>Specialization</a>
              <a href='#education' className='cursor-pointer'>Education</a>
              <a href='#experiance' className='cursor-pointer'>Experiance</a>
            </div>
            <GiHamburgerMenu onClick={openModal} className='text-white mt-1 md:hidden' size={22} />
          </header>
          {/* ------Social Icons----- */}
          <div className=' mt-14 md:mt-8   w-[100vw] '>
            <div className='flex w-[12rem] justify-between md:border-2 md:border-[rgba(10,43,302,35)] p-2 md:p-3 rounded-[100px] md:w-[25rem] m-auto text-center  '>
              <a href='https://github.com/shubhadeepMH' target='_blank' ><BsGithub size={30} className='text-white hover:text-[gold]  cursor-pointer hover:scale-125 ' /></a>
              <a href='https://www.linkedin.com/in/shubhadeep-mahato-24136621b/' target='_blank' ><ImLinkedin size={30} className='text-white hover:text-[gold]  cursor-pointer hover:scale-125' /></a>
              <a href='https://twitter.com/Shubhadeepmaha9' target='_blank' > <AiFillTwitterCircle size={30} className='text-white hover:text-[gold]   hover:scale-125 cursor-pointer' /></a>



            </div>
          </div>
          <div className='w-[100vw] mt-8   '>
            <div className='md:flex md:justify-center w-full md:-space-x-10 items-center'>
              <div className='App  md:w-[50%] text-right'>
                <h1 className='text-center text-[24px] md:text-[20px]' style={{ fontFamily: 'cursive', color: 'white', margin: 'auto 0', fontWeight: 'bold' }}>
                  Hi I Am Shubhadeep Mahato A{' '}
                  <div className='md:p-5 text-[20px] md:text-[20px] text-yellow-500 ' style={{ fontWeight: 'bold', fontFamily: 'monospace' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={['Full Stack(MERN)', 'Mobile(REACT NATIVE)',]}
                      loop={true}
                      cursor
                      cursorStyle='_'
                      typeSpeed={120}
                      deleteSpeed={70}
                      delaySpeed={1000}

                    />

                  </div>
                  <span>Developer</span>
                </h1>
              </div>
              <div className='rounded-full md:w-[50%] mt-10 md:mt-0 '>
                <img className='h-[14rem] brightness-150 md:h-[17rem] md:w-[19rem] w-[18rem] text-right m-auto shadow-md shadow-white rounded-full' src={myImg} alt="" />
              </div>
            </div>


          </div>



        </div>
      </div>
      {/* -----Skills------ */}
      <section id='skills' className={` w-screen bg-cover bg-fuchsia-900  bg-center bg-opacity-60 `}>
        <div className='border-b border-white p-2'>
          <h2 style={{ fontFamily: 'monospace', fontWeight: 'bolder', fontSize: 30, color: 'white', letterSpacing: 2 }} className=' text-center  text-xl  md:relative top-2'>Technical Skills</h2>
        </div>

        <div className=' mt-4 md:h-[35rem] bg-opacity-50 h-[40rem] md:flex justify-center items-center'>

          {/* Left Side */}
          <div className='md:w-[60%] h-[25rem] md:h-full ' >

            <div className='w-[100%] h-[95%]  overflow-y-auto scrollbar-hide   '>
              <div >
                <h3 style={{ fontFamily: 'sans-serif' }} className='text-center font-extrabold text-black text-lg'>Programming Languages</h3>
                <div className='flex space-x-10 items-center mt-2 font-serif justify-center'>
                  <img className='md:h-[6rem] md:w-[6rem] h-[4rem] w-[4rem] rounded-full' src={jsLogo} alt="" />
                  <img className='md:h-[6rem] md:w-[6rem] h-[4rem] w-[4rem] ' src={java} alt="" />
                  <img className='md:h-[6rem] md:w-[6rem] h-[4rem] w-[4rem] ' src={python} alt="" />
                </div>
              </div>
              <div className='mt-2'>
                <h3 style={{ fontFamily: 'sans-serif' }} className='text-center font-extrabold text-black text-lg'>Mobile App Development</h3>
                <div className='flex space-x-10 items-center mt-2 font-serif justify-center'>
                  <img className='md:h-[5rem] md:w-[19rem] h-[3rem] w-[12rem] ' src={reactNativeLogo} alt="" />

                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: 'sans-serif' }} className='text-center font-extrabold text-lg mt-3 text-black '>Front  End Technologies</h3>
                <div className='flex space-x-10 items-center mt-3 justify-center'>
                  <img className='md:h-[7rem] md:w-[7rem] h-[4rem] w-[4rem]  rounded-full' src={react} alt="" />
                  <img className='md:h-[7rem] md:w-[7rem] h-[4rem] w-[4rem] ' src={html} alt="" />
                  <img className='md:h-[7rem] md:w-[7rem] h-[4rem] w-[4rem] ' src={tailwindLogo} alt="" />
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: 'sans-serif' }} className='text-center font-extrabold text-lg mt-3 text-black '>Back End Technologies</h3>
                <div className='flex space-x-10 items-center mt-1 justify-center'>
                  <img className='md:h-[7rem] md:w-[7rem] h-[4rem] w-[4rem]  rounded-full' src={nodeLogo} alt="" />
                  <img className='md:h-[3rem] md:w-[10rem] h-[3rem] w-[5rem] ' src={expressLogo} alt="" />
                  <img className='md:h-[9rem] md:w-[9rem] h-[7rem] w-[7rem] ' src={firebaseLogo} alt="" />
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: 'sans-serif' }} className='text-center font-extrabold text-lg mt-3 text-black '>Data Bases</h3>
                <div className='flex space-x-10 items-center mt-3 justify-center'>
                  <img className=' md:w-[15rem]  w-[9rem]  ' src={mongoLogo} alt="" />

                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: 'sans-serif' }} className='text-center font-extrabold text-lg pt-9 text-black '>Version Control</h3>
                <div className='flex space-x-2 items-center justify-center'>
                  <img className='h-[8rem] w-[18rem] md:h-[10rem]' src={gitLogo} alt="" />
                  <Lottie className='md:w-[23rem] md:h-[17rem] scale-[125%]' animationData={gitHubLogo} />;

                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className='md:w-[40%] h-[10] '>
            {/* <img className='text-white h-[17rem] w-[39rem] bg-transparent ' src={codingImg} alt="" /> */}

            <Lottie className='md:w-[50rem] md:h-[60rem] p-3 md:text-left scale-150  h-[20rem]  w-[25rem]' animationData={coding} />;
          </div>
        </div>

      </section>
      {/* -------Specialization-------- */}
      <section id='specialization' className='bg-[url("./assets/bg3.webp")] mt-2 w-[full] md:h-[61rem] h-[92rem] pt-1'>
        <div className='bg-fuchsia-700 bg-opacity-20 h-[102%]'>
          <h3 style={{ fontFamily: 'sans-serif', }} className='text-center text-white font-extrabold text-[2rem] border-gray-400 border-b mx-3 rounded-[100px]'>Specializations</h3>

          {/* Mobile Specialization */}
          <div className='md:flex items-center  border-fuchsia-700 border-b justify-between p-3  '>
            {/* Image */}
            <div className='md:w-[50%]  md:border-r border-white'>
              <img className='md:h-[30rem] md:w-[19rem] h-[23rem] mt-3 w-[70%] m-auto text-center' src={iPhone} alt="" />
            </div>
            {/* Text */}
            <div className='md:w-[50%]' data-aos="slide-left" data-aos-offset={170} data-aos-duration={550} >
              <p style={{ fontFamily: 'monospace', letterSpacing: 2, }} className=' text-center  font-bold  text-white shadow-md shadow-fuchsia-700 text-[1.1rem] md:text-[1.3rem] px-7'>"I'm Shubhadeep Mahato, a skilled  <span className='text-[2rem] text-fuchsia-700'>React Native </span>.developer I create mobile apps that work on different devices using React Native tools. I enjoy making apps user-friendly and always keep up with the latest trends in mobile development."</p>
            </div>
          </div>
          {/* Web Specialization */}
          <div className='md:flex items-center border-fuchsia-700 border-b justify-between p-3 '>
            {/* Image */}
            <div className='md:w-[60%] order-2  md:border-l relative border-white'>
              <img className='md:h-[23rem]  md:w-[30rem] h-[15.7rem] mt-3 w-[95%] m-auto text-center' src={macbook} alt="" />
              <video className='absolute bottom-0  left-5 h-[19.7rem] md:h-[19rem] md:w-[29rem] w-[19.7rem] md:top-0 rounded-t-lg md:left-[10.4rem]' loop autoPlay  >
                <source src={video} type="video/mp4" />
                width="470" height="610"
              </video>
            </div>
            {/* Text */}
            <div className='md:w-[40%] order-1 ' data-aos="slide-right" data-aos-offset={170} data-aos-duration={550} >
              <p style={{ fontFamily: 'monospace', }} className=' text-center  font-bold  text-white shadow-md shadow-fuchsia-700 text-[1rem] md:text-[1.3rem] px-7'>HI,i am Shubhadeep is a skilled <span className='text-[2rem] font-bold text-yellow-300'>MERN</span>  stack web developer, adept at crafting dynamic web applications. Proficient in MongoDB, Express.js, React, and Node.js, i excels in creating seamless user experiences. With a knack for turning client ideas into efficient code, i am  updated with the latest trends. My passion for innovation and dedication to excellence drive myself to deliver impactful digital solutions that propel businesses forward..</p>
            </div>
          </div>
        </div>
      </section>
      {/* -----Projects------ */}
      <section id='projects' className='bg-[url("./assets/bg4.jfif")] md:h-[78rem] h-[96rem] w-[100%] bg-cover bg-top'>
        <div className='bg-black bg-opacity-50 h-full w-full'>
          {/* --------Web Projects------- */}
          <div className='md:h-[38rem]'>
            <h2 style={{ fontFamily: 'monospace' }} className='font-bold shadow-pink-500 shadow-md text-center text-slate-100 text-[1.4rem] md:text-[1.7rem]'>Web Development Projects</h2>
            <div className='md:grid md:grid-cols-4 md:flex-wrap overflow-y-scroll  h-[40rem] md:h-[33rem] pt-2   mt-3 space-x-3 md:space-x-6 scrollbar-hide w-full items-center justify-evenly'>
              {webApps.map((item, index) => {
                return <ProjectCard key={index} data={item} />
              })}
            </div>

          </div>

          {/* -------App Projects------ */}
          <div className='h-[25rem]'>
            <h2 style={{ fontFamily: 'monospace' }} className='font-bold shadow-pink-500 shadow-md text-center text-[1.4rem] md:text-[1.7rem] text-slate-100'>Mobile App Projects</h2>
            <div className='md:grid md:grid-cols-4 md:flex-wrap overflow-y-scroll  h-[40rem] md:h-[33rem] pt-2   mt-3 space-x-3 md:space-x-6 scrollbar-hide w-full items-center justify-evenly'>
              {mobileApps.map((item, index) => {
                return <ProjectCard data={item} />
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <<<------Work Experiance------>>> */}
      <section id='experiance' className='bg-slate-600 w-full h-[33rem]'>
        <h2 style={{ fontFamily: 'monospace' }} className='font-bold text-[1.5rem] md:text-[2rem] border-t-2 border-white rounded-lg text-center text-yellow-400'>Work Experiance/Freelancing</h2>
        <div className="container mx-auto p-4" data-aos="flip-left" data-aos-offset={170} data-aos-duration={800}>

          <div className="bg-white p-4 rounded shadow-md">
            <h2 style={{ fontFamily: "serif" }} className="text-xl font-semibold">Audio Simulator</h2>
            <p style={{ fontFamily: 'inherit' }} className="text-gray-600 mb-2">
              Client requirement was to create a graph  from lots of complex data and make that visualise and make a downloadable PDF report of that data.
            </p>
            <div className="flex space-x-2">
              <span className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full text-xs">
                React.js
              </span>
              <span className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full text-xs">
                React chart
              </span>
              <span className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full text-xs">
                React PDF
              </span>
              {/* Add more technologies if needed */}
            </div>
          </div>
        </div>


      </section>
      {/* ------Education------- */}
      <section id='education'>
        <section className="bg-gray-100 py-10">
          <EducationSection />
        </section>

      </section>
      {/* <------Contact Me---------> */}

     {isAlertPrompted && <AlertCard handleContactAlert={handleContactAlert} address="Purulia West Bengal, INDIA, 723149"
        mobile="9883516189"
        email="shubhadeepmahato123@gmail.com" />}

      <div
        className="bg-transparent fixed bottom-3 cursor-pointer  right-2 items-center content-center text-center h-[5rem] w-[5rem]  shadow-md transition duration-300 ease-in-out rounded-full "
      onClick={handleContactAlert}
      >
        <BsFillChatDotsFill className='m-auto text-center hover' color='fuchsia' size={40} />

        <p style={{ fontFamily: 'monospace', color: 'green' }} className='opacity-0 font-extrabold text-lg hover:opacity-100  '>Contact</p>
      </div>

    </div>
  )
}

export default App
