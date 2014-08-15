'use strict';

var exec = require('child_process').exec;
/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
var args = {"method":"book_offers","params":[{"taker_pays":{"currency":"USA","issuer":"rhsvfAFxDYnXBZ7eNLtXvC73wBdRgnv6wR"},"taker_gets" :{"currency" :"MXA","issuer" :"rhsvfAFxDYnXBZ7eNLtXvC73wBdRgnv6wR"}}]};

  console.log('curl -d \''+ JSON.stringify(args) +'\' http://s1.ripple.com:51234')
        exec('curl -d \''+JSON.stringify(args)+'\' http://s1.ripple.com:51234', function(err, status) {
                console.log(err)
                try{
                        status = JSON.parse(status);
                        console.log(status)
                        res.json(status.result.offers)
                        console.log(req.url + "----done")
                }catch(err) {
                        console.log("Data Loaded But......")
                        console.log(req.url)
                        console.log(err)
                        res.json({err: err})
                }
        });
};

exports.totalCurrency = function(req, res) {
var args = {"method":"account_lines","params":[{"account":"rhsvfAFxDYnXBZ7eNLtXvC73wBdRgnv6wR"}]};

   console.log('curl -d \''+ JSON.stringify(args) +'\' http://s1.ripple.com:51234')
        exec('curl -d \''+JSON.stringify(args)+'\' http://s1.ripple.com:51234', function(err, status) {
                console.log(err)
                try{
                        status = JSON.parse(status);
                        console.log(status.result)
                        res.json(status.result.lines)
                        console.log(req.url + "----done")
                }catch(err) {
                        console.log("Data Loaded But......")
                        console.log(req.url)
                        console.log(err)
                        res.json({err: err})
                }
        });
};

exports.message = function(req, res) {
  res.send('Hello World');
};