export const selectProducts = (state) => {
  const products = state.products.list || [];
  const category = state.products.selectedCategory;
  if (category) {
    return products.filter((p) => p.category === category);
  }
  return products;
};

export const selectCategories = (state) => state.products.categories || [];
export const selectSelectedCategory = (state) => state.products.selectedCategory;
export const selectLoading = (state) => state.products.loading || false;
export const selectError = (state) => state.products.error || null;