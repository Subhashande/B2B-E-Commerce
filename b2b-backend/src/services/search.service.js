// src/services/search.service.js

export const buildSearchQuery = (query) => {
  const filter = {};

  if (query.keyword) {
    filter.name = {
      $regex: query.keyword,
      $options: "i",
    };
  }

  if (query.minPrice || query.maxPrice) {
    filter.price = {};
    if (query.minPrice) filter.price.$gte = Number(query.minPrice);
    if (query.maxPrice) filter.price.$lte = Number(query.maxPrice);
  }

  return filter;
};