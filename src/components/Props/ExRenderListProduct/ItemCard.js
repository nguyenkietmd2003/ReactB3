import React, { Component } from "react";

export default class ItemCard extends Component {
  handleViewDetail = () => {
    const { dataShoe, setStateModal } = this.props;
    setStateModal(dataShoe);
  };

  render() {
    let { dataShoe } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={dataShoe.image} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{dataShoe.name}</h4>
          <p className="card-text">{dataShoe.price}</p>
          <button className="btn btn-success">Add product</button>
          <button className="btn btn-success" onClick={this.handleViewDetail}>
            View Detail
          </button>
        </div>
      </div>
    );
  }
}
