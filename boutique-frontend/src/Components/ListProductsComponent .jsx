
import React, { Component } from 'react';
import ProductService from '../Services/ProductService';

class ListProductsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

            products: []
        }
      
        this.addProduct = this.addProduct.bind(this);
        this.EditeProduct = this.EditeProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        
    }

    componentDidMount() {
        ProductService.getProduct().then((res) => {

            this.setState({ products: res.data });
        });
    }

    EditeProduct(id){
        this.props.history.push(`/UpdateProduct/${id}`);
    }
    addProduct(){
        this.props.history.push("/Add-Product").then((res) => {
            window.location.reload(); 
        });   
        
    }

   
    deleteProduct(id){
        ProductService.DeleteProduct(id).then((res) => {
            this.setState({
                products: this.products.filter(product => product.id !== id)
            });
        });
    }

    render() {
        return (
                <div >
                    <div className="table-wrapper body1">
                        <div className="table-title">
                            <div className="row">
                                <div className='col-xs-5'>
                                    <h2>Products <b>Management</b></h2>
                                </div>

                                <div className='col-6'>
                                   <button onClick={this.addProduct} className="btn btn-primary"><i className="material-icons">search</i> <span>Sreach product here...</span>
                                   </button>
                                </div>

                                <div className='col-6'>
                                   <button onClick={this.addProduct} className="btn btn-primary"><i className="material-icons">&#xE147;</i> <span>Add New Product</span>
                                   </button>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead >
                                <tr>
                                    <th>Identifiant</th>
                                    <th>Libelé</th>
                                    <th>Description</th>
                                    <th>Prix</th>
                                    <th>Catégorie</th>
                                    <th>Quantité en stock</th>
                                    <th> Actions </th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    this.state.products.map(
                                        product =>
                                            <tr key={product.id}>
                                                <td> {product.id} </td>
                                                <td> {product.Titre} </td>
                                                <td> {product.Description} </td>
                                                <td>{product.Prix} </td>
                                                <td> {product.Categorie} </td>
                                                <td> {product.Quantite} </td>
                                                <td>
                                                    <a   onClick={() => this.EditeProduct(product.id)} className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a>
                                                    <a onClick={() => this.deleteProduct(product.id)}className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">delete</i></a>
                                                   {/* <a onClick={() => this.ViewUser(user.id)}className="View" title="View" data-toggle="tooltip"><i className="material-icons">info_outline</i></a>*/}
                                                </td>
                                            </tr>

                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                </div>

        );
    }
}



export default ListProductsComponent;