import React from 'react';

class BuildingList extends React.Component {
	render() {
        const { data, filterText, selectedUpdate } = this.props;

        

        const buildingList = data
            .filter(name=>{
                return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
            })
            .map(directory => {
                return (
                    //<button type="button">Delete</button>,
                    <tr key={directory.id}>
                        <td>{directory.code} </td>
                        <td onClick={() => selectedUpdate(directory.id)}>  {directory.name} </td>
                    </tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuildingList;
