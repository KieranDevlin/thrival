import React from 'react';
import PropTypes from 'prop-types';
import VideoList from '../../components/VideoList';
import Error from '../../components/Error';

export default Theme = ({
  theme,
  playlistVideos,
  playlists,
  videos,
  route,
  navigation,
}) => {
  if (playlists?.items?.length > 0) {
    const currentPlaylistCheck = playlists.items.find(playlist =>
      playlist.snippet.title.includes(theme),
    );

    let currentPlaylist;
    if (currentPlaylistCheck !== undefined) {
      currentPlaylist = playlistVideos.find(
        playlist => playlist.id === currentPlaylistCheck.id,
      );
    }

    const currentVideos = [];
    if (currentPlaylist !== undefined) {
      currentPlaylist.data.items.forEach(playlistVideo => {
        const filteredVideo = videos.filter(
          video => playlistVideo.contentDetails.videoId === video.items[0].id,
        );
        return (
          filteredVideo[0] !== undefined && currentVideos.push(filteredVideo[0])
        );
      });
    }

    return currentVideos.length > 0 ? (
      <VideoList videos={currentVideos} route={route} navigation={navigation} />
    ) : (
      <Error name={'Playlist'} height={'100%'} />
    );
  } else {
    return <Error name={'Playlist'} height={'100%'} />;
  }
};

Theme.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.objectOf(PropTypes.func),
  videos: PropTypes.arrayOf(PropTypes.object),
  playlist: PropTypes.objectOf(PropTypes.string),
  playlistVideos: PropTypes.array,
  theme: PropTypes.string,
};
