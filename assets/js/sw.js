$(document).ready(function () {
  // $("#AccordionItem-2").addClass("invisible");
  // $("#AccordionItem-3").addClass("invisible");
  // $("#AccordionItem-4").addClass("invisible");
  // $("#AccordionItem-5").addClass("invisible");
  // $("#AccordionItem-6").addClass("invisible");
  // $("#AccordionItem-7").addClass("invisible");
  // $("#AccordionItem-8").addClass("invisible");
  $("#icon-i-1").addClass("invisible");
  $("#icon-i-2").addClass("invisible");
  $("#icon-i-3").addClass("invisible");
  $("#icon-i-4").addClass("invisible");
  $("#icon-i-5").addClass("invisible");
  $("#icon-i-6").addClass("invisible");
  $("#icon-i-7").addClass("invisible");
  $("#icon-i-8").addClass("invisible");

  function errorMSG() {
    Swal.fire({
      title: "Error!",
      text: "คำตอบไม่ถูกต้อง",
      icon: "error",
      confirmButtonText: "ลองใหม่",
    });
  }

  function successMSG(msg) {
    Swal.fire({
      title: "success!",
      text: "คำตอบถูกต้อง",
      icon: "success",
      confirmButtonText: msg,
    });
  }

  function ONE(num01, num02, num03, num04) {
    var x = document.getElementById(num01).value;
    var y = document.getElementById(num03).value;
    if (x == num02 && y == num04) {
      $("#icon-i-1").removeClass("invisible").addClass("visible");
      $("#AccordionItem-2").removeClass("invisible").addClass("visible");
      var msg =
        "<a class='collapsed' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-2' aria-expanded='true' aria-controls='accordion-1 .item-2'>ถูกต้อง</a>";
      successMSG(msg);
    } else {
      document.getElementById(num01).value = "";
      document.getElementById(num03).value = "";
      errorMSG();
    }
  }
  function TWO() {
    $("#icon-i-2").removeClass("invisible").addClass("visible");
    $("#AccordionItem-3").removeClass("invisible").addClass("visible");
    var msg =
      "<a class='collapsed' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-3' aria-expanded='true' aria-controls='accordion-1 .item-3'>ถูกต้อง</a>";
    successMSG(msg);
  }
  function THREE(num01, num02) {
    var x = document.getElementById(num01).value;
    if (x == num02) {
      $("#icon-i-3").removeClass("invisible").addClass("visible");
      $("#AccordionItem-4").removeClass("invisible").addClass("visible");
      var msg =
        "<a class='collapsed' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-4' aria-expanded='true' aria-controls='accordion-1 .item-4'>ถูกต้อง</a>";
      successMSG(msg);
    } else {
      errorMSG();
    }
  }
  function FOUR(num01, num02) {
    var x = document.getElementById(num01).value;
    if (x == num02) {
      $("#icon-i-4").removeClass("invisible").addClass("visible");
      $("#AccordionItem-5").removeClass("invisible").addClass("visible");
      var msg =
        "<a class='collapsed' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-5' aria-expanded='true' aria-controls='accordion-1 .item-5'>ถูกต้อง</a>";
      successMSG(msg);
    } else {
      errorMSG();
    }
  }
  function FIVE() {
    $("#icon-i-5").removeClass("invisible").addClass("visible");
    $("#AccordionItem-6").removeClass("invisible").addClass("visible");
    var msg =
      "<a class='collapsed' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-6' aria-expanded='true' aria-controls='accordion-1 .item-6'>ถูกต้อง</a>";
    successMSG(msg);
  }
  function SIX() {
    $("#icon-i-6").removeClass("invisible").addClass("visible");
    $("#AccordionItem-7").removeClass("invisible").addClass("visible");
    var msg =
      "<a class='collapsed' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-7' aria-expanded='true' aria-controls='accordion-1 .item-7'>ถูกต้อง</a>";
    successMSG(msg);
  }
  function SEVEN() {
    $("#icon-i-7").removeClass("invisible").addClass("visible");
    $("#AccordionItem-8").removeClass("invisible").addClass("visible");
    var msg =
      "<a class='collapsed' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-8' aria-expanded='true' aria-controls='accordion-1 .item-8'>ถูกต้อง</a>";
    successMSG(msg);
  }
  function EIGHT(num01) {
    var x = '<a href="'+num01+'">เกมถัดไป</a>';
    console.log(x);
    $("#icon-i-8").removeClass("invisible").addClass("visible");
    // var msg = "<a>ยินดีด้วยผ่านทุกข้อ</a>";
    Swal.fire({
      title: "Sweet!",
      text: "Congratulations.",
      imageUrl: "https://condaluna.com/assets/stickers/congrats.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: x,
    });
    // successMSG(msg);
  }
  // 01+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //-Sections1==================================
  $("#btn-0101").click(function () {
    ONE("tx-0101", 24, "tx-0102", 26);
  });

  //-Sections2==================================
  $("#btn-0102").click(function () {
    TWO();
  });

  $("#btn-0103").click(function () {
    errorMSG();
  });

  //-Sections3==================================
  $("#btn-0104").click(function () {
    THREE("operator-0101", 1);
  });

  //-Sections4==================================
  $("#btn-0105").click(function () {
    FOUR("tx-0103", 6);
  });

  //-Sections5==================================
  $("#formCheck-0101").click(function () {
    FIVE();
  });

  $("#formCheck-0102").click(function () {
    errorMSG();
  });

  //-Sections6==================================
  $("#formCheck-0103").click(function () {
    errorMSG();
  });

  $("#formCheck-0104").click(function () {
    SIX();
  });

  //-Sections7==================================
  $("#formCheck-0105").click(function () {
    SEVEN();
  });

  $("#formCheck-0106").click(function () {
    errorMSG();
  });

  //-Sections8==================================
  $("#btn-0106").click(function () {
    EIGHT("game02.html");
  });

  $("#btn-0107").click(function () {
    errorMSG();
  });

  $("#btn-0108").click(function () {
    errorMSG();
  });

  $("#btn-0109").click(function () {
    errorMSG();
  });

  // 02+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //-Sections1==================================
  $("#btn-0201").click(function () {
    ONE("tx-0201", 10, "tx-0202", 12);
  });

  //-Sections2==================================
  $("#btn-0202").click(function () {
    errorMSG();
  });

  $("#btn-0203").click(function () {
    TWO();
  });

  //-Sections3==================================
  $("#btn-0204").click(function () {
    // 1+2-3*4/
    THREE("operator-0201", 2);
  });

  //-Sections4==================================
  $("#btn-0205").click(function () {
    FOUR("tx-0203", 2);
  });

  //-Sections5==================================
  $("#formCheck-0201").click(function () {
    // คู่
    FIVE();
  });

  $("#formCheck-0202").click(function () {
    // คี่
    errorMSG();
  });

  //-Sections6==================================
  $("#formCheck-0203").click(function () {
    // ซ้าย
    errorMSG();
  });

  $("#formCheck-0204").click(function () {
    // ขวา
    SIX();
  });

  //-Sections7==================================
  $("#formCheck-0205").click(function () {
    // ทวน
    errorMSG();
  });

  $("#formCheck-0206").click(function () {
    // ตาม
    SEVEN();
  });

  //-Sections8==================================
  $("#btn-0206").click(function () {
    errorMSG();
  });

  $("#btn-0207").click(function () {
    errorMSG();
  });

  $("#btn-0208").click(function () {
    errorMSG();
  });

  $("#btn-0209").click(function () {
    EIGHT("game03.html");
  });

  // -03+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //-Sections1==================================
  $("#btn-0301").click(function () {
    ONE("tx-0301", 14, "tx-0302", 16);
  });

  //-Sections2==================================
  $("#btn-0302").click(function () {
    errorMSG();
  });

  $("#btn-0303").click(function () {
    TWO();
  });

  //-Sections3==================================
  $("#btn-0304").click(function () {
    // 1+2-3*4/
    THREE("operator-0301", 2);
  });

  //-Sections4==================================
  $("#btn-0305").click(function () {
    FOUR("tx-0303", 4);
  });

  //-Sections5==================================
  $("#formCheck-0301").click(function () {
    // คู่
    FIVE();
  });

  $("#formCheck-0302").click(function () {
    // คี่
    errorMSG();
  });

  //-Sections6==================================
  $("#formCheck-0303").click(function () {
    // ซ้าย
    errorMSG();
  });

  $("#formCheck-0304").click(function () {
    // ขวา
    SIX();
  });

  //-Sections7==================================
  $("#formCheck-0305").click(function () {
    // ทวน
    errorMSG();
  });

  $("#formCheck-0306").click(function () {
    // ตาม
    SEVEN();
  });

  //-Sections8==================================
  $("#btn-0306").click(function () {
    errorMSG();
  });

  $("#btn-0307").click(function () {
    errorMSG();
  });

  $("#btn-0308").click(function () {
    errorMSG();
  });

  $("#btn-0309").click(function () {
    EIGHT("game04.html");
  });
  // -04+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //-Sections1==================================
  $("#btn-0401").click(function () {
    ONE("tx-0401", 28, "tx-0402", 30);
  });

  //-Sections2==================================
  $("#btn-0402").click(function () {
    errorMSG();
  });

  $("#btn-0403").click(function () {
    TWO();
  });

  //-Sections3==================================
  $("#btn-0404").click(function () {
    // 1+2-3*4/
    THREE("operator-0401", 2);
  });

  //-Sections4==================================
  $("#btn-0405").click(function () {
    FOUR("tx-0403", 5);
  });

  //-Sections5==================================
  $("#formCheck-0401").click(function () {
    // คู่
    errorMSG();
  });

  $("#formCheck-0402").click(function () {
    // คี่
    FIVE();
  });

  //-Sections6==================================
  $("#formCheck-0403").click(function () {
    // ซ้าย
    SIX();
  });

  $("#formCheck-0404").click(function () {
    // ขวา
    errorMSG();
  });

  //-Sections7==================================
  $("#formCheck-0405").click(function () {
    // ทวน
    errorMSG();
  });

  $("#formCheck-0406").click(function () {
    // ตาม
    SEVEN();
  });

  //-Sections8==================================
  $("#btn-0406").click(function () {
    errorMSG();
  });

  $("#btn-0407").click(function () {
    EIGHT("game05.html");
  });

  $("#btn-0408").click(function () {
    errorMSG();
  });

  $("#btn-0409").click(function () {
    errorMSG();
  });

  // -05+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //-Sections1==================================
  $("#btn-0501").click(function () {
    ONE("tx-0501", -68, "tx-0502", -66);
  });

  //-Sections2==================================
  $("#btn-0502").click(function () {
    TWO();
  });

  $("#btn-0503").click(function () {
    errorMSG();
  });

  //-Sections3==================================
  $("#btn-0504").click(function () {
    // 1+2-3*4/
    THREE("operator-0501", 1);
  });

  //-Sections4==================================
  $("#btn-0505").click(function () {
    FOUR("tx-0503", -17);
  });

  //-Sections5==================================
  $("#formCheck-0501").click(function () {
    // คู่
    errorMSG();
  });

  $("#formCheck-0502").click(function () {
    // คี่
    FIVE();
  });

  //-Sections6==================================
  $("#formCheck-0503").click(function () {
    // ซ้าย
    SIX();
  });

  $("#formCheck-0504").click(function () {
    // ขวา
    errorMSG();
  });

  //-Sections7==================================
  $("#formCheck-0505").click(function () {
    // ทวน
    SEVEN();
  });

  $("#formCheck-0506").click(function () {
    // ตาม
    errorMSG();
  });

  //-Sections8==================================
  $("#btn-0506").click(function () {
    errorMSG();
  });

  $("#btn-0507").click(function () {
    errorMSG();
  });

  $("#btn-0508").click(function () {
    EIGHT("game06.html");
  });

  $("#btn-0509").click(function () {
    errorMSG();
  });
  // -06+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //-Sections1==================================
  $("#btn-0601").click(function () {
    ONE("tx-0601", -42, "tx-0602", -40);
  });

  //-Sections2==================================
  $("#btn-0602").click(function () {
    TWO();
  });

  $("#btn-0603").click(function () {
    errorMSG();
  });

  //-Sections3==================================
  $("#btn-0604").click(function () {
    // 1+2-3*4/
    THREE("operator-0601", 1);
  });

  //-Sections4==================================
  $("#btn-0605").click(function () {
    FOUR("tx-0603", -14);
  });

  //-Sections5==================================
  $("#formCheck-0601").click(function () {
    // คู่
    FIVE();
  });

  $("#formCheck-0602").click(function () {
    // คี่
    errorMSG();
  });

  //-Sections6==================================
  $("#formCheck-0603").click(function () {
    // ซ้าย
    errorMSG();
  });

  $("#formCheck-0604").click(function () {
    // ขวา
    SIX();
  });

  //-Sections7==================================
  $("#formCheck-0605").click(function () {
    // ทวน
    SEVEN();
  });

  $("#formCheck-0606").click(function () {
    // ตาม
    errorMSG();
  });

  //-Sections8==================================
  $("#btn-0606").click(function () {
    EIGHT("game07.html");
  });

  $("#btn-0607").click(function () {
    errorMSG();
  });

  $("#btn-0608").click(function () {
    errorMSG();
  });

  $("#btn-0609").click(function () {
    errorMSG();
  });
  // -07+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //-Sections1==================================
  $("#btn-0701").click(function () {
    ONE("tx-0701", 100, "tx-0702", 102);
  });

  //-Sections2==================================
  $("#btn-0702").click(function () {
    errorMSG();
  });

  $("#btn-0703").click(function () {
    TWO();
  });

  //-Sections3==================================
  $("#btn-0704").click(function () {
    // 1+2-3*4/
    THREE("operator-0701", 2);
  });

  //-Sections4==================================
  $("#btn-0705").click(function () {
    FOUR("tx-0703", 34);
  });

  //-Sections5==================================
  $("#formCheck-0701").click(function () {
    // คู่
    FIVE();
  });

  $("#formCheck-0702").click(function () {
    // คี่
    errorMSG();
  });

  //-Sections6==================================
  $("#formCheck-0703").click(function () {
    // ซ้าย
    errorMSG();
  });

  $("#formCheck-0704").click(function () {
    // ขวา
    SIX();
  });

  //-Sections7==================================
  $("#formCheck-0705").click(function () {
    // ทวน
    errorMSG();
  });

  $("#formCheck-0706").click(function () {
    // ตาม
    SEVEN();
  });

  //-Sections8==================================
  $("#btn-0706").click(function () {
    errorMSG();
  });

  $("#btn-0707").click(function () {
    errorMSG();
  });

  $("#btn-0708").click(function () {
    errorMSG();
  });

  $("#btn-0709").click(function () {
    EIGHT("game08.html");
  });
  // -08+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //-Sections1==================================
  $("#btn-0801").click(function () {
    ONE("tx-0801", -22, "tx-0802", -20);
  });

  //-Sections2==================================
  $("#btn-0802").click(function () {
    errorMSG();
  });

  $("#btn-0803").click(function () {
    TWO();
  });

  //-Sections3==================================
  $("#btn-0804").click(function () {
    // 1+2-3*4/
    THREE("operator-0801", 2);
  });

  //-Sections4==================================
  $("#btn-0805").click(function () {
    FOUR("tx-0803", -5);
  });

  //-Sections5==================================
  $("#formCheck-0801").click(function () {
    // คู่
    errorMSG();
  });

  $("#formCheck-0802").click(function () {
    // คี่
    FIVE();
  });

  //-Sections6==================================
  $("#formCheck-0803").click(function () {
    // ซ้าย
    SIX();
  });

  $("#formCheck-0804").click(function () {
    // ขวา
    errorMSG();
  });

  //-Sections7==================================
  $("#formCheck-0805").click(function () {
    // ทวน
    errorMSG();
  });

  $("#formCheck-0806").click(function () {
    // ตาม
    SEVEN();
  });

  //-Sections8==================================
  $("#btn-0806").click(function () {
    errorMSG();
  });

  $("#btn-0807").click(function () {
    EIGHT("game09.html");
  });

  $("#btn-0808").click(function () {
    errorMSG();
  });

  $("#btn-0809").click(function () {
    errorMSG();
  });
  // -09+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //-Sections1==================================
  $("#btn-0901").click(function () {
    ONE("tx-0901", 32, "tx-0902", 34);
  });

  //-Sections2==================================
  $("#btn-0902").click(function () {
    TWO();
  });

  $("#btn-0903").click(function () {
    errorMSG();
  });

  //-Sections3==================================
  $("#btn-0904").click(function () {
    // 1+2-3*4/
    THREE("operator-0901", 1);
  });

  //-Sections4==================================
  $("#btn-0905").click(function () {
    FOUR("tx-0903", 8);
  });

  //-Sections5==================================
  $("#formCheck-0901").click(function () {
    // คู่
    FIVE();
  });

  $("#formCheck-0902").click(function () {
    // คี่
    errorMSG();
  });

  //-Sections6==================================
  $("#formCheck-0903").click(function () {
    // ซ้าย
    errorMSG();
  });

  $("#formCheck-0904").click(function () {
    // ขวา
    SIX();
  });

  //-Sections7==================================
  $("#formCheck-0905").click(function () {
    // ทวน
    SEVEN();
  });

  $("#formCheck-0906").click(function () {
    // ตาม
    errorMSG();
  });

  //-Sections8==================================
  $("#btn-0906").click(function () {
    EIGHT("game10.html");
  });

  $("#btn-0907").click(function () {
    errorMSG();
  });

  $("#btn-0908").click(function () {
    errorMSG();
  });

  $("#btn-0909").click(function () {
    errorMSG();
  });
  // -10+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //-Sections1==================================
  $("#btn-1001").click(function () {
    ONE("tx-1001", -18, "tx-1002", -16);
  });

  //-Sections2==================================
  $("#btn-1002").click(function () {
    TWO();
  });

  $("#btn-1003").click(function () {
    errorMSG();
  });

  //-Sections3==================================
  $("#btn-1004").click(function () {
    // 1+2-3*4/
    THREE("operator-1001", 1);
  });

  //-Sections4==================================
  $("#btn-1005").click(function () {
    FOUR("tx-1003", -3);
  });

  //-Sections5==================================
  $("#formCheck-1001").click(function () {
    // คู่
    errorMSG();
  });

  $("#formCheck-1002").click(function () {
    // คี่
    FIVE();
  });

  //-Sections6==================================
  $("#formCheck-1003").click(function () {
    // ซ้าย
    SIX();
  });

  $("#formCheck-1004").click(function () {
    // ขวา
    errorMSG();
  });

  //-Sections7==================================
  $("#formCheck-1005").click(function () {
    // ทวน
    SEVEN();
  });

  $("#formCheck-1006").click(function () {
    // ตาม
    errorMSG();
  });

  //-Sections8==================================
  $("#btn-1006").click(function () {
    errorMSG();
  });

  $("#btn-1007").click(function () {
    errorMSG();
  });

  $("#btn-1008").click(function () {
    EIGHT("game01.html");
  });

  $("#btn-1009").click(function () {
    errorMSG();
  });
});
