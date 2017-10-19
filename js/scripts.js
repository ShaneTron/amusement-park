$(document).ready(function() {
  $("#height").submit(function(event) {
    event.preventDefault();
    var heightFeet = parseInt($("#heightFeet").val());
    var heightInches = parseInt($("#heightInches").val());
    var height = (heightFeet * 12) + heightInches;

    if (height < 60) {
      $(".under-60").show();
    }

    else if (height >= 60 && height <= 78) {
      $(".over-60").show();
      $(".under-60").show();
    }

    else if (height > 78) {
      $(".over-60").show();
      $(".over-78").show();
    }
  })
})
