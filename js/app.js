

console.log('wired up!')
console.log($)

var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}

var legiSlators = document.querySelector(".legislator-list")

var putLegislatesOnPage = function(congressList){
console.log(congressList)

forEach(congressList.results , function(theMan){
  console.log(theMan.first_name + ' ' + theMan.last_name, theMan.oc_email)
  var taxMan =     '<div class="col-sm-4 col-md-4">'
        taxMan +=       '<div class="thumbnail thumb-of-theMan">'
        taxMan +=       '<h2>' + theMan.first_name + ' ' + theMan.last_name + '</h2>'
        taxMan +=         '<div class="caption">'
        taxMan +=           '<h3>' + theMan.title +" --"+ theMan.party +"-"+theMan.state_name + '</h3>'
        taxMan +=           '<ul>'
        taxMan +=           '<li>' + "e-mail:" +' '+ theMan.oc_email + '</li>'
        taxMan +=           '<li>' + "website:" +' '+ theMan.website + '</li>'
        taxMan +=           '<li>' + "facebook:" +' '+ theMan.facebook_id + '</li>'
        taxMan +=           '<li>' + "twitter:" +' '+ theMan.twitter_id + '</li>'
        taxMan +=           '</ul>'
        taxMan +=         '<h5>' + "TermEnd"+theMan.term_end + '</h5>'
        taxMan +=         '</div>'
        taxMan +=       '</div>'
        taxMan +=     '</div>'

        legiSlators.innerHTML += taxMan
})

}







$.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=4efdfcf3ad7e49e5be2528edd4889271').then(putLegislatesOnPage)

console.log("anybody?")
