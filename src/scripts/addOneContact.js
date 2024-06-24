import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  try {
    let data = JSON.parse(await fs.readFile(PATH_DB,{encoding:"utf8"}));
    data.push(createFakeContact());
    await fs.writeFile(PATH_DB,JSON.stringify(data));
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error);
  }

};

addOneContact();
