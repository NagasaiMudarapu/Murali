var ex = require("express");
var ap = ex();

ap.get('/',function(rq,rs){
    rs.send("Home Page");
    
})

ap.get('/page_1',function(rq,rs){
    rs.send("Page_1");
})

ap.get('/page_2',function(rq,rs){
    rs.send("Page_2");
})


var po = process.env.PORT || 3000

ap.listen(po, function(){
    console.log("Site running on https://localhost:" + po);
});
