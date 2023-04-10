import httpService from "./http.service";

const useEndpoint = "user/";

const userService = {
    get: async () => {
        const { data } = await httpService.get(useEndpoint);
        return data;
    }
};
export default userService;
