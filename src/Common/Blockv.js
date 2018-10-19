import Blockv from '@blockv/sdk/face'

export default new Blockv({
    "appID" : "{{APPID}}",
    "server" : "https://api.blockv.io",
    "websocketAddress" : "wss://newws.blockv.io",
    "prefix" : "dev"
})