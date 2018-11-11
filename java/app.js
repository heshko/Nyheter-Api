$(document).ready(function () {
    // jag har börjat skriva mitt kod med jquery och jag har använt $(document).ready(function() för att  i början laddar upp html sen  css sen javascript
    var url = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=51388baf88464fc4867c4103e8692f62";
    // url api + apikey jag har hämtat min api från https://newsapi.org och har kontakt med de för att jag behöver apikey och  det var mycket lätt
    $.getJSON(url, function (data) {
        // jag vill inte skicka eller updatera data så jag har använt getjson för att jag vill bara hämta information. jag har testat ajax och det absolut funkar ..
        // jag har testat min api med console.log och allt funkar bra ^_^
        $.each(data, function () {
            // jag har använt ecah för att tar varje information och kör
            $("#carouselExampleFade").html('<div class="carousel-inner"><div class="carousel-item active">' + '<img class="d-block w-100"  src="' + data.articles[0].urlToImage + '"></img>' + " <div class='carousel-caption d-none d-md-block'>" + " <h3  class='card-text-1' >" + data.articles[0].author + "</h3>" + " <p>" + data.articles[0].title + "</p>" + "</div>" + "</div>" + "<div class='carousel-item'>" + '<img class="d-block w-100" src="' + data.articles[1].urlToImage + '">' + " <div class='carousel-caption d-none d-md-block'>" + " <h3 class='card-text-1'>" + data.articles[1].author + "</h3>" + " <p>" + data.articles[1].title + "</p>" + "</div>" + "</div>" + " <div class='carousel-item'>" + ' <img class="d-block w-100" src="' + data.articles[2].urlToImage + '">' + " <div class='carousel-caption d-none d-md-block'>" + " <h3 class='card-text-1'>" + data.articles[2].author + "</h3>" + " <p>" + data.articles[2].title + "</p>" + "</div>" + "</div>" + " </div>" + ' <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">' + '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' + '<span class="sr-only">Previous</span>' + " </a>" + '<a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">' + ' <span class="carousel-control-next-icon" aria-hidden="true"></span>' + ' <span class="sr-only">Next</span>' + "</a>" + "</div>")
            $("#new1").html('<img class="card-img-top" id="img1" src= "' + data.articles[3].urlToImage + '" > ' + "<div class='card-body'><h1 class='card-title'>" + data.articles[3].author + "</h1>" + "<h2 class='card-text'>" + data.articles[3].title + "</h2>" + "<h4 class='card-text'>" + data.articles[3].description + "</h4>" + "<p>" + data.articles[3].content + "</p>" + "</div>")
            // det är första nyhet jag har kopplat img med img som finns i data .
            // data som finns i server skrev av json som en stor obejct inner den här object finns type 8 array och inner de här array finns object darför skrev jag en störst object data sen en array articles 3 sen object urlToImage
            $("#new2").html('<img class="card-img-top" id="img2" src= "' + data.articles[4].urlToImage + '" > ' + "<div class='card-body'><h1 class='card-title'>" + data.articles[4].author + "</h1>" + "<h2 class='card-text'>" + data.articles[4].title + "</h2>" + "<h4 class='card-text'>" + data.articles[4].description + "</h4>" + "<p>" + data.articles[4].content + "</p>" + "</div>")
            $("#new3").html('<img class="card-img-top" id="img3" src= "' + data.articles[5].urlToImage + '" > ' + "<div class='card-body'><h1 class='card-title'>" + data.articles[5].author + "</h1>" + "<h2 class='card-text'>" + data.articles[5].title + "</h2>" + "<h4 class='card-text'>" + data.articles[5].description + "</h4>" + "</p>" + "<p>" + data.articles[5].content + "</div>")
            $("#new4").html('<img class="card-img-top" id="img4" src= "' + data.articles[6].urlToImage + '" > ' + "<div class='card-body'><h1 class='card-title'>" + data.articles[6].author + "</h1>" + "<h2 class='card-text'>" + data.articles[6].title + "</h2>" + "<h4 class='card-text'>" + data.articles[6].description + "</h4>" + "</p>" + "<p>" + data.articles[6].content + "</div>")
            $("#new5").html('<img class="card-img-top" id="img5" src= "' + data.articles[7].urlToImage + '" > ' + "<div class='card-body'><h1 class='card-title'>" + data.articles[7].author + "</h1>" + "<h2 class='card-text'>" + data.articles[7].title + "</h2>" + "<h4 class='card-text'>" + data.articles[7].description + "</h4>" + "</p>" + "<p>" + data.articles[7].content + "</div>")
            $("#new6").html('<img class="card-img-top" id="img1" src= "' + data.articles[8].urlToImage + '" > ' + "<div class='card-body'><h1 class='card-title'>" + data.articles[8].author + "</h1>" + "<h2 class='card-text'>" + data.articles[8].title + "</h2>" + "<h4 class='card-text'>" + data.articles[8].description + "</h4>" + "<p>" + data.articles[8].content + "</p>" + "</div>")
            $("#new7").html('<img class="card-img-top" id="img1" src= "' + data.articles[9].urlToImage + '" > ' + "<div class='card-body'><h1 class='card-title'>" + data.articles[9].author + "</h1>" + "<h2 class='card-text'>" + data.articles[9].title + "</h2>" + "<h4 class='card-text'>" + data.articles[9].description + "</h4>" + "<p>" + data.articles[9].content + "</p>" + "</div>")
        })

    })
    var url2 = " https://newsapi.org/v2/top-headlines?sources=bleacher-report&apiKey=51388baf88464fc4867c4103e8692f62"

    $.getJSON(url2, function (data) {
        // HÄR HAR JAG GJORT EN SECTION INNER SECTION EN SROR DIV = ROW OCH INNER ROW GJORDE JAG TVÅ DIV MED COL-6 FÖR ATT JAG VILL DELAR ROW TILL TVÅ SMÅL DIV
        // JAG HÄR KOPPALT OCKSÅ BILDAR OCH RUBRIKEN MED BILDER OCH RUBRIKEN SOM FINNS I DATA I SERVER
        $("#sport1").html("<div class='col-sm-6'>" + "<div class='card-body'><h2 class='card-title'>" + data.articles[0].author + "</h2>" + " <h5 class='card-text'>" + data.articles[0].title + "</h5>" + " <p class='card-text'>" + data.articles[0].description + "</p>" + "</div>" + '<img class="card-img-bottom" id="sport-img-1"src= "' + data.articles[0].urlToImage + '" > ' + "</div>" + "<div class='col-sm-6'>" + "<div class='card-body'><h2 class='card-title'>" + data.articles[1].author + "</h2>" + " <h5 class='card-text'>" + data.articles[1].title + "</h5>" + " <p class='card-text'>" + data.articles[1].description + "</p>" + "</div>" + '<img class="card-img-bottom" id="sport-img-1"src= "' + data.articles[1].urlToImage + '" > ' + "</div>")
        $("#sport2").html("<div class='col-sm-6'>" + "<div class='card-body'><h2 class='card-title'>" + data.articles[2].author + "</h2>" + " <h5 class='card-text'>" + data.articles[2].title + "</h5>" + " <p class='card-text'>" + data.articles[2].description + "</p>" + "</div>" + '<img class="card-img-bottom" id="sport-img-1"src= "' + data.articles[2].urlToImage + '" > ' + "</div>" + "<div class='col-sm-6'>" + "<div class='card-body'><h2 class='card-title'>" + data.articles[3].author + "</h2>" + " <h5 class='card-text'>" + data.articles[3].title + "</h5>" + " <p class='card-text'>" + data.articles[3].description + "</p>" + "</div>" + '<img class="card-img-bottom" id="sport-img-1"src= "' + data.articles[3].urlToImage + '" > ' + "</div>")
        $("#sport3").html("<div class='col-sm-6'>" + "<div class='card-body'><h2 class='card-title'>" + data.articles[4].author + "</h2>" + " <h5 class='card-text'>" + data.articles[4].title + "</h5>" + " <p class='card-text'>" + data.articles[4].description + "</p>" + "</div>" + '<img class="card-img-bottom" id="sport-img-1"src= "' + data.articles[4].urlToImage + '" > ' + "</div>" + "<div class='col-sm-6'>" + "<div class='card-body'><h2 class='card-title'>" + data.articles[5].author + "</h2>" + " <h5 class='card-text'>" + data.articles[5].title + "</h5>" + " <p class='card-text'>" + data.articles[5].description + "</p>" + "</div>" + '<img class="card-img-bottom" id="sport-img-1"src= "' + data.articles[5].urlToImage + '" > ' + "</div>")
        $("#sport4").html("<div class='col-sm-6'>" + "<div class='card-body'><h2 class='card-title'>" + data.articles[6].author + "</h2>" + " <h5 class='card-text'>" + data.articles[6].title + "</h5>" + " <p class='card-text'>" + data.articles[6].description + "</p>" + "</div>" + '<img class="card-img-bottom" id="sport-img-1"src= "' + data.articles[6].urlToImage + '" > ' + "</div>" + "<div class='col-sm-6'>" + "<div class='card-body'><h2 class='card-title'>" + data.articles[7].author + "</h2>" + " <h5 class='card-text'>" + data.articles[7].title + "</h5>" + " <p class='card-text'>" + data.articles[7].description + "</p>" + "</div>" + '<img class="card-img-bottom" id="sport-img-1"src= "' + data.articles[7].urlToImage + '" > ' + "</div>")
    })
    // HÄR JAG GJORDE LITE ANIMATED 
    $(window).on("scroll", function () {
        // NÄR MAN SCROLL SÅ BYTA BAKCGROUND-COLOR OCH COLOR TILL BODY
        $("body").css({

            backgroundColor: "white",
            color: "#f6a21d"
        })
        $("#new1,#new2,#new3,#new4,#new5,#new6,#sport,#sport2,#sport3,#sport4").css({
            // NÄR MAN SCROLL SÅ BYTA BAKCGROUND-COLOR OCH COLOR TILL ALLA DIV
            backgroundColor: "#ececec",
            color: "#6e276b"
        })


    });
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 1800) {
            // HÄR SAMMA SAK MEN NÄR BLIR SCROLLTOP > 1800 DÅ BYTA  BAKCGROUND-COLOR OCH COLOR TILL BODY
            $("body").css({
                backgroundColor: "ececec",
                color: "#001869"
            })
            $("#new1,#new2,#new3,#new4,#new5,#new6,#sport,#sport2,#sport3,#sport4").css({
                //// HÄR SAMMA SAK MEN NÄR BLIR SCROLLTOP > 1800 DÅ  BYTA BAKCGROUND-COLOR OCH COLOR TILL ALLA DIV
                backgroundColor: " rgb(255, 255, 255)",
                color: "#001869"
            })

        }

    });

    $(".arrow").click(function () {
        // HÄR GJORDE JAG EN BILD SOM PIL NÄR MAN TRYCKER PÅ PIL DÅ GJORDE EN FUNCTION SOM BLIR WINDOW.SCROLLTOP = 0 SÅ GÅR TLL UPP DIREKT
        $(window).scrollTop(0)
    })
})