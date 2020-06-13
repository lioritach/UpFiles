import _ from 'lodash'

const KB = 1024; //the size of kb
const MB = KB * KB; //the size for mb

export const betterNumber = (input, round = true) => {

    if(input > MB){
        return round ? `${_.round(input/MB)} Mb` : `${(input/MB)} Mb` ;
    }

    if(input > KB){
        return round ? `${_.round(input/KB)} Kb` : `${(input/KB)} Kb` ;
    }

}
