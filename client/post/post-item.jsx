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
          <h3><a href={this.domain()}>{this.title()}</a><span>domain</span></h3>
        </div>
      </div>
    );
  }
});
