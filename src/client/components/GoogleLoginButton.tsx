import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/googleLoginButton.module.css"

const CLIENT_ID = "847757529604-l2mt32stsfbdoctoutrvh8v9pltgdiuv.apps.googleusercontent.com";

function GoogleLoginButton() {

    const { setUser } = useAuth();
    const { user } = useAuth();

    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: CLIENT_ID,
            callback: handleCredentialResponse,
        });

        window.google.accounts.id.renderButton(
            document.getElementById("google-login")!,
            { theme: "outline", size: "medium" }
        );
    }, []);

    async function handleCredentialResponse(response: any) {
        try {
            const token = response.credential;

            const res = await fetch("http://localhost:5000/auth/google", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }),
            });

            const data = await res.json();

            setUser(data.user);

            console.log("Backend response:", data);
        } catch (error) {
            console.error("Login failed:", error);
        }

    }
    if (user) {
        return <p className={styles.userName}>{user.name}</p>
    }
    return <div id="google-login"></div>
}

export default GoogleLoginButton
