const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//&&((%'%'BA


function init() {
  // Write your JavaScript code inside the init() function

  let index =0;
  const test = document.querySelector('body')
  test.addEventListener('keydown', function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    

    if(key === alphabet[index]){
      index++;

      if(index === alphabet.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })

}
