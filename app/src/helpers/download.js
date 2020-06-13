import axios from 'axios'
import {apiUrl} from "../config";
import _ from 'lodash'

export const getDownloadInfo = (id) => {

    const url = `${apiUrl}/posts/${id}`; //the url for downloadig the files

    return axios.get(url);

}
