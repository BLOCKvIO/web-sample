import React from 'react';
import BLOCKv from '../../Common/Blockv'
import TopBar from '../../Common/TopBar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

if(!BLOCKv.UserManager.isLoggedIn)
 window.location.hash = '/login';

var cardStyle = {
    display: 'block',
    width: '50%',
    transitionDuration: '0.3s',
    height: '46.8vw'
}
export default class ProfileScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            profile : '',
            password: '',
            firstName: '',
            lastName : ''
           
        }
    }

    componentDidMount(){
        BLOCKv.UserManager.getCurrentUser().then((e) => {
            console.log(e);
            this.setState({ profile: e});
            
        })

    }

    updateProfile(){
        let payload = {}
         if(this.state.firstName)
          payload.first_name = this.state.firstName

        if(this.state.lastName)
         payload.last_name = this.state.lastName

        if(this.state.password)
         payload.password = this.state.password


        BLOCKv.UserManager.updateUser(payload).then( (e) => { console.log(e); window.location.reload()});
    }

    

    render(){
        return <React.Fragment>
            <TopBar />
            <Grid container spacing={12}>
                <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <div id="info" style={{textAlign: 'left', padding: '10px'}}>
                            <h1>User Profile</h1>
                            <label>ID: {this.state.profile.id}</label>
                            <hr />
                            <label>Activated: {JSON.stringify(this.state.profile.activated)}</label>
                            <hr />
                            <label>Avatar Public: {JSON.stringify(this.state.profile.avatarPublic)}</label>
                            <hr />
                            <label>Avatar URI: {this.state.profile.avatarURI}</label>
                            <hr />
                            <label>Birthday: {this.state.profile.birthday}</label>
                            <hr />
                            <label>First Name: {this.state.profile.firstName}</label>
                            <hr />
                            <label>Last Name: {this.state.profile.lastName}</label>
                            <hr />
                            <label>Admin: {JSON.stringify(this.state.profile.isAdmin)}</label>
                            <hr />
                            <label>Merchant: {JSON.stringify(this.state.profile.isMerchant)}</label>
                            <hr />
                            <label>Password Set: {JSON.stringify(this.state.profile.isPasswordSet)}</label>
                            <hr />
                            <label>Language: {this.state.profile.language}</label>
                            <hr />
                            <label>Last Login: {this.state.profile.lastLogin}</label>
                            <hr />
                            <label>Name Public: {JSON.stringify(this.state.profile.namePublic)}</label>
                            <hr />
                            <label>Non Push Notifications: {JSON.stringify(this.state.profile.nonPushNotifications)}</label>
                            <hr />
                            <label>Public FQDN: {this.state.profile.pubFqdn}</label>
                            <hr />
                            </div>
                        </CardContent>
                    </Card>
               </Grid>
               <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <h1>Update Profile</h1>
                            <form>
                                <FormControl margin="normal" fullWidth>
                                    <InputLabel htmlFor="firstname">First Name</InputLabel>
                                    <Input name="firstname" type="text" defaultValue={this.state.profile.firstName} onChange={e => this.setState({ firstName : e.target.value})} />
                                </FormControl>   
                                <FormControl margin="normal" fullWidth>
                                    <InputLabel>Last Name</InputLabel>
                                    <Input type="text" defaultValue={this.state.profile.lastName} onChange={e => this.setState({ lastName: e.target.value})} />
                                </FormControl>
                                <FormControl margin="normal"  fullWidth>    
                                    <InputLabel>New Password:</InputLabel>
                                    <Input type="password"  onChange={e => this.setState({ password: e.target.value })} />
                                </FormControl>  
                                <FormControl margin="normal" required fullWidth> 
                                    <Button onClick={e => this.updateProfile()} type="button" fullWidth variant="raised" color="primary">Update Profile</Button>
                                </FormControl>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
              
            
        </React.Fragment>
    }

    

    

} 