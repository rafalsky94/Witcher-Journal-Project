const url = "http://localhost:3000";





$(() => {


    let leftBtn = $(".left-arrow");
    let rightBtn = $(".right-arrow");
    let content = $(".slider-content");

    let quen = $(".quen");
    let axii = $(".axii");
    let igni = $(".igni");
    let aard = $(".aard");
    let yrden = $(".yrden");
    let text = $(".text");

    $.ajax({
        method: "GET",
        url: url + "/db",
        dataType: "json"
    }).done((response) => {


        quen.on("click", (e) => {
            text.find("h3").text(response.signs[0].sign);
            text.find("p").text(response.signs[0].text);
    });


        igni.on("click", (e) => {
            text.find("h3").text(response.signs[1].sign);
            text.find("p").text(response.signs[1].text);

    });

        aard.on("click", (e) => {
            text.find("h3").text(response.signs[2].sign);
            text.find("p").text(response.signs[2].text);

        });

        axii.on("click", (e) => {
            text.find("h3").text(response.signs[3].sign);
            text.find("p").text(response.signs[3].text);

        });

        yrden.on("click", (e) => {
            text.find("h3").text(response.signs[4].sign);
            text.find("p").text(response.signs[4].text);

        });




});
});