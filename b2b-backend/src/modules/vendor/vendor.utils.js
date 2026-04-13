// src/modules/vendor/vendor.utils.js

export const selectBestVendor = (vendors) => {
  return vendors
    .filter(v => v.isAvailable)
    .sort((a, b) => b.capacity - a.capacity)[0];
};