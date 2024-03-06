var blocked = true;
var embedurl = "https://www.2embed.cc";
        function unblock1() {
          var i1 = document.getElementById("id1");
          var id1 = i1.value;
          var sea = document.getElementById("season");
          var season = sea.value;
          var epi = document.getElementById("episode");
          var episode = epi.value;
          var url = "" + embedurl + "/embed/imdb/tv?id=" + id1 + "&s=" + season + "&e=" + episode;
if(blocked){
          navigator.serviceWorker.register('./uv.sw-handler.js', {
            scope: '/incognito-mode/'
          }).then(() => {
            if (!isUrl(url)) {
              url = 'https://google.com/search?q=' + url;
            } else if (!(url.startsWith('https://') || url.startsWith('http://'))) {
              url = 'http://' + url;
            }
            document.querySelector("iframe").src = __uv$config.prefix + __uv$config.encodeUrl(
              url
            );
            document.querySelector("iframe").style.display = "block";
          });


          function isUrl(val = '') {
            if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') {
              return true;
            }
            return false;
          }
         }
         else{
            document.querySelector("iframe").src = url;
            document.querySelector("iframe").style.display = "block";
}
}

        function unblock2() {
          var i11 = document.getElementById("id11");
          var id11 = i11.value;
          var quotations11 = "\"\"";
          var url = "" + embedurl + "/embed/imdb/movie?id=" + id11;
if(blocked){
           navigator.serviceWorker.register('./uv.sw-handler.js', {
            scope: '/'
          }).then(() => {
            if (!isUrl(url)) {
              url = 'https://google.com/search?q=' + url;
            } else if (!(url.startsWith('https://') || url.startsWith('http://'))) {
              url = 'http://' + url;
            }
            document.querySelector("iframe").src = __uv$config.prefix + __uv$config.encodeUrl(
              url
            );
            document.querySelector("iframe").style.display = "block";
          });

		
	  function isUrl(val = '') {
            if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') {
              return true;
            }
            return false;
          }
} else{
document.querySelector("iframe").src = url;
            document.querySelector("iframe").style.display = "block";
}
	}

        function unblock3() {
          var i12 = document.getElementById("id12");
          var id21 = i12.value;
          var sea2 = document.getElementById("season2");
          var season2 = sea2.value;
          var epi2 = document.getElementById("episode2");
          var episode2 = epi2.value;
          var url = "" + embedurl + "/embed/imdb/tv?id=" + id12 + "&s=" + season2 + "&e=" + episode2;
if(blocked){
          navigator.serviceWorker.register('./uv.sw-handler.js', {
            scope: '/'
          }).then(() => {
            if (!isUrl(url)) {
              url = 'https://google.com/search?q=' + url;
            } else if (!(url.startsWith('https://') || url.startsWith('http://'))) {
              url = 'http://' + url;
            }
            document.querySelector("iframe").src = __uv$config.prefix + __uv$config.encodeUrl(
              url
            );
            document.querySelector("iframe").style.display = "block";
          });
          function isUrl(val = '') {
            if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') {
              return true;
            }
            return false;
          }
} else{
            document.querySelector("iframe").src = url;
            document.querySelector("iframe").style.display = "block";
}
        }

        function unblock4() {
          var i22 = document.getElementById("id22");
          var id22 = i22.value;
          var url = "" + embedurl + "/embed/imdb/movie?id=" + id22;
if(blocked){
           navigator.serviceWorker.register('./uv.sw-handler.js', {
            scope: '/'
          }).then(() => {
            if (!isUrl(url)) {
              url = 'https://google.com/search?q=' + url;
            } else if (!(url.startsWith('https://') || url.startsWith('http://'))) {
              url = 'http://' + url;
            }
            document.querySelector("iframe").src = __uv$config.prefix + __uv$config.encodeUrl(
              url
            );
            document.querySelector("iframe").style.display = "block";
          });


          function isUrl(val = '') {
            if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') {
              return true;
            }
            return false;
          }
} else{
            document.querySelector("iframe").src = url;
            document.querySelector("iframe").style.display = "block";
}
        }
                document.querySelectorAll('button')[0].addEventListener("click", unblock1);
                        document.querySelectorAll('button')[1].addEventListener("click", unblock2);
        document.querySelectorAll('button')[2].addEventListener("click", unblock3);
                document.querySelectorAll('button')[3].addEventListener("click", unblock4);
