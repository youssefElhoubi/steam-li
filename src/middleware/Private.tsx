import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

type Props = {
    Componnet: React.FC;
};

const Privet: React.FC<Props> = ({ Componnet }) => {
    const [isAuth, setIsAuth] = useState<boolean | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("active_user");
        if (storedToken) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, []);


    if (isAuth === null) return <div>Loading...</div>;

    return isAuth ? <Componnet /> : <Navigate to="/" />;
};

export default Privet;
