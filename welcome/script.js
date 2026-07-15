const greeting = document.getElementById("greeting");

function updateGreeting(){

    const hour = new Date().getHours();

    if(hour >= 5 && hour < 12){

        greeting.innerHTML = "🌅 Good Morning";

    }
    else if(hour >= 12 && hour < 17){

        greeting.innerHTML = "☀️ Good Afternoon";

    }
    else if(hour >= 17 && hour < 20){

        greeting.innerHTML = "🌇 Good Evening";

    }
    else{

        greeting.innerHTML = "🌙 Good Night";

    }

}

updateGreeting();
const button = document.getElementById("submitBtn");
const input = document.getElementById("username");

button.addEventListener("click", () => {

    const name = input.value.trim();

    if(name === ""){
        alert("Please enter your name.");
        input.focus();
        return;
    }

    localStorage.setItem("userName", name);
    fetch("/save-user", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: name
    })
})
.then(res => res.json())
.then(data => {
    console.log(data);
});

    button.disabled = true;
    button.innerHTML = `
        <span class="spinner"></span>
        Loading...
    `;

    setTimeout(() => {

        // Button واپس Normal
        button.innerHTML = "Continue";
        button.disabled = false;

        // Popup میں User کا Name
        document.getElementById("welcomeUser").innerHTML =
        "✅ Welcome, " + name + "!";

        // Popup Show
        document.getElementById("successPopup").style.display = "flex";

        // 1.5 سیکنڈ بعد Portfolio
    setTimeout(() => {

       if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
) {
    // Express Server
    window.location.href = "/index.html";
} else {
    // GitHub Pages
    window.location.href = "../Public/index.html";
}

        }, 2000);

    }, 1000);

});
function updateDateTime(){

    const now = new Date();

    // Time
    const time = now.toLocaleTimeString("en-US",{
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"
    });

    // Date
    const date = now.toLocaleDateString("en-US",{
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"
    });

    document.getElementById("clock").innerHTML = "🕒 " + time;
    document.getElementById("date").innerHTML = "📅 " + date;
}

updateDateTime();

setInterval(updateDateTime,1000);
input.addEventListener("keypress",function(e){

if(e.key==="Enter"){

button.click();

}

});
