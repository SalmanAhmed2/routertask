import React,{useState} from 'react';
import '../App.css';
import { BrowserRouter as Router,useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function Home(props) {
    let history = useHistory();
    const handleDelete =(item, index)=>{
      const delArra =   props.items.filter((itemVal, id) =>  id !== index);
        props.itemsList(delArra)
    }

    const handleEdit=(item)=>{
        history.push('/edit',{
          item
        })
    }
        const handleDetails=()=>{
        history.push('/details')
    }
    return (
    <Router>
        <div className="HomePage">
        <h1>Home Page</h1>

        <Button onClick={()=> history.push('/form')}
        variant="contained"
        color="primary">
          Create Task
          </Button>
          <div className="cardClass">
            {props.items.map((item, index)=>
              <>
              <table className="table">
                <thead>
                <tr className="tableheadrow">
                <th className="tableDATA">Name</th>
                <th className="tableDATA">Date</th>
                <th className="tableDATA">Action</th>
              </tr>
                </thead>
                <tbody>
                  <tr key={index} className="tablerow">
                <td>{item.title}</td>
                <td>{item.date}</td>
              <td>
              <CreateIcon onClick={() => handleEdit(item)} />
             <DeleteIcon onClick={()=>handleDelete(item, index)} />
             <ArrowForwardIosIcon onClick={() => history.push(`/details/${item.id}`)}/>             
              </td>
              </tr>
              {/* <tr> <td><hr/></td><td><hr/></td> <td><hr/></td></tr> */}
              
                </tbody>
              </table>
              </>
              )}
            </div>
          
         </div>
            
        </Router >
    )
}
export default Home;
