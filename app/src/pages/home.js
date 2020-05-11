import React, {Component} from 'react'
import Header from '../components/header'
import HomeForm from '../components/home-form'
import HomeUploading from '../components/home-uploading'
import HomeUploadSent from '../components/home-upload-sent'
import _ from 'lodash'

class Home extends Component{

    constructor(props) {
       super(props);

        this.state = {
            componentName: 'HomeForm',
            data: null,
            uploadEvent: null,
        };

        this._renderComponent = this._renderComponent.bind(this)
    }


    _renderComponent(){

        const {componentName, data, uploadEvent} = this.state;

        switch (componentName){

            case 'HomeUploading':


                return <HomeUploading event={uploadEvent} data={data} />

            case 'HomeUploadSent':

                return (
                    <HomeUploadSent />
                );


            default:
                return <HomeForm 
                onUploadEvent={(event) => {

                    this.setState(
                        {
                            uploadEvent: event,
                            componentName: (_.get(event, 'type') === 'success') ? 'HomeUploadSent': this.state.componentName,
                        }
                        );
                }}
                onUploadBegin={(data) =>{

                    this.setState({

                        data: data,
                        componentName: 'HomeUploading',

                    });

                }} />

        }
    



    }

    render(){
        
        return (
            <div className={'app-container'}>
                <Header/>
                <div className={'app-content'}>

                    {this._renderComponent()}

                </div>
            </div>
        )
    }
}

export default Home;