MainLayout = React.createClass({
  render() {
    return (
      <div className="container">
        <header className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Post List:</a>
          </div>
        </header>
        {this.props.content}
      </div>
    );
  }
});
