import { ref } from "vue";
import { useCookies } from "@vueuse/integrations/useCookies";
import router from "@/router";

import dayjs from "dayjs";
import useAxios from "./axios";

const useAuth = () => {
  const { axiosClient, config } = useAxios();
  const cookies = useCookies();

  const login = async (payload) => {
    try {
      const res = await axiosClient.post(`/authenticate`, payload);
      console.log(await res.data);
      const token = await res.data.token;
      const expired = new Date(dayjs().add(1, "d"));
      cookies.set("session-admin", token, {
        expires: expired,
      });
      router.push({ name: "dashboard" });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    login,
  };
};

export default useAuth;
