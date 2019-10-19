import React from 'react';
// import plantsContainer from './plantsContainer/plantsContainer'
import BasicCardExample from '../Cards/Card'
import MoreModal from '../MoreComponent'

import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

function PlantList(props){
  if(this.props.plants){
    const plants = props.plants.map(function(plant){
      return (
        <li key={plant.id}>
          <h1>{plant.first_name}</h1>
        </li>)
    })

    return (
      <ul class="plantList">
        {plants}
      </ul>
      )
  }
  
  
  
}


export default PlantList

// function PlantList(){
//       return (
//         <div class="cardExample">
//           <BasicCardExample />
//         </div>
//         )
// }


// export default PlantList