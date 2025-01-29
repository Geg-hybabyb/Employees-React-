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
            ],
            term: '',
            filter: 'all'
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

    seartchVelue = (data, term) => {
        if(term.length === 0) {
            return data
        }

        return data.filter(item => item.name.indexOf(term) > -1)
    }

    onUpdateSeartch = (term) => {
        this.setState({term})
    }

    onUpdateFilter = (filter) => {
        this.setState({filter})
    }

    filterData = (data, filter) => {
        switch(filter) {
            case 'rise': 
                return data.filter(item => item.rise);
            case '>1000$': 
                return data.filter(item => item.salary > 1000);
            default:
                return data;
        }
    }

    onUpdateSalary = (salary, id) => {
        console.log(salary);
        this.setState(({data}) => {
            data.map(item => {
                if(item.id === id) {
                    return item.salary = salary
                } else {
                    return item
                }
            })
        })
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = data.length;
        const increase = data.filter(item => item.increase).length
        const visibleData = this.seartchVelue(this.filterData(data, filter), term);

        return (
            <div className='app'>
                <AppInfo
                    employees={employees}
                    increase={increase}/>
                
                <div className="search-panel">
                    <SearchPanel 
                        onUpdateSeartch={this.onUpdateSeartch}/>
                    <AppFilter 
                        onUpdateFilter={this.onUpdateFilter}
                        filter={filter}/>
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDeleteItem={this.onDeleteItem}
                    onToggleProp={this.onToggleProp}
                    onUpdateSalary={this.onUpdateSalary} />
                <EmployeesAddForms 
                    onAdd={this.onAddNewItem}/>
            </div>
        )
    }
}

export default App;