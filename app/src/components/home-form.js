import React, {Component} from 'react'

class HomeForm extends Component{

    render(){

        return (

            <div className={'app-card'}>
                <form>
                <div className={'app-card-header'}>
                    <div className={'app-card-header-inner'}>
                        <div className={'app-file-select-zone'}>
                            <label htmlFor={'input-file'}>
                                <input id={'input-file'} type="file" multiple={true} />
                                <span className={'app-upload-icon'} />
                                <span className={'app-upload-description'}>Drag and drop your files here</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={'app-card-content'}>
                    <div className={'app-card-content-inner'}>
                        <div className={'app-form-item'}>
                            <label htmlFor={'to'}>Send to</label>
                            <input name={'to'} placeholder={'Email address'} type={'text'} id={'to'}/>
                        </div>

                        <div className={'app-form-item'}>
                            <label htmlFor={'from'}>From</label>
                            <input name ={'form'} placeholder={'Your email address'} type={'text'} id={'from'}/>
                        </div>

                        <div className={'app-form-item'}>
                            <label htmlFor={'message'}>Message</label>
                            <textarea placeholder={'Add a note (optional)'} id={'message'} name={'message'} />
                        </div>

                        <div className={'app-form-actions'}>
                            <button type={'submit'} className={'app-button'}>Send</button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default HomeForm;