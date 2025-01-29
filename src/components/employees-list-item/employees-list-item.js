import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            salary: `${this.props.salary}`
        }
    }

    onUpdateSalary = (e) => {
        const salary = e.target.value
        this.setState({salary})
        this.props.onUpdateSalary(salary)
    }

    render() {
        const {name, onDeleteItem, increase, rise, onToggleProp} = this.props;

        let classNames = 'list-group-item d-flex justify-content-between';
        if (increase) {
            classNames += ' increase';
        }

        if (rise) {
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle='rise'>{name}</span>
                <input type="text" className="list-group-item-input" onChange={this.onUpdateSalary} value={this.state.salary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm " 
                        onClick={onToggleProp}
                        data-toggle='increase'>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDeleteItem}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;