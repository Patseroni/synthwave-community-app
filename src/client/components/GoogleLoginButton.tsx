import { useEffect } from "react";

const CLIENT_ID = "847757529604-l2mt32stsfbdoctoutrvh8v9pltgdiuv.apps.googleusercontent.com";

function GoogleLoginButton() {
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

    function handleCredentialResponse(response: any) {
        console.log("Google ID token:", response.credential);
    }

    return <div id="google-login"></div>;
}

export default GoogleLoginButton;
