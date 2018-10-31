import Blockv, { VatomView } from '@blockv/sdk/face'
import Face3D from '@blockv/3d-face'

export default new Blockv({
    "appID" : "6524ca14-486a-4e4d-b39b-e95775defcfe",
    "server" : "https://api.blockv.io",
    "websocketAddress" : "wss://newws.blockv.io",
    "prefix" : "dev"
})

// Register faces
VatomView.registerFace(Face3D)
