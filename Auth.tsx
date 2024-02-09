import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const signUpWithEmailAndPassword = async (email: string, password: string) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created successfully");
    } catch (error) {
        console.log(error);

    }
}