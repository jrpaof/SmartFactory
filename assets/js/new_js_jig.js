//* หน้า JigSparePartStorage.html

$("#select_inModal_restockType").change(function () {
  let condition = $("#select_inModal_restockType").val();

  if (condition == "1") {
    $(".input-buy").removeClass("d-none");
  } else {
    $(".input-buy").addClass("d-none");
  }
});

//* หน้า Jig.html

$(".jig-technician-card").click(function () {
  let currentURL = window.location.href;
  let arrayCurrent = currentURL.split("/");
  let newCurrentURL = "";
  for (let i = 0; i < arrayCurrent.length; i++) {
    if (arrayCurrent[i] != "" && !arrayCurrent[i].includes("html")) {
      if (i == 0) {
        newCurrentURL = arrayCurrent[i] + "//";
      } else {
        newCurrentURL += arrayCurrent[i] + "/";
      }
    }
  }
  let targetURL = newCurrentURL + "JigSetting.html#tabSkill";
  window.location.href = targetURL;
});

//* หน้า JigSetting.html

function checkHash(Hash) {
  let Check = window.location.hash;
  if (Check && Check == Hash) {
    $("#tabSetting .nav-link").removeClass("active");
    $("#tabSetting .nav-link[href='#tabMaintenance']").addClass("active");
    $(".tab-pane").removeClass("show active");
    $(Hash).addClass("show active");
  }
}

checkHash("#tabSkill");

$('#modalDetail').on('show.bs.modal', function (event) {
  let button = $(event.relatedTarget); // Button that triggered the modal
  let modalTitle = button.data('modal-title'); // Extract info from data-* attributes

  // let modal = $(this);
  $("#modalDetail .modal-title").text();
  $("#modalDetail .modal-title").text(modalTitle);
  $("#modalDetail input").val("");
});
