import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';

class LoginPage extends Component {
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/restaurants')
    } catch (err) {
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="LoginPage">
        <h1 style={{
          textAlign: 'center',
          fontFamily: 'Monoton, cursive',
          textShadow: '1px 1px',
          color: 'pink'

        }}>
          LOGIN
            </h1>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button style={{
                color: 'pink',
                border: 'transparent',
                fontSize: '25px'
              }}>Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/' style={{
                color: 'pink'
              }}>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;