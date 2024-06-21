/*
document.getElementById('promptForm').addEventListener('submit', async (e) => {
     e.preventDefault();

     const prompt = document.getElementById('prompt').value;
     const responseText = document.getElementById('responseText');
     document.getElementById('response').style.display = 'block';
     responseText.innerHTML = 'Loading...';

     try {
          const response = await fetch('/generate', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({ prompt: prompt }),
          });

          if (!response.ok) {
               const errorMessage = await response.json();
               console.error('Error:', errorMessage.error);
               return;
          }

          const responseData = await response.text();
          responseText.innerHTML = responseData;
     } catch (error) {
          responseText.innerHTML = 'An error occurred while generating the response.';
     }
});
*/


document.addEventListener("DOMContentLoaded", function () {
     console.log("DOM fully loaded and parsed");
     
     const chatLogo = document.getElementById("chatLogo");
     const chatWindow = document.getElementById("chatWindow");
     const closeChat = document.getElementById("closeChat");
     const sendButton = document.getElementById("sendButton");
     const userInput = document.getElementById("userInput");
     const chatOutput = document.getElementById("chatOutput");

     console.log(123);
     chatLogo.addEventListener("click", () => {
          console.log(456);
          chatWindow.style.display = "block";
     });

     closeChat.addEventListener("click", () => {
          console.log(765);
          chatWindow.style.display = "none";
     });

     sendButton.addEventListener("click", async () => {
          const prompt = userInput.value;
          userInput.value = "";

          if (prompt.trim()) {
               chatOutput.innerHTML += `<div class="user-message">${prompt}</div>`;

               const response = await fetch("/chat", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ prompt })
               });

               const data = await response.json();
               chatOutput.innerHTML += `<div class="gpt-message">${data.response}</div>`;
          }
     }); 
});