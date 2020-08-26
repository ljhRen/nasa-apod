import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator/SpaceNavigator';
import Viewer from './components/Viewer/Viewer';

import * as api from './lib/api';

class App extends Component {

  getAPOD = async (date) => {
    try {
      const response = await api.getAPOD(date);
      console.log(response);
    } catch (e) {
      // Error
      console.log(e);
    }
  }

  componentDidMount() {
    this.getAPOD();
  }

  render() {
    return (
      <ViewerTemplate
        spaceNavigator={<SpaceNavigator/>}
        viewer={(
          <Viewer
            url="https://www.youtube.com/embed/uj3Lq7Gu94Y?rel=0"
            mediaType="video"/>
        )}
      />
    );
  }
}

export default App;