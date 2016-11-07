export const currentCategoryId = state =>
  Object.keys(state.category.categories).find(key =>
    state.category.categories[key].slug[state.lang] === state.route.params.slug
  );

export const currentCategoryProducts = (state, getters) => {
  const id = getters.currentCategoryId;
  // get array of products in category
  return state.product.categories[id];
};
