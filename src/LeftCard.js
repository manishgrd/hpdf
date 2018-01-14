import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

const style = {
  height: 400,
  width: 300,
  margin: 5,
  textAlign: 'left',
  display: 'inline-block',

  largeIcon: {
    width: 60,
    height: 60,
  },

  large: {
    width: 60,
    height: 60,
    padding: 0,
  },
};

const avtstyle = {
  margin:5
};

const LeftCard= () => (

<Paper style={style} zDepth={3}>
  <Card>
    <CardMedia>
      <img src="images/bkgd.jpg" alt="" />
    </CardMedia>
    <Avatar src="images/manish.jpg" style={avtstyle} />
    <CardTitle title="Manish Sharma"subtitle="@manish_sharma">
    </CardTitle>
    <CardActions>
      <FlatButton label="Tweets (29)" primary="true"/>
      <FlatButton label="Following (14)" primary="true"/>
      <FlatButton label="Followers(31)" primary="true"/>
    </CardActions>
  </Card>
  <br/>
  <br/>
  <Divider/>
  <Card>
    <CardTitle
      title="# Trends for you"
      primary="true"
     />
   </Card>
   <Divider/>
  <Card>
    <CardHeader
      title="#INDvsSL"
      subtitle="4,790 Tweets"
     />
   </Card>
   <Divider/>
  <Card>
    <CardHeader
      title="#ManmohanSingh"
      subtitle="759 people are tweeting about this"
     />
   </Card>
   <Divider/>
  <Card>
    <CardHeader
      title="#NaPakDinner"
      subtitle="14.9K Tweets"
     />
   </Card>
   <Divider/>
  <Card>
    <CardHeader
      title="@AadharCard"
      subtitle="471 are tweeting about this"
     />
   </Card>
   <Divider/>
  <Card>
    <CardHeader
      title="#HasuraEducation"
      subtitle="@manish_sharma is tweeting about this"
     />
   </Card>
   <Divider/>
  <Card>
    <CardHeader
      title="#VirushkaWedding"
      subtitle="1983 Tweets"
     />
   </Card>
   <Divider/>
  <Card>
    <CardHeader
      title="#SadMondays"
      subtitle="44 Tweets"
     />
   </Card>
   <Divider/>
  <Card>
    <CardHeader
      title="#ChristmasEve"
      subtitle="346 Tweets"
     />
   </Card>

   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
  </Paper>

);

export default LeftCard;
