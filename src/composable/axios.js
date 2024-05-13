import axios from "axios";
import { useCookies } from "@vueuse/integrations/useCookies";

const useAxios = (path = "") => {
  const cookies = useCookies();
  const token = cookies.get("session-admin");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL + path,
  });

  return {
    axiosClient,
    config,
  };
};

export default useAxios;
