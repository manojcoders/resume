import React, { useState, useEffect } from "react";
import "./index.css";  // Ensure Tailwind is imported in your project
import "./App.css";    // You can keep your custom styles here, but we will primarily use Tailwind classes now

const App = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const timeOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const time = new Intl.DateTimeFormat("en-IN", timeOptions).format(new Date());
      setCurrentTime(time);
    };

    // Start time updating
    const timeInterval = setInterval(updateTime, 1000);

    // Simulate the loading state for 3 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false); // Stop the loader after 3 seconds
    }, 3000);

    // Cleanup intervals and timeouts when the component is unmounted
    return () => {
      clearInterval(timeInterval);
      clearTimeout(loadingTimeout);
    };
  }, []);

 

   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      {isLoading ? (
        <div className="relative w-16 h-16 border-4 border-transparent border-t-black rounded-full animate-spin">
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-indigo-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        
        {/* Small spinning lines */}
        <div className="absolute top-0 left-1/2 w-1 h-4 bg-black transform -translate-x-1/2 animate-spin"></div>
        <div className="absolute bottom-0 left-1/2 w-1 h-4 bg-black transform -translate-x-1/2 animate-spin"></div> 
      </div>
      
    ) : (
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 smooth-fade-in">
     {/* {Name} */}
     <div className="card bg-white rounded-lg p-6 col-span-1 md:col-span-2">
    <h4 className="font-bold card-content font-commissioner text-4xl">KANDHULA MANOJ KUMAR</h4>
    <p className="card-content text-gray-600">Software Developer</p>
     </div>
     {/* {About} */}
     <div className="card bg-white rounded-lg p-6 col-span-1 md:col-span-2">
      <h4 class="font-bold card-content border-b-2 mb-2 border-gray-300">About</h4>
      <p class="text-sm text-gray-600 card-content-syne  font-serif">Innovative professional with strong problem-solving skills, adaptable to challenges, 
        and focused on delivering impactful solutions and driving success..</p>
     </div>
     {/* {intere ship} */}
     <div className="card bg-white rounded-lg p-6 col-span-1 row-span-1 md:row-span-2 md:col-span-2">
      <h4 class="font-bold card-content border-b-2 mb-2 border-gray-300">Interenship&Education</h4>
      <div className="text-sm card-content-syne max-h-60 overflow-y-hidden hover:overflow-y-auto">
        <div className="flex flex-col pb-2">
          <span class="text-gray-600">Software Developer</span>
          <span class="text-gray-600 ">VulcanTechs | Jun 2024 - Dec 2024 (7 months)</span>
          <span class="text-gray-400 text-xs font-serif">
          Assisted in developing and maintaining web applications using [specific technologies, e.g., PHP, MySQL, or React].
          Collaborated with cross-functional teams to implement new features and optimize performance.
          Gained hands-on experience in debugging, testing, and deploying software solutions.
          </span>
        </div>
        
        <div className="flex flex-col pb-2">
          <span class="text-gray-600">Bsc computer science</span>
          <span class="text-gray-600 oldstyle-nums">2021-2024</span>
          <span class="text-gray-400 oldstyle-nums">CGPA:7.88</span>
        </div>
        <div className="flex flex-col pb-2">
          <span class="text-gray-600">HighersecondaryEducation</span>
          <span class="text-gray-600 oldstyle-nums">2019-2021</span>
          <span class="text-gray-400 oldstyle-nums">CGPA:6.88</span>
        </div>
        <div className="flex flex-col pb-2">
          <span class="text-gray-600">Primary school Education</span>
          <span class="text-gray-600 oldstyle-nums">2018-2019</span>
          <span class="text-gray-400 oldstyle-nums">CGPA:9.00</span>
        </div>
      </div>
     </div>
     {/* {projects} */}
     <div className="card bg-white rounded-lg p-6 col-span-1 row-span-1 md:row-span-2 md:col-span-2">
      <h4 class="font-bold card-content border-b-2 mb-2 border-gray-300">Projects & Experience</h4>
      <div className="text-sm card-content-syne max-h-60 overflow-y-hidden hover:overflow-y-auto">
        <div className="flex flex-col pb-2">
          <span class="text-gray-600">Own project</span>
          
          <p class="text-gray-400 text-xs font-serif">
          To create a simple multilingual website where clicking on a language option redirects the user to the corresponding language page,
           you can use HTML, CSS, and optionally JavaScript for enhanced interactivity. Here's how you can structure such a project
          </p>
        </div>
        <div className="flex flex-col pb-2">
          <span class="text-gray-600">Competency Skills (Ford Company)</span>
          
          <p class="text-gray-400 text-xs font-serif">Developed SPFx solutions at Ford to enhance SharePoint-based competency assessments and internal workflows. Integrated dynamic
          list handling and modern React components for improved usability and efficienc</p>
        </div>
        <div className="flex flex-col pb-2">
          <span class="text-gray-600">H360 (In Patient&Outpatient)</span>
          
          <p class="text-gray-400 text-xs font-serif">H360 is a comprehensive hospital management system designed
            to streamline patient care, appointments, billing, and reporting. It integrates
            various modules like inpatient, outpatient, diagnostics, and pharmacy for seamless healthcare operations. The system supports dynamic file uploads (PDF/images), digital signatures, and printable medical summaries. Built using PHP, jQuery, 
            and MySQL, H360 improves hospital efficiency and enhances patient experience.</p>
        </div>
        {/* <div className="flex flex-col pb-2">
          <span class="text-gray-600">Bsc computer science</span>
          <span class="text-gray-600">2021-2024</span>
          <p class="text-gray-400">CGPA:7.88</p>
        </div>
        <div className="flex flex-col pb-2">
          <span class="text-gray-600">HighersecondaryEducation</span>
          <span class="text-gray-600">2019-2021</span>
          <p class="text-gray-400">CGPA:6.88</p>
        </div>
        <div className="flex flex-col pb-2">
          <span class="text-gray-600">Primary school Education</span>
          <span class="text-gray-600">2018-2019</span>
          <span class="text-gray-400">CGPA:9.00</span>


        </div> */}
       </div>
       </div>
       {/* {time} */}
       <div className="card bg-white rounded-lg p-6">
       <h4 className="font-bold border-b-2 mb-2 border-gray-300 text-sm card-content-syne" >Time India</h4>
       <p className="text-sm text-gray-600 card-time oldstyle-nums font-bold">{currentTime}</p>
       
       </div>
       {/* {contactme} */}
       <div className="card bg-white rounded-lg p-6">
          <p class="border-gray-300 text-xs font-serif">
               Freelance developer ready let's work together on your next big idea🦾.</p>
          <div class="card-content-syne p-1 rounded-full border text-gray">
          <a href="mailto:kandhulamanojkumar663@gmail.com" class="py-1 text-xs border-gray-600 flex items-center justify-between">
            Contact Me
       
        <span class="material-symbols-outlined text-xs ml-1">
         arrow_outward
         </span>
       </a>

         </div>

       
       </div>
       {/* {get in toch} */}
       <div className="card bg-white rounded-lg p-6 col-span-1 md:col-span-2">
       <h4 className="font-bold card-content border-b-2 mb-2 border-gray-300" >Get In Touch</h4>
       <div className="flex justify-center space-x-8 text-sm text-gray-500 card-content-syne">
         <div className="card-content-syne p-1 rounded-full border text-gray justify-center items-center">
           <a href="mailto:kandhulamanojkumar663@gmail.com"><span class="material-symbols-outlined text-lg ml-1">
        mail
        </span></a>
          {/* <i class="bi bi-linkedin  text-2xl"></i> */}


         </div>
         <div className="card-content-syne p-1 rounded-full border text-gray justify-center items-center">
          <a href="https://www.linkedin.com/in/kandhula-manoj-kumar-a467412b8/"><i class="bi bi-linkedin  text-lg ml-1"></i></a>


         </div>
         <div className="card-content-syne p-1 rounded-full border text-gray justify-center items-center">
          <a href="https://github.com/manojcoders"><i class="bi bi-github text-lg ml-1"></i></a>


         </div>
          <div className="card-content-syne p-1 rounded-full border text-gray justify-center items-center">
         <a href="https://www.instagram.com/im_manoj_06/"><i className="bi bi-instagram  text-lg"></i></a>
      </div>

       </div>
       </div>
       {/* {year} */}
       <div className="card bg-white rounded-lg p-6 row-span-1 md:row-span-2">
        <h4 class="font-bold border-b-2 mb-2 border-gray-300 text-sm card-content-syne">Experience</h4>
        <p class="text-black text-center text-6xl">1</p>
       </div>
        {/* {cv} */}
       <div className="card bg-white rounded-lg p-6 row-span-1 md:row-span-2">
       <h4 className="font-bold card-content border-b-2 mb-2 border-gray-300" >CV</h4>
        <div class="card-content-syne p-1 rounded-full border text-gray">
          <a href="manoj edit resume 1.pdf" target="_blank"class="py-1 px-2 text-xs border-gray-600 flex items-center justify-between">
          View
          <span class="material-symbols-outlined text-xs ml-1">
         arrow_outward
         </span>
         </a>
         </div>
         <div class="card-content-syne p-1 rounded-full border text-gray">
          <a href="manoj edit resume 1.pdf"download class="py-1 px-2 text-xs border-gray-600 flex items-center justify-between">
          download 
          <span class="material-symbols-outlined text-xs ml-4">
          arrow_downward_alt
         </span>
         </a>
         </div>  
           
        </div>
       {/* {animation add} */}
       {/* <div className="card bg-white rounded-lg  col-span-1 md:col-span-2">
               
        </div> */}
  
       
       </div>
      )}
      </div>
      
  );
}



export default App;



 


