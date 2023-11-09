import { GoogleAuthProvider,signInWithPopup} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import {auth} from './firebase.js'

const googleButton = document.querySelector('#login-gogle')

googleButton.addEventListener('click',async()=>{
    const provider = new GoogleAuthProvider()
    try {
        const crendential= await signInWithPopup(auth,provider)
        
    } catch (error) {
        alert('up ha ocurrido un error ')
    }
})