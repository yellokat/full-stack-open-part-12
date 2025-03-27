db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
})

db.createCollection('persons')

db.people.insert({ name: 'Seungwon Jang', number: '010-94245870' })
db.people.insert({ name: 'Ian Goodfellow', number: '010-12345678' })