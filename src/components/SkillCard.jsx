import React from 'react'

const SkillCard = ({ name, percentage, logo, link }) => (
    <div className="p-4 rounded-lg shadow-lg cursor-pointer bg-white max-sm:h-60 max-sm:w-44">
      <a href={link}>
        <img src={logo} alt={name} className="w-20 h-20 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-center">{name}</h3>
        <p className="text-center">{percentage}</p>
      </a>
    </div>
  );

export default SkillCard