import React from 'react';
import AjoutProd from './AjoutProd';
import AjoutStock from './AjoutStock';
import Historique from './Historique';
import Stock from './Stock';
import Filter from './Filter';





const styles = {
    
    divGlob : {
        display: 'flex',
        height: '100vh'
    },
    
    divInput: {
        display: 'flex',
        flexDirection: 'column',

    },
    
    
    
    addInStock: {
        display: 'flex',
        width: '250px'
    },  
    fieldset: {
        display: 'flex',
        width: '250px'
    }, 
    input: {
        margin: '10px',
        width : '100px'
    },
    ajoutStock: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    
    
    middleWidth : {
        diplay: 'flex',
        width: '250px'
}, 
    addProd1: {
        display: 'none',
    },
    addProd2: {
        display: 'flex',
        
    },
    addProd3: {
        display: 'none',
    },
    ajoutProd: {
        display: 'flex',
    },
    icon : {
        
        fontFamily: 'FontAwesome',
        content: '\f056'
        
    },
  
    
    
    
    
    filterButton : {
        marginTop : '28px',
        marginRight : '25px',
        width: '250px',
        height: '150px',
        border: '3px solid',
        overflow: 'auto',
        background: 'orangered',

    },
    
     divTab: {
         width : '50vw',
         display: 'flex',
         justifyContent : 'space-around'
        
    },
    
    table: {
        border: '1px solid #333',
        width: '320px'
    },
    thead: {
        backgroundColor: '#333',
        color: '#fff'
    },
    td: {
        border: '1px solid #333',
    },
    tfoot: {
        backgroundColor: '#333',
        color: '#fff'
    },

    

    

    

   

   

    
    
    
    
    
    
    
    
    
    
    
    
}

class App extends React.Component {
    state = {
        product: '',
        onChangeProduct: '',
        myProducts: [],
        quantity: 0,
        actions: [],
        filteredAction : [],
        value : ""
    };

    

    displayAddProduct = () => {
        if (styles.addProd1.display === 'flex') {
            styles.addProd1 = styles.addProd3;
        } else {
            styles.addProd1 = styles.addProd2;
        };
        this.setState(styles.addProd1);
    };


    pushAction = () => {
        let actions = this.state.actions;
        let myProducts = this.state.myProducts;
        
        const newAction = {
            nameProduct: this.state.product,
            quantity: this.state.quantity,
            etat: 'push',
            createdAt: new Date().toISOString().slice(0, 10).replace(/ - /g, " "),
        };
        
        actions.push(newAction);
        this.setState({
            actions: actions
        });
        console.log('quantité ajoutée: ' + newAction.quantity);

        for (var i = 0; i < myProducts.length; i = i + 1) {
            if (myProducts[i].nameProduct === newAction.nameProduct) {
                myProducts[i].stock = Number(this.state.myProducts[i].stock) + Number(newAction.quantity);
                console.log('etat des stocks: ' + this.state.myProducts[i].stock);
                console.log('---------------')
            }
        }
        this.setState({myProducts});
        this.resetActions();

    };
    pullAction = () => {
        let actions = this.state.actions;
        let myProducts = this.state.myProducts;
        const newAction = {
            nameProduct: this.state.product,
            quantity: this.state.quantity,
            etat: 'pull',
            createdAt: new Date().toISOString().slice(0, 10).replace(/ - /g, " ")
        };

        actions.push(newAction);
        this.setState({
            actions: actions
        });

        console.log('quantité retiré: ' + newAction.quantity);
        for (var i = 0; i < myProducts.length; i = i + 1) {
            if (myProducts[i].nameProduct === newAction.nameProduct) {
                myProducts[i].stock = Number(this.state.myProducts[i].stock) - Number(newAction.quantity);
                console.log('etat des stocks: ' + this.state.myProducts[i].stock);
                console.log('---------------')
            
        };
        this.setState({
            myProducts
        });
        this.resetActions();
    };
    }
    addProduct = () => {
        console.log ('add prod');
        let onChangeProduct = this.state.onChangeProduct;
        let myProducts = this.state.myProducts;
        let product = this.state.product
        product = onChangeProduct;
        
        if (product !== null && product !== undefined && product !== "") {
        this.setState({
            product
        })
        const newProd = {
            nameProduct: product,
            stock: 0,
        };
        myProducts.push(newProd);
        this.setState({
            myProducts: myProducts
        })
            alert(product + ' a été ajouté dans votre inventaire.')
                console.log (myProducts);

    } else {
        alert('le champs saisie n est pas correct !')
        
    }; 
    }
    deleteProduct = (index) => {
        var myProducts = this.state.myProducts;
        myProducts.splice(index, 1);
        this.setState({
            myProducts: myProducts
        });
        
        console.log ('delete prod');
        console.log(index);
        console.log(this.state.myProducts);
        
    };  
    resetActions = () => {
        
        let filteredAction = this.state.filteredAction;
        let actions = this.state.actions;
        filteredAction = actions;
        this.setState({filteredAction});
        console.log(filteredAction)
    } 
    
    
    
    
    
    
    
    
    filterProduct = (index) => {
        this.resetActions();
        let myProducts = this.state.myProducts;
        let actions = this.state.actions;
        let filteredAction = this.state.filteredAction;
        filteredAction = [];
        this.setState({filteredAction});

        for (var i = 0; i < actions.length; i++) {
           if (myProducts[index].nameProduct === actions[i].nameProduct) 
            filteredAction.push(actions[i]) 
        }
        this.setState({filteredAction});
        }  
    
    
    
    
    
    
    
    
    
    
    
    
    test = () => {
        let value = this.state.value;
        let product = this.state.product;
            
        value = product;
        this.setState({
            value
        })
    }  
    alert = () => {
        let myProducts = this.state.myProducts;
        let product = this.state.product;
         
        product = prompt("Ajouter un produit dans l'inventaire");
        
        const newProd = {
            nameProduct: product,
            stock: 0,
        };
        if (product !== null && product !== undefined && product !== "") {
          myProducts.push(newProd);
        this.setState({
            myProducts: myProducts
        })
        alert(product + ' a été ajouté dans votre inventaire.')  
            
        } else {
            alert('le champs saisie n est pas correct !')
        }
        
    }

