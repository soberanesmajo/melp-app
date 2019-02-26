import React, {Component} from 'react';
import Data from '../../data_melp.json';
import Input from '../Input/Input';
import './cards.css';

class Cards extends Component {
    constructor() {
        super();
        this.state = {
            dataCard:[]
        }
    }
    
    componentDidMount () {
        const newArray = [];
        const info = Data.forEach(element => {
            let name = element.name;
            //console.log(name);    
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
            newArray.push(dataCard);
        });
        console.log(newArray);
        this.setState({dataCard:newArray});
    }
    
    render () {
        return (
            <section className="container">
            <Input />
                {this.state.dataCard.map(element => {
                    return(
                        <div className="card">
                            <h4 className="card-header">{element.name}</h4>
                            <div className="card-body">
                                <h5 className="card-title">Rating: {element.rating}</h5>
                                <p className="card-text">{element.street}</p>
                                <p className="card-text">{element.city}</p>
                                <p className="card-text">{element.state}</p>
                                <p className="card-text">{element.phone}</p>
                            </div>
                        </div>
                    )
                })}
            </section>
        )
    }       
}
    
    export default Cards;

