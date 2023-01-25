import React, { Component } from 'react';
import background from '../Images/bgLogin.png'

class LoginComponent extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div>
                   <div className="table-wrapper body1">
                   <div className='row '>
                <div className='col-4 bg-image' style={{ backgroundImage: `url(${background})` }} >
                <div class="sidenav">
                    <div class="text-white m-5">
                        <h1>
                            User Login<br />Authentication
                        </h1>
                        <p>
                            Enter your login details<br /> to get into the application.
                        </p>
                    </div>
                </div>
                </div>
               <div className='col-8'>
               <div class="main">
                    <div
                        class="d-flex flex-column justify-content-center align-items-center">
                        <div class="col-md-8 col-sm-12">
                            <div class="login-form">
                                <form  class="m-3">
                                    <div class="form-group">
                                        <label>E-mail</label> <input type="email"
                                            class="form-control form-control-lg mt-1 mb-3"
                                            placeholder="Adresse e-mail" name="mail" />
                                    </div>
                                    <div class="form-group  mb-3">
                                        <label>Mot de passe</label> <input type="password"
                                            class="form-control form-control-lg mt-1"
                                            placeholder="Votre mot de passe " name="password" />
                                    </div>
                                    <a href='/Home'
                                        class="btn text-white bg-primary  w-25 login"
                                        name="login-btn" > Login</a>

                                    <div class="text-danger"></div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
                </div>
                   </div>
               
            </div>
        );
    }
}


export default LoginComponent;