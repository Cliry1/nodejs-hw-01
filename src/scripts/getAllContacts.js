import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const getAllContacts = async () => {
  try {
    return JSON.parse(await fs.readFile(PATH_DB,{encoding:"utf8"}));

  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error);
  }
};

console.log(await getAllContacts());
