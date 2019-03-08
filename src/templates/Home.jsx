import React from 'react';
import './home.css';
import Headliner from './Headliner';
import Layout from "../components/Layout";
import Search from "./Search";

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {searchString: "", posts:this.props.pageContext.posts}
    }

    handleSearchChange(value){
        this.setState({searchString: value});
        this.setState({posts: this.filterPosts(this.props.pageContext.posts, value)});
    }

    filterPosts(posts, search){

        if(!search){
            return posts;
        }

        let filteredPosts = [];

        for(let i=0; i< posts.length; i++){
            let post = posts[i];
            if(post.markdown && (post.markdown.indexOf(search) > 0)){
                filteredPosts.push(post)
            }
        }

        return filteredPosts;
    }

    render(){
        return (<Layout >
            <Search searchString={this.state.searchString} updateFunction={this.handleSearchChange.bind(this)}/>
            {this.state.posts.map(post => (<Headliner post={post} key={post.url}/>))}
        </Layout>);
    }

}


export default Home;

