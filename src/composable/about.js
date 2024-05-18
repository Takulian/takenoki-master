import { ref } from "vue";
import useAxios from "./axios";
import Swal from "sweetalert2";

const useAbout = () => {
  const { axiosClient, config } = useAxios();
  const abouts = ref({
    id_aus: "",
    aboutUs: "",
    aus_image: "",
    aus_content: "",
  });

  const getAbout = async () => {
    try {
      const res = await axiosClient.get(`/aboutus`);
      abouts.value = await res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const updAbout = async (id, data) => {
    try {
      const res = await axiosClient.put(`/aboutus/modify/${id}`, data, config);
      console.log(await res.data);
      Swal.fire({
        timer: 2000,
        showConfirmButton: false,
        title: "About Us berhasil di-update",
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
    abouts,
    getAbout,
    updAbout,
  };
};

export default useAbout;
