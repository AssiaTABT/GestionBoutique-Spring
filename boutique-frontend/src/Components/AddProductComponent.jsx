import React, { Component } from 'react';

import ProductService from '../Services/ProductService';

class AddProductComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Titre: '',
            Description: '',
            Prix: '',
            Categorie: '',
            Quantite: '',
        }

        this.changeTitreHandler = this.changeTitreHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePrixHandler = this.changePrixHandler.bind(this);
        this.changeCategorieHandler = this.changeCategorieHandler.bind(this);
        this.changeQuantiteHandler = this.changeQuantiteHandler.bind(this);
        

        this.saveProduct = this.saveProduct.bind(this);

    }

    saveProduct = (e) => {
        e.preventDefault();
        

        let product = { Titre: this.state.Titre, Description: this.state.Description, Prix: this.state.Prix, Categorie: this.state.Categorie, Quantite: this.state.Quantite };
        console.log('product => ' + JSON.stringify(product));

        
        ProductService.CreateProduct(product).then(res => {
           this.props.history.push('/Products');
            
        });
    }

    changeTitreHandler = (event) => {
        this.setState({ Titre: event.target.value });
    }

    changeDescriptionHandler = (event) => {
        this.setState({ Description: event.target.value });
    }

    changePrixHandler = (event) => {
        this.setState({ Prix: event.target.value });
    }

    changeCategorieHandler = (event) => {
        this.setState({ Categorie: event.target.value });
    }


    changeQuantiteHandler = (event) => {
        this.setState({ Quantite: event.target.value });
    }

    cancel(){
        this.props.history.push('/Products');
    }
    render() {
        return (

            <div >
                <div className="table-wrapper body1">
                    <div className="  table-title">
                        <div className="row">
                            <div className='col-xs-5'>
                                <h3>Ajouter un nouveau <b>Produit</b></h3>
                            </div>

                        </div>
                    </div>
                    <div className='formCss'>
                        <div class=" rounded shadow-lg px-4 py-5 mt-5 bg-white"  >

                            <form >
                                <div className='row '>
                                    <div className='col-6'>

                                        <div class="form-group">
                                            <label >Libelé :</label>
                                            <input type="text" name='Titre' placeholder='Donnez un titre au produit' class="form-control form-control-lg" value={this.state.Titre} onChange={this.changeTitreHandler} />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div class="form-group">
                                            <label >Description :</label>
                                            <input type="text" name='Description' placeholder='Description du produit' class="form-control form-control-lg" value={this.state.Description} onChange={this.changeDescriptionHandler} />
                                        </div>
                                    </div>

                                </div>

                                <div className='row'>
                                    <div className='col-6'>
                                        <div class="form-group">
                                            <label >Prix :</label>
                                            <input type="text" name='Prix' placeholder='Quel est le prix du produit ?' class="form-control form-control-lg" value={this.state.Prix} onChange={this.changePrixHandler} />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div class="form-group">
                                            <label >Catégorie  :</label>
                                            <input type="text" name='Categorie' placeholder=" La catégorie " class="form-control form-control-lg" value={this.state.Categorie} onChange={this.changeCategorieHandler} />
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    
                                    <div className='col-6 center-block   text-center'>
                                        <div class="form-group quantiteSt ">
                                            <label >Quantité en Stock :</label>
                                            <input type="text" name='Quantite' placeholder='Quantité de produit en stock' class="form-control form-control-lg" value={this.state.Quantite} onChange={this.changeQuantiteHandler} />
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className='AjouterAnnuler'>
                                    <button class="  btn btn-primary btn-lg" onClick={this.saveProduct}> Ajouter </button>
                                    <span> <button onClick={this.cancel.bind(this)} className="btn btn-warning btn-lg"> Annuler </button></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProductComponent;