document.getElementById('promptForm').addEventListener('submit', async (e) => {
     e.preventDefault();

     const prompt = document.getElementById('prompt').value;
     const responseText = document.getElementById('responseText');
     responseText.textContent = 'Loading...';

     try {
          const response = await fetch('/generate', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({ prompt: prompt }),
          });

          const data = await response.json();
          responseText.textContent = data.text;
     } catch (error) {
          responseText.textContent = 'An error occurred while generating the response.';
     }
});