import React, {Component} from 'react';
import Data from '../../data_melp.json';

class Cards extends Component {
    constructor() {
        super();
        this.state = {}
    }
    
    componentDidMount () {
        const info = Data.forEach(element => {
            let name = element.name;
            console.log(name);    
            let rating = element.rating;
            let site = element.contact.site;
            let phone = element.contact.phone; 
            let street = element.address.street;
            //console.log(street);
            let city = element.address.city;
            let state= element.address.state;
            let dataCard = {
                name: name,
                rating: rating,
                site: site,
                phone: phone,
                street: street,
                city: city,
                state: state
            }
            this.setState({dataCard:[...this.state.dataCard, dataCard]});
        });
    }
    
    render () {
        return (
            <p>Holi</p>
            )
        }       
    }
    
    export default Cards;



        // gettingData(Data) {
        //     //console.log(Data); 
        //     const info = Data.forEach(element => {
        //         let name = element.name;
        //         //console.log(name);    
        //         let rating = element.rating;
        //         let site = element.contact.site;
        //         let phone = element.contact.phone; 
        //         let street = element.address.street;
        //         //console.log(street);
        //         let city = element.address.city;
        //         let state= element.address.state;
        //     });
        // }

