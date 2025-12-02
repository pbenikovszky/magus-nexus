import { useState } from "react";
import "../assets/styles/components/login.css";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Itt lesz majd az API
            await new Promise((res) => setTimeout(res, 1500));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">
                    Magus Nexus
                    <span>Character Vault</span>
                </h1>

                <input
                    type="email"
                    placeholder="Email cím"
                    className="login-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Jelszó"
                    className="login-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="login-button"
                    onClick={handleSubmit}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <span className="login-button__spinner" />
                            Bejelentkezés...
                        </>
                    ) : (
                        "Bejelentkezés"
                    )}
                </button>
            </div>
        </div>
    );
}
