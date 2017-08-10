import React, { Component } from 'react';
import turds from "./people.json"


class ProfilePage extends Component {

  constructor(props){
    super(props)

    this.state = {
      turds: []
    }
  }

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

// class Profile extends Component {
//   render() {
//     return (
//       <div>
//         <h3>{this.props.person.title}</h3>
//         <img src={this.props.person.field_picture.src}/>
//       </div>
//     )
//   }
// }

const Profile = (props) => {
  return (
    <div>
      <h3>{props.person.title}</h3>
      <img src={props.person.field_picture.src}/>
    </div>
  )
}

export default ProfilePage;
