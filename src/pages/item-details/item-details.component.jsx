import React from 'react';

import IDHeader from '../../components/id-header/id-header.component';

import './item-details.styles.scss';

class ItemDetails extends React.Component {
  componentDidMount() {
    // const { type, id } = this.props.match.params;
    // console.log(type, id);
  }
  render() {
    return (
      <div className='item-details'>
        <IDHeader />
      </div>
    );
  }
}

export default ItemDetails;
