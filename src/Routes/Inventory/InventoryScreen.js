import React from 'react';
import BLOCKv from '../../Common/Blockv';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import TopBar from '../../Common/TopBar';
import VatomViewContainer from '../../Components/VatomViewContatiner'
import {FaceSelection} from '@blockv/sdk/face'

if(!BLOCKv.UserManager.isLoggedIn)
 window.location.hash = '/login';

export default class InventoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.state.vatoms = []
        this.container = React.createRef();
        
        
    }   

    componentDidMount(){
        BLOCKv.Vatoms.getUserInventory().then(e => {
            // Filter
        let vatoms =  e.filter(vatom => {
            //::vAtom::CoinWallet
            if (vatom.properties.template.indexOf('::vAtom::CoinWallet') > -1) {
              return false
            }
              
            //::vAtom::Avatar
            if (vatom.properties.template.indexOf('::vAtom::Avatar') > -1) {
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
                <Card 
                    key={vatom.id} 
                    style={{ margin: 10, width:'170px', height:'170px' }} 
                    onClick={e => window.location.hash='/face/'+vatom.id}>
                    <VatomViewContainer vatom={vatom} fsp={FaceSelection.Icon} style={{ width:'100px', height:'100px', margin: '0 auto'}}  /> 
                    <CardContent style={{fontSize: '12px'}}>
                    {vatom.properties.title}
                    </CardContent>
            </Card>
            

            )}
           </div>
        </React.Fragment>     
    }

    
}