function showDiv(id, id2, id3) {
  const div  = document.getElementById(id);
  const div2 = id2 ? document.getElementById(id2) : null;
  const div3 = id3 ? document.getElementById(id3) : null;

  const anyVisible =
    (div  && div.style.display  === "block") ||
    (div2 && div2.style.display === "block") ||
    (div3 && div3.style.display === "block");

  if (anyVisible) {
    if (div)  div.style.display  = "none";
  } else {
    if (div)  div.style.display  = "block";
  }
}

function isMobile() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function dragElement(elmnt) {
  // Skip drag on mobile/touch — panels are in normal document flow there
  if (isMobile()) return;

  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  const handle = document.getElementById(elmnt.id + "Header");
  if (handle) {
    handle.onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup   = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top  = (elmnt.offsetTop  - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup   = null;
    document.onmousemove = null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const info    = document.getElementById("infoDiv");
  const trabajo = document.getElementById("trabajoDiv");
  const me      = document.getElementById("meDiv");
  if (info)    dragElement(info);
  if (trabajo) dragElement(trabajo);
  if (me)      dragElement(me);
});
