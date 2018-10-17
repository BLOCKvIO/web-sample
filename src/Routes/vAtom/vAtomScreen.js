import React from 'react';
import BLOCKv from '../../Common/Blockv'
import TopBar from '../../Common/TopBar'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

if(!BLOCKv.UserManager.isLoggedIn)
 window.location.hash = '/login';

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    
  };

export default class vAtomScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            vatom : '',
            resources : [], 
            states : [],
        }
    }

    componentDidMount(){
        const vid = this.props.match.params.id;
        BLOCKv.Vatoms.getUserVatoms([vid]).then(e => {
            let res = e[0].properties.resources;
            let sta = e[0].properties.states;
            this.setState({vatom : e[0], resources: res, states: sta});
            console.log(e[0]); 
        });
        
        
    }

    render(){

        

        return <React.Fragment>
            <TopBar />
            <Card>
            <CardContent>
            
                <h1>vAtom Information</h1> 
                <div class="info" style={{textAlign: 'left', padding: '10px'}}>
                    <label>ID: {this.state.vatom && this.state.vatom.id}</label>
                    <hr />
                    <label>Unpublished: {this.state.vatom && JSON.stringify(this.state.vatom.unpublished)}</label>
                    <hr />
                    <label>Created: {this.state.vatom && this.state.vatom.when_created}</label>
                    <hr />
                    <label>Modified: {this.state.vatom && this.state.vatom.when_modified}</label>
                    <hr />
                    <label>Title: {this.state.vatom && this.state.vatom.properties.title}</label>
                    <hr />
                    <label>Acquirable: {this.state.vatom && JSON.stringify(this.state.vatom.properties.acquirable)}</label>
                    <hr />
                    <label>Author: {this.state.vatom && this.state.vatom.properties.author}</label>
                    <hr />
                    <label>Category: {this.state.vatom && this.state.vatom.properties.category}</label>
                    <hr />
                    <label>Cloned From: {this.state.vatom && this.state.vatom.properties.cloned_from}</label>
                    <hr />
                    <label>Cloning Score: {this.state.vatom && this.state.vatom.properties.cloning_score}</label>
                    <hr />
                    <label>Description: {this.state.vatom && this.state.vatom.properties.description}</label>
                    <hr />
                    <label>Disabled: {this.state.vatom && JSON.stringify(this.state.vatom.properties.disabled)}</label>
                    <hr />
                    <label>Dropped: {this.state.vatom && JSON.stringify(this.state.vatom.properties.dropped)}</label>
                    <hr />
                    <label>In Contract: {this.state.vatom && JSON.stringify(this.state.vatom.properties.in_contract)}</label>
                    <hr />
                    <label>In Contract With: {this.state.vatom && this.state.vatom.properties.in_contract_with}</label>
                    <hr />
                    <label>Notify Message: {this.state.vatom && this.state.vatom.properties.notify_msg}</label>
                    <hr />
                    <label>Number of Clones: {this.state.vatom && this.state.vatom.properties.num_direct_clones}</label>
                    <hr />
                    <label>Owner: {this.state.vatom && this.state.vatom.properties.owner}</label>
                    <hr />
                    <label>Parent ID: {this.state.vatom && this.state.vatom.properties.parent_id}</label>
                    <hr />
                    <label>Publisher FQDN: {this.state.vatom && this.state.vatom.properties.publisher_fqdn}</label>
                    <hr />
                    <label>Redeemable: {this.state.vatom && JSON.stringify(this.state.vatom.properties.redeemable)}</label>
                    <hr />
                    <label>Root Type: {this.state.vatom && this.state.vatom.properties.root_type}</label>
                    <hr />
                    <label>Template: {this.state.vatom && this.state.vatom.properties.template}</label>
                    <hr />
                    <label>Template Variation: {this.state.vatom && this.state.vatom.properties.template_variation}</label>
                    <hr />
                    <label>Tradeable: {this.state.vatom && JSON.stringify(this.state.vatom.properties.tradeable)}</label>
                    <hr />
                    <label>Transferable: {this.state.vatom && JSON.stringify(this.state.vatom.properties.transferable)}</label>
                    <hr />
                    <label>Transferred By: {this.state.vatom && this.state.vatom.properties.transferred_by}</label>
                    <hr />

                    <div>
                        <h3>Commerce</h3>
                        <label>Pricing Type: {this.state.vatom && this.state.vatom.properties.commerce.pricing.pricingType}</label>
                        <hr />
                        <label>Currency: {this.state.vatom && this.state.vatom.properties.commerce.pricing.value.currency}</label>
                        <hr />
                        <label>Price: {this.state.vatom && this.state.vatom.properties.commerce.pricing.value.price}</label>
                        <hr />
                        <label>Valid From: {this.state.vatom && this.state.vatom.properties.commerce.pricing.value.valid_from}</label>
                        <hr />
                        <label>Valid Through: {this.state.vatom && this.state.vatom.properties.commerce.pricing.value.valid_through}</label>
                        <hr />
                        <label>Vat Included: {this.state.vatom && JSON.stringify(this.state.vatom.properties.commerce.pricing.value.vat_included)}</label>
                        <hr />
                    </div>

                    <div>
                        <h3>Geo Pos</h3>
                        <label>Reql Type: {this.state.vatom && this.state.vatom.properties.geo_pos.$reql_type$}</label>
                        <hr />
                        <label>Type: {this.state.vatom && this.state.vatom.properties.geo_pos.type}</label>
                        <hr />
                        <label>Latitude: {this.state.vatom && JSON.stringify(this.state.vatom.properties.geo_pos.coordinates[0])}</label>
                        <hr />
                        <label>Longitude: {this.state.vatom && JSON.stringify(this.state.vatom.properties.geo_pos.coordinates[1])}</label>
                        <hr />
                    </div>

                    <div>
                        <h3>Resources</h3>
                        {this.state.resources.map(res =>  <span key={res.name}><label>{res.name}: {decodeURI(res.value.value)}</label> <hr /></span> )}
                    </div> 
                    <div>
                        <h3>States</h3>
                        {this.state.states.map(st =>  <span key={st.name}><label>{st.name}: {st.value.value}</label> <hr /></span> )}
                    </div>
                    <div>
                        <h3>Visibility</h3>
                        <label>Type: {this.state.vatom && this.state.vatom.properties.visibility.type}</label>
                        <hr />
                        <label>Value: {this.state.vatom && this.state.vatom.properties.visibility.value}</label>
                        <hr />
                        
                    </div>               
                </div>
           
           </CardContent>
           </Card>
           </React.Fragment>
    }
    }