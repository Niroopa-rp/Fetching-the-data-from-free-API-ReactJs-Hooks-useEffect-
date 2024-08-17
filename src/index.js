// import React from 'react';
import ReactDOM from 'react-dom';
import React,{useState,useEffect} from 'react';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
function Userdemo(){
  const[users,setUsers]=useState([])
  const[loading,setloading]=useState(true);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>{
      setUsers(data);
      setloading(false);
    })
    .catch(error=>{
      console.error("If it is not loading,there will be an error message");
      setloading(false);
    });
  },[]);
  if(loading){
    return<p>loading</p>
  }
  return(
    <div>
      <h1>List out users in API</h1>
      <ul>
        {users.map(user=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
ReactDOM.render(<Userdemo/>,document.getElementById('root'));
