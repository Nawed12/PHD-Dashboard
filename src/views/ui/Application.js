import {useEffect,useState} from 'react';
const Application = () => {
    
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
        <div class="container mt-2">
            <div class="row mt-2 ">
                <div class="col-lg-1 col-md-6 col-sm-12">
                </div>  
                <div class="col-lg-11 col-md-6 col-sm-12">
                  <h5 class="mt-3 mb-3 text-secondary">
                  New Application
                  </h5>
                    <div class=" mt-5">
                        <table class="table table-striped table-sm">
                            <thead class="thead-light">
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                  
                                    <th>Show Details</th>
                                </tr>
                            </thead>
                            <tbody>
                           
                              {record.map((names,index)=>
                               <tr key={index}>
                                   <td>{names.id}</td>
                                  <td>{names.name}</td>
                                  <td>{names.id}</td>
                                 
                                  
                                  <td><button class="btn btn-primary" onClick={(e)=>showDetail(names.id)} data-toggle="modal" data-target="#myModal">View Application</button></td>
                               </tr>
                               )}
                            </tbody>
                        </table>
                    </div>
                </div>
               
            </div>
         </div>

    
    
  
    
         
        )
    }
    export default Application;