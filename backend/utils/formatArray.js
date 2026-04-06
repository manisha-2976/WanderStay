module.exports.formatArray = (item) => {

  if (!item) return [];

  if (typeof item === "string") {
    return item
      .split(",")
      .map(a => a.trim().toLowerCase());
  }

  if (Array.isArray(item)) {
    return item.map(a => a.trim().toLowerCase());
  }

  return [];

};