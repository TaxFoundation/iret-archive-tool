import React, { Component } from 'react'

const Pub = (pub) => {
  return (
    <li>
      {pub.file ? <a href={`https://files.taxfoundation.org/iret/${pub.file}`} target="_blank" rel="noopener noreferrer"><p>{pub.title}</p></a> : <p>{pub.title}</p>}
    </li>
  );
};

export default class List extends Component {
  render() {
    return (
      <ul>
        {this.props.data.map(pub => <Pub {...pub}></Pub>)}
      </ul>
    )
  }
}
