const secretPassword = "32011";

const lockScreen = document.getElementById("lockScreen");
const websiteContent = document.getElementById("websiteContent");
const passwordInput = document.getElementById("passwordInput");
const unlockButton = document.getElementById("unlockButton");
const passwordMessage = document.getElementById("passwordMessage");

function unlockWebsite() {
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === secretPassword) {
    lockScreen.classList.add("hidden");
    websiteContent.classList.remove("hidden");
    passwordMessage.textContent = "";
  } else {
    passwordMessage.textContent = "Wrong password! Try again, little star. ✦";
    passwordInput.value = "";
    passwordInput.focus();
    
    // (Optional) အကယ်၍ CSS မှာ shake animation ထည့်ထားချင်ရင် ဒီအတိုင်းသုံးလို့ရပါတယ်
    passwordInput.classList.add("shake");
    setTimeout(() => {
      passwordInput.classList.remove("shake");
    }, 500);
  }
}

// Event Listeners
unlockButton.addEventListener("click", unlockWebsite);

passwordInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    unlockWebsite();
  }
});

// Make a Wish Interactive Feature
const sendWishBtn = document.getElementById("sendWishBtn");
const userWishInput = document.getElementById("userWishInput");
const wishResult = document.getElementById("wishResult");
const wishDisplayText = document.getElementById("wishDisplayText");

if (sendWishBtn) {
  sendWishBtn.addEventListener("click", function () {
    const wishText = userWishInput.value.trim();

    if (wishText !== "") {
      wishDisplayText.textContent = `"${wishText}"`;
      wishResult.classList.remove("hidden");
      userWishInput.value = ""; // Input Box ကို ရှင်းထုတ်လိုက်မည်
      
      // Wish ပြပြီးရင် Button လေးကို Disable လုပ်ထားရန် (သို့) စာသားပြောင်းရန်
      sendWishBtn.textContent = "Wish Sent! ✨";
      sendWishBtn.style.opacity = "0.7";
      sendWishBtn.disabled = true;
    } else {
      alert("Please write a wish first before sending it to the stars! 🌟");
    }
  });
}
// Music Play Section
const playMusicButton = document.getElementById('playMusicButton');
const playIcon = document.getElementById('playIcon');
const vinylRecord = document.getElementById('vinylRecord');
const musicMessage = document.getElementById('musicMessage');

// Audio Element Setup
const audio = new Audio('birthday_song.mp3');
audio.loop = true;

if (playMusicButton) {
  playMusicButton.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().then(() => {
        if (vinylRecord) vinylRecord.classList.add('playing');
        if (playIcon) playIcon.textContent = '❚❚';
        if (musicMessage) musicMessage.textContent = 'Playing your song... ♡';
      }).catch(error => {
        console.log("Audio Play Error: ", error);
        alert("Audio file ကို ရှာမတွေ့ပါရှင်။ 'birthday_song.mp3' နာမည် မှန်မမှန် ပြန်စစ်ပေးပါနော်။");
      });
    } else {
      audio.pause();
      if (vinylRecord) vinylRecord.classList.remove('playing');
      if (playIcon) playIcon.textContent = '▶';
      if (musicMessage) musicMessage.textContent = "Press play when you're ready. ♡";
    }
  });
}