import { Component } from 'react';

import './app-filter.css';

const AppFilter = (props) => {
    // const onUpdateFilter = (e) => {
    //     props.onUpdateSeartch(e.target.name)
    // }

    const buttonData = [
        {name: 'all', label: 'Усі співробітникі'},
        {name: 'rise', label: 'На підвищення'},
        {name: '<1000$', label: 'З/П більше 1000$'}
    ]

    const buttons = buttonData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onUpdateFilter(name)}>
                {label}
            </button>
        )
    })
    
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;