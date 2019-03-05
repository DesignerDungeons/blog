import React from 'react';
import ReactMarkdown from "react-markdown";
import Layout from '../../components/Layout';
import './post.css';

export default ({pageContext: {post}}) =>
    (<Layout>
        <div className="shadowed-container post">
            <ReactMarkdown escapeHtml={false} source={post.markdown}/>
        </div>
    </Layout>);
