import {createUserWithEmailAndPassword, signInWithEmailAndPassword , sendPasswordResetEmail, confirmPasswordReset, signOut } from "firebase/auth";
import {auth} from "./config";


export const registerUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("Unknown error");
        }
    }
};

export const loginUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("Unknown error");
        }
    }
};

export const passwordReset = async (email: string): Promise<void> => {
    try {

        await sendPasswordResetEmail(auth, email,{
            url: "http://localhost:3000/confirm-password",
            handleCodeInApp: true,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("Unknown error");
    }
};

export const confirmNewPassword = async (oobCode: string, newPassword: string) => {
    await confirmPasswordReset(auth, oobCode, newPassword);
};

export const logoutUser = async () => {
    signOut(auth).then(() => {
        console.log("User logged out");
    }).catch((error) => {
        console.error("Error logging out user:", error);
    });

};
