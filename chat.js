function Start() {
  let res_msg = document.createElement("div");
  res_msg.innerHTML = " Hello Hemant Welcom to the ChatRoom.";
  res_msg.setAttribute("class", "left");

  document.getElementById("mes_area").appendChild(res_msg);
  let res_msg2 = document.createElement("div");
  res_msg2.innerHTML = " Hello Diwaker Welcom to the ChatRoom.";
  res_msg2.setAttribute("class", "right");

  document.getElementById("mes_area2").appendChild(res_msg2);
}
// document.getElementById("send").addEventListener("click", async (e) => {
//   e.preventDefault();
//   var req = document.getElementById("inputText").value;
//   var res = document.getElementById("inputText").value;
//   console.log(req);
//   // if (req == undefined || req == "") {
//   // } else {
//   //   var res = "";
//   //   await axios
//   //     .get(`https://api.monkedev.com/fun/chat?msg=${req}`)
//   //     .then((data) => {
//   //       res = JSON.stringify(data.data.response);
//   //     });

//   let msg_req = document.createElement("div");
//   let msg_res = document.createElement("div");

//   let con1 = document.createElement("div");
//   let con2 = document.createElement("div");

//   con1.setAttribute("class", "msgCon1");
//   con2.setAttribute("class", "msgCon2");

//   msg_req.innerHTML = req;
//   msg_res.innerHTML = res;

//   msg_req.setAttribute("class", "right");
//   msg_res.setAttribute("class", "left");

//   let message = document.getElementById("mes_area");
//   let message2 = document.getElementById("mes_area2");
//   console.log(message);
//   message.appendChild(con1);
//   message.appendChild(con2);

//   con1.appendChild(msg_req);
//   con2.appendChild(msg_res);

//   document.getElementById("inputText").value = "";

//   function scroll() {
//     var scrollMsg = document.getElementById("mes_area");
//     scrollMsg.scrollTop = scrollMsg.scrollHeight;
//   }
//   scroll();
// });

// document.getElementById("send").addEventListener("click", async (e) => {
//   e.preventDefault();
//   var res = document.getElementById("inputText").value;
//   console.log(res);
//   let msg_res = document.createElement("div");

//   let con1 = document.createElement("div");

//   con1.setAttribute("class", "msgCon1");

//   msg_res.innerHTML = res;

//   msg_res.setAttribute("class", "left");

//   let message2 = document.getElementById("mes_area2", "mes_area");
//   console.log(message2);
//   message2.appendChild(con1);
//   con1.appendChild(msg_res);

//   document.getElementById("inputText").value = "";

//   function scroll() {
//     var scrollMsg = document.getElementById("mes_area");
//     scrollMsg.scrollTop = scrollMsg.scrollHeight;
//   }
//   scroll();
// });

// document.getElementById("send2").addEventListener("click", async (e) => {
//   e.preventDefault();
//   var res = document.getElementById("inputText2").value;
//   console.log(res);

//   let msg_req = document.createElement("div");

//   let con2 = document.createElement("div");

//   con2.setAttribute("class", "msgCon2");
//   msg_req.setAttribute("class", "right");

//   msg_req.innerHTML = res;

//   let message = document.getElementById("mes_area");
//   let messageArea = document.getElementById("mes_area2");

//   message.appendChild(con2);
//   con2.appendChild(msg_req);

//   messageArea.appendChild(col2);
//   col2.appendChild(msg_req);

//   document.getElementById("inputText2").value = "";

//   function scroll() {
//     var scrollMsg = document.getElementById("mes_area2");
//     scrollMsg.scrollTop = scrollMsg.scrollHeight;
//   }
//   scroll();
// });

document.getElementById("send").addEventListener("click", async (e) => {
  e.preventDefault();
  var req = document.getElementById("inputText").value;
  var res = document.getElementById("inputText").value;
  console.log(req);

  let msg_req = document.createElement("div");
  let msg_res = document.createElement("div");

  let con1 = document.createElement("div");
  let con2 = document.createElement("div");

  con1.setAttribute("class", "msgCon1");
  con2.setAttribute("class", "msgCon2");

  msg_req.innerHTML = req;
  msg_res.innerHTML = res;

  msg_req.setAttribute("class", "right");
  msg_res.setAttribute("class", "left");

  let message = document.getElementById("mes_area");
  let message2 = document.getElementById("mes_area2");
  console.log(message);
  message.appendChild(con1);
  message2.appendChild(con2);

  con1.appendChild(msg_req);
  con2.appendChild(msg_res);

  document.getElementById("inputText").value = "";

  function scroll() {
    var scrollMsg = document.getElementById("mes_area");
    scrollMsg.scrollTop = scrollMsg.scrollHeight;
  }
  scroll();
});

document.getElementById("send2").addEventListener("click", async (e) => {
  e.preventDefault();
  var req = document.getElementById("inputText2").value;
  var res = document.getElementById("inputText2").value;
  console.log(req);
  // if (req == undefined || req == "") {
  // } else {
  //   var res = "";
  //   await axios
  //     .get(`https://api.monkedev.com/fun/chat?msg=${req}`)
  //     .then((data) => {
  //       res = JSON.stringify(data.data.response);
  //     });

  let msg_req = document.createElement("div");
  let msg_res = document.createElement("div");

  let con1 = document.createElement("div");
  let con2 = document.createElement("div");

  con1.setAttribute("class", "msgCon1");
  con2.setAttribute("class", "msgCon2");

  msg_req.innerHTML = req;
  msg_res.innerHTML = res;

  msg_req.setAttribute("class", "right");
  msg_res.setAttribute("class", "left");

  let message = document.getElementById("mes_area2");
  let message2 = document.getElementById("mes_area");
  console.log(message);
  message.appendChild(con1);
  message2.appendChild(con2);

  con1.appendChild(msg_req);
  con2.appendChild(msg_res);

  document.getElementById("inputText2").value = "";

  function scroll() {
    var scrollMsg = document.getElementById("mes_area2");
    scrollMsg.scrollTop = scrollMsg.scrollHeight;
  }
  scroll();
});
