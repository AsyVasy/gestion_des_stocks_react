import React from 'react';

class Stock extends React.Component {
    render() {
        return (
            <div>
                        <legend>Etat des stocks</legend>
                        <table style = {this.props.table}>
                            <thead key = 'thead2' style = {this.props.thead}>
                                <tr>
                                    <td>Produit</td>
                                    <td>Stock</td>
                                    <td>Suppr</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.myProducts.map((newProd, i) =>
                                                           <tr key = {i}>
                                                               <td style = {this.props.td}>{newProd.nameProduct}</td>
                                                               <td style = {this.props.td}>{newProd.stock}</td>
                                                               <td onClick = {()=>this.props.deleteButton(i)} style = {this.props.td}>
                                                               <i className="far fa-trash-alt"></i></td> 
                                                            </tr>
                                                          )}
                            </tbody>
                            <tfoot key = 'tfoot2'>
                            </tfoot>
                        </table>
                    </div> 
           
        )
    }
}

export default Stock;
