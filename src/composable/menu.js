import { ref } from "vue";
import useAxios from "./axios";
import { useCookies } from "@vueuse/integrations/useCookies";

const useMenu = () => {
  const axios = useAxios();
  const menus = ref([]);
  const cookies = useCookies();
  const token = cookies.get("session-admin");

  const getMenu = async () => {
    try {
      const res = await axios.get(`/menu/get`);
      menus.value = await res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const postMenu = async (payload) => {
    try {
      const res = await axios.post(`/menu/modify`, payload);
      console.log(await res.data);
      window.location.href = "/admin/menu";
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
