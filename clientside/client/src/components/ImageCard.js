import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import { Button } from './Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    background: 'transparent',
    margin: '10px',
    alignitems: "center",
    aligncontent: 'center',
    display: 'flex',
    flexflow: 'column',
  },
  media: {
    height: 400,
    
    },
   
  
  title:{
      fontFamily:"Nunito",
      fontWeight:"bold",
      fontSize:'2rem',
      color: 'rgb(218, 143, 5)',
  },
  desc:{
    fontFamily:"Nunito",
    
    fontSize:'1.2rem',
    color:'black',

  },
  button:{
    position:'center',
    alignItems:'center',
    aligncontent: 'center',
    marginRight:'30px',
  }

});

export default function ImageCard({ Type,checked }) {
  const classes = useStyles();

  return (
    //  <Collapse in={checked} {...(checked ? { timeout: 100} : {})}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Type.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
           gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
            >
            {Type.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
          {Type.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

      <Link className={classes.link}
              to={Type.link}  
                              
              >
                
              </Link>
            
          
          <center><Button  buttonStyle='btn--outline1' buttonSize='btn--large1' className={classes.button} >
          {Type.button}
        </Button>
        </center>
      </CardActions>
    </Card>
    //</Collapse>
  );
}