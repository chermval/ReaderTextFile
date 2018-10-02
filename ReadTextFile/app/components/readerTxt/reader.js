function getContentFiles(selectedFile) {
    
    var contentFile = document.getElementById('fileDisplayContext');
    var contentDisplay = document.getElementById('contentDisplay');

    //instance for FileReader API
    var reader = new FileReader();

    reader.onload = function(e) {
        contentFile.innerText = reader.result;

        if (contentFile != null){
            contentDisplay.style.display = "block";
        }
    }
  
    reader.readAsText(selectedFile[0]);

}

