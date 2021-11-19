import axios from "axios";
import { USER_NAME } from "../constants/userconstant";

export const getUserInformation = async () => {
    const res = await axios({
        method: "get",
        url: `https://api.github.com/users/${USER_NAME}`,
    });

    const data = await res.data;
    return data;
};
