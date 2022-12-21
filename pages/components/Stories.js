// import faker from '@faker-js/faker';
// import { uuid } from 'uuidv4';
import { v4 as uuid} from 'uuid';
import { useEffect, useState } from 'react';
import Story from './Story';

const { faker } = require('@faker-js/faker')
// const { uuid } = require('uuidv4');
// const { v4: uuidv4} = require('uuid');

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

    useEffect(() =>{
      const suggestions = [...Array(50)].map((_, i) => ({
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
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-20
    border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
      {suggestions.map((profile) =>(
        <Story
          key={profile.userId}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories;