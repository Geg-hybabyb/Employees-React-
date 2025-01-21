import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filer/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForms from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:'S.J.', salary: 5000, increase: true, id: 1, like: false},
                {name:'Max Weber', salary: 4500, increase: false, id: 2, like: false},
                {name:'Dima', salary: 2, increase: false, id: 3, like: false}
            ]
        }
        this.maxId = 4;
    }

    onDeleteItem = (id) => {
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onAddNewItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return{
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className='app'>
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDeleteItem={this.onDeleteItem} />
                <EmployeesAddForms 
                    onAdd={this.onAddNewItem}/>
            </div>
        )
    }
}

export default App;