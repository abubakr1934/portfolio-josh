import React, { useState, useRef } from "react";

const AddSkillModal = ({ isOpen, onClose, onSave }) => {
  const [domain, setDomain] = useState("");
  const [skills, setSkills] = useState(Array.from({ length: 5 }, () => ({ name: "", percentage: "" })));

  const inputRefs = useRef(Array(5).fill().map(() => React.createRef()));

  const handleSkillChange = (index, field, value) => {
    const newSkills = [...skills];
    newSkills[index][field] = value;
    setSkills(newSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = skills.some(skill => skill.name && skill.percentage);
    if (domain && isValid) {
      onSave({ domain, skills: skills.filter(skill => skill.name && skill.percentage) });
    } else {
      alert("Please fill in the domain and at least one skill with its proficiency.");
    }
  };

  return (
    <div className={`fixed inset-0 z-50 ${!isOpen && "hidden"} flex items-center justify-center bg-gray-600 bg-opacity-65`}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-[50%]">
        <h2 className="text-4xl font-bold mb-4 text-center">Add Skill</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black text-xl font-semibold mb-2">Domain</label>
            <input
              type="text"
              value={domain}
              placeholder="Front End Developer"
              onChange={(e) => setDomain(e.target.value)}
              className="shadow appearance-none border rounded h-14 w-full py-2 px-3 bg-slate-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-xl font-semibold mb-2">Skills</label>
            {skills.map((skill, index) => (
              <div key={index} className="flex mb-2 gap-4">
                <input
                  type="text"
                  ref={inputRefs.current[index]}
                  value={skill.name}
                  onChange={(e) => handleSkillChange(index, "name", e.target.value)}
                  placeholder={`Skill ${index + 1}`}
                  className="shadow appearance-none border rounded h-14 w-[80%] py-2 px-3 bg-slate-100 text-black leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                  type="text"
                  value={skill.percentage}
                  onChange={(e) => handleSkillChange(index, "percentage", e.target.value)}
                  placeholder="%"
                  pattern="^[0-9]*$"
                  className="shadow appearance-none border rounded h-14 w-[20%] py-2 px-3 bg-slate-100 text-black leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Skill
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSkillModal;
