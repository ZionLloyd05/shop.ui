
import React, { Component } from 'react';

class SingleProduct extends Component {
  render() {
  return (
    <div class="col-4 card">
        <img class="card-img-top" src="https://i.ya-webdesign.com/images/placeholder-image-png-5.png" alt="Card image cap"/>
        <div class="card-body">
            <h5 class="card-title">{this.props.product.name}</h5>
            <p class="card-text">{this.props.product.description}</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
    </div>
  );
 }
}
export default SingleProduct;