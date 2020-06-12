/*let  linkDiv= $(".link");
let img = []       

// test function    

function addImage (){
    let img = "itsworking"
    linkDiv.attr("style", "background-image:" + img);


}
// function to remove image when hover over

function removeImage(){
    linkDiv.attr("style", "background-image: ;")
}

linkDiv.hover(addImage, removeImage)

let linkDiv = $(".link");

function addImage () {
    

    let whichDiv = linkDiv.attr("id")

    if (whichDiv == "link-1") {
        linkDiv.attr("style", "background-image: " + img[0])
    } else if (whichDiv == "link-2") {
        linkDiv.attr("style", "background-image: " + img[1])
    } else{ 
        (whichDiv == "link-3") 
        linkDiv.attr("style", "background-image: " + img[2])
    }
}

function removeImage () {
    linkDiv.attr("style", "background-image: ;")
}

linkDiv.hover(addImage, removeImage)*/

let $flexDivs = $('.content-container > div');

$flexDivs.on('click', (e) => {
   
    if ($(e.target).hasClass('expand') || $(e.target).parents().hasClass("expand")) {
     console.log('hello')
        $flexDivs.removeClass('expand')
     $flexDivs.removeClass('contract');
    } else {
     $flexDivs.removeClass('expand');
     $(e.target).addClass('expand');
     $flexDivs.addClass('contract');
    }
  
 });
// google sheets

 let sheetUrl = "https://docs.google.com/spreadsheets/d/1YGGdf8J8okNNWqFM1_S6mfg3JzUrirOAhRaEIyqBGRc/edit?usp=sharing";
 let sheetAsJSON = "https://spreadsheets.google.com/feeds/list/1YGGdf8J8okNNWqFM1_S6mfg3JzUrirOAhRaEIyqBGRc/od6/public/values?alt=json";


 $.ajax({ url: sheetAsJSON })
   .then((data) => {
    console.log("data", data);

    // data.feed.entry is the array that contains our objects so we can use .map()
    // to iterate over the array 
    let projects = data.feed.entry.map((project) => {
      // here we return a new object with keys names of our own choosing and the needed values
      return {
        title: project.gsx$title.$t,
        image: project.gsx$image.$t,
        description: project.gsx$description.$t,
        url: project.gsx$url.$t
      };
    });
    app(projects)
  }) 

  function app(projects) {
      for(let i=0; i< projects.length; i++){
          const $div = $("<div>").html(`
            <p>${projects[i].title}</p>
            <a href="${projects[i].url}" target="_blank">
            <img src=${projects[i].image} style:"display:none;" class="projects"></a>
          `)
          $(".all-projects").append($div)
          
      }
  }
  
  // nav bar functions

  const $button = $('nav button, nav a');
  $button.on("click", function () {
      $('nav ul').fadeToggle(300)
      $('nav button').toggleClass('open')
  })