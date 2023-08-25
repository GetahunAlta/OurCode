const Home = document.getElementById("home");
const About = document.getElementById("about");
const Experience = document.getElementById("experience");
const Contact = document.getElementById("contact");
const Paragraph = document.getElementById("para");
const Login = document.getElementById("login");
const Sign = document.getElementById("sign");
const Hobbies = document.getElementById("hobbies");
const greeting = document.getElementById('greeting');
const languageSelect = document.getElementById('language-select');
const Find = document.getElementById("find");
const SMS = document.getElementById("sms");
const Forget = document.getElementById("forget");

function Send_Message(){
  SMS.innerHTML = "We have sent the verification key to your email. So please check your email. If the verification key is not received, resend. Remember the verification key will expire after 10 minutes.";
  Forget.style.display = "none";

  setTimeout(function(){
    Forget.style.display = "block"
    SMS.innerHTML = "Search Age Your account"
  }, 10000);
}

languageSelect.addEventListener('change', function() {
  if (languageSelect.value == 'am'){
    Home.textContent = "ቤት";
    Contact.textContent = "አግኙን";
    Experience.textContent = "ልምድ";
    About.textContent = "ስለ";
    Hobbies.textContent = "የትርፍ ጊዜ ማሳለፊያዎች";
    Login.textContent = "ግባ";
    Sign.textContent = "ተመዝገብ";
    greeting.textContent = "እንኳን ወደ ድረ-ገጼ በደህና መጡ።";
    Paragraph.textContent = "ሰላም ለሁላችሁ። ጌታሁን ነኝ። እኔ የፊት መጨረሻ ድር ጣቢያ ገንቢ ነኝ። የተወሰነ የፕሮግራም ቋንቋ ልምድ አለኝ። እንደ Python፣ JS(JavaScript)፣ Ruby Django የመሳሰሉ። Django የ Python Framework ነው። እና C++ እና Java እሞክራለሁ። በእነዚያ የፕሮግራም ቋንቋዎች ኮምፒተር እና ዌብሳይት ማልዌርን መፍጠር እችላለሁ ። እና ቀላል መተግበሪያ.";
  } else if (languageSelect.value == 'en'){
    Home.textContent = "Home";
    Hobbies.textContent = "Hobbies";
    About.textContent = "About";
    Experience.textContent = "Experience";
    Contact.textContent = "Contact US";
    Login.textContent = "Log In";
    Sign.textContent = "Sign US";
    greeting.textContent = 'Welcame to Our Website.';
    Paragraph.textContent = "Hello everyone. I'm Getahun. I'm Front end Website Developer. and I'm Penetration Tester and Ethical Hacker. I've an Experience some programing Language. such as Python, JS(JavaScript), Ruby Django. Django is Phrem work of Python. and  C++ and Java I'll try.in those programing Language I can meke Computer and Website Mallware. and simple Application.";
  }
});