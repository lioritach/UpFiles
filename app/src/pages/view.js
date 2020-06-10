import React, {Component} from 'react'
import _ from 'lodash'
import {getDownloadInfo} from "../helpers/download";
import { apiUrl } from "../config";
import {betterNumber} from "../helpers";
import {history} from '../history'

class View extends Component{

    constructor(props){
        super(props);

        this.state = {
            post: null,
        }

        this.getDownloadSize = this.getDownloadSize.bind(this);
    }


    componentWillMount(){

        const {match} = this.props;
        const postId = _.get(match, 'params.id');

        getDownloadInfo(postId).then((response) => {

            this.setState({
                post: _.get(response, 'data')
            });

        }).catch((err) => {
            console.log("an error fetching download data", err);
        })


    }

    getDownloadSize(){

        const {post} = this.state;
        let total = 0;
        const files = _.get(post, 'files', []);

        _.each(files, (file) => {
            total = total + _.get(file, 'size', 0);
        });

        return betterNumber(total);
    }

    render(){

        const {post} = this.state;
        const files = _.get(post, 'files', []);
        const totalSize = this.getDownloadSize();
        const postId = _.get(post, '_id', null);


        return(

            <div className={'app-page-download'}>
                <div className={'app-top-header'}>
                    <h1><i className={'icon-paper-plane'}/> UpFiles</h1>
                </div>
                <div className={'app-card app-card-download'}>
                    <div className={'app-card-content'}>
                        <div className={'app-card-content-inner'}>
                            <div className={'app-download-icon'}>
                                <i className={'icon-download'} />
                            </div>
                            <div className={'app-download-message app-text-center'}>
                                <h2>The File is ready to download!</h2>
                                <ul>
                                    <li>{files.length} files</li>
                                    <li>{totalSize}</li>
                                    <li>Expires in 30 days</li>
                                </ul>
                            </div>
                            <div className={'app-download-file-list'}>
                                {
                                    files.map((file, index) => {

                                        return (<div key={index} className={'app-download-file-list-item'}>
                                                <div className={'filename'}>{_.get(file, 'originalName')}</div>
                                                <div className={'download-action'}><a href={`${apiUrl}/download/${_.get(file, '_id')}`}>Download</a></div>
                                            </div>)

                                    })
                                }
                                
                                
                            </div>
                            <div className={'app-download-actions app-form-actions'}>
                                <button onClick={() =>{

                                    history.push('/')

                                }} className={'app-button'} type={'button'}>Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }

}

export default View;