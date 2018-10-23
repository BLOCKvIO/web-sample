import Blockv, { VatomView } from '@blockv/sdk/face'
import Face3D from '@blockv/3d-face'

export default new Blockv({
    "appID" : "{{APPID}}",
    "server" : "https://api.blockv.io",
    "websocketAddress" : "wss://newws.blockv.io",
    "prefix" : "dev"
})

// Register faces
VatomView.registerFace(Face3D)
