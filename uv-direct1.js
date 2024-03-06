var int;

function unblockId(id, id2) {
  fetch("uv/uv.bundle.js")
    .then(x => x.text())
    .then(y => {
      eval(y);
      fetch("uv/uv.config.js")
        .then(a => a.text())
        .then(b => {
          eval(b);
          document.querySelector('form').addEventListener("submit", function(event){
            event.preventDefault();
            unblock();
          });

          function unblock() {
            
            navigator.serviceWorker.register('./uv.sw-handler.js', {
              scope: '/incognito-mode/'
            }).then(() => {
              let url = document.querySelector(id).value;
              if (document.querySelector(id2).value == "DuckDuckGo") {
                if (!isUrl(url)) {
                  url = 'https://duckduckgo.com/?q=' + url + '&va=j&t=hy&ia=web' + url;
                }
              }
              if (document.querySelector(id2).value == "Startpage") {
                if (!isUrl(url)) {
                  url = 'https://www.startpage.com/sp/search?sc=vMaiwTlP3EtK02&query=' + url;
                }
              } else if (document.querySelector(id2).value == "Google") {
                if (!isUrl(url)) {
                  url = 'https://google.com/search?q=' + url;
                }
              } else if (document.querySelector(id2).value == "Yahoo") {
                if (!isUrl(url)) {
                  url = 'https://search.yahoo.com/search?p=' + url;
                }
              } else if (document.querySelector(id2).value == "Bing") {
                if (!isUrl(url)) {
                  url = 'https://bing.com/search?q=' + url;
                }
              } else if (!(url.startsWith('https://') || url.startsWith('http://'))) {
                url = 'http://' + url;
              };
              window.location.href = __uv$config.prefix + __uv$config.encodeUrl(
                url
              );
            });
          }

          function isUrl(val = '') {
            if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') {
              return true;
            }
            return false;
          };
        });
    });
};
