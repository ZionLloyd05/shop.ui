import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { getAllProduct } from '../../actions/productAction.js';

import { connect } from 'react-redux';
import Product from './Product.jsx';
import Spinner from '../common/Spinner.jsx';

class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        this.props.getAllProduct();
    }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.products){
    //         this.setState({products: nextProps.products})
    //     }
    // }

    render() {

        const { products, loading } = this.props.products;
        
        let content;

        if(products === null || loading){
            content = <Spinner/>
        }else{
            content = products.data.map((product) => <Product key={product.id} product={product} />)
        }

        return (
            <table className="table table-stripped">
                <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>InStock</th>
                    <th>Action</th>
                </tr>
                {/* {this.state.products && this.state.products.map((product) => <Product key={product.id} product={product} />)}               */}
                {content}
            </table>
        );
    }
}

Products.propTypes = {
    getAllProduct: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    products: state.products
  });

export default connect(mapStateToProps, { getAllProduct })(Products);
