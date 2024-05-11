import { ref } from "vue";
import useAxios from "./axios";

const useMenu = () => {
  const axios = useAxios();
  const menus = ref([]);

  const getMenu = async () => {
    try {
      const res = await axios.get(`/menu/get`);
      menus.value = await res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    menus,
    getMenu,
  };
};

export default useMenu;
