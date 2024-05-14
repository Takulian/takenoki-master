import { ref } from "vue";
import { useCookies } from "@vueuse/integrations/useCookies";
import router from "@/router";
import Swal from "sweetalert2";

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

  const logout = () => {
    try {
      cookies.remove("session-admin", { path: "/admin" });
      window.location.href = "/admin/login";
    } catch (error) {
      console.log(error);
    }
  };

  const checkDashboard = async () => {
    try {
      const res = await axiosClient.get(`/feedback/unread`, config);
    } catch (error) {
      window.location.href = "/admin/login";
    }
  };

  return {
    login,
    logout,
    checkDashboard,
  };
};

export default useAuth;
