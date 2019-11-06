import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: -5
    };

  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
      this.setState({
          filterText: value
      })
  }

    updateData(data) {
        this.props.data = data;
    }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
      this.setState({
          selectedBuilding: id
      })
      console.log(this.state.selectedBuilding)
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          
            </div>
            <h1>UF Directory App</h1>
            <Search
                filterText={this.state.filterText}
                filterUpdate={this.filterUpdate.bind(this)}
            />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                   <BuildingList className="BuildingList"
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    updateData={this.updateData.bind(this)}
                    data={this.props.data}
                    filterText={this.state.filterText}
                  />
                </table>
                   
              </div>
            </div>
            <div className="column2">
                        <ViewBuilding
                            data={this.props.data}
                            selectedBuilding={this.state.selectedBuilding}
                            updateData={this.updateData.bind(this)}f
                        />
                    </div>
                    
            </div> 
                <AddBuilding
                    data={this.props.data}
                    selectedBuilding={this.state.selectedBuilding}
                    updateData={this.updateData.bind(this)}
                />
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
