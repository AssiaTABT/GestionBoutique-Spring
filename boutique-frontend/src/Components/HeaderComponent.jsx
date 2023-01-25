
import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }

    }


    render() {
        return (
            <div>
                <header>
                    <div className='row'>
                        <nav className='navbar navbar-expand-md navbar-dark  bg-dark'>
                            <div className='col-3'>
                                <div>
                                    < div className=' ggg '> E-commerce Assia App</div>
                                </div>
                            </div>


                            <div className='col-6'>
                                <div className='links'>
                                    <a href='/Home'>Acceuil</a>
                                    <a href='/Users' >Utilisateurs</a>
                                    <a href='/Products'>Produits</a>
                                    <a href='/login'>Catégories</a>
                                </div>
                            </div>

                            <div className='col HHH'>
                                <div>
                                    < div className='  '> <a href='/login'><i className="material-icons">local_grocery_store</i></a></div>
                                </div>
                            </div>

                            <div className='col-4'>
                                <div>
                                    < div className=' ooo '> <a href='/login'><i className="material-icons">power_settings_new</i>Logout</a></div>
                                </div>
                            </div>




                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;