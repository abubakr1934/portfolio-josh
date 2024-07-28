import React, { useEffect, useState } from "react";
import "../../App.css";
import AddSkillModal from "./AddSkillModal";

const ProgressBar = ({ skill, percentage }) => {
  return (
    <div className="mb-4 w-full -space-y-3">
      <div className="flex text-gray-400 text-base justify-between mb-1">
        <span className="mb-2">{skill}</span>
        <span className="mb-2 mx-2">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2  border-yellow-400">
        <div
          className="bg-percentage h-2 py-1 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/skills')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setSkillsData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleSave = (newSkillData) => {
    // Optionally, you could also post this new skill data to the server
    fetch('http://localhost:8000/skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSkillData),
    })
      .then(response => response.json())
      .then(data => {
        setSkillsData([...skillsData, newSkillData]);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    setIsModalOpen(false);
  };

  if (loading) {
    return <div className="text-center py-6">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-6">Error: {error.message}</div>;
  }

  return (
    <div className="project-bg">
      <h2 className="text-4xl font-bold text-black text-center py-6">Skills & Languages</h2>
      <p className="text-base text-gray-400 text-center text-skip-line mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
     
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-20 p-4 gap-8 ">
        {skillsData.map((domainData, index) => (
          <div key={index} className="mb-8 gap-4 bg-white px-10 py-8 mx-auto w-96 -my-4">
            <h2 className="text-xl font-semibold mb-4">{domainData.domain}</h2>
            <div>
              {domainData.skills.map((skill, index) => (
                <ProgressBar key={index} skill={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row align-middle justify-center py-8"> <button
        onClick={() => setIsModalOpen(true)}
        className="bg-percentage text-black font-semibold w-28 h-10 rounded-sm"
      >
        Add Skill
      </button></div>
      <AddSkillModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export default Skills;
