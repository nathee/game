$(document).ready(function () {
  $("#AccordionItem-2").addClass("invisible");
  $("#AccordionItem-3").addClass("invisible");
  $("#AccordionItem-4").addClass("invisible");
  $("#AccordionItem-5").addClass("invisible");
  $("#AccordionItem-6").addClass("invisible");
  $("#AccordionItem-7").addClass("invisible");
  $("#AccordionItem-8").addClass("invisible");
  $("#icon-i-1").addClass("invisible");
  $("#icon-i-2").addClass("invisible");
  $("#icon-i-3").addClass("invisible");
  $("#icon-i-4").addClass("invisible");
  $("#icon-i-5").addClass("invisible");
  $("#icon-i-6").addClass("invisible");
  $("#icon-i-7").addClass("invisible");
  $("#icon-i-8").addClass("invisible");
  $("#btn-1").click(function () {
    if ($("#tx-1").val() == 24 && $("#tx-2").val() == 26) {
      $("#icon-i-1").removeClass("invisible").addClass("visible");
      $("#AccordionItem-2").removeClass("invisible").addClass("visible");
      Swal.fire({
        title: "success!",
        text: "คำตอบถูกต้อง",
        icon: "success",
        confirmButtonText:
          "<a class='collapsed' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-2' aria-expanded='true' aria-controls='accordion-1 .item-2'>ถูกต้อง</a>",
      });
    } else {
      $("#tx-1").val("");
      $("#tx-2").val("");
      Swal.fire({
        title: "Error!",
        text: "คำตอบไม่ถูกต้อง",
        icon: "error",
        confirmButtonText: "ลองใหม่",
      });
    }
  });

  $("#btn-2").click(function () {
    $("#icon-i-2").removeClass("invisible").addClass("visible");
    $("#AccordionItem-3").removeClass("invisible").addClass("visible");
    Swal.fire({
      title: "success!",
      text: "คำตอบถูกต้อง",
      icon: "success",
      confirmButtonText:
        "<a class='collapsed' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-3' aria-expanded='true' aria-controls='accordion-1 .item-3'>ถูกต้อง</a>",
    });
  });
  $("#btn-3").click(function () {
    Swal.fire({
      title: "Error!",
      text: "คำตอบไม่ถูกต้อง",
      icon: "error",
      confirmButtonText: "ลองใหม่",
    });
  });
  $("#btn-4").click(function () {
    if ($("#operator-1").val() == 1) {      
    $("#icon-i-3").removeClass("invisible").addClass("visible");
      $("#AccordionItem-4").removeClass("invisible").addClass("visible");
      Swal.fire({
        title: "success!",
        text: "คำตอบถูกต้อง",
        icon: "success",
        confirmButtonText:
          "<a class='collapsed' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-4' aria-expanded='true' aria-controls='accordion-1 .item-4'>ถูกต้อง</a>",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "คำตอบไม่ถูกต้อง",
        icon: "error",
        confirmButtonText: "ลองใหม่",
      });
    }
  });

  $("#btn-5").click(function () {
    if ($("#tx-3").val() == 6) {
      $("#icon-i-4").removeClass("invisible").addClass("visible");
      $("#AccordionItem-5").removeClass("invisible").addClass("visible");
      Swal.fire({
        title: "success!",
        text: "คำตอบถูกต้อง",
        icon: "success",
        confirmButtonText:
          "<a class='collapsed' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-5' aria-expanded='true' aria-controls='accordion-1 .item-5'>ถูกต้อง</a>",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "คำตอบไม่ถูกต้อง",
        icon: "error",
        confirmButtonText: "ลองใหม่",
      });
    }
  });

  $("#formCheck-1").click(function () {
    $("#icon-i-5").removeClass("invisible").addClass("visible");
    $("#AccordionItem-6").removeClass("invisible").addClass("visible");
    Swal.fire({
      title: "success!",
      text: "คำตอบถูกต้อง",
      icon: "success",
      confirmButtonText:
        "<a class='collapsed' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-6' aria-expanded='true' aria-controls='accordion-1 .item-6'>ถูกต้อง</a>",
    });
  });

  $("#formCheck-2").click(function () {
    Swal.fire({
      title: "Error!",
      text: "คำตอบไม่ถูกต้อง",
      icon: "error",
      confirmButtonText: "ลองใหม่",
    });
  });

  $("#formCheck-3").click(function () {
    Swal.fire({
      title: "Error!",
      text: "คำตอบไม่ถูกต้อง",
      icon: "error",
      confirmButtonText: "ลองใหม่",
    });
  });

  $("#formCheck-4").click(function () {
    $("#icon-i-6").removeClass("invisible").addClass("visible");
    $("#AccordionItem-7").removeClass("invisible").addClass("visible");
    Swal.fire({
      title: "success!",
      text: "คำตอบถูกต้อง",
      icon: "success",
      confirmButtonText:
        "<a class='collapsed' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-7' aria-expanded='true' aria-controls='accordion-1 .item-7'>ถูกต้อง</a>",
    });
    $("#formCheck-5").click(function () {
      $("#icon-i-7").removeClass("invisible").addClass("visible");
      $("#AccordionItem-8").removeClass("invisible").addClass("visible");
      Swal.fire({
        title: "success!",
        text: "คำตอบถูกต้อง",
        icon: "success",
        confirmButtonText:
          "<a class='collapsed' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-8' aria-expanded='true' aria-controls='accordion-1 .item-8'>ถูกต้อง</a>",
      });
    });
  
    $("#formCheck-6").click(function () {
      Swal.fire({
        title: "Error!",
        text: "คำตอบไม่ถูกต้อง",
        icon: "error",
        confirmButtonText: "ลองใหม่",
      });
    });
  });
});
