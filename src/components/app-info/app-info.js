import './app-info.css'

const AppInfo = ({employees, increase}) => {

    return(    
        <div className="app-info">
            <h1>Облік співробітників в компанії Xикс</h1>
            <h2>Загальна кількість працівників: {employees}</h2>
            <h2>Премію отримають: {increase}</h2>
        </div>
    )
}

export default AppInfo;