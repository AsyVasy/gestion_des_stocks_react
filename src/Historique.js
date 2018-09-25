import React from 'react';

class Historique extends React.Component {
    render() {
        return (
            <div>
                <div>
                        <legend>Historique d 'action</legend>
                        <table style = {this.props.table}>
                            <thead key = 'thead' style = {this.props.thead}>
                                <tr>
                                    <td style = {this.props.td}>Nom</td>
                                    <td style = {this.props.td}>Quantité</td>
                                    <td style = {this.props.td}>Etat</td>
                                    <td style = {this.props.td}>CreatedAt</td>
                                </tr>
                            </thead>
                            <tbody key = 'tbody'>
                                    
                                    {this.props.filteredAction ? 
                                        
                                        this.props.filteredAction.map((action, i) =>
                                                                           <tr key = {i}>
                                                                               <td style = {this.props.td}>{action.nameProduct}</td>
                                                                               <td style = {this.props.td}>{action.quantity}</td>
                                                                               <td style = {this.props.td}>{action.etat}</td>
                                                                               <td style = {this.props.td}>{action.createdAt.toString()}</td>
                                                                           </tr>
                                                                          )
                                     : 
                                        this.props.actions.map((action, i) =>
                                                                           <tr key = {i}>
                                                                               <td style = {this.props.td}>{action.nameProduct}</td>
                                                                               <td style = {this.props.td}>{action.quantity}</td>
                                                                               <td style = {this.props.td}>{action.etat}</td>
                                                                               <td style = {this.props.td}>{action.createdAt.toString()}</td>
                                                                           </tr>
                                                                          )
                                    
                                    
                                    }
                                    
                            </tbody>
                            <tfoot key = 'tfoot' style = {this.props.tfoot}>
                                <tr>
                                    <td style = {this.props.td}>Nom</td>
                                    <td style = {this.props.td}>Quantité</td>
                                    <td style = {this.props.td}>Etat</td>
                                    <td style = {this.props.td}>CreatedAt</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                
                
                
                
                
                
                
                
                
                
                
                
            </div>
           
        )
    }
}

export default Historique;
