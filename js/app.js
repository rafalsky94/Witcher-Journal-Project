
const swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true
});



$(() => {

    // Initialize Firebase
  const config = {
    apiKey: "AIzaSyD1jVLr3CjNNwN547s1RWMReTlM3XM0P4E",
    authDomain: "witcher-lore.firebaseapp.com",
    databaseURL: "https://witcher-lore.firebaseio.com",
    projectId: "witcher-lore",
    storageBucket: "witcher-lore.appspot.com",
    messagingSenderId: "1001570573948"
  };
  firebase.initializeApp(config);


  const database = firebase.database();
  const witchersData = database.ref("witchers");
  const signsData = database.ref("signs");



  witchersData.on("value",gotWitcherData, errWitcherData);

  function gotWitcherData(data) {

    const swiperWrapper = $(".swiper-wrapper");
    const swiperSlide = $(".swiper-slide");
    const rightPanel = $(".right-panel");
    const witchers = data.val();
    const keys = Object.keys(witchers);
    
    for (let i = 0; i < swiperSlide.length; i++) {

        $(rightPanel[i]).append("<h2></h2>")
        .append("<p></p>");

        for (let j = 0; j < keys.length; j++) {
            const k = keys[j];
            $(rightPanel[j]).find("h2").text(witchers[k].title);
            $(rightPanel[j]).find("p").text(witchers[k].text);
        }
    }

    

    
  }

  function errWitcherData (data) {
    console.log("error");
    console.log(err);
  }

  signsData.on("value", gotSignsData, errSignsData);

  function gotSignsData(data) {

    const signs = data.val();

        const quen = $(".quen");
        const axii = $(".axii");
        const igni = $(".igni");
        const aard = $(".aard");
        const yrden = $(".yrden");
        const text = $(".text");

        quen.on("click", (e) => {
            text.find("h3").text(signs[0].sign);
            text.find("p").text(signs[0].text);
        });


        igni.on("click", (e) => {
            text.find("h3").text(signs[1].sign);
            text.find("p").text(signs[1].text);

        });

        aard.on("click", (e) => {
            text.find("h3").text(signs[2].sign);
            text.find("p").text(signs[2].text);

        });

        axii.on("click", (e) => {
            text.find("h3").text(signs[3].sign);
            text.find("p").text(signs[3].text);

        });

        yrden.on("click", (e) => {
            text.find("h3").text(signs[4].sign);
            text.find("p").text(signs[4].text);

        });
    

  }
 
  function errSignsData(data) {
      console.log("error");
      console.log(err);
  }

    
    $(document).on('click','.navbar-collapse.in', function(e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    
    });
    
    $("a").on('click', function(event) {
        
            if (this.hash !== "") {
              event.preventDefault();
              let hash = this.hash;
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){
                window.location.hash = hash;
              });
            } 
          });
    

});