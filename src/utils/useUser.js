import { useState } from "react";

const useUser = () => {
    const [user, setUser] = useState(getAndSetUser());

    function getAndSetUser() {
        let storedUser = localStorage.getItem("user");
        if (storedUser) {
            storedUser = JSON.parse(storedUser);
        } else {
            storedUser = null;
        }
        return storedUser;
    }

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return { user, handleLogout };
};

export default useUser;