import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);

    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(
        PATH_DB,
        JSON.stringify(contacts, undefined, 2),
        'utf-8',
      );
    } else {
      console.log('No contacts to remove.');
    }
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
