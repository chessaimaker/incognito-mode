try{
var url = "https://www.2embed.cc";
fetch("uv/uv.bundle.js")
  .then(x => x.text())
  .then(y => {
    eval(y);
    fetch("uv/uv.config.js")
      .then(a => a.text())
      .then(b => {
        eval(b);
        document.querySelectorAll('button')[0].addEventListener("click", unblock1);

        function unblock1() {
          var i1 = document.getElementById("id1");
          var id1 = i1.value;
          var sea = document.getElementById("season");
          var season = sea.value;
          var epi = document.getElementById("episode");
          var episode = epi.value;
          var url = "" + url + "/embed/imdb/tv?id=" + id1 + "&s=" + season + "&e=" + episode;

          navigator.serviceWorker.register('./uv.sw-handler.js', {
            scope: '/'
          }).then(() => {
            if (!isUrl(url)) {
              url = 'https://google.com/search?q=' + url;
            } else if (!(url.startsWith('https://') || url.startsWith('http://'))) {
              url = 'http://' + url;
            };
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
          };
         }
        document.querySelectorAll('button')[1].addEventListener("click", unblock2);

        function unblock2() {
          var i11 = document.getElementById("id11");
          var id11 = i11.value;
          var quotations11 = "\"\"";
          var url = "" + url + "/embed/imdb/movie?id=" + id11;
           navigator.serviceWorker.register('./uv.sw-handler.js', {
            scope: '/'
          }).then(() => {
            if (!isUrl(url)) {
              url = 'https://google.com/search?q=' + url;
            } else if (!(url.startsWith('https://') || url.startsWith('http://'))) {
              url = 'http://' + url;
            };
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
          };

	}
        document.querySelectorAll('button')[2].addEventListener("click", unblock3);

        function unblock3() {
          var i12 = document.getElementById("id12");
          var id21 = i12.value;
          var sea2 = document.getElementById("season2");
          var season2 = sea2.value;
          var epi2 = document.getElementById("episode2");
          var episode2 = epi2.value;
          var url = "" + url + "/embed/imdb/tv?id=" + id12 + "&s=" + season2 + "&e=" + episode2;

          navigator.serviceWorker.register('./uv.sw-handler.js', {
            scope: '/'
          }).then(() => {
            if (!isUrl(url)) {
              url = 'https://google.com/search?q=' + url;
            } else if (!(url.startsWith('https://') || url.startsWith('http://'))) {
              url = 'http://' + url;
            };
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
          };

        }
        document.querySelectorAll('button')[3].addEventListener("click", unblock4);

        function unblock4() {
          var i22 = document.getElementById("id22");
          var id22 = i22.value;
          var url = "" + url + "/embed/imdb/movie?id=" + id22;
           navigator.serviceWorker.register('./uv.sw-handler.js', {
            scope: '/'
          }).then(() => {
            if (!isUrl(url)) {
              url = 'https://google.com/search?q=' + url;
            } else if (!(url.startsWith('https://') || url.startsWith('http://'))) {
              url = 'http://' + url;
            };
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
          };

        }
  });
});
} catch(e){
	alert(e.message);
}
