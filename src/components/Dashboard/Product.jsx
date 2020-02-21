
import React, { Component } from 'react';

class Product extends Component {
  render() {
  return (
    <tr>
        <td>{this.props.product.id}</td>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.description}</td>
        <td>{this.props.product.category}</td>
        <td>{this.props.product.price}</td>
        <td>{this.props.product.inStock}</td>
        <td>
            <a href="/edit-product/{{this.id}}" className="btn btn-success">E</a> | 
            <a href="/delete-product/{{this.id}}" className="btn btn-danger">D</a>
        </td>
    </tr>
  );
 }
}
export default Product;