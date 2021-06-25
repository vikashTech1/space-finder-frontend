import React, { SyntheticEvent } from 'react';
import { User } from '../model/model';
import { AuthService } from '../services/AuthService';
import history from '../utils/History'

interface loginProps {
    authService: AuthService,
    setUser: (user: User) => void
}

interface LoginState {
    userName: string,
    password: string,
    loginAttempted: boolean,
    loginSuccesfull: boolean
}

interface CustomEvent {
    target: HTMLInputElement
}

export class Login extends React.Component<loginProps, LoginState>{

    state: LoginState= {
        userName: "",
        password: "",
        loginAttempted: false,
        loginSuccesfull: false
    }

    private setUserName(event: CustomEvent){
        this.setState({userName: event.target.value})
    }

    private setPassword(event: CustomEvent){
        this.setState({password: event.target.value})
    }

    private async handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        this.setState({loginAttempted: true});
        const result= await this.props.authService.login(
            this.state.userName,
            this.state.password
        )
        if(result){
            this.setState({loginSuccesfull: true});
            this.props.setUser(result);
            history.push('/profile');
        } else {
            this.setState({loginSuccesfull: false});
        }
    }
    render() {
        let loginMessage: any;
        if(this.state.loginAttempted) {
            if(this.state.loginSuccesfull){
                loginMessage= <label>Login succesful</label>
            } else {
                loginMessage= <label>Login Failed</label>
            }
        }
        return(
            <div>
                <h2>Please login...</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input value={this.state.userName} onChange= {e=> this.setUserName(e)}/><br />
                    <input value={this.state.password} type='password' onChange= {e=> this.setPassword(e)}/><br />
                    <input type='submit'value='Submit'/>
                </form>
                {loginMessage}
            </div>
        )
    }
}