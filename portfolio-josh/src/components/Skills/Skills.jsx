import React from "react";
import "../../App.css";
const ProgressBar = ({ skill, percentage }) => {
  return (
    <div className="mb-4 w-full -space-y-3">
      <div className="flex  text-gray-400 text-base justify-between mb-1 ">
        <span className="mb-2 ">{skill}</span>
        <span className="mb-2 mx-2">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 border-yellow-400 ">
        <div
          className="bg-percentage h-1.5 rounded-full  "
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
const skillsData = [
  {
    domain: "Front End Development",
    skills: [
      { name: "HTML", percentage: 90 },
      { name: "CSS", percentage: 85 },
      { name: "JavaScript", percentage: 80 },
      { name: "PHP", percentage: 75 },
      { name: "WordPress", percentage: 85 },
    ],
  },
  {
    domain: "Languages",
    skills: [
      { name: "Hindi", percentage: 90 },
      { name: "English", percentage: 85 },
      
    ],
  },
  {
    domain: "Back End Developement",
    skills: [
      { name: "NodeJS", percentage: 90 },
      { name: "SSR", percentage: 85 },
      
    ],
  },
  {
    domain: "Front End Development",
    skills: [
      { name: "HTML", percentage: 90 },
      { name: "CSS", percentage: 85 },
      { name: "JavaScript", percentage: 80 },
      { name: "PHP", percentage: 75 },
      { name: "WordPress", percentage: 85 },
    ],
  },
  {
    domain: "Languages",
    skills: [
      { name: "Hindi", percentage: 90 },
      { name: "English", percentage: 85 },
      
    ],
  },
  {
    domain: "Back End Developement",
    skills: [
      { name: "NodeJS", percentage: 90 },
      { name: "SSR", percentage: 85 },
      
    ],
  },
];
const Skills = () => {
  return (
    <div className="project-bg">
      <h2 className="text-4xl font-bold text-black text-center py-6">Skills And Languages</h2>
      <p className="text-base text-gray-400 text-center text-skip-line mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. 
        
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-20  p-4 gap-8">
      {skillsData.map((domainData, index) => (
        <div key={index} className="mb-8 gap-4 bg-white  px-10 py-8 mx-auto w-96 -my-4 ">
          <h2 className="text-xl font-semibold mb-4">{domainData.domain}</h2>
          <div className=" ">
            {domainData.skills.map((skill, index) => (
              <ProgressBar key={index} skill={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Skills;
