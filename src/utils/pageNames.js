const pageNames = (key) => {
  const upperCase = key.charAt(0).toUpperCase() + key.slice(1);
  const result = upperCase.replace(/([a-z])([A-Z])/g, "$1 $2");
  return result;
};

export default pageNames;
