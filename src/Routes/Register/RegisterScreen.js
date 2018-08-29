import React from 'react';
import BLOCKv from '../../Common/Blockv'
import TopBar from '../../Common/TopBar'
import swal from 'sweetalert'


export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.state.firstname = ""
        this.state.lastname = ""
        this.state.password = ""
        this.state.phone_number = ""
        this.state.password = ""
        this.state.email = ""

    }   

    render() {

        return <React.Fragment>
          <TopBar />
          <div id='loginForm'>
            <h1>Register</h1>
            <input value={this.state.firstname} onChange={e => this.setState({ firstname: e.target.value })} placeholder="First Name" />
            <input value={this.state.lastname} onChange={e => this.setState({ lastname: e.target.value })} type='text' placeholder='Last Name' />
            <input value={this.state.password} onChange={e => this.setState({password : e.target.value})} type="password" placeholder="Password" />
            <input value={this.state.phone_number} onChange={e => this.setState({phone_number : e.target.value})} type="tel" placeholder="Phone Number" />
            <input value={this.state.email} onChange={e => this.setState({email : e.target.value})} type="email" placeholder="Email Address" />
            <button type='button' onClick={e => this.register()}>Register</button>
            
          </div>
        </React.Fragment>     
    }

    register() {
        let payload = {
            password: this.state.password,
            first_name: this.state.firstname,
            last_name:this.state.lastname,
            user_tokens: []
        };
        if(this.state.email) {
            payload.user_tokens.push({ token: this.state.email, token_type: "email"});
        }
        if(this.state.phone_number) {
            payload.user_tokens.push({ token: this.state.phone_number, token_type: "phone_number"});
        }        
        BLOCKv.UserManager.register(payload).then(e => {

            swal({
                title : "Successfully Registered!",
                text: "Thank you for registering, Please login with the credentials you have provided",
                buttons: {
                    'confirm' : true
                }
            }).then( (value) => {
                window.location.hash='/login'
            })
            
        }).catch(err => {

            // Failed! Show error
            swal({
                title: 'Error',
                text: err.message 
            })
  
        })
        

    }

}