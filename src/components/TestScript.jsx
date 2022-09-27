import React, { useState, useEffect } from 'react';
var TestScript = function(props) {

  return(<div>
    <textarea
          maxLength="60"
          rows="7"
          cols="80"
          name="summary"
          placeholder="Example: Best purchase ever!"
          value='sdfsdfsdf'
        ></textarea>
  </div>)
}

export default TestScript