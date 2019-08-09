import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService'
import './LoginForm.css'

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        passwordConf: ''
    };

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login(this.state);
            // Let <App> know a user has signed up!
            this.props.handleSignupOrLogin();
            // Successfully signed up - show GamePage
            this.props.history.push('/');
        } catch (err) {
            // Use a modal or toast in your apps instead of alert
            this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.email && this.state.password === this.state.passwordConf);
    }

    render() {
        return (
          <div className="LoginForm-box" >
            <p>Log In</p>
            <form  onSubmit={this.handleSubmit} >
              <div>
                <div >
                  <input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                </div>
              </div>
              <div>
                <div>
                  <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                </div>
              </div>
              <div>
                <div>
                  <button>Log In</button>&nbsp;&nbsp;&nbsp;
                  <Link to='/'>Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        );
      }
    }
    
export default LoginForm;

