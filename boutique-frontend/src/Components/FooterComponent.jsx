
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FooterComponent extends Component {
    constructor(props) {
        super(props);

    }

    

    render() {
        return (
            <div>
                <footer className='footer'>
                    <span className='text-muted'> All Rights Reseved 2022 @JavaGuides</span>
                </footer>
            </div>
        );
    }
}


export default FooterComponent;