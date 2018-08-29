import React from 'react';
import BLOCKv from '../../Common/Blockv'
import PropTypes from 'prop-types';
import TopBar from '../../Common/TopBar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

if(BLOCKv.UserManager.isLoggedIn)
 window.location.hash = '/inventory'

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  });
export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.state.username = ""
        this.state.password = ""
        this.state.isLoggedIn = false
        this.state.value = 0
    }   

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {

        const { classes } = this.props;
        const { value } = this.state;

        return <React.Fragment>
          <TopBar noBack noProfile/>
          <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} centered>
            <Tab label="Email Login" />
            <Tab label="Phone Login" />
          </Tabs>
        </AppBar>
            {
            value === 0 && <TabContainer>
                <Grid container spacing={16}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                    <h2>Login</h2>
                    <form>
                    <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email</InputLabel>
                     <Input name="email" defaultValue={this.state.username} onChange={e => this.setState({ username: e.target.value })} type="email"  />
                    </FormControl>
                    <FormControl margin="normal" fullWidth required>
                     <InputLabel htmlFor="password">Password</InputLabel>
                     <Input name="password" defaultValue={this.state.password} onChange={e => this.setState({ password: e.target.value })} type='password' />
                    </FormControl>
                    
                     <Button size="large" variant="contained" fullWidth color="primary" onClick={e => this.login()}>Login</Button>
                     <Button size="large" variant="contained" fullWidth color="secondary" onClick={e => window.location.hash='register'}>Register</Button>
                    </form>
                    </Grid>
                    <Grid item xs={7}></Grid>
                </Grid>
                
                
            </TabContainer>
            }
            {value === 1 && <TabContainer>
                <Grid container spacing={0}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <h2>Login</h2>
                        <FormControl margin="normal" fullWidth required>
                            <PhoneInput placeholder="Enter phone number" value={ this.state.username } onChange={ phone => this.setState({ username: phone }) } />
                        </FormControl>
                        <FormControl margin="normal" fullWidth required>
                            <Input value={this.state.password} onChange={e => this.setState({ password: e.target.value })} type='password' placeholder='Password' />
                        </FormControl>
                        <Button size="large" variant="contained" fullWidth color="primary" onClick={e => this.login()}>Login</Button>
                        <Button size="large" variant="contained" fullWidth color="secondary" onClick={e => window.location.hash='register'}>Register</Button>
                        
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </TabContainer>}
            
        
        </React.Fragment>     
    }

    login() {
      

        let loginType = 'email';
        if((this.state.username).indexOf('@') !== -1){
          loginType = 'email';
        }else{
          loginType = 'phone_number';
        }

       
        
        BLOCKv.UserManager.login(this.state.username, loginType,  this.state.password).then(e => {

            // Success! Go to next page
            this.setState({isLoggedIn : true});
            return window.location.hash = "/inventory"

        }).catch(err => {

            // Failed! Show error
            alert(err.message)
            console.error(err)

        })
        

    }

}