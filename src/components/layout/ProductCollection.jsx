import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { getAllProduct } from '../../actions/productAction.js';

import { connect } from 'react-redux';
import Spinner from '../common/Spinner.jsx';
import SingleProduct from './SingleProduct.jsx';

class ProductCollection extends Component {
  
    componentDidMount() {
        this.props.getAllProduct();
    }

    render() {

        const { products, loading } = this.props.products;
        
        let content;

        if(products === null || loading){
            content = <Spinner/>
        }else{
            content = products.data.map((product) => <SingleProduct key={product.id} product={product} />)
        }

        return (
            <div className="row">
               {content}
            </div>
        );
    }
}

ProductCollection.propTypes = {
    getAllProduct: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    products: state.products
  });

export default connect(mapStateToProps, { getAllProduct })(ProductCollection);
