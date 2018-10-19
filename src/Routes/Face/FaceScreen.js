import React from 'react';
import BLOCKv from '../../Common/Blockv';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import TopBar from '../../Common/TopBar';
import { VatomView, FaceSelection } from '@blockv/sdk/face'
import VatomViewContainer from '../../Components/VatomViewContatiner'

export default class FaceScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            vatom: null,
            loaded : false

        }
    }

    componentDidMount(){
        const vid = this.props.match.params.id;
        BLOCKv.Vatoms.getUserVatoms([vid]).then(e => {
            this.setState({vatom: e[0]});
            this.setState({loaded:true});
        });

    }


    render(){
        if(!this.state.loaded)
         return <div>Loading....</div>


        return <React.Fragment>
            <TopBar showInfo={this.state.vatom.id} />
            <h1>{this.state.vatom.properties.title}</h1>

            <VatomViewContainer vatom={this.state.vatom} fsp={FaceSelection.Icon} style={{ width:'100px', height:'100px', margin: '0 auto'}} />
            <VatomViewContainer vatom={this.state.vatom} fsp={FaceSelection.Card} style={{ width:'375px', height:'600px', margin: '0 auto'}} />
            <VatomViewContainer vatom={this.state.vatom} fsp={FaceSelection.Engaged} style={{ width:'300px', height:'600px', margin: '0 auto'}} />
            <VatomViewContainer vatom={this.state.vatom} fsp={FaceSelection.FullScreen} style={{ width:'800px', height:'600px', margin: '0 auto'}} />

        </React.Fragment>
    }
}