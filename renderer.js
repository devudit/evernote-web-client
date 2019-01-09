// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
onload = () => {
    const webview = document.querySelector('webview')
    const indicator = document.querySelector('.spinner-wrapper')

    const loadstart = () => {
        indicator.style.display = "block";
    }

    const loadstop = () => {
        indicator.style.display = "none";
    }

    webview.addEventListener('did-start-loading', loadstart)
    webview.addEventListener('did-stop-loading', loadstop)

    alert('sdad'+webview.height);
}