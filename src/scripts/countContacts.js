import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  return JSON.parse(await fs.readFile(PATH_DB,{encoding:"utf8"})).length;
};

console.log(await countContacts());
