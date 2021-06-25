import React, { Component } from 'react';
import vikashImg from '../../assets/vikash.jpeg'
import './SpaceComponent.css';

interface SpaceComponentProps{
    spaceId: string,
    name: string,
    location: string,
    photoUrl?: string,
    reserveSpace: (spaceId: string)=> void
}

export default class SpaceComponent extends Component<SpaceComponentProps> {
    
    private renderImage(){
        if(this.props.photoUrl){
            return <img src={this.props.photoUrl} alt=''/>
        }
        else{
            return <img src={vikashImg} alt=''/>
        }
    }
    
    render() {
        return (
            <div className='spaceComponent'>
                {this.renderImage()}
                <label className='name'>{this.props.name}</label>
                <label className='spaceId'>{this.props.spaceId}</label>
                <label className='location'>{this.props.location}</label>
                <button onClick={()=>this.props.reserveSpace(this.props.spaceId)}>Reserve</button>
            </div>
        )
    }
}
