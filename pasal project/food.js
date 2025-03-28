const p = document.getElementById("btn1");
const q = p.addEventListener("click", removeWelcome);

function removeWelcome() {
  document.getElementById("welcome").classList.add("remove");
  document.body
}
// this is for time
function updateTime() {
  const now = new Date();
  const format = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
  document.getElementById("currentTime").textContent = now.toLocaleTimeString(
    undefined,
    format
  );
}
updateTime();
setInterval(updateTime, 1000);
