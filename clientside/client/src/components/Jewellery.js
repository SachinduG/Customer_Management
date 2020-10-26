import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import Types from '../static/Types';
//import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '90vh',
        display:'flex',
        justifyContent:"center",
        alignItems:"center",

        background:'white'
    },

}));
export default function () {
    const classes = useStyles();
   // const checked = useWindowPosition('header');
    return (
    <div className={classes.root}>
        <ImageCard Type={Types[0]} />
        <ImageCard Type={Types[1]} />
        <ImageCard Type={Types[2]} />
        
    </div>
    );
}
 