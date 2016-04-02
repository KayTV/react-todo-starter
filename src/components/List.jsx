import React from 'react';

import Listitem from './Listitem';

export default class List extends React.Component {
  renderList() {
    return this.props.items.map((item) => {
      return <Listitem delete={this.props.delete} key={item.id} item={item} />
    })
  }

  render() {
    console.log(this.props.items);
    return (
      <div>
        <div>
          {this.renderList()}
        </div>
      </div>
    );
  }
}
