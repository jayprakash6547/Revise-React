import React,{Component} from 'react';

class Welcome extends
Component{
    render(){
        return <h1>Hello class Component {this.props.name} a.k.a {this.props.designation}</h1>
    }
}
export default Welcome;