"use client"
import React, { useState } from 'react';
import { authhook } from "@/authcontext/Authcontext";
import Navbar from '@/components/Navbar';

function Page() {
    const auth=authhook();
    const alumni=auth.alumni;
  const [filter, setFilter] = useState({
    college: '',
    batch: '',
    branch: ''
  });
  const [loading,setLoading]=useState(false);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const filterhandler=()=>{
    auth.setInputval(filter)
  }

  return (
    <div className="text-white ">
        <Navbar/>
      <div className=" flex w-11/12 justify-center gap-3 items-center p-3">
        <input
          className="bg-amber-400 p-2 rounded "
          type="text"
          id="college"
          placeholder="College"
          value={filter.college}
          onChange={handleChange}
        />

        <input
          className="bg-amber-400 p-2 rounded "
          type="text"
          id="batch"
          placeholder="Batch"
          value={filter.batch}
          onChange={handleChange}
        />

        <input
          className="bg-amber-400 p-2 rounded "
          type="text"
          id="branch"
          placeholder="Branch"
          value={filter.branch}
          onChange={handleChange}
        />
        <button className="bg-amber-300" onClick={filterhandler}>Find alumni</button>
      </div>
      

    <div className='flex justify-center mt-9'>
        {loading ? (
        <p>Loading...</p>
      ) : alumni.length === 0 ? (
        <p>No alumni found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white bg-amber-700 w-3/4">
          {auth.alumni.map((alum,indx) => (
            <div key={indx} className="border p-4 rounded shadow h-40">
              <h2 className="text-xl font-semibold">{alum.name}</h2>
              <p>{alum.email}</p>
              <p>{alum.branch}, Batch {alum.batch}</p>
              <p className="text-sm text-gray-500">{alum.college}</p>
            </div>
          ))}
        </div>
      )}
    </div>
      

    </div>
  );
}

export default Page;
