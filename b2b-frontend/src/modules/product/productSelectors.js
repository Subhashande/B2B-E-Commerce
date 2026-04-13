export const selectProducts = (state) => state.products.list || [];
export const selectLoading = (state) => state.product?.loading || false;
export const selectError = (state) => state.product?.error || null;