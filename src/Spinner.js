import React, { Component } from 'react';

import loading from "./loading.gif.gif"

export class Spinner extends Component {
  render() {
    return (
      <div>
        <img className='loading' src={loading} alt="laoding" />
      </div>
    )
  }
}

export default Spinner
