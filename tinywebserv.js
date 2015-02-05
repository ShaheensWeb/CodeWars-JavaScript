// tinywebserver.js
//
// A modification of Rod Waldhoff's tiny node.js webserver
// original written in coffeescript
// simplified and made more native-ish by Anil Somayaji
// March 19, 2014
//
// original headers of coffeescript version:
//
// A simple static-file web server implemented as a stand-alone
// Node.js/CoffeeScript app.
//---------------------------------------------------------------------
// For more information, see:
// <https://github.com/rodw/tiny-node.js-webserver>
//---------------------------------------------------------------------
// This program is distributed under the "MIT License".
// (See <http://www.opensource.org/licenses/mit-license.php>.)
//---------------------------------------------------------------------
// Copyright (c) 2012 Rodney Waldhoff
//
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the "Software"), to deal in the Software without restriction,
// including without limitation the rights to use, copy, modify, merge,
// publish, distribute, sublicense, and/or sell copies of the Software,
// and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
// BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/*MODIFICATIONS:
    By: Shaheen Ghazazani (C)
    Carleton University Computer Science Class of 2017
        Core Concepts -> Understanding web dev deeper with this single js file that represents a tiny web server
    Contact: Shaheenghazazani@gmail.com
    website: www.shaiwanghazazani.com

    Note: All i have modified is the comments along the side of each line, all original code from Rodney Waldhoff!
*/
//---------------------------------------------------------------------
//required 3 lines below; 
var path = require('path');
var http = require('http'); //http protocols
var fs = require('fs'); 

var MIME_TYPES = { //types of files accepted 
    'css': 'text/css',
    'gif': 'image/gif',
    'htm': 'text/html',
    'html': 'text/html',
    'ico': 'image/x-icon',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpeg',
    'js': 'text/javascript',
    'json': 'application/json',
    'png': 'image/png',
    'txt': 'text/text'
};

var options = { //hosting is done via options variable
    host: 'localhost', //where we are hosting
    port: 8080, //accesible port
    index: 'index.html', //base loaded html
    docroot: '.' //root for rest of files
};

var get_mime = function(filename) {
    var ext, type;
    for (ext in MIME_TYPES) {
        type = MIME_TYPES[ext];
        if (filename.indexOf(ext, filename.length - ext.length) !== -1) {
            return type;
        }
    }
    return null;
};

 
var respond = function(request, response, status, content, content_type) { //responding to requests
    if (!status) {
        status = 200;
    }

    if (!content_type) {
        content_type = 'text/plain';
    }
    console.log("" + status + "\t" +
                request.method + "\t" + request.url);
    response.writeHead(status, {
        "Content-Type": content_type
    });
    if (content) {
        response.write(content);
    }
    return response.end();
};

var serve_file = function(request, response, requestpath) { //serving user file
    return fs.readFile(requestpath, function(error, content) {
        if (error != null) { //if we hit an error
            console.error("ERROR: Encountered error while processing " + //log to user we have an error
                          request.method + " of \"" + request.url + 
                          "\".", error);
            return respond(request, response, 500); //respond with 500, since error
        } else { 
            return respond(request, response, 200,  //else there was not an error, respond with 200 
                           content, get_mime(requestpath));
        }
    });
};


var return_index = function(request, response, requestpath)  {

    var exists_callback = function(file_exists) {
        if (file_exists) {
            return serve_file(request, response, requestpath);
        } else {
            return respond(request, response, 404);
        }
    }
    
    if (requestpath.substr(-1) !== '/') {
        requestpath += "/";
    }
    requestpath += options.index;
    return fs.exists(requestpath, exists_callback);
}

var request_handler = function(request, response) { //handle user requests
    var requestpath; //were user wishes to go, there path request

    if (request.url.match(/((\.|%2E|%2e)(\.|%2E|%2e))|(~|%7E|%7e)/) != null) { //check if insecure
        console.warn("WARNING: " + request.method + //if so tell user they are trying to access insecure location
                     " of \"" + request.url + 
                     "\" rejected as insecure.");
        return respond(request, response, 403); //and return 403 error
    } else { //else not insecure
        requestpath = path.normalize(path.join(options.docroot, request.url)); //normalize the path
        return fs.exists(requestpath, function(file_exists) { //see if the file exists
            if (file_exists) { //if it exists, execute it and run it if i doesnt find an error with the file
                return fs.stat(requestpath, function(err, stat) {
                    if (err != null) {
                        console.error("ERROR: Encountered error calling" +
                                      "fs.stat on \"" + requestpath + 
                                      "\" while processing " + 
                                      request.method + " of \"" + 
                                      request.url + "\".", err);
                        return respond(request, response, 500);
                    } else { //else it does not have an error, run it, user has correctly accessed path that exists
                        if ((stat != null) && stat.isDirectory()) {
                            return return_index(request, response, requestpath);
                        } else {
                            return serve_file(request, response, requestpath);
                        }
                    }
                });
            } else { //else file does not exist, respond 404
                return respond(request, response, 404);
            }
        });
    }
};

var server = http.createServer(request_handler);

server.listen(options.port, options.host, function() {
    return console.log("Server listening at http://" +
                       options.host + ":" + options.port + "/");
});