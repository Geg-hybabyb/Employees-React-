import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDeleteItem}) => {

    const element = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDeleteItem={() => onDeleteItem(id)}/>
        )
    })

    return (
        <ul className="app-liest list-group">
            {element}
        </ul>
    )
}

export default EmployeesList;