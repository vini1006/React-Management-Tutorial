import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root : {
    width: '100%',
    overflowX : "auto"
  },
  myTable : {
    minWidth : 1080
  }
})

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
  const classes = styles();
  return (
    <Paper className={classes.root} >
      <Table className={classes.myTable}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map( c => {return (<Customer key = {c.id} id = {c.id} image = {c.image} name = {c.name} birthday = {c.birthday} gender = {c.gender} job={c.job}/>);}) }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
