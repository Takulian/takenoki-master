import { ref } from "vue";
import useAxios from "./axios";
import Swal from "sweetalert2";

const useFeedback = () => {
  const { axiosClient, config } = useAxios();
  const feedbacks = ref([]);
  const feedbackr = ref([]);

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
  const getFeedback = async () => {
    try {
      const res = await axiosClient.get(`/feedback/unread`, config);
      feedbacks.value = await res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const getFeedRead = async () => {
    try {
      const res = await axiosClient.get(`/feedback/read`, config);
      feedbackr.value = await res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const readFeedback = async (id) => {
    try {
      const res = await axiosClient.put(
        `/feedback/unread/${id}/read`,
        null,
        config
      );
      setTimeout(function () {
        location.reload();
      }, 0);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    feedbacks,
    feedbackr,
    postFeedback,
    getFeedback,
    getFeedRead,
    readFeedback,
  };
};

export default useFeedback;
