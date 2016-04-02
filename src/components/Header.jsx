import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.id = 0;

    this.state = {
      id: this.id,
      text: '',
      done: false
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  onInputChange(event) {
    this.setState({ text: event.target.value });
  }

  onAddClick() {
    ++this.id;
    this.props.add(this.state);
    this.setState({text: '', id: this.id});
  }

  render(){
    return (
      <div>
        <div className="input-group">
          <input type="text" className="form-control" value={this.state.text} onChange={this.onInputChange}/>
          <span className="input-group-btn">
            <button type="button" className="btn btn-success" onClick={this.onAddClick}>Add</button>
          </span>
        </div>
      </div>
    );
  }

}

export default Header;
