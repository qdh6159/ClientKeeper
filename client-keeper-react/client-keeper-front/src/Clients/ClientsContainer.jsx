import React, {Component} from 'react'

class Clients extends Component {
    constructor(){
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
    render(){
        const clients = this.state.clients.map((clients)=>{
            return <div key={clients.id}> 
                <h3>{clients.first_name} {clients.last_name}</h3>
            </div>
        })
        return(
            <div>
                <h2>This is the Clients Component :)</h2>
                {clients}
            </div>
        )
    }
}

export default Clients