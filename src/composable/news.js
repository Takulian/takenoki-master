import { ref } from "vue";
import useAxios from "./axios";
import Swal from "sweetalert2";

const useNews = () => {
  const { axiosClient, config } = useAxios();
  const newss = ref([]);

  const postNews = async (data) => {
    try {
      const res = await axiosClient.post(`/newsletter/modify`, data, config);
      console.log(await res.data);
      Swal.fire({
        timer: 2000,
        showConfirmButton: false,
        title: "News berhasil ditambahkan",
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
  const getNews = async () => {
    try {
      const res = await axiosClient.get(`/newsletter/get`);
      newss.value = await res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const updNews = async (id, data) => {
    try {
      const res = await axiosClient.put(
        `/newsletter/modify/${id}`,
        data,
        config
      );
      console.log(await res.data);
      Swal.fire({
        timer: 2000,
        showConfirmButton: false,
        title: "Berita berhasil di-update",
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
  const delNews = async (id) => {
    try {
      const res = await axiosClient.delete(`/newsletter/modify/${id}`, config);
      console.log(await res.data);
      Swal.fire({
        timer: 2000,
        showConfirmButton: false,
        title: "Berita berhasil dihapus",
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
    newss,
    postNews,
    getNews,
    updNews,
    delNews,
  };
};

export default useNews;
