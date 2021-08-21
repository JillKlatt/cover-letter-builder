import React, { Component } from 'react';

class TheDate extends Component {

  constructor() {
    super()
    var today = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const month = today.getMonth()

    const monthName = monthNames[month]

    let date = monthName + ' ' + today.getDate() + ', ' + today.getFullYear();

    this.state = {
      currentDate: date
    }

  }

  render() {
    return (
      <div>
        <p>
          {this.state.currentDate}
        </p>
      </div>
    );
  }
}

export default TheDate