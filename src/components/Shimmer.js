const Shimmer = () =>{

    
    return (
     <div className="flex flex-wrap ">

        {
            
            Array(20).fill("").map((e , i) => {

                return <div className='h-80 w-60 bg-slate-300 m-5 rounded-lg ml-14 ' key={i}>
                   <div className="h-32 w-35 bg-slate-100 rounded-lg m-3">

                   </div >
                   <div className="rounded-full h-6 w-10 bg-slate-100 mt-4 ml-3">

                   </div>

                   <div className="rounded-full h-6 w-10 bg-slate-100 mt-4 ml-3">

                   </div>

                    
                </div>
            })
    
        }


     </div>
    )
    
}

export default Shimmer ;