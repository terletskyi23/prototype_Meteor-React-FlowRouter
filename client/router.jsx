FlowRouter.route('/', {
  action() {
    name: 'postsList',
    ReactLayout.render(MainLayout, {content: <PostsList/>});
  }
});

FlowRouter.route('/posts/:_id', {
  action(params) {
    name: 'postPage',
    ReactLayout.render(MainLayout, {content: <PostPage/>});
  }
});
