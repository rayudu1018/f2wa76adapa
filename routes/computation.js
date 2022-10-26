var express = require('express');

var router = express.Router();

var value;
/* GET home page. */
router.get('/', function(req, res, next) {

    fake_url = "https://fake.com/path" + req.url

      const url = new URL(fake_url)

      const search_params = url.searchParams

     value =Number(search_params.get("x"))

    if(value == 0)

    value=Math.random()

    res.write("Computes the values for Math.atan and math.exp function."+"\n")

    res.write('Math.atan() applied to '+value+" is "+Math.atan(value,value)+"\n");

    res.write('Math.exp()  applied to '+value+" is "+Math.exp(value)+"\n");

    res.end('Math.expm1() applied to '+value+" is "+Math.expm1(value));

 });

module.exports = router;