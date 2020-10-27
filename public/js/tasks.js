let group = [];
let index = "";

function add() {
  let textScreen = window.document.querySelector("#textbox");
  text = window.document.querySelector("#search").value;
  input = document.createElement("input")
  //let text = document.createElement("text")
  //var addP = window.document.getElementById('primor')
  //length: usado normalmente para texto
  //value:
  if (text.length) {
    group.push(text);
    console.log(group);

    index = group.findIndex((item) => item == text);
    textInScreen(index);
  }

  function textInScreen(index) {
    textScreen.innerHtml = ``;
    console.log("limpei");
    let element = group[index];
    textScreen.innerHTML += `${element} <br>`;
    text.value = '';
    // if(array.length > 0) {
    //   for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
    //     textScreen.innerHTML += `${element} <br>`
    //     text.value= ``
    //   }
    // }
  }
}
