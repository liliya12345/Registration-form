$(function () {
    $('#search-form').submit(function (e) {
        e.preventDefault();
        var searchTerm = $('#search-input').val();
        getRequest(searchTerm);
    });
    function getRequest(input) {
    var sorted;
    var date = new Date();
    var year=date.getFullYear();
    var month="0"+(date.getMonth()+1);
    var day=date.getDate();
    var today=year+"-"+month+"-"+day;
    $(".today").text(today);
    
    var url = 'http://api.tvmaze.com/schedule?';   
    var rules = {

        country: input,
        date: today,

    };

    $.ajax({
        url: url,
        dataType: 'json',
        data: rules,
        type: "GET",
    })
        .done(function (done) {
            console.log(done);
            Result(done);
        })
        .fail(function (fail) {
            console.log(fail);
        });
    };
    function Result(data) {
         $(".tv").empty();
         $(".tvprogram").empty();
        var length = data.length;
        $('.tv').text(`Resultat:`+length);
        $.each(data, function (j, value) {
            $('.tvprogram').append(` <li><a href="${value.show.url}"><img src="${value.show.image.original}" alt="bild" class="tvbild"<br><p>${value.show.name}</p><p>${value.show.schedule.time}</p><p>${value.show.language}</p></a></li> `);
        });
    };




});
