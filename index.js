const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());

let id = 15;

const users = [
  {
    id: 1,
    displayImage: 'https://picsum.photos/200/300',
    name: 'John Doe',
    email: 'john.doe@foo.com',
    mobile: '0999132412',
  },
  {
    id: 2,
    displayImage: '',
    name: 'Jane Doe',
    email: 'jane.doe@bar.com',
    mobile: '09231212481',
  },
  {
    id: 3,
    displayImage: 'https://picsum.photos/200/300',
    name: 'Mario Speedwagon',
    email: 'mario.speedwagon@foo.com',
    mobile: '09172321423',
  },
  {
    id: 4,
    displayImage: '',
    name: 'Petey Cruiser',
    email: 'petey.cruiser@bar.com',
    mobile: '09172333423',
  },
  {
    id: 5,
    displayImage: '',
    name: 'Anna Sthesia',
    email: 'anna.sthesia@baz.com',
    mobile: '09172327553',
  },
  {
    id: 6,
    displayImage: '',
    name: 'Paul Molive',
    email: 'paul.molive@sham.poo',
    mobile: '09173232755',
  },
  {
    id: 7,
    displayImage: '',
    name: 'Anna Mull',
    email: 'anna.mull@bab.com',
    mobile: '09173323755',
  },
  {
    id: 8,
    displayImage: '',
    name: 'Gail Forcewind',
    email: 'gail.forcewind@jedi.sith',
    mobile: '09173321255',
  },
  {
    id: 9,
    displayImage: '',
    name: 'Paige Turner',
    email: 'paige.turner@bar.bz',
    mobile: '09173442255',
  },
  {
    id: 10,
    displayImage: '',
    name: 'Bob Frapples',
    email: 'bob.frapples@bad.br',
    mobile: '09173442255',
  },
  {
    id: 11,
    displayImage: 'https://picsum.photos/200/300',
    name: 'Walter Melon',
    email: 'walter.melon@brr.br',
    mobile: '09173478955',
  },
  {
    id: 12,
    displayImage: '',
    name: 'Nick R. Bocker',
    email: 'nick.bocker@brr.br',
    mobile: '09173675955',
  },
  {
    id: 13,
    displayImage: 'https://picsum.photos/200/300',
    name: 'Barb Ackue',
    email: 'barb.ackue@stick.in',
    mobile: '09221675955',
  },
  {
    id: 14,
    displayImage: '',
    name: 'Buck Kinnear',
    email: 'buck.kinnear@nn.nom',
    mobile: '09221535955',
  },
  {
    id: 15,
    displayImage: 'https://picsum.photos/200/300',
    name: 'Greta Life',
    email: 'greta.life@fr.rl',
    mobile: '09222425955',
  },
];

app.get('/api/users', (req, res) => res.send(users));

app.post('/api/users', (req, res) => {
  const {
    displayImage,
    name,
    email,
    mobile,
  } = req.body;

  ++id;

  users.push({
    id,
    displayImage,
    name,
    email,
    mobile,
  });

  res.status(201)
     .send(users[id - 1]);
});

app.put('/api/users/:id', (req, res) => {
  const user = users.find(o => o.id === parseInt(req.params.id));

  const {
    displayImage,
    name,
    email,
    mobile,
  } = req.body;

  user['displayImage'] = displayImage;
  user['name'] = name;
  user['email'] = email;
  user['mobile'] = mobile;

  res.send(user);
});

app.listen(4000, () => console.log('Listening to port 4000.'));
