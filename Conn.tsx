import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// Connexion de l'utilisateur
export const signIn = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in successfully");
    } catch (error) {
        console.log(error);

    }
}