    render() {

        return (
            <div style={styles.divGlob}>
                <div style = {styles.divInput}>
                    <AjoutStock
                        addInStock = {styles.addInStock}
                        displayAddProduct = {this.displayAddProduct}
                        fieldset = {styles.fieldset}
                        input = {styles.input}
                        onChange2 = {(e) => this.setState({product: e.target.value})}
                        ajoutStock = {styles.ajoutStock}
                        pushAction = {this.pushAction}
                        pullAction = {this.pullAction}
                        myProducts = {this.state.myProducts}
                        product = {(e) => this.setState({product: e.target.value})}
                        quantity = {(e) => this.setState({quantity: e.target.value})}
                        onChangeProduct = {(e) => this.setState({onChangeProduct: e.target.value})}
                        test = {this.test}
                        />
                        
                        <fieldset><legend><h3>Ajouter un produit</h3></legend>
                        <i className = "fas fa-2x fa-plus-circle" onClick = {this.displayAddProduct}></i>
                        <button onClick = {this.alert}>Ajouter un produit</button>
                        </fieldset>
                        
                        
                    <AjoutProd
                        middleWidth = {styles.middleWidth}
                        addProd1 = {styles.addProd1}
                        fieldset = {styles.fieldset}
                        ajoutProd = {styles.ajoutProd}
                        onChange = {(e) => this.setState({onChangeProduct: e.target.value})}
                        onClick = {this.addProduct}
                        icon = {styles.icon}
                        quantity = {this.state.quantity}
                        />
                </div>
                    
                    <Filter
                            filterButton = {styles.filterButton}
                            resetActions = {this.resetActions}
                            myProducts = {this.state.myProducts}
                            filterProduct = {this.filterProduct}
                         />
                    <div style = {styles.divTab}>
                        
                         
                                                                                                         
                        <Historique
                            table = {styles.table}
                            td = {styles.td}
                            thead = {styles.thead}
                            tfoot = {styles.tfoot}
                            actions = {this.state.actions}
                            filteredAction = {this.state.filteredAction}                    
                        />
                    
                        <Stock
                            table = {styles.table}
                            td = {styles.td}
                            thead = {styles.thead}
                            tfoot = {styles.tfoot} 
                            myProducts = {this.state.myProducts}
                            deleteButton = {this.deleteProduct}  
                        />
                    </div>
                </div>
        );
    }
}




export default App;
