import React from 'react';

class ViewBuilding extends React.Component {

    deleteBuilding(data, selectedBuilding) {
        
        data.splice(selectedBuilding, 1);


        
    }
    
    render() {
        const { data, selectedBuilding } = this.props;

        if (selectedBuilding === -5) {
            return (
                <div>
                    <p>
                        {' '}
                        <i>Click on a name to view more information</i>
                    </p>
                </div>
            );
        } else {
            const directory = data[selectedBuilding - 1];
            try {
                return (
                    <div>
                        <p>
                            {' '}
                            <h6>Directory ID is: {directory.id}</h6>
                            <h6>Directory name is: {directory.name}</h6>
                            <h6>Directory code is: {directory.code}</h6>
                            <h6>Directory address is: {directory.address}</h6>
                            <h6>Directory Longitude is: {directory.coordinates.longitude}</h6>
                            <h6>Directory Latitude is: {directory.coordinates.latitude}</h6>
                            <button onClick={this.deleteBuilding(data, selectedBuilding)}>
                                Delete Directory
                            </button>
                            <h6>After button is clicked, click another directory for directory to be deleted</h6>

                        </p>
                    </div>
                );
            } catch (err) {
                return (
                    <div>
                        <p>
                            <h6>Directory ID is: {directory.id}</h6>
                            <h6>Directory name is: {directory.name}</h6>
                            <h6>Directory code is: {directory.code}</h6>
                            <h6>Directory address is: {directory.address}</h6>
                            <h6>Coordinates not available</h6>
                            <button onClick={this.deleteBuilding(data, selectedBuilding)}>
                                Delete Directory
                            </button>
                            <h6>After button is clicked, click another directory for directory to be deleted</h6>
                        </p>
                    </div>
                    );
            }
        }

	}
}
export default ViewBuilding;
