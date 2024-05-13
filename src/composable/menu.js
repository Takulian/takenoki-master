import { ref } from "vue";
import useAxios from "./axios";
import router from "@/router";
import { useCookies } from "@vueuse/integrations/useCookies";

const useMenu = () => {
  const { axiosClient, config } = useAxios();
  const menus = ref([]);
  const cookies = useCookies();
  const token = cookies.get("session-admin");

  const getMenu = async () => {
    try {
      const res = await axiosClient.get(`/menu/get`);
      menus.value = await res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const postMenu = async (payload) => {
    try {
      const res = await axiosClient.post(`/menu/modify`, payload, config);
      console.log(await res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    menus,
    getMenu,
    postMenu,
  };
};

export default useMenu;
