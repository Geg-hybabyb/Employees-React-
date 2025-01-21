import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForms from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:'S.J.', salary: 5000, increase: true, rise: false, id: 1},
                {name:'Max Weber', salary: 4500, increase: false, rise: true, id: 2},
                {name:'Dima', salary: 2, increase: false, rise: false, id: 3}
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

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    render() {
        const employees = this.state.data.length;
        const increase = this.state.data.filter(item => item.increase).length

        return (
            <div className='app'>
                <AppInfo
                    employees={employees}
                    increase={increase}/>
                
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDeleteItem={this.onDeleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForms 
                    onAdd={this.onAddNewItem}/>
            </div>
        )
    }
}

export default App;