import React from 'react';

class Filter extends React.Component {
    render() {
        return (
                    <div>
            
                    <div style = {this.props.filterButton}>
                       <button onClick = {this.props.resetActions}>*</button>
                        {this.props.myProducts.map((toto, i) =>
                                               <button key = {i} onClick= {()=>this.props.filterProduct(i)}>{toto.nameProduct}</button>)}
                        
                    </div>
            </div>
           
        )
    }
}

export default Filter;







