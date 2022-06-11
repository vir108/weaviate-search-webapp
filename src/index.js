const fileInput = document.querySelector("#fileInput");

const uploadFile = file => {
  console.log("Uploading file...");
 
  const request = new XMLHttpRequest();
  const formData = new FormData();

  request.open("POST", true);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    }
  };
  formData.append("file", file);
  request.send(formData);
};

fileInput.addEventListener("change", event => {
  const files = event.target.files;
  uploadFile(files[0]);
});

const getfile = () => {
  let file = document.querySelector('input[type="file"]').files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);    
  reader.onload = function () {
  console.log(reader.result);
  };
  reader.onerror = function (error) {
  console.log('Error: ', error);
  };
  var imageValue =reader.result;
};