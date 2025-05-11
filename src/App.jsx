import React from 'react'
import resume from '../src/assets/resume.pdf';
import heroimg from '../src/assets/Research.png'
import chat from '../src/assets/Chat.png'
import jwelleries from '../src/assets/jwellery.png'
import Security from '../src/assets/Security.png'
import photograph from '../src/assets/photograph.jpg'


function App() {
  return (
    <div>
      <nav className='bg-slate-300 h-20 fixed  shadow-md w-full px-6 py-2'>
        <div class="container mx-auto flex justify-between items-center px-5">
          <div className="flex items-center space-x-4">
            <img
              src={photograph}
              className="h-24 w-24 rounded-full border-2 border-orange-500 object-cover"
              alt="Profile"
            />
            <h1 className="text-xl font-bold text-left">SEJAL SHARMA</h1>
          </div>

          <ul class="flex space-x-10">
            <li><a href="#" class="hover:text-orange-500 font-bold">Home</a></li>
            <li><a href="#about" class="hover:text-orange-500 font-bold">About</a></li>
            <li><a href="#projects" class="hover:text-orange-500 font-bold">Projects</a></li>
            <li><a href="#contact" class="hover:text-orange-500 font-bold">Contact</a></li>
          </ul>
        </div>
      </nav>
      <section class=" flex flex-col md:flex-row items-center justify-center px-2 ">

        <div class="text-center md:text-left  space-y-6">
          <h1 class="text-4xl  font-bold text-gray-900 ml-40">HEY, I'M SEJAL SHARMA</h1>
          <p class=" text-gray-700 ml-20 text-lg">
            A passionate Developer Specialized in Tailwind css Looking for Opportunities
            <br></br>
            <span className='ml-10'>to work with a team of talented individuals to follow my passion.</span>


          </p>
          <div class="flex justify-center md:justify-center gap-4">
            <a href={resume} class="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition">Resume</a>
            <a href="#contact" class="border border-orange-500 text-orange-500 font-semibold px-6 py-2 rounded hover:bg-blue-50 transition">Contact Me</a>
          </div>
        </div>


        <div class="  md:w-1/2 flex justify-center w-20">
          <img src={heroimg} alt="Developer Illustration" class="max-w-xl  ml-20" />
        </div>
      </section>

      <section class="bg-gray-50 py-16 px-6 md:px-20">
        <h2 id="about" class="text-4xl font-bold text-center text-gray-900 mb-2">ABOUT ME</h2>
        <hr className='w-16 border-t-4 border-orange-500 mx-auto my-2'></hr>
        <p class="text-center text-gray-700 text-lg mb-12">
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div class="bg-white shadow-md rounded-xl p-6 space-y-6">
            <h3 class="text-2xl font-bold text-center text-gray-900">GET TO KNOW ME</h3>
            <div class="border-t-2 border-orange-500 w-1/5 mx-auto mb-4"></div>
            <button class="bg-orange-500 text-white font-semibold px-6 py-2 rounded text-sm mx-auto block  hover:bg-orange-600 transition">EDUCATION</button>

            <div class="text-gray-800 space-y-4">
              <div>
                <h4 class="font-semibold">B.Sc in Information Technology</h4>
                <ul class="list-disc list-inside text-sm text-gray-600">
                  <li>Sadabai Raisoni Women's College</li>
                  <li>Aug 2022 – April 2025</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold">Secondary School Certificate</h4>
                <ul class="list-disc list-inside text-sm text-gray-600">
                  <li>St. Joseph's Convent Nagpur</li>
                  <li> March 2020</li>
                </ul>
              </div>
            </div>

            <button class="bg-orange-500 text-white font-semibold px-6 py-2 rounded text-sm mx-auto block  hover:bg-orange-600 transition">MORE</button>

            <p class="text-gray-700 text-sm text-center mt-4">
              I'm an B.Sc(Information Technology) student passionate about coding. Always ready to try hands-on new and emerging technologies.
            </p>
          </div>


          <div class="bg-white shadow-md rounded-xl p-6 space-y-6">
            <h3 class="text-2xl font-bold text-center text-gray-900">MY SKILLS</h3>
            <div class="border-t-2 border-orange-500 w-1/5 mx-auto mb-4"></div>
            <button class="bg-orange-500 text-white font-semibold px-6 py-2 rounded text-sm mx-auto block  hover:bg-orange-600 transition">WEB DEVELOPMENT</button>

            <div class="grid grid-cols-3 gap-6 justify-items-center mt-4 text-center text-sm font-medium text-gray-700">
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="w-10 h-10 mx-auto" />
                <p>HTML</p>
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" class="w-10 h-10 mx-auto" />
                <p>CSS</p>
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="w-10 h-10 mx-auto" />
                <p>JavaScript</p>
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" class="w-10 h-10 mx-auto" />
                <p>BootStrap</p>
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" class="w-10 h-10 mx-auto" />
                <p>React JS</p>
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" class="w-10 h-10 mx-auto" />
                <p>Node JS</p>
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" class="w-10 h-10 mx-auto bg-white" />
                <p>Express JS</p>
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" class="w-10 h-10 mx-auto" />
                <p>MongoDB</p>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section class="py-16 bg-white text-center">

        <h2 id="projects" class="text-4xl font-bold text-gray-900 mb-2">PROJECTS</h2>
        <div class="w-16 h-1 bg-orange-500 mx-auto mb-4 rounded"></div>


        <p class="text-gray-700 text-lg max-w-2xl mx-auto mb-12">
          Here you will find some of my personal projects that I created with each project some unique functionality is implemented
        </p>


        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">

          <div class="bg-white rounded-xl shadow-md overflow-hidden border">
            <img src={chat} class="w-full h-60 object-contain p-4" />
            <div class="bg-orange-400 p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">WorkZone</h3>
              <p class="text-sm text-gray-800 mb-4">
                WorkZone is a webApp created using React and Chatgpt api it is a job centric platform
              </p>
              <div class="flex justify-center gap-4">
                <a href="https://github.com/sejalsharmas/icp8.0-reactjs-group-project-4" class="bg-orange-100 text-orange-900 px-4 py-2 rounded shadow hover:bg-orange-500 border-t-2 border-orange-900">Code</a>
                <a href="https://icp8-0-reactjs-group-project-4-xi.vercel.app/" class="bg-orange-100 text-orange-900 px-4 py-2 rounded shadow hover:bg-orange-500 border-t-2 border-orange-900">Demo</a>
              </div>
            </div>
          </div>


          <div class="bg-white rounded-xl shadow-md overflow-hidden border">
            <img src={Security} class="w-full h-60 object-contain p-4" />
            <div class="bg-orange-400 p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Kavach kritis</h3>
              <p class="text-sm text-gray-800 mb-4">
                It is a womens security appliaction that is made using React Native and Firebase it contains authentication fundamentality
              </p>
              <div class="flex justify-center gap-4">
                <a href="https://github.com/sejalsharmas/Kavach-Kritis-App" class="bg-orange-100 text-orange-900 px-4 py-2 rounded shadow hover:bg-orange-500 border-t-2 border-orange-900">Code</a>

              </div>
            </div>
          </div>


          <div class="bg-white rounded-xl shadow-md overflow-hidden border">
            <img src={jwelleries} class="w-full h-60 object-contain p-4" />
            <div class="bg-orange-400 p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Jwellerie Collection</h3>
              <p class="text-sm text-gray-800 mb-4">
                This is A Full Stack Website Made using MERN Stack thi website contains jwelleries in gold and silver.
              </p>
              <div class="flex justify-center gap-4">
                <a href="https://github.com/sejalsharmas/jwellery-backend" class="bg-orange-100 text-orange-900 px-4 py-2 rounded shadow hover:bg-orange-500 border-t-2 border-orange-900">Code</a>
                <a href="https://jewellery-frontend-pi.vercel.app/" class="bg-orange-100 text-orange-900 px-4 py-2 rounded shadow hover:bg-orange-500 border-t-2 border-orange-900">Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" class="container  p-6 text-center bg-slate-200">
        <h2 class="text-2xl font-bold text-orange-500">Contact Me</h2>
        <p class="mt-4">Email: sejalsharmaany@gmail.com || Contact No: 9021830161</p>
      </section>
      <footer class="bg-orange-500 text-white text-center py-4 ">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>


    </div>
  )
}

export default App