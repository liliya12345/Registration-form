$(function () {
    var access_token="EAACEdEose0cBAJZB5P5XIJ0H3Tdut83OrZB5IMKZAXPmARwT55ZBXbMSkjD9cSr6RZClxLjhcz92McLHCIvQ7soEE93kkLlrJGRg8emZBc4GMqs9yFZCqql8qXK8NAIDvuld1aVLmYqW";
        
    var url = 'https://graph.facebook.com/1477622625635052/friends?access_token='+access_token;   
    /*var rules = {
        access_token:"EAACEdEose0cBAJZB5P5XIJ0H3Tdut83OrZB5IMKZAXPmARwT55ZBXbMSkjD9cSr6RZClxLjhcz92McLHCIvQ7soEE93kkLlrJGRg8emZBc4GMqs9yFZCqql8qXK8NAIDvuld1aVLmYqW",
        id: "1477622625635052",
        name: "Lili Marlen",
         };*/

    $.ajax({
        url: url,
        dataType: 'jsonp',
       // data: rules,
        type: "GET",
    })
        .done(function (done) {
            console.log(done);
            Result(done);
        })
        .fail(function (fail) {
            console.log(fail);
        });
    
        
});