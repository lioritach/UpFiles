import _ from 'lodash'
class File {

    constructor(app){
        this.app = app;
        this.model = {
            name: null,
            orignalName: null,
            mimetype: null,
            size: null,
            created: new Date(),
        }
    }

    initWithObject(object){
        this.model.name = _.get(object, 'filename');
        this.model.orignalName = _.get(object, 'originalName');
        this.model.mimetype = _.get(object, 'mimetype');
        this.model.size = _.get(object, 'size');
        this.model.created = new Date();

        return this;
    }

    toJSON(){
        return this.model;
    }



}
export default File;