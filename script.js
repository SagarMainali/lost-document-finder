
function toggleMenu() {
     const right_col = document.getElementById("right-col");
     const left_col = document.getElementById("main-menu");
     const cover = document.getElementById("cover");
     if (window.innerWidth > 1000) {
          left_col.classList.toggle("left-col-slide-lg");
     }
     else {
          left_col.classList.toggle("left-col-slide-sm");
          cover.classList.toggle("cover-add");
          right_col.classList.toggle("right-col-overflow");
     }
}

// since the input field has been hidden we cannot call this function from onchange in HTML
const choose_doc_photo = document.getElementById("choose-document-photo");
choose_doc_photo.addEventListener('change', function () {
     const img_name = document.getElementById("img-name");
     let field_value = this.files[0].name;
     // Allowing file type
     const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
     if (!allowedExtensions.exec(field_value)) {
          alert("Invalid image type. The accepted image formats are JPG, JPEG and PNG.");
          field_value = "";
          return false;
     }
     else {
          if (field_value.length > 20) {
               img_name.textContent = field_value.slice(0, 20) + "...";
          }
          else {
               img_name.textContent = field_value;
          }
     }
})