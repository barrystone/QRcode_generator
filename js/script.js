const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const showSpinner = () =>
  (document.getElementById('spinner').style.display = 'block');
const hideSpinner = () =>
  (document.getElementById('spinner').style.display = 'none');
const clearUI = () => (qr.innerHTML = '');

const onGenerateSubmit = (e) => {
  e.preventDefault();
  clearUI();

  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;

  if (url === '') {
    alert('請輸入網址 (Please enter a URL)');
  } else {
    showSpinner();
    setTimeout(() => {
      hideSpinner();
      generateQRCode(url, size);
    }, 1000);
  }
};

const generateQRCode = (urlParams, sizeParams) => {
  //Refference:  https://davidshimjs.github.io/qrcodejs/
  const qrcode = new QRCode('qrcode', {
    text: urlParams,
    width: sizeParams,
    height: sizeParams
  });
};

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);
