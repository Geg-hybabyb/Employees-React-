import { Component } from 'react';

import './search-panel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSeartch = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateSeartch(term)
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Знайти співробітнка" 
                value={this.state.term}
                onChange={this.onUpdateSeartch}/>
        )
    }
}

export default SearchPanel;