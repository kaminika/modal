//document.querySelector('.modal').classList.add('visible')

/* 1. Napisz skrypt, który po załadowaniu dokumentu odczeka 10 sekund, po czym zmieni widoczność modala - wyświetli go */

/* document.getElementsByClassName( "modal" ).style.display = none; */

/* const modal = document.getElementsByClassName('modal');
 
modal.style.removeProperty('display'); */

/* 2. Napisz skrypt, który po klinięciu w przycisk zamknij ukryje modal */

/* function close() {
    console.log( "click" );
}
 
document.getElementsByClassName( "modal-inner" ).addEventListener("click", close); */



/* 3. Do powyższego skryptu dodaj zapisanie w cookies flagi, mówiącej że modal już został wyświetlony */



/* 4. Do skryptu z punktu 1 dodaj warunke, który sprawdza czy w cookies jest informacja o tym, czy modal był wyświetlony. 
Wyświetlaj go tylko jeśli jej nie ma. */

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
