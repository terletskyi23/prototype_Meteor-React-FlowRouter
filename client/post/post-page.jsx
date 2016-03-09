PostPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var handle = Meteor.subscribe('post', FlowRouter.getParam('_id'));

    return {
      ready: handle.ready(),
      post: Posts.findOne({_id: FlowRouter.getParam('_id')}),
    }
  },

  render() {
    return (
      <div>
        return <PostItem key={this.post._id} post={this.post}/>
      </div>
    )
  }
});
