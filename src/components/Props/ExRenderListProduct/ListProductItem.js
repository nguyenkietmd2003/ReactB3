import React, { Component } from "react";
import ItemCard from "./ItemCard";

export default class ListProductItem extends Component {
  renderListShoe() {
    let { dataShoeList, setStateModal } = this.props;

    let contentCardShoe = dataShoeList.map((shoe, index) => {
      return (
        <div key={index} className="col-4 mt-3">
          <ItemCard dataShoe={shoe} setStateModal={setStateModal} />
        </div>
      );
    });
    return contentCardShoe;
  }
  render() {
    return <div className="row">{this.renderListShoe()}</div>;
  }
}
