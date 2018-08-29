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
            let res = e.vatoms[0]['vAtom::vAtomType'].resources;
            let sta = e.vatoms[0]['vAtom::vAtomType'].states;
            this.setState({vatom : e.vatoms[0], resources: res, states: sta});
            console.log(e.vatoms[0]); 
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
                    <label>Title: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].title}</label>
                    <hr />
                    <label>Acquirable: {this.state.vatom && JSON.stringify(this.state.vatom['vAtom::vAtomType'].acquirable)}</label>
                    <hr />
                    <label>Author: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].author}</label>
                    <hr />
                    <label>Category: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].category}</label>
                    <hr />
                    <label>Cloned From: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].cloned_from}</label>
                    <hr />
                    <label>Cloning Score: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].cloning_score}</label>
                    <hr />
                    <label>Description: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].description}</label>
                    <hr />
                    <label>Disabled: {this.state.vatom && JSON.stringify(this.state.vatom['vAtom::vAtomType'].disabled)}</label>
                    <hr />
                    <label>Dropped: {this.state.vatom && JSON.stringify(this.state.vatom['vAtom::vAtomType'].dropped)}</label>
                    <hr />
                    <label>In Contract: {this.state.vatom && JSON.stringify(this.state.vatom['vAtom::vAtomType'].in_contract)}</label>
                    <hr />
                    <label>In Contract With: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].in_contract_with}</label>
                    <hr />
                    <label>Notify Message: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].notify_msg}</label>
                    <hr />
                    <label>Number of Clones: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].num_direct_clones}</label>
                    <hr />
                    <label>Owner: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].owner}</label>
                    <hr />
                    <label>Parent ID: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].parent_id}</label>
                    <hr />
                    <label>Publisher FQDN: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].publisher_fqdn}</label>
                    <hr />
                    <label>Redeemable: {this.state.vatom && JSON.stringify(this.state.vatom['vAtom::vAtomType'].redeemable)}</label>
                    <hr />
                    <label>Root Type: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].root_type}</label>
                    <hr />
                    <label>Template: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].template}</label>
                    <hr />
                    <label>Template Variation: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].template_variation}</label>
                    <hr />
                    <label>Tradeable: {this.state.vatom && JSON.stringify(this.state.vatom['vAtom::vAtomType'].tradeable)}</label>
                    <hr />
                    <label>Transferable: {this.state.vatom && JSON.stringify(this.state.vatom['vAtom::vAtomType'].transferable)}</label>
                    <hr />
                    <label>Transferred By: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].transferred_by}</label>
                    <hr />

                    <div>
                        <h3>Commerce</h3>
                        <label>Pricing Type: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].commerce.pricing.pricingType}</label>
                        <hr />
                        <label>Currency: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].commerce.pricing.value.currency}</label>
                        <hr />
                        <label>Price: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].commerce.pricing.value.price}</label>
                        <hr />
                        <label>Valid From: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].commerce.pricing.value.valid_from}</label>
                        <hr />
                        <label>Valid Through: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].commerce.pricing.value.valid_through}</label>
                        <hr />
                        <label>Vat Included: {this.state.vatom && JSON.stringify(this.state.vatom['vAtom::vAtomType'].commerce.pricing.value.vat_included)}</label>
                        <hr />
                    </div>

                    <div>
                        <h3>Geo Pos</h3>
                        <label>Reql Type: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].geo_pos.$reql_type$}</label>
                        <hr />
                        <label>Type: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].geo_pos.type}</label>
                        <hr />
                        <label>Latitude: {this.state.vatom && JSON.stringify(this.state.vatom['vAtom::vAtomType'].geo_pos.coordinates[0])}</label>
                        <hr />
                        <label>Longitude: {this.state.vatom && JSON.stringify(this.state.vatom['vAtom::vAtomType'].geo_pos.coordinates[1])}</label>
                        <hr />
                    </div>

                    <div>
                        <h3>Resources</h3>
                        {this.state.resources.map(res =>  <span key={res.name}><label>{res.name}: {res.value.value}</label> <hr /></span> )}
                    </div> 
                    <div>
                        <h3>States</h3>
                        {this.state.states.map(st =>  <span key={st.name}><label>{st.name}: {st.value.value}</label> <hr /></span> )}
                    </div>
                    <div>
                        <h3>Visibility</h3>
                        <label>Type: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].visibility.type}</label>
                        <hr />
                        <label>Value: {this.state.vatom && this.state.vatom['vAtom::vAtomType'].visibility.value}</label>
                        <hr />
                        
                    </div>               
                </div>
           
           </CardContent>
           </Card>
           </React.Fragment>
    }
    }