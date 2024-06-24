import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB,JSON.stringify([]));
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error);
  }
};

removeAllContacts();
