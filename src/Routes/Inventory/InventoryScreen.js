import React from 'react';
import BLOCKv from '../../Common/Blockv';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import TopBar from '../../Common/TopBar';


if(!BLOCKv.UserManager.isLoggedIn)
 window.location.hash = '/login';

export default class InventoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.state.vatoms = []

        
        
    }   

    componentDidMount(){
        BLOCKv.Vatoms.getUserInventory().then(e => {
            // Filter
        let vatoms =  e.vatoms.filter(vatom => {
            //::vAtom::CoinWallet
            if (vatom['vAtom::vAtomType'].template.indexOf('::vAtom::CoinWallet') > -1) {
              console.log('there is a wallet')
              return false
            }
              
            //::vAtom::Avatar
            if (vatom['vAtom::vAtomType'].template.indexOf('::vAtom::Avatar') > -1) {
                console.log("there is an avatar");
                return false
            }
            
            
            return true
        })
            

        this.setState({vatoms : vatoms});
        })
    }

    render() {
       
        
        return <React.Fragment>
          <TopBar />
          <h1>Inventory</h1>
          <div style={{ display: "flex", flexWrap: "wrap", width: '95%', margin: '0 auto' }}>
            {this.state.vatoms.map(vatom => 
                <Card key={vatom.id} style={{ margin: 10 }} onClick={e => window.location.hash='/vatom/'+vatom.id}>
                    <CardMedia
                        style={{height:'160px', width: '170px', padding:'10px'}}
                        image= {BLOCKv.UserManager.encodeAssetProvider(vatom['vAtom::vAtomType'].resources.find(res => res.name == 'ActivatedImage').value.value)}
                        title={vatom['vAtom::vAtomType'].title}
                    />
                    <CardContent style={{fontSize: '12px'}}>
                    {vatom['vAtom::vAtomType'].title}
                    </CardContent>
            </Card>
            

            )}
           </div>
        </React.Fragment>     
    }

    
}