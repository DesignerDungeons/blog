const categories =require(`./src/data/categories.json`);

function reformatPosts(post) {
    let category = categories.find(category => category.id === post.category);
    return {
        name: post.name,
        path: post.path,
        url: post.url,
        headlineImage: post.headlineImage,
        cardImage: post.cardImage,
        categoryTitle: category.title,
        category: category.path,
        snipit: post.snipit,
        icon: category.icon,
        date: new Date(post.publishDate)
    };
}

function getData() {
    let data = require('./src/data/headliners.json');
    let posts = [];
    data.map(post => posts.push(reformatPosts(post)));
    posts.sort(function(a, b) {
        let dateA = new Date(a.date), dateB = new Date(b.date);
        return dateB - dateA;
    });
    return posts;
}

exports.createPages = async ({actions: {createPage}}) => {

    let fs = require('fs');

    let posts = getData();
    for (let i in posts) {
        if(posts.hasOwnProperty(i)){
            fs.readFile(`./static/posts/${posts[i].category}/${posts[i].url}`, 'utf8',
                (err, markdown) => posts[i].markdown = markdown);
        }
    }

    createPage({
        path: `/`,
        component: require.resolve('./src/templates/Home.jsx'),
        context: {posts: posts}
    });

    categories.forEach(category => {
        createPage({
            path: `/${category.path}`,
            component: require.resolve('./src/templates/Category.jsx'),
            context: {posts: posts.filter(post => post.category === category.id), category}
        });
    });

    posts.forEach(post => {
        createPage({
            path: `/${post.category}/${post.path}`,
            component: require.resolve('./src/templates/posts/Post.jsx'),
            context: {post}
        });
    });
};
