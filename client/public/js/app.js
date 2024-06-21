document.addEventListener("DOMContentLoaded", function () {
     console.log("DOM fully loaded and parsed");
     
     const chatLogo = document.getElementById("chatLogo");
     const chatWindow = document.getElementById("chatWindow");
     const closeChat = document.getElementById("closeChat");
     const sendButton = document.getElementById("sendButton");
     const userInput = document.getElementById("userInput");
     const chatOutput = document.getElementById("chatOutput");

     chatLogo.addEventListener("click", () => {
          chatWindow.style.display = "block";
     });

     closeChat.addEventListener("click", () => {
          chatWindow.style.display = "none";
     });

     sendButton.addEventListener("click", async () => {
          const prompt = userInput.value;
          userInput.value = "";

          if (prompt.trim()) {
               chatOutput.innerHTML += `<div class="user-message">${prompt}</div>`;

               const response = await fetch("/generate", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ prompt })
               });

               if (!response.ok) {
                    const errorMessage = await response.json();
                    console.error('Error: ', errorMessage.error);
                    return;
               }

               const data = await response.text();
               chatOutput.innerHTML += `<div class="gpt-message">${data}</div>`;
          }
     }); 
});