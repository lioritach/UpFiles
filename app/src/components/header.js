import React, {Component} from 'react';

class Header extends Component{

    render(){

        return (<div className={'app-header'}>
            <div className={'app-site-info'}>
                <h1><i className={'icon-paper-plane'}/> UpFiles</h1>
                <div className={'site-title'}>Make your business safer with more pictures.</div>
                <div className={'site-slogan'}>Secure & Safe</div>
            </div>
        </div>)
    }

}

export default Header;