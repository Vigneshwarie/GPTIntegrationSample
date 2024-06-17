document.getElementById('promptForm').addEventListener('submit', async (e) => {
     e.preventDefault();

     const prompt = document.getElementById('prompt').value;
     const responseText = document.getElementById('responseText');
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