var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one' : {
    title: 'articleone | shakti',
    heading: 'Articleone',
    date: '4 oct',
    content: `<p>
                        This is my first article.
            </p>`
    
},
'article-two' : {
     title: 'articletwo | shakti',
    heading: 'Articletwo',
    date: '5 oct',
    content: `<p>
                        This is my second article.
            </p>`
    
    
},
'article-three' : {
     title: 'articlethree | shakti',
    heading: 'Articlethree',
    date: '6 oct',
    content: `<p>
                        This is my third article.
            </p>`
    
}
};


function createTemplate(data) {
    title = data.title;
    heading = data.heading;
    date = data.date;
    content = data.content;
var htmlTemplate=`
  <html>
 <head>
     <title>
        ${title}
         </title>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
        </head> 
    <body>
        <div class="container">
                <div>
                    <a href='/'> HOME </a>
                </div>
                <hr/>
                <h3>
                     ${heading}
                    </h3>
                <div>
                    ${date}
                </div>   
                <div>
                    <p>
                       ${content}
                    </p>
                    </div>
                      
          </div> 
          </body>
        
</html>
`;
 return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function (req, res) {
var articleName = req.params.articleName;    
 res.send(createTemplate(articles[articleName])); 
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
