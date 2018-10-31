import React from 'react';
import BLOCKv from '../Common/Blockv'
import {FaceSelection} from '@blockv/sdk/face'
import LiveVatomView from '../Common/LiveVatomView'


export default class LiveVatomViewContainer extends React.Component {

    constructor(props){
        super(props);
        this.container = React.createRef();
        this.vv = null;
    }

    render(){
        return <div ref={this.container} style={Object.assign({
            position: 'relative',
        }, this.props.style)}></div>
    }


    componentDidMount(){
        this.vv = new LiveVatomView(BLOCKv, this.props.vatom, this.props.fsp || FaceSelection.Icon);
        this.vv.element.style.cssText += 'postion: absolute; top:0px; left:0px; width:100%; height:100%';
        this.container.current.append(this.vv.element);   
    }

    componentWillUnmount(){
        this.container.current.removeChild(this.vv.element);
        this.vv.free();
    }
}