const filePickerElement = document.getElementById("image"); //input element (button)
const imagePreviewElement = document.getElementById("image-preview"); // image element

function showPreview() {
  const files = filePickerElement.files;
  if (!files || files.length === 0) {
    imagePreviewElement.style.display = "none";
    return;
  }
  const pickedFile = files[0];

  imagePreviewElement.src = URL.createObjectURL(pickedFile); // make a local url on client device to preview the pic
  imagePreviewElement.style.display = "block";
}

filePickerElement.addEventListener("change", showPreview);
