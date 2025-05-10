
const chatBtn = document.getElementById("chat-button");
const chatSection = document.getElementById("chat");
const chatWindow = document.getElementById("chat-window");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

chatBtn.addEventListener("click", () => {
  chatSection.classList.remove("hidden");
  chatBtn.style.display = "none";
});

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = userInput.value;
  appendMessage("user", message);
  userInput.value = "";

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = await response.json();
  appendMessage("ai", data.reply);
});

function appendMessage(sender, text) {
  const bubble = document.createElement("div");
  bubble.classList.add("chat-bubble", sender);
  bubble.innerText = text;
  chatWindow.appendChild(bubble);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
