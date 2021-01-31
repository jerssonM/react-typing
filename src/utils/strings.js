import faker from 'faker';

export const generateRandomText = (numberOfCharacters = 200) =>
  faker.random.words(numberOfCharacters);

export const splitText = (text, separator = '') => text.split(separator);
