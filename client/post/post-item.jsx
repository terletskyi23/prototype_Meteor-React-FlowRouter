PostItem = React.createClass({
  title(){
    return this.props.post.title
  },
  domain(){
    return this.props.post.url
  },
  render() {
    return (
      <div className="post">
        <div className="post-content">
          <h3><a href={this.domain()}>{this.title()}</a><span>{this.domain()}</span></h3>
        </div>
        <a href={"/posts/" + this.props.post._id} class="discuss btn btn-default">Discuss</a>
      </div>
    );
  }
});
