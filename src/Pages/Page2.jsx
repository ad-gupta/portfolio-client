import React from 'react'
import SkillCard from '../components/SkillCard';

const skills = [
    { id: 1, name: 'HTML', percentage: "", logo: 'html.png', link: "" },
    { id: 2, name: 'CSS', percentage: "", logo: 'css.png', link: "" },
    { id: 3, name: 'JavaScript', percentage: "", logo: 'javascript.png', link: "" },
    { id: 4, name: 'C++', percentage: "", logo: 'cpp.png', link: "" },
    { id: 5, name: 'Python', percentage: "", logo: 'python.png', link: "" },
    { id: 6, name: 'React', percentage: "", logo: 'React.webp', link: "" },
    { id: 7, name: 'Node.js', percentage: "", logo: 'node.png', link: "" },
    { id: 8, name: 'Express.js', percentage: "", logo: 'express.png', link: "" },
    { id: 9, name: 'MongoDB', percentage: "", logo: 'MongoDB.jpg', link: "" },
    { id: 10, name: 'Tailwind CSS', percentage: "", logo: 'tailwind.jpg', link: "" },
    { id: 11, name: 'Material UI', percentage: "", logo: 'mui.png', link: "" },
    { id: 12, name: 'Bootstrap', percentage: "", logo: 'bootstrap.png', link: "" },
    { id: 13, name: 'Redux', percentage: "", logo: 'redux.png', link: "" },
    { id: 14, name: 'Codeforces', percentage: "Pupil", logo: 'codeforces.png', link: "https://codeforces.com/profile/ad_gupta" },
    { id: 15, name: 'LeetCode', percentage: "1700", logo: 'leetcode.png', link: "https://leetcode.com/ad_gupta/" }
  ];

const Page2 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10">
      <h1 className="text-3xl font-bold mb-8 text-blue-800 shadow-2xl bg-lime-200 rounded p-3 px-5">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {skills.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  )
}

export default Page2
