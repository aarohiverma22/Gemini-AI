async function generateInfo() {
  //const input= document.getElementById("text").value;
  console.log(text.value);
  const data = { contents: [{ parts: [{ text: text.value }] }] };
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAKQGPkX4Z3Dp_CItiPgGQuz48UY4RO3OE",
    {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  console.log("object");
  console.log(response);
  console.log(result.candidates[0].content.parts[0].text);
  //get input value-------------
  const userInput = text.value;
  //display user input in second section---------------------
  second.innerHTML = userInput;

  //create div------
  //Display API response--------------
  const apiMessage = document.createElement("div");
  apiMessage.className = "message";
  apiMessage.innerHTML = marked.parse(
    result.candidates[0].content.parts[0].text
  );
  card.appendChild(apiMessage);
  //scroll to the latest message
  card.scrollTop = card.scrollHeight;

  const finalResponse = result.candidates[0].content.parts[0].text;
  // card.textContent= finalResponse;
  card.innerText = finalResponse;
}
