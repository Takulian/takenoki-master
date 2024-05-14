import { ref } from "vue";
import useAxios from "./axios";
import Swal from "sweetalert2";

const useMenu = () => {
  const { axiosClient, config } = useAxios();
  const menus = ref([]);

  const getMenu = async () => {
    try {
      const res = await axiosClient.get(`/menu/get`);
      menus.value = await res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const getMenuc = async (category) => {
    try {
      const res = await axiosClient.get(
        `/menu/getcategory?category=${category}`
      );
      menus.value = await res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const postMenu = async (menu) => {
    try {
      const res = await axiosClient.post(`/menu/modify`, menu, config);
      console.log(await res.data);
      Swal.fire({
        timer: 2000,
        showConfirmButton: false,
        title: "Menu berhasil ditambahkan",
        icon: "success",
        background: "var(--color-persian)",
        color: "#fff",
      });
      setTimeout(function () {
        location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  const updMenu = async (id, data) => {
    try {
      const res = await axiosClient.put(`menu/modify/${id}`, data, config);
      console.log(await res.data);
      Swal.fire({
        timer: 2000,
        showConfirmButton: false,
        title: "Menu berhasil di-update",
        icon: "success",
        background: "var(--color-persian)",
        color: "#fff",
      });
      setTimeout(function () {
        location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  const delMenu = async (nama) => {
    try {
      const res = await axiosClient.delete(`menu/modify/${nama}`, config);
      console.log(await res.data);
      Swal.fire({
        timer: 2000,
        showConfirmButton: false,
        title: "Menu berhasil dihapus",
        icon: "success",
        background: "var(--color-persian)",
        color: "#fff",
      });
      setTimeout(function () {
        location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    menus,
    getMenu,
    getMenuc,
    postMenu,
    delMenu,
    updMenu,
  };
};

export default useMenu;
