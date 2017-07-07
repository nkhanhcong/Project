import React from 'react'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state={
            term:''
        }
    }
    render() {
        return (
            <div className="search-bar">
                 <input class="inputField" onChange={event=>this.inputSearch(event.target.value)}/>
            </div>
        )
    }
    inputSearch(term){
        this.setState({term});
        this.props.onInputSearch(term);
    }
}


export default SearchBar;