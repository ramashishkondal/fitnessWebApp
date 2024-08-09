export const extractAlphabets = (str: string) => {
  // Use a regular expression to match all alphabetic characters
  const alphabetOnly = str.match(/[a-zA-Z]/g);

  // Join the matched characters into a single string
  return alphabetOnly ? alphabetOnly.join('') : '';
};

export const ll = () => {
  console.log('====================================');
  console.log('');
  console.log('====================================');
};
