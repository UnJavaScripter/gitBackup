// Shell
require('shelljs/global');

// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);

// Arg variables
// The first argument is the port for the server
var port = process.argv[2] || 1337;
// Thse second is the relative path of the repo
var repoPath = process.argv[3] || '.';


var hasGit = which('git');

app.use(express.static(__dirname + ''));

// Http route
app.post('/', function(req, res) {
    if (!hasGit) {
      echo('You don\'t seem to have git installed :/');
      exit(1);
    }else{
        echo('You have git installed!');
        echo('1. cd\'ing into', repoPath);
        cd(repoPath);
        echo(process.cwd());
        echo('2. Fetching all the remotes');
        exec('git fetch --all');
        echo('3. Pulling all the branches');
        exec('git pull --all');
        exec('git status')
    }
});


server.listen(port, function () {
    console.log('Server ready check your repo at port %d', port);
});







