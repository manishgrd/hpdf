import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import EmailIcon from 'material-ui/svg-icons/communication/email'
import MessageIcon from 'material-ui/svg-icons/communication/message'
import LocIcon from 'material-ui/svg-icons/communication/location-on'
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh'
import FavIcon from 'material-ui/svg-icons/action/favorite-border'
import SearchIcon from 'material-ui/svg-icons/action/search'
import GifIcon from 'material-ui/svg-icons/action/gif'
import ImgIcon from 'material-ui/svg-icons/image/photo'
import PollIcon from 'material-ui/svg-icons/social/poll'
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';

const style = {
  height: 400,
  width: 550,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
};



const FeedCard= () => (

<Paper style={style} zDepth={1}>
<Divider />
<AppBar style={{backgroundColor:"#FAFAFA"}}
        iconElementLeft={
              <Avatar src="images/manish.jpg" alt="" />
        }
       iconElementRight={
             <RaisedButton label="Tweet" backgroundColor = "#2196F3" buttonStyle={{ borderRadius: 20 }} style={{ borderRadius: 20 }}/>
                        }

  />
<Divider />
     <TextField hintText="****Whats happening ?" multiLine={true} rows={2} fullWidth={true}/>
     <Card>
     <CardActions>
     <IconButton  tooltip="Add a pic" tooltipPosition="top-center" > <ImgIcon /> </IconButton>
     <IconButton  tooltip="Add a GIF" tooltipPosition="top-center" > <GifIcon /> </IconButton>
     <IconButton  tooltip="Create a poll" tooltipPosition="top-center" > <PollIcon /> </IconButton>
      <IconButton  tooltip="Share Location" tooltipPosition="top-center" > <LocIcon /> </IconButton>
    </CardActions>
  </Card>
<Divider />
<FlatButton label="SEE  NEW  TWEETS " fullWidth={true} />
  <Card>
    <CardHeader
      title="Manish Sharma"
      subtitle="@manish_sharma"
      avatar="images/manish.jpg"
      showExpandableButton={true}
    />
    <CardText>
      Completed Hasura HPDF initial task. Feeling amazed & scary at the same time.
       So much to learn !! #hpdf #material-ui
    </CardText>
    <CardActions>
      <FlatButton label="34" tooltip="Reply" tooltipPosition="top-right"  icon={<MessageIcon />}/>
      <FlatButton label="9" tooltip="Retweet" tooltipPosition="top-right" icon={<RefreshIcon />}/>
      <FlatButton label="67" tooltip="Likes" tooltipPosition="top-right" icon={<FavIcon />} />
      <IconButton  tooltip="Direct Message" tooltipPosition="top-right" > <EmailIcon /> </IconButton>
    </CardActions>
  </Card>
  <Divider />
  <Card>
    <CardHeader
      title="Narendra Modi"
      subtitle="@narendramodi"
      avatar="images/nmodi.jpg"
      showExpandableButton={true}
    />
    <CardText>
      I congratulate Rahul Ji on his election as Congress President.
      My best wishes for a fruitful tenure. @OfficeOfRG
    </CardText>
    <CardActions>
    <FlatButton label="348" tooltip="Reply" tooltipPosition="top-right"  icon={<MessageIcon />}/>
    <FlatButton label="9.8K" tooltip="Retweet" tooltipPosition="top-right" icon={<RefreshIcon />}/>
    <FlatButton label="67K" tooltip="Likes" tooltipPosition="top-right" icon={<FavIcon />} />
    <IconButton  tooltip="Direct Message" tooltipPosition="top-right" > <EmailIcon /> </IconButton>
    </CardActions>
  </Card>
  <Divider />
  <Card>
    <CardHeader
      title="Aadhaar"
      subtitle="@UIDAI"
      avatar="images/uid.jpg"
      showExpandableButton={true}
    />
    <CardText>
     Aadhaar is worlds largest digital identity program.
     About 8 Cr. Aadhaar have been generated from Nov 30,
     2016 to Nov 30, 2017. #AadhaarFacts
    </CardText>
    <CardMedia
      overlay={<CardTitle title="Aadhaar @UIDAI" subtitle=" #AadhaarFacts " />}
    >
      <img src="images/uiddata.jpg" alt="" />
    </CardMedia>
    <CardActions>
    <FlatButton label="348" tooltip="Reply" tooltipPosition="top-right"  icon={<MessageIcon />}/>
    <FlatButton label="9.8K" tooltip="Retweet" tooltipPosition="top-right" icon={<RefreshIcon />}/>
    <FlatButton label="67K" tooltip="Likes" tooltipPosition="top-right" icon={<FavIcon />} />
    <IconButton  tooltip="Direct Message" tooltipPosition="top-right" > <EmailIcon /> </IconButton>
    </CardActions>
  </Card>
  </Paper>
);

export default FeedCard;
