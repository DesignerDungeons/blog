import React, {Component} from 'react';
import ReactMarkdown from "react-markdown";
import Layout from '../../components/Layout';
import './post.css';
import {withPrefix} from 'gatsby'

class Post extends Component {
    constructor(props){
        super(props);
        this.state ={
            markdown: []
        }
    }

    componentWillMount(){
        let post = this.props.pageContext.post;
        let path = withPrefix(`/posts/${post.category}/${post.url}`);
        fetch(path)
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
            <Layout>
                <div className="shadowed-container post">
                    <ReactMarkdown escapeHtml={false} source={this.state.markdown}/>
                </div>
            </Layout>
        )
    }
}

export default Post

