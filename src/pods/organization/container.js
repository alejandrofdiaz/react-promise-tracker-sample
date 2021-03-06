import React, { Component } from 'react';
import { OrganizationComponent } from './component'
import { fetchMembers } from '../../rest-api'
import { trackPromise} from 'react-promise-tracker';

export class OrganizationContainer extends Component {

  constructor(props) {
    super(props);  

    this.state = {
      members : [],
    }    
  }

  fetchTeamMembers = () => {
    trackPromise(fetchMembers().then((members) =>
      this.setState({
        members: members,
      }))
    );
  }  

  render() {
    return (
      <OrganizationComponent
        members={this.state.members}
        fetchMembers={this.fetchTeamMembers}
      />
    );
  }
}

export default OrganizationContainer;
