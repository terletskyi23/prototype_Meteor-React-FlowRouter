FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {content: <PostsList/>});
  }
});

FlowRouter.route('/:postId', {
  action(params) {
    ReactLayout.render(MainLayout, {content: <BlogPost {...params} />});
  }
});
