const bar = {
  b1: 80,
  b2: 70,
  b3: 75,
  b4: 40,
};

$(document).ready(function () {
  let isFlag = true;
  $(window).scroll(function () {
    let hT = $(".progressbar").offset().top,
      hH = $(".progressbar").outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    if (isFlag) {
      if (wS > hT - hH - 200) {
        isFlag = false;
        let bar_1 = 0;
        let bar_2 = 0;
        let bar_3 = 0;
        let bar_4 = 0;
        let speed = 16;
        const timer = setInterval(() => {
          if (bar_1 < bar.b1) {
            bar_1++;
            $("[data-barcount=1]").html(bar_1);
            $("[data-barline=1]").attr("style", `width: ${bar_1}%`);
          }
          if (bar_2 < bar.b2) {
            bar_2++;
            $("[data-barcount=2]").html(bar_2);
            $("[data-barline=2]").attr("style", `width: ${bar_2}%`);
          }
          if (bar_3 < bar.b3) {
            bar_3++;
            $("[data-barcount=3]").html(bar_3);
            $("[data-barline=3]").attr("style", `width: ${bar_3}%`);
          }
          if (bar_4 < bar.b4) {
            bar_4++;
            $("[data-barcount=4]").html(bar_4);
            $("[data-barline=4]").attr("style", `width: ${bar_4}%`);
          }
        }, speed);
        setTimeout(() => {
          clearInterval(timer);
        }, 5000);
      }
    }
  });
});
