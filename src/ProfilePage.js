import React, { Component } from 'react';
import turds from "./people.json"


class ProfilePage extends Component {

  constructor(props){
    super(props)

    this.state = {
      turds: []
    }
  }

// lifecycle Methods can be used for allowing data to be passed once the component is ready
 componentDidMount(){
   fetch('https://www.turing.io/graduates.json?_=1502323012239')
   .then(res => res.json())
   .then((results) => this.setState({ turds: results }));
 }

  addPerson = (people) => {
    this.state.turds = people;
    this.setState({turds: this.state.turds})
  }


  render() {
    return (
      <div className="App">
        <h1>From Profile Page</h1>
        {this.state.turds.map((turd, i) =>  <Profile person={turd} key={i}/>)}
        <button onClick={this.addPerson}>Add</button>
      </div>
    );
  }
}

//  Functional components for component types like Square that only consist of a render method.
function Profile (props) {
  return (
    <div>
      <h3>{props.person.title}</h3>
      <img src={props.person.field_picture.src}/>
    </div>
  )
}

export default ProfilePage;
