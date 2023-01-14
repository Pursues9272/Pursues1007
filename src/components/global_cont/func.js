// element-plus失焦问题
export const unFons = function (event) {
  event.target.blur();
  if (event.target.nodeName == "SPAN") {
    event.target.parentNode.blur();
  }
};
