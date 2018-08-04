import React from 'react';
import ReactMarkdown from 'react-markdown';

class BlogPost extends React.Component {

	constructor(props){
		super(props);
		this.state = {markdown: ''};
	}

	componentWillMount(){
		fetch(this.props.post.url)
			.then(response => response.text())
			.then(text => this.setState({
				markdown: text
			}))

	}

	render(){
		return (
			<div className="post">
				<ReactMarkdown source={this.state.markdown}/>
			</div>
		);
	}
}

export default BlogPost;