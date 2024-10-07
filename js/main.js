//document.querySelector('.modal').classList.add('visible')
const getCookie = (cname) => {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
  
  const modal = document.querySelector(".modal");
  
  /* 1. Napisz skrypt, który po załadowaniu dokumentu odczeka 10 sekund, po czym zmieni widoczność modala - wyświetli go */
  /* 4. Do skryptu z punktu 1 dodaj warunke, który sprawdza czy w cookies jest informacja o tym, czy modal był wyświetlony. 
  Wyświetlaj go tylko jeśli jej nie ma. */
  const showModal = () => {
    modal.classList.add("visible");
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const cookieValue = getCookie("modalClosed");
  
    if (cookieValue === "true") return;
  
    setTimeout(showModal, 500);
  });
  
  
  /* 2. Napisz skrypt, który po klinięciu w przycisk zamknij ukryje modal */
  /* 3. Do powyższego skryptu dodaj zapisanie w cookies flagi, mówiącej że modal już został wyświetlony */
  
  const closeButton = document.getElementsByClassName("close-button")[0];
  
  const close = () => {
    modal.classList.remove("visible");
    document.cookie = "modalClosed=true";
  };
  
  closeButton.addEventListener("click", close);

  
  /* 5. Zablokuj wysyłanie formularza, jeśli w polu emial nie ma prawidłowego adresu email 
  - użyj do tego opowiedniego wyrażenia regularnego. Wyświetl pod polem komunkat o błędzie. */
  
  /* const useState = [errors, setErrors] {
      email: "",
  };
  
  const [signUpMessage, setSignUpMessage] = useState('');
  const [signUpDone, setSignUpDone] = useState(false);
  
  const validate = () => {
      let validationErrors = {
          email: false,
      };
  
      if(!/^[A-Z0-9._%+-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      validationErrors.email = true;
      setErrors((prevErrors) => {
          return {
              ...prevErrors,
              email: "there is no valid email",
          };
      });
      } else {
      validationErrors.email = false;
      setErrors((prevErrors) => {
          return {
              ...prevErrors,
              email: "",
          };
      });
  };
  } */
  
/*   function init() {
    const formEl = document.querySelector('email');
    if (formEl) {
        formEl.addEventListener('submit', handleSubmit);
        const ulEl = document.querySelector('ul');
    }
    function handleSubmit(e) {
        e.preventDefault();
        const errors = [];
        ulEl.innerHTML = '';
    if (errors.length === 0) {
        alert('Twój email został zapisany do newslettera!');
        Array.from(formEl.elements).forEach(function(el) {
            el.value = ''
        })
    } else {
        errors.forEach(function (text) {
            const liEl = document.createElement('li');
            liEl.innerText = text;
            ulEl.appendChild(liEl);
        });
  }
}
}; */
/*     const form = document.querySelector("form");
    const input = form.querySelector("input");
    
    form.addEventListener("submit", e => {
        e.preventDefault();
        if email.isValidEmail(email)) {
            System.out.println(email + " is a valid email address.");
        } else {
            System.out.println(email + " is not a valid email address.");
        } */
        

/*         const inputEmail = form.querySelector("input[name=email]");
        
        
        function testFieldEmail() {
            const regEmail = /\S+@\S+\.\S+/;
            return regEmail.test(inputEmail.value);
        }
        
        inputEmail.addEventListener("input", () => {
            inputEmail.classList.toggle("is-invalid", !testFieldEmail());
        });
        
        form.addEventListener("submit", e => {
            e.preventDefault();
        
            let formErrors = [];
        
            for (let field of [inputEmail]) {
                field.classList.remove("is-invalid");
            }
        
            if (!testFieldEmail()) {
                formErrors.push("Wypełnij poprawnie pole z emailem");
                inputEmail.classList.add("is-invalid");
            }
        
            if (!formErrors.length) {
                form.submit();
            } 
        }); */
        function submit() {
            console.log( "click" );
        } 
        document.querySelector('.modal').addEventListener("Zapisz się",submit );

        const validateEmail = (email) => {
            return email.match(
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
          };
          
          const validate = () => {
            const $result = $('#result');
            const email = $('#email').val();
            $result.text('');
          
            if(validateEmail(email)){
              $result.text(email + ' is valid.');
              $result.css('color', 'green');
            } else{
              $result.text(email + ' is invalid.');
              $result.css('color', 'red');
            }
            return false;
          };