
const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+375(99) 999-99-99");
im.mask(selector);
new JustValidate('.form', {
  rules: {
   
    phone: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 9
      }
    },
  },
  messages: {
    phone: {
      required: 'Недопустимый формат',
      function: 'Недопустимый формат',
    }
  },
});
