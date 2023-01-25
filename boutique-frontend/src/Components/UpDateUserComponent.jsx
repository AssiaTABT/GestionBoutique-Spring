import React, { Component } from 'react';
import UserService from '../Services/UserService';

class UpDateUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id : this.props.match.params.id,
            firstName: '',
            lastName: '',
            adress: '',
            birthDate: '',
            numTel: '',
            pwd: '',
            mail: ''
        }

        this.changeMailHandler = this.changeMailHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeBirthDateHandler = this.changeBirthDateHandler.bind(this);
        this.changeAdresseHandler = this.changeAdresseHandler.bind(this);
        this.changeNumTelHandler = this.changeNumTelHandler.bind(this);
        this.changePwdHandler = this.changePwdHandler.bind(this);

        this.editeUser = this.editeUser.bind(this);

    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then((res) => {
            let user = res.data;
            this.setState({
                firstName: user.firstName,
                lastName:user.lastName, 
                birthDate: user.birthDate, 
                adress: user.adress, 
                Tel: user.numTel, 
                pwd: user.pwd,
                mail: user.mail
            });
        });
    }
    editeUser = (e) => {
        e.preventDefault();
        

        let user = { firstName: this.state.firstName, lastName: this.state.lastName, mail: this.state.mail, birthDate: this.state.birthDate, adress: this.state.adress, Tel: this.state.numTel, pwd: this.state.pwd };
        console.log('user => ' + JSON.stringify(user));

        
        UserService.UpDateUser(user, this.state.id).then(res => {
           this.props.history.push('/Users');
            
        });
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeBirthDateHandler = (event) => {
        this.setState({ birthDate: event.target.value });
    }

    changeMailHandler = (event) => {
        this.setState({ mail: event.target.value });
    }


    changeAdresseHandler = (event) => {
        this.setState({ adress: event.target.value });
    }

    changeNumTelHandler = (event) => {
        this.setState({ numTel: event.target.value });
    }

    changePwdHandler = (event) => {
        this.setState({ pwd: event.target.value });
    }

    cancel(){
        this.props.history.push('/Users');
    }
    render() {
        return (

            <div >
                <div className="table-wrapper body1">
                    <div className="  table-title">
                        <div className="row">
                            <div className='col-xs-5'>
                                <h3>Modifier les information de l'utilisateur : <b> {this.state.firstName}</b></h3>
                            </div>

                        </div>
                    </div>
                    <div className='formCss'>
                        <div class=" rounded shadow-lg px-4 py-5 mt-5 bg-white"  >

                            <form >
                                <div className='row '>
                                    <div className='col-6'>

                                        <div class="form-group">
                                            <label >Prénom :</label>
                                            <input type="text" name='firstName' placeholder='Le prénom ?' class="form-control form-control-lg" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div class="form-group">
                                            <label >Nom :</label>
                                            <input type="text" name='lastName' placeholder='Le nom ?' class="form-control form-control-lg" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                        </div>
                                    </div>

                                </div>

                                <div className='row'>
                                    <div className='col-6'>
                                        <div class="form-group">
                                            <label >Date de naissances :</label>
                                            <input type="date" name='birthDate' placeholder='Date de naissance ?' class="form-control form-control-lg" value={this.state.birthDate} onChange={this.changeBirthDateHandler} />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div class="form-group">
                                            <label >Adresse :</label>
                                            <input type="text" name='adress' placeholder=" L'adresse ?" class="form-control form-control-lg" value={this.state.adress} onChange={this.changeAdresseHandler} />
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-6'>
                                        <div class="form-group">
                                            <label >Tel :</label>
                                            <input type="text" name='numTel' placeholder='Le numéro de téléphone ?' class="form-control form-control-lg" value={this.state.numTel} onChange={this.changeNumTelHandler} />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div class="form-group">
                                            <label >Mot de passe</label>
                                            <input type="password" name='pwd' placeholder=' Créer un mot de passe ?' class="form-control form-control-lg" value={this.state.pwd} onChange={this.changePwdHandler} />
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                <div className='col-6 center-block   text-center'>
                                        <div class="form-group quantiteSt ">
                                            <label >E-mail</label>
                                            <input type="email" name='mail' placeholder='Adresse e-mail' class="form-control form-control-lg" value={this.state.mail} onChange={this.changeMailHandler} />
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className='AjouterAnnuler'>
                                    <button class="  btn btn-primary btn-lg" onClick={this.editeUser}> Modifier </button>
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

export default UpDateUserComponent;