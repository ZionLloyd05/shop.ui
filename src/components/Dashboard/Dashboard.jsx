import React, { Component } from 'react'
import NewProduct from './NewProduct.jsx';
import Products from './Products.jsx';

class Dashboard extends Component {
   
    render() {
        return (
            <div className="container">
            <div className="row mb-4">
                <h2 className="display-5">
                    Admin Dashboard
                </h2>
            </div>

            <div className="row">
                <div className="col-4">
                    <button className="btn btn-success mb-4">+ New Product</button>

                    <NewProduct/>                   
                </div>
                <div className="col-8">
                   <Products/>
                </div>
            </div>
        </div>
        )
    }
}

export default Dashboard;
