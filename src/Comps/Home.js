import React from 'react';
import '../App.css';
import {useHistory, Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



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
   
    return (
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
                <td><Link className="links">{item.title}</Link></td>
                <td><Link className="links" >{item.date}</Link></td>
              <td>
              <CreateIcon className="actions" onClick={() => handleEdit(item)} />
             <DeleteIcon className="actions" onClick={()=>handleDelete(item, index)} />
             <ArrowForwardIosIcon className="actions" onClick={()=>history.push(`/details/${item.id}`)}/>   
              </td>
              </tr>
          </tbody>
        </table>
              </>
              )}
            </div>
          
         </div>
    )
}
export default Home;
