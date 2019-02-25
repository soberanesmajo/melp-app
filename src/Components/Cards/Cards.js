import React, {Component} from 'react';
import Data from '../../data_melp.json';

class Cards extends Component {
    gettingData(Data) {
        //console.log(Data); 
        const info = Data.forEach(element => {
            let name = element.name;
            //console.log(name);    
            let rating = element.rating;
            //console.log(rating);
            let contact = element.contact;
            //console.log(contact);
            let address = element.address;
            console.log(address);                    
        });
    }
    
    componentDidMount () {
        this.gettingData(Data);
    }

    render () {
        return (
            <p>Holi</p>
        )
    }

}


export default Cards;

