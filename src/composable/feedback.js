import { ref } from "vue";
import useAxios from "./axios";
import Swal from "sweetalert2";

const useFeedback = () => {
  const { axiosClient, config } = useAxios();
  const feedbacks = ref([]);

  const postFeedback = async (data) => {
    try {
      const res = await axiosClient.post(`/feedback/posting`, data);
      Swal.fire({
        timer: 2000,
        showConfirmButton: false,
        title: "Feedback berhasil dikirim",
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
    feedbacks,
    postFeedback,
  };
};

export default useFeedback;
