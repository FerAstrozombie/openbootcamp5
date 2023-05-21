import APIrequest from "../utils/config/chuck.config";

export default function getRandomJokes() {
    return APIrequest.get("/jokes/random", {
        validateStatus: function (status) {
            return status < 500;
        }
    });
}
