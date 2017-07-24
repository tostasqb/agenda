var reader = {
  read: function(path_location) {
    // window.requestFileSystem(path_location, function(dirEntry) {
    //     var directoryReader = dirEntry.createReader();
    //     console.log(dirEntry);

    //     // Get a list of all the entries in the directory
    //     directoryReader.readEntries(reader.success, reader.fail);
    // });
    window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {
      console.log('file system open: ' + fs.name);
      createFile(fs.root, "newTempFile.txt", false);

    }, reader.error);
  },

  success: function(entries) {
    var i;
    for (i=0; i<entries.length; i++) {
        console.log('En - ', entries[i]);
    }
  },

  error: function(error) {
    console.log("Failed to list directory contents: ", error);
  }
}

