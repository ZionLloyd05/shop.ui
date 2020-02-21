import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { createProduct } from '../../actions/productAction.js';

import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup.jsx';
import SelectListFieldGroup from '../common/SelectListFieldGroup.jsx';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup.jsx';

class NewProduct extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            category: '',
            price: 0,
            inStock: true,
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
    }


    onSubmit = (e) => {
        e.preventDefault();

        const productData = {
            name: this.state.name,
            description: this.state.description,
            category: this.state.category,
            price: this.state.price,
            inStock: this.state.inStock,
        };

        this.props.createProduct(productData, this.props.history);
    }
   
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        let { errors } = this.state;

        if(errors.data){
            errors = errors.data;
        }

        const options = [
            { label: 'Yes', value: true },
            { label: 'No', value: false }
        ]
        return (
            <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                    placeholder="Product Name" 
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}
                />
                 <TextAreaFieldGroup
                  placeholder="Product Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                />
                <TextFieldGroup
                    placeholder="Product Category" 
                    name="category"
                    value={this.state.category}
                    onChange={this.onChange}
                    error={errors.category}
                />
                <TextFieldGroup
                    placeholder="Product Price" 
                    name="price"
                    value={this.state.price}
                    onChange={this.onChange}
                    type="number"
                    error={errors.price}
                />
                 <SelectListFieldGroup
                  placeholder="Product in Stock ?"
                  name="inStock"
                  value={this.state.inStock}
                  onChange={this.onChange}
                  options={options}
                  error={errors.inStock}
                  info="Is Product in stock ?"
                />
                <input type="submit" className="btn btn-info btn-block mt-4" value="Create Product" />
            </form>
        )
    }
}

NewProduct.propTypes = {
    products: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    products: state.products,
    errors: state.errors
  });

export default connect(mapStateToProps, { createProduct })(withRouter(NewProduct));
