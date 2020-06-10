import axios from 'axios'
import {apiUrl} from "../config";
import _ from 'lodash'

export const getDownloadInfo = (id) => {

    const url = `${apiUrl}/posts/${id}`;

    return axios.get(url);

}