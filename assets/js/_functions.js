let themeButton = document.getElementById('theme');
let bodyElement = document.getElementsByTagName("BODY")[0];

const fn = {
   toLightTheme: () => {
       bodyElement.classList.remove("dark-Mode");
       bodyElement.classList.add("light-Mode");
   },
   toDarkTheme : () => {

   },
   typeWriterEffect : () => {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
   }
};














