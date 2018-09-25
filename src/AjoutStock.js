import React from 'react';

class AjoutStock extends React.Component {
    render() {
        return (
            <div>
                <div style = {this.props.addInStock}>
                    
                    <fieldset style = {this.props.fieldset}>
                        <legend>
                            <h3>Modifier les stock</h3>
                        </legend >
                        <select size = {5} style = {this.props.input} onChange = {this.props.product}>
                        {this.props.myProducts.map((newProd, i) =>
                                               <option key = {i} value = {newProd.nameProduct}>{newProd.nameProduct}</option>)}
                        </select>
                        <input style = {this.props.input}
                               placeholder = 'quantity'
                               type = 'number'
                               min = '0'
                               onChange = {this.props.quantity}/>
                        <div style = {this.props.ajoutStock}>
                            <i className = "fas fa-plus-square fa-2x" onClick = {this.props.pushAction}></i>
                            <i className = "fas fa-minus-square fa-2x" onClick = {this.props.pullAction}></i>
                        </div>
                                     <h3>Ajouter un produit</h3> <i className = "fas fa-2x fa-plus-circle" onClick = {this.props.displayAddProduct}></i>
                    </fieldset>

                    </div>
                
                
                
                
                
            </div>
           
        )
    }
}

export default AjoutStock;
