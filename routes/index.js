var express = require('express');
var router = express.Router();
var hash = require('object-hash');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/execute', function(req, res, next) {
  const numbers = new Array(1000000).fill(0);
  for(let i=0; i< numbers.length; i++) {
    numbers[i] = Math.round(Math.random() * 100000);
  }
  var result = {};
  result.h1 = hash(numbers);
  var a = numbers[10];
  numbers[10] = numbers[20];
  numbers[20] = a;
  result.h2 = hash(numbers);
//   const
//     { spawnSync } = require( 'child_process' ),
//     ls = spawnSync( 'ls', [ '-lh', '/usr' ] );
//
// console.log( `stderr: ${ls.stderr.toString()}` );
// console.log( `stdout: ${ls.stdout.toString()}` );
  // res.send(ls.stdout.toString());
  res.json(result);
});

module.exports = router;
