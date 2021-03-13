import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '윤빈',
  'birthday' : '931006',
  'gender' : '남자',
  'job' : '신입'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '윤송',
    'birthday' : '931006',
    'gender' : '남자',
    'job' : '시니어'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '윤산',
    'birthday' : '931006',
    'gender' : '남자',
    'job' : '대표'
  }
]

function App() {
  return (
    <div>
      {
        customers.map( c => {
          return (
            <Customer
              key = {c.id}
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
            />
          );
        }) 
      }
    </div>
  );
}

export default App;
