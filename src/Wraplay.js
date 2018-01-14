import React from 'react';
import Paper from 'material-ui/Paper';
import SelectOpt from './SelectOpt';
import ResultCard from './ResultCard';
import RelatedCard from './RelatedCard';

const style = {
    height: 600,
    width: 270,
    margin: 5,
    textAlign: 'center',
    display: 'inline-block',
     };

const style2 = {
       height: 600,
       width: 500,
       margin: 5,
       textAlign: 'left',
       display: 'inline-block',
     };

     const style3 = {
       height: 600,
       width: 300,
       margin: 5,
       textAlign: 'left',
       display: 'inline-block',
     };


const Wraplay = () => (
  <div>
  <Paper style={style} zDepth={3}>
  <SelectOpt />
  </Paper>
  <Paper style={style2} zDepth={3}>
  <ResultCard />
  </Paper>
  <Paper style={style3} zDepth={3}>
  <RelatedCard />
  </Paper>
  </div>
);

export default Wraplay;
