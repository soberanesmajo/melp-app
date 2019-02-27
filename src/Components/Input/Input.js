import React, {Component} from 'react';

class Input extends Component {
    render (){
        //console.log(this.props);
        return(
            <div className="input-group mb-3">
                <select className="custom-select" id="inputGroupSelect01">
                    <option selected>Filtrar por...</option>
                    <option value="1">Raiting</option>
                    <option value="2">Orden alfabético</option>
                </select>
            </div>
        )
    }
}

export default Input;