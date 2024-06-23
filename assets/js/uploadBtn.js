$("#btn_upload_spec_file").click(function () {
  $("#input_spec_file").click();
});

$("#input_spec_file").change(function (e) {
  console.log(e.target.value);
  if (e.target.value) {
    $("#image_preview").removeClass("d-none");
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#image_preview").html(
        '<img src="' + e.target.result + '" alt="Preview">'
      );
    };

    reader.readAsDataURL(file);
  } else {
    $("#image_preview").removeClass("d-none");
    $("#image_preview").addClass("d-none");
  }
});
