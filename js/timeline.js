document.querySelector("#change-link").onclick = function() {
    console.time("Tempo para alterar o link");

    var table = document.querySelector("table"),
        trs = table.querySelectorAll("tr");

    [].forEach.call(trs, function(tr) {
        var tds = tr.querySelectorAll("td");

        [].forEach.call(tds, function(td) {
            var as = td.querySelectorAll("a");

            [].forEach.call(as, function(a) {
                a.classList.toggle("link");
                console.count(a);
            });
        });
    });

    console.timeEnd("Tempo para alterar o link");
}

// document.querySelector("#change-link").onclick = function() {
//     console.time("Tempo para alterar o link mais performatico");

//     var as = document.querySelectorAll("a");

//     [].forEach.call(as, function(a){
//        a.style.color = "red";
//     });

//     console.timeEnd("Tempo para alterar o link mais performatico");
// }