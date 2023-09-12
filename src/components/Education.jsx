
import {React,useEffect} from "react";
import { MdOutlineCastForEducation } from 'react-icons/md';
import AOS from "aos"
import 'aos/dist/aos.css';
function EducationSection() {
    useEffect(() => {
        AOS.init();
      }, [])
  // You can customize the education data here
  const educationData = [
    {
      school: "Sidho Kanho Birsha University",
      degree: "Bachelor of Science in Computer Science",
      year: "2021 - 2024",
      description: "GPA: 7.9/10. Relevant courses: Data Structures, Algorithms, Artificial Intelligence, Mobile Development, Web Development.",
    },
    {
      school: "Coding Shuttle",
      degree: "Certification in Data Structure And Algorithm",
      year: "2023",
      description: "Ongoing a six-months online course on Data Structures And Algorithm Problem Solving.",
    },
    {
      school: "Lagda High School",
      degree: "High School ",
      year: "2013 - 2021",
      description: "Passed Out with honors and in mathematics and science.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Education</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            My academic achievements and qualifications
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {educationData.map((item) => (
            <div data-aos="fade-up" data-aos-duration={550} data-aos-offset={170} key={item.school} className="bg-white p-6 rounded-lg shadow-lg shadow-fuchsia-700">
              <MdOutlineCastForEducation className="h-6 w-6 text-indigo-500" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">{item.school}</h3>
              <p className="mt-2 text-sm font-semibold text-indigo-600">{item.degree}</p>
              <p className="mt-2 text-sm text-gray-500">{item.year}</p>
              <p className="mt-2 text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationSection;


