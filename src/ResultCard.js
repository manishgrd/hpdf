import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import EmailIcon from 'material-ui/svg-icons/communication/email'
import MessageIcon from 'material-ui/svg-icons/communication/message'
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh'
import FavIcon from 'material-ui/svg-icons/action/favorite-border'
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';

const ResultCard= () => (
<div>
  <Card>
    <CardTitle
      title="TOP NEWS"
      textAlign='left'
    />
  </Card>
  <Divider />
  <Card>
    <CardHeader
      title="The Indian Express"
      subtitle="@IndianExpress"
      avatar="images/ad1.jpg"
      showExpandableButton={true}
    />
    <CardText>
      Government extends deadline to link Aadhaar with,
      here is the last date for linking others schemes, services.
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
      title="News18 India"
      subtitle="@news18ind"
      avatar="images/adr1.jpg"
      showExpandableButton={true}
    />
    <CardText>
    The central board of direct taxes on friday extended the deadline to link PAN
    with 12-digit biometric Aadhar id to March 2018. However........
    </CardText>
    <CardMedia
      overlay={<CardTitle title="News18 India" subtitle="#Aadharlinking" />}
    >
      <img src="images/adr1.jpg" alt="" />
    </CardMedia>
    <CardActions>
    <FlatButton label="348" tooltip="Reply" tooltipPosition="top-right"  icon={<MessageIcon />}/>
    <FlatButton label="9.8K" tooltip="Retweet" tooltipPosition="top-right" icon={<RefreshIcon />}/>
    <FlatButton label="67K" tooltip="Likes" tooltipPosition="top-right" icon={<FavIcon />} />
    <IconButton  tooltip="Direct Message" tooltipPosition="top-right" > <EmailIcon /> </IconButton>
    </CardActions>
  </Card>
  <Divider />
  <FlatButton label="SEE  MORE RESULTS " fullWidth={true} />
  <br/>
  </div>
);

export default ResultCard;
