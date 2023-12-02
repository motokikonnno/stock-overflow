export const checkIfEnglish = (text: string) => {
  return /^[A-Za-z\s]+$/.test(text);
};
