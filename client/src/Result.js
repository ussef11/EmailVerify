import React from 'react';
// import './result.css';

import './App'
import './style.scss';


function Result(props){
  const [query, setQuery] = React.useState([]);
  React.useEffect(() => {
  var axios = require('axios');
  
  var data = JSON.stringify({
  "email": props.email
});
console.log(props.email)
console.log()
var config = {
  method: 'Post',
  url: 'http://localhost:3000/verify',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log("DATA IS::::")
  console.log(JSON.stringify(response.data));
  setQuery(response.data);
})
.catch(function (error) {
  console.log(error);
});
})

  return (
  
    <div className="App">
<h3>{query}</h3>

<div> 
{(props.email== "youssef@gmail.com")&&
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Email</th>
      <th scope="col">Valid</th>
      <th scope="col">Staut</th>
      <th scope="col">Age</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"> {props.email} </th>
      <td>{props.valid}</td>
      <td>{props.Staut}</td>
      <td>{props.age}</td>
    </tr>
  </tbody>
</table>}
</div> 
      
   

    
      
  
   
{/*  
<div class="container">
	{(props.email== "youssef@gmail.com")&&

	<div class="table">
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link" href="#">Email</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Valid</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Staut</a></div>
			<div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Age</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Domain</a></div>
		</div>
    
		<div class="table-content">	
			<div class="table-row">		
				<div class="table-data">{props.email}</div>
				<div class="table-data">{props.valid}</div>
				<div class="table-data">{props.Staut}</div>
				<div class="table-data">{props.age}</div>
				<div class="table-data">{props.Domain}</div>
			</div>
		</div>
	</div>}
</div>

<script> 

</script>

   
       */}

                     
       
      </div>
  );
}

export default Result;
