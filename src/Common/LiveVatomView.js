import Blockv from './Blockv'
import { VatomView } from '@blockv/sdk/face'
import _ from 'lodash';
import Vatom from '@blockv/sdk/src/model/Vatom'

class LiveVatomView extends VatomView {
    
    constructor(bv, vAtom, FSP, config) {
        super(bv, vAtom, FSP, config);
        
        this.socket = this.blockv.WebSockets;
        
        // set state update
        this.stateUpdate = (su) => {
            if(su.payload.id === this.vatom.id) {
                let newVatom = _.defaultsDeep(su.payload.new_object, this.vatom.payload);
                this.vatom = new Vatom(newVatom, this.vatom.faces, this.vatom.actions);
                
            };
        }
        // check fot state updates
        this.socket.addEventListener('stateUpdate',  this.stateUpdate);
   
        // connect
        this.socket.connect();
        console.log("Socket: ", this.socket);
       
    }


    free(){
        super.free();
        if(this.socket)
        this.socket.removeEventListener('stateUpdate',  this.stateUpdate);
    }
}
export default LiveVatomView