require(["Zepto"], function($) {
    console.log($(".dian"));
    var odx = $(".drag").offset().left;
    // console.log(odx)
    $(".dian").on("touchstart", function(e) {
        var op = (e.touches[0]);

        var ox = op.clientX;
        $(".dian").on("touchmove", function(e) {
            var om = (e.touches[0]);
            var lpx = om.clientX;
            $(".line").width(lpx - odx);
        });
    });
})