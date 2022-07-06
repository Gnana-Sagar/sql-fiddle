import axios from "axios";

export const executeQueryAPI = (data) => {
    return axios.post("http://localhost:8080/v1/editor/execute/postgres", data);
}