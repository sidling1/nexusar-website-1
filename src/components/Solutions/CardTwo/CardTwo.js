import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './CardTwo.module.css';
import './CardTwo.module.css'

const CardTwo = (props) => {
  const { heading, highlights, content,image } = props;

  return (
    <div className="mainblock">
      <div className="image">
        <img alt="card-2" src={image} />
      </div>
      <div className="content">
        <h3 className="bigHeader" style={{color:"white"}}>{heading}</h3>
        <p style={{fontSize: "21px", color: "white"}}>{highlights}{content}</p>
        <button>{heading}</button>
      </div>
    </div>
  );
};

export default CardTwo;
