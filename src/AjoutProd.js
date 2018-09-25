import React from 'react';

class AjoutProd extends React.Component {
    render() {
        return (
            
             <div>
        <div style = {this.props.middleWidth}>
                    <div style = {this.props.addProd1}>
                    <fieldset style = {this.props.fieldset}>
                        <legend>
                            <h3>Ajouter un produit</h3>
                        </legend>
                        <div style = {this.props.ajoutProd}>
                            <input placeholder = 'nom' onChange = {this.props.onChange}/>
                            <i className = "fas fa-arrow-alt-circle-right fa-2x" onClick = {this.props.onClick}></i>
                            <div style={this.props.icon}></div>
                        </div>
                    </fieldset>
                    
                    </div>
                    </div>
        </div>
        )
    }
}

export default AjoutProd
