import React, { Component} from 'react'
import PlantList from "./PlantList/PlantList"
import ClientNav from "./nav"
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button,
    ButtonGroup
  } from "shards-react";
  

class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            clients: []
        }
    }
    componentDidMount(){
        this.getClients();
    }
    getClients = async () => {
        const clients = await fetch("http://localhost:3001/clients");
        const parsedResponse = await clients.json()
        console.log(parsedResponse);
        this.setState({
            clients: parsedResponse
        })
    }
    createPlant = async (formData) => {
        console.log(formData)
        
            const newPlant = await fetch("http://localhost:3001/clients", {
                method: "POST",
                body: JSON.stringify(formData),
                // credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    
                }
            })
            const parsedResponse = await newPlant.json();
            this.setState({
                clients: [...this.state.clients, parsedResponse.data]
            })
        
        console.log("********************")
        console.log(this.state)
    }
    render(){

        console.log(this.state.clients)
        const clients = this.state.clients.map((clients)=>{
            return (
                <div key={clients.id}> 
                {/* <h3>{clients.first_name} {clients.last_name}</h3> */}
                <Card style={{ maxWidth: "300px" }, {small: true}}>
                <CardHeader>{clients.first_name} {clients.last_name}</CardHeader>
                <CardImg src="https://149351035.v2.pressablecdn.com/wp-content/uploads/2014/08/RVSB_Chart.png" />
                <CardBody>
                    <CardTitle> Portfolio Value: $2,330,000.24 😄</CardTitle>
                    <p>Last contact: {clients.last_contact}</p>
                    <ButtonGroup size="sm">
                    <Button theme="success">Portfolio</Button>
                    <Button theme="secondary">Buy/Sell</Button>
                    <Button outline theme="warning">+Watch</Button>
                    </ButtonGroup>
                </CardBody>
                <CardFooter class="call" outline={true}><Button block>📲 Call</Button></CardFooter>
                </Card>
            </div>
            );
        })
        return(
            <div class="clientList">
                <ClientNav createPlant= {this.createPlant} />
                <p class="dash">ClientKeeper Dashboard :)</p>
                <br></br>
                {clients}
            </div>
        )
    }
}
//     componentDidMount() {
//         console.log("component is mounting")
//         this.getMovies();
//     }
//     // deletePlant = async (id) => {
//     //     console.log(id)
//     //     try{
//     //         const deletePlant = await fetch(`http://localhost:9000/plants/${id}`, {
//     //             method: "DELETE",
//     //             credentials: "include",
//     //         })
//     //         const parsedResponse = await deletePlant.json();
//     //         if(parsedResponse.status.code === 200) {
//     //             this.setState({
//     //                 plants: this.state.plants.filter(plant => plant._id !== id)
                    
//     //             })
//     //         }
//     //     }catch(err){
//     //         console.log(err)
//     //     }
//     // }
//     // updatePlant = async (id, formData) => {
//     //     const updatePlant = await fetch(`http://localhost:9000/plants/${id}`, {
//     //         method: "PUT",
//     //         body: JSON.stringify(formData),
//     //         credentials: "include",
//     //         headers: {
//     //             "Content-Type": "application/json"
//     //         }
//     //     })
//     //     const parsedResponse = await updatePlant.json();
//     //     if(parsedResponse.status.code === 201){
//     //         this.setState({
//     //             plants: this.state.plants.map(function(plant){
//     //                 if(plant._id === id){
//     //                     return parsedResponse.data
//     //                 }else{
//     //                     return plant
//     //                 }
//     //             })
//     //         })
//     //     }
//     //     console.log(parsedResponse)
//     // }
    // createPlant = async (formData) => {
    //     console.log(formData)
    //     try{
    //         const newPlant = await fetch("http://localhost:9000/plants", {
    //             method: "POST",
    //             body: JSON.stringify(formData),
    //             credentials: "include",
    //             headers: {
    //                 "Content-Type": "application/json",
                    
    //             }
    //         })
    //         const parsedResponse = await newPlant.json();
    //         if(parsedResponse.status.code === 201){
    //             this.setState({
    //                 plants: [...this.state.plants, parsedResponse.data]
    //             })
    //         }
    //         console.log("********************")
    //         console.log(this.state)
    //     }catch(err) {

    //     }
    // }

//     getMovies = async () => {
        
//         console.log("Getting the movies*****************")
//         const plants = await fetch("http://localhost:3001/clients")
//         const parsedResponse = await plants.json();
//         this.setState({
//             plants: parsedResponse.data})
//             console.log(parsedResponse.data)
//             console.log("We got the movies")
//             console.log(this.state)
    
//     }
//     render() {
//         return(
//             <div>
//                 <PlantNav createPlant= {this.createPlant} />
//                 <h3>Dashboard</h3>
//                 <h4>{this.state.plants}</h4>
//                 <PlantList updatePlant={this.updatePlant} deletePlant={this.deletePlant} plants={this.state.plants} />
//             </div>
//         )
//     }
// }

export default MainContainer;