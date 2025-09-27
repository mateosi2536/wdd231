function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param) || '';
}
document.getElementById('firstName').textContent = getQueryParam('firstName');
document.getElementById('lastName').textContent = getQueryParam('lastName');
document.getElementById('email').textContent = getQueryParam('email');
document.getElementById('mobile').textContent = getQueryParam('mobile');
document.getElementById('orgName').textContent = getQueryParam('orgName');
document.getElementById('timestamp').textContent = getQueryParam('timestamp');