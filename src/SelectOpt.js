import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardText, CardTitle} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

     const dstyles = {
         width: 240,
          };
/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
 class SelectOpt extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <Card>
        <CardTitle title="Search Filters"/>
        </Card>
       <Divider/>
        <SelectField
          floatingLabelText="People"
          value={this.state.value}
          onChange={this.handleChange}
          style={dstyles.width}
        >
          <MenuItem value={1} primaryText="From Anyone" />
          <MenuItem value={2} primaryText="People you follow" />
        </SelectField>
        <br />
        <SelectField
          floatingLabelText="Location"
          value={this.state.value}
          onChange={this.handleChange}
          style={dstyles.width}
        >
          <MenuItem value={1} primaryText="Near you" />
          <MenuItem value={2} primaryText="Anywhere" />
        </SelectField>
        <br />
        <SelectField
          floatingLabelText="Language"
          value={this.state.value}
          onChange={this.handleChange}
          style={dstyles.width}
        >
          <MenuItem value={1} primaryText="English" />
          <MenuItem value={2} primaryText="Hindi" />
          <MenuItem value={3} primaryText="Tamil" />
          <MenuItem value={4} primaryText="Bengali" />
          <MenuItem value={5} primaryText="Gujarati" />
        </SelectField>
        <br />
        <br />
        <br />
        <Card>
        <CardTitle title="Related Searches"/>
        <CardText>
      Aadhar UIDAI Narendra Modi Rahul Gandhi
      HPDF HeroISL INDvsSL Virat Kohli
      Gujarat Elections
        </CardText>
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
       <Divider/>
      </div>
    );
  }
}

export default SelectOpt;
