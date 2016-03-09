PostsList = React.createClass({
  //also need
  mixins: [ReactMeteorData],
  // this is the special function for subscribe on publication
  getMeteorData() {
    var handle = Meteor.subscribe('posts');

    return {
      ready: handle.ready(),
      posts: Posts.find()
    }
  },
  render() {
    return (
      <div id="main" className="row-fluid">
        <h3>Posts:</h3>
        {
          this.data.posts.map(function(el){
            return <PostItem post={el}/>
          })
        }
      </div>
    );
  }
});
