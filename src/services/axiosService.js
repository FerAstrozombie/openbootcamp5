import APIrequest from "../utils/config/axios.config";

export default function getRandomUsers() {
    return APIrequest.get("/", {
        validateStatus: function (status) {
            return status < 500;
        }
    });
}

