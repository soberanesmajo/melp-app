import React, {Component} from 'react';
import Data from '../../data_melp.json';

class Cards extends Component {
    gettingData(Data) {
        console.log(Data);      
    }

    componentDidMount () {
        this.gettingData(Data);
    }

}


export default Cards;

