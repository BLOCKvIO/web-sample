import React from 'react';
import BLOCKv from '../../Common/Blockv';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
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

            {/* Faces container */}
            <div style={{ textAlign: 'center' }}>

                {/* Icon face */}
                <Card style={{ width: 128, margin: 20, display: 'inline-block', verticalAlign: 'top' }}>
                    <CardHeader subheader='Icon' style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }} />
                    <VatomViewContainer vatom={this.state.vatom} fsp={FaceSelection.Icon} style={{ width: 128, height: 128, margin: '0 auto'}} />
                </Card>

                {/* Engaged face */}
                <Card style={{ width: 300, margin: 20, display: 'inline-block', verticalAlign: 'top' }}>
                    <CardHeader subheader='Engaged' style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }} />
                    <VatomViewContainer vatom={this.state.vatom} fsp={FaceSelection.Engaged} style={{ width: 300, height: 300, margin: '0 auto'}} />
                </Card>

                {/* Card face */}
                <Card style={{ width: 375, margin: 20, display: 'inline-block', verticalAlign: 'top' }}>
                    <CardHeader subheader='Card' style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }} />
                    <VatomViewContainer vatom={this.state.vatom} fsp={FaceSelection.Card} style={{ width: 375, height: 600, margin: '0 auto'}} />
                </Card>

                {/* Card face */}
                <Card style={{ width: 800, margin: 20, display: 'inline-block', verticalAlign: 'top' }}>
                    <CardHeader subheader='Fullscreen' style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }} />
                    <VatomViewContainer vatom={this.state.vatom} fsp={FaceSelection.FullScreen} style={{ width: 800, height: 600, margin: '0 auto'}} />
                </Card>

            </div>

        </React.Fragment>
    }
}
