import React from 'react';

class AddBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: -5,
            name: '',
            code: '',
            latitude: 0,
            longitude: 0,
            address: '',
            
        };
        this.addBuilding = this.addBuilding.bind(this)
    }

    handleName = event => {
        
        this.setState({ name: event.target.value });
        
    };

    handleCode = event => {

        this.setState({ code: event.target.value });
        
    };

    handleAddress = event => {

        this.setState({ address: event.target.value });
        //console.log(this.state.address)
    };

    handleLongitude = event => {

        this.setState({ longitude: event.target.value });
        //console.log(this.state.longitude)
    };

    handleLatitude = event => {

        this.setState({ latitude: event.target.value });
        //console.log(this.state.latitude)
    };

    addBuilding(event, data) {
        event.preventDefault();
        
        var dir = data[data.length - 1];
        var newId = dir.id + 1;

        let newDirectory = {
            id: newId,
            code: this.state.code,
            name: this.state.name,
            coordinates: {
                latitude: this.state.latitude,
                longitude: this.state.longitude
            },
            address: this.state.address
        }
        console.log(newDirectory)
        console.log(data);
        data.push(newDirectory);

    }


    
    render() {
        const { data } = this.props;
        
        return (
            <form
                onSubmit={(e) => { this.addBuilding (e,data)}}
            >
                <h1> New Directory
                </h1>
                
          
                <input
                    type="text" name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleName}
                />
                <input
                    type="text" name="code"
                    placeholder="Code"
                    value={this.state.code}
                    onChange={this.handleCode}
                />
                <input
                    type="text" name="address"
                    placeholder="Address"
                    value={this.state.address}
                    onChange={this.handleAddress}
                />
                <input
                    type="text" name="longitude"
                    placeholder="Longitude"
                    onChange={this.handleLongitude}
                />
                <input
                    type="text" name="latitude"
                    placeholder="Latitude"
                    onChange={this.handleLatitude}
                />
                
                <input
                    type="submit"
                    value="Submit"
                    //onClick={this.addBuilding()}
                />
                    
            </form>

        );
    }

   
}
export default AddBuilding;