import React, {Component} from 'react';
import Headliner from './Headliner';
import CategoryContainer from './CategoryContainer';

class Home extends Component {

    constructor(props){
        super(props);
        this.state ={
            md: ""
        }
    }

    render() {
        let topic = {};
        if(this.props.topics){
            topic = this.props.topics[0];
        }
        return (
            <div className='container'>
                <Headliner backgroundImage="./image.jpg"
                           topic={topic} snipit={this.state.md}/>
                <CategoryContainer categories={this.props.topics}/>
            </div>
        )
    }
}

export default Home;