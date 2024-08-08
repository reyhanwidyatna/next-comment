export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? '' : 'Invalid email format';
};

export const validateField = (value, text) => {
  return value ? '' : `${text} is required`;
};
