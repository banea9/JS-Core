function solve() {
   let sendButton = document.getElementById('send');
   sendButton.addEventListener('click', function () {
      if (document.getElementById('chat_input').value !== '') {
         let newMessage = document.createElement('div');
         newMessage.setAttribute('class', 'message my-message');
         let message = document.getElementById('chat_input').value;
         newMessage.textContent = message;
         document.getElementById('chat_messages').appendChild(newMessage);
         document.getElementById('chat_input').value = '';
      }

   })
}


