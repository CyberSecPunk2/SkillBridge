const careers = [
  {
    title: "Software Development",
    desc: "Build applications, websites and scalable software systems.",
    skills: "React • Next.js • APIs"
  },
  {
    title: "Data Science",
    desc: "Analyze data and build intelligent solutions.",
    skills: "Python • ML • Statistics"
  },
  {
    title: "Cybersecurity",
    desc: "Protect systems from digital threats.",
    skills: "Security • Networks • Encryption"
  },
  {
    title: "Artificial Intelligence",
    desc: "Create intelligent AI powered applications.",
    skills: "AI • LLMs • Automation"
  }
]


export default function Careers(){

return(

<main className="min-h-screen bg-slate-950 text-white p-16">


<h1 className="text-5xl font-bold text-center">
Career Explorer
</h1>


<p className="text-center mt-5 text-gray-400">
Discover your future career path
</p>


<div className="grid grid-cols-2 gap-8 mt-16">


{careers.map((item)=>(

<div className="bg-slate-900 rounded-2xl p-8 border border-blue-500">

<h2 className="text-2xl font-bold">
{item.title}
</h2>


<p className="mt-4 text-gray-300">
{item.desc}
</p>


<p className="mt-6 text-blue-400">
{item.skills}
</p>

</div>

))}


</div>

</main>

)

}