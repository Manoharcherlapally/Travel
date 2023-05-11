import React, { useEffect, useState } from 'react'

export default function Prodcast() {
      const [data, setData] = useState('')
    const [search, setSearch] = useState({})

    function apiData(){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6ad9e08630d726e2fb808cf410c68562&units=metric`)
                .then(response =>{
                    return response.json();
                }).then(data =>{
                    console.log(data)
                    setData(data);
                    setSearch("")          
                })        
            }

    const handleSearch = ()=>{
        apiData(search)
    }

    useEffect(()=>{
      apiData()
    },[])


  return (
    
      <div className=' podcast d-flex justify-content-center  '>
        

          <div class=" mt-5">
               <input type="text" class="form-control mt-2" placeholder="Enter a Cityname"  onChange={(e)=> setSearch(e.target.value)}/>
               <button className='d-flex justify-content-end btn btn-dark mt-2 ' onClick={handleSearch}>Search</button>
                <h3 className='text-center mt-3'><span>Name : </span>{data.name}</h3>
                <h3 className='text-center'><span>Temp : </span>{data?.main?.temp }</h3>
                <h3 className='text-center'><span>Country : </span> {data?.sys?.country}</h3>
            </div>   
       </div>

  )
  
}
