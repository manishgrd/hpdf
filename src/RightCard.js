import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const style = {
  height: 300,
  width: 270,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',

};

const RightCard= () => (

<Paper style={style} zDepth={1}>
  <Divider />
  <Card>
    <CardTitle
      title="Who to follow"
      subtitle="* Refresh * View All"
     />
   </Card>
   <Divider/>
  <Card>
    <CardHeader avatar="images/hasura.jpg">
      <RaisedButton label="Follow" backgroundColor = "#2196F3" buttonStyle={{ borderRadius: 20 }} style={{ borderRadius: 20 }}/>
    </CardHeader>
    <CardTitle title="Hasura"subtitle="@HasuraHQ"/>
  </Card>
  <Divider />
  <Card>
    <CardHeader avatar="images/hasuraed.jpg">
      <RaisedButton label="Follow" backgroundColor = "#2196F3" buttonStyle={{ borderRadius: 20 }} style={{ borderRadius: 20 }}/>
    </CardHeader>
    <CardTitle title="Hasura Education"subtitle="@HasuraEd"/>
  </Card>
  <Divider />
  <Card>
    <CardHeader avatar="images/jsa-128.jpg">
      <RaisedButton label="Follow" backgroundColor = "#2196F3" buttonStyle={{ borderRadius: 20 }} style={{ borderRadius: 20 }}/>
    </CardHeader>
    <CardTitle title="Guy Random"subtitle="@random_guy"/>
  </Card>
  <Divider />
  <Card>
    <CardHeader avatar="images/uxceo-128.jpg">
      <RaisedButton label="Follow" backgroundColor = "#2196F3" buttonStyle={{ borderRadius: 20 }} style={{ borderRadius: 20 }}/>
    </CardHeader>
    <CardTitle title="Random Girl"subtitle="@girl_random"/>
  </Card>
  <Divider />
  <br/>
  <br/>
  <Divider/>
  <Card>
    <CardText>
    © 2017 Twitter About Terms Privacy Cookies Marketing Businesses Developers
    </CardText>
  </Card>
  <Divider/>
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
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>

  </Paper>
);

export default RightCard;
