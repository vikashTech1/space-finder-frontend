import React, { Component } from 'react'
import './ConfirmModalComponent.css';

interface ConfirmModalComponentProps{
    show: boolean,
    content: string,
    close: () => void
}

class ConfirmModalComponent extends Component<ConfirmModalComponentProps> {
    render() {
        if(!this.props.show){
            return null
        }else{
            return (
                <div className='modal'>
                    <div className='modalContent'>
                        <h2>You Tried to reserve and ...</h2>
                        <h3 className='modaltext'>{this.props.content}</h3>
                        <button onClick={()=> this.props.close()}> OK, close</button>
                    </div>

                </div>
            )
        }
    }
}

export default ConfirmModalComponent;
