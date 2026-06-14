(function(){


    var btns = document.querySelectorAll('.form-check-input');
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function (event) {

            console.log('clicked');
            console.log(event.target.closest(`tr`).style);
            event.target.closest(`tr`).classList.toggle("myclass");



        }, false);
    }



  
})();