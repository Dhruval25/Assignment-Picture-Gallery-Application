document.getElementById("searchButton").addEventListener("click", function() {
    var category = document.getElementById("categoryInput").value;
    if (category.trim() !== "") {
      searchPictures(category);
    }
  });
  
  function searchPictures(category) {
    var endpoint = "https://api.unsplash.com/search/photos";
    var accessKey = "K-I1j7FyWlFtEA3YN9v9hiuWpY_l6db_fmii_PfJiUU"; // Replace with your actual access key
  
    var url = endpoint + "?query=" + category + "&client_id=" + accessKey;
  
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displayPictures(data.results);
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
  }
  
  function displayPictures(pictures) {
    var grid = document.getElementById("pictureGrid");
    grid.innerHTML = "";
  
    pictures.forEach(function(picture) {
      var pictureElement = document.createElement("div");
      pictureElement.className = "picture";
  
      var imageElement = document.createElement("img");
      imageElement.src = picture.urls.small;
  
      var authorElement = document.createElement("div");
      authorElement.className = "author";
      authorElement.textContent = "Author: " + picture.user.name;
  
      var descriptionElement = document.createElement("div");
      descriptionElement.className = "description";
      descriptionElement.textContent = "Description: " + picture.description;
  
      pictureElement.appendChild(imageElement);
      pictureElement.appendChild(authorElement);
      pictureElement.appendChild(descriptionElement);
  
      grid.appendChild(pictureElement);
    });
  }
  