var playlist = {
  artist: 'songTitle'
};


function updatePlaylist(object,name,song) {
  object[name] = song
  return object
}

function removeFromPlaylist(object,name) {
  delete object[name]
  return object
}
