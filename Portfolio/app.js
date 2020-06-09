let  linkDiv= $(".link");

function addImage (){
    let img = "itsworking"
    linkDiv.attr("style", "background-image:" + img);


}

function removeImage(){
    linkDiv.attr("style", "background-image: ;")
}

linkDiv.hover(addImage, removeImage)