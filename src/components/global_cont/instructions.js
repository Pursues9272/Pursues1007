// 自定义指令
// 节流
const throttle = {
  mounted(el, binding) {
    console.log("el=>", el);
    console.log("binding=>", binding);
    el.addEventListener("click", () => {
      if (!el.disabled) {
        console.log("节流=>");
        el.disabled = true;
        setTimeout(() => {
          el.disabled = false;
        }, binding.value || 2000);
      }
    });
  },
  instance: function (el, binding) {
    console.log("els=>", el);
    console.log("bindings=>", binding);
  },
};

const focus = {
  mounted(el) {
    el.focus();
  },
};

export { throttle, focus };
