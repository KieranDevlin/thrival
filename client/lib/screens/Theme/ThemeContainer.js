import React, {Component} from 'react';
import Theme from './Theme';
import PropTypes from 'prop-types';
class ThemeContainer extends Component {
  render() {
    return (
      <Theme
        theme={this.props.route.params.theme}
        playlists={value.playlists}
        playlistVideos={value.playlistVideos}
        videos={value.videos}
        route={this.props.route}
        navigation={this.props.navigation}
      />
    );
  }
}

ThemeContainer.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.objectOf(PropTypes.func),
};

export default ThemeContainer;
