import React from 'react'
import {useEffect,useState} from 'react';
export default function Notification() {
  const[record,setRecord] = useState([])
      const [modeldata,setModeldata] = useState({
         id:'',
         name:'',
         username:'',
         email:'',
      })
    
       const getData = () =>
       {
           fetch('https://jsonplaceholder.typicode.com/users/')
           .then(resposne=> resposne.json())
           .then(res=>setRecord(res))
       }
    
       useEffect(() => {
          getData();
       },[])
      
        const showDetail = (id) =>
        {
         
          fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then(resposne=> resposne.json())
          .then(res=>setModeldata(res))
        }
  return (
    <>
    <h1>Notification Manager</h1>
    <br></br>
    <button type="button" class="btn btn-primary btn-lg mr-5">Publish Notification</button>
<button type="button" class="btn btn-secondary btn-lg">Delete Notification</button>
<br />

<div class="container mt-2">
            <div class="row mt-2 ">
                <div class="col-lg-1 col-md-6 col-sm-12">
                </div>  
                <div class="col-lg-11 col-md-6 col-sm-12">
                  <h5 class="mt-3 mb-3 text-secondary">
                  Previous Notification 
                  </h5>
                    <div class=" mt-5">
                        <table class="table table-striped table-sm">
                            <thead class="thead-light">
                                <tr>
                                    <th>No</th>
                                    <th>Title</th>
                                    <th>Date Of Publish</th>
                                  
                                    <th>View Notification</th>
                                </tr>
                            </thead>
                            <tbody>
                           
                              {record.map((names,index)=>
                               <tr key={index}>
                                   <td>{names.id}</td>
                                  <td>{names.name}</td>
                                  <td>{names.id}</td>
                                 
                                  
                                  <td><button class="btn btn-primary" onClick={(e)=>showDetail(names.id)} data-toggle="modal" data-target="#myModal">View</button></td>
                               </tr>
                               )}
                            </tbody>
                        </table>
                    </div>
                </div>
               
            </div>
            </div>
            </>
  )
}
