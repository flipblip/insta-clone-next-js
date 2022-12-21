// import faker from '@faker-js/faker';
// import { uuid } from 'uuidv4';
import { v4 as uuid} from 'uuid';
import { useEffect, useState } from 'react';

const { faker } = require('@faker-js/faker')
// const { uuid } = require('uuidv4');
// const { v4: uuidv4} = require('uuid');

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

    useEffect(() =>{
      const suggestions = [...Array(20)].map((_, i) => ({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
      }));

      console.log(suggestions)
      setSuggestions(suggestions);
    }, []);

  return (
    <div>
      <h1>Hellow</h1>
    </div>
  )
}

export default Stories;