import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDeleteItem, onToggleProp, onUpdateSalary}) => {

    const element = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDeleteItem={() => onDeleteItem(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} 
                onUpdateSalary={(salary) => onUpdateSalary(salary, id)}/>
        )
    })

    return (
        <ul className="app-liest list-group">
            {element}
        </ul>
    )
}

export default EmployeesList;