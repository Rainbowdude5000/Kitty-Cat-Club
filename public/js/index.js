const form = document.querySelector('form');
const input = document.querySelector('input');
const savedEngine = localStorage.getItem("searchengine");
function frameLoad(url) {


    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        document.getElementById("pf").src=__uv$config.prefix + __uv$config.encodeUrl(url);
    });
}
if(form) {
form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = savedEngine + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});
}

function openApp(url) {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl(url);
    });

}

function isUrl(val = "") {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  )
    return true;
  return false;
}
