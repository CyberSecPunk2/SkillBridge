export default function Roadmaps(){

const steps=[
"HTML CSS JavaScript",
"React & Next.js",
"Backend Integration",
"AI Integration",
"Deployment"
]

return(

<main className="min-h-screen bg-slate-950 text-white p-20">

<h1 className="text-5xl font-bold">
Learning Roadmap
</h1>


<div className="mt-10 space-y-5">

{steps.map((step,index)=>(

<div 
key={index}
className="bg-slate-900 p-6 rounded-xl"
>

{index+1}. {step}

</div>

))}

</div>

</main>

)

}