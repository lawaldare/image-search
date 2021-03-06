import React from 'react';


class SearchBar extends React.Component {

  state = {
    term: ""
  };
 
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render(){
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} class="ui form">
          <div class="field">
            <label>Image Search</label>
            <input 
            type="text" 
            value={this.state.term} 
            placeholder="Search for Images" 
            onChange={e => this.setState({term: e.target.value})} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;