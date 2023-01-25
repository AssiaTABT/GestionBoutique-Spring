import React, { Component } from 'react';
import img1 from '../Images/first.jpg'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        }

    }


    render() {
        return (
         

                <div >
                    <div className='row'>
                    <div className='text-center welcome'>
                                Welcome 
                            </div>
                    </div>
                    <div className="row">
                        <img src={img1} alt=""  className='imgg center-block'/>
                    </div>
                </div>
        
           
        );
    }
}

export default ViewUserComponent;