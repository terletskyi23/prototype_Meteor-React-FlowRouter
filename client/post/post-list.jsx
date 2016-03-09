PostsList = React.createClass({
  getPostData(){
    var postsData = [
      {
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
      },
      {
        title: 'Meteor',
        url: 'http://meteor.com'
      },
      {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
      }
    ];
    return postsData;
  },
  render() {
    return (
      <div id="main" className="row-fluid">
        <h3>Pooooooossssssstttttttssss</h3>
        {
          this.getPostData().map(function(el){
            return <PostItem post={el}/>
          })
        }
      </div>
    );
  }
});
