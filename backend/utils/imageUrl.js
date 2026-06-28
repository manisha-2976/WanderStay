const getOptimizedImageUrl = (url, width = 500) => {
  if (!url) return null;

  const transformation = `f_auto,q_auto:good,w_${width},c_fill,ar_4:3`;

  return url.replace("/upload/", `/upload/${transformation}/`);
};

module.exports = { getOptimizedImageUrl };
