import React, {Component} from 'react';
import ReactMarkdown from "react-markdown";
import ShareButtons from './ShareButtons';
import './post.css';
import {buildGithubUrl} from "../ResponseMapper";

export class Post extends Component {

    constructor(props){
        super(props);
        this.state ={
            markdown: []
        }
    }

    componentDidMount(){
        fetch(buildGithubUrl("posts/" + this.props.post.url))
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.text();
            })
            .then(md => this.setState({markdown: md}))
            .catch(error => console.warn(error));
    }

    render() {
        return (
            <div>
                <ShareButtons url={this.props.post.shareUrl} comment={this.props.post.shareComment}/>
                <div className="shadowed-container post">
                    <ReactMarkdown escapeHtml={false} source={this.state.markdown}/>
                </div>
            </div>
        )
    }
}