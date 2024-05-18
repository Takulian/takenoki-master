<script lang="ts" setup>
import { onMounted } from "vue";
import dayjs from "dayjs";
import useFeedback from "@/composable/feedback";

const { feedbacks, feedbackr, getFeedback, getFeedRead, readFeedback } =
  useFeedback();
const read = (idfeed) => {
  readFeedback(idfeed);
};
onMounted(() => {
  getFeedback();
  console.log(feedbacks);
  getFeedRead();
});
</script>

<template>
  <div class="grid grid-cols-2 h-full">
    <div class="bg-[var(--color-sand)] mx-2 rounded-lg mb-4 overflow-y-hidden">
      <div class="text-2xl font-bold pl-2 pt-2">Unread Feedback</div>
      <div class="h-[calc(100%-40px)] overflow-y-scroll">
        <div
          v-for="item in feedbacks"
          :key="item"
          class="bg-[var(--color-persian)] m-2 rounded-md text-white"
        >
          <div class="flex justify-end mr-2">
            {{ dayjs(item.date).format("DD/MM/YYYY - HH:mm") }}
          </div>
          <table class="ml-2">
            <tr>
              <td>From:</td>
              <td class="pl-1">{{ item.email }}</td>
            </tr>
            <tr>
              <td class="flex items-start">Message:</td>
              <td class="pl-1">{{ item.message }}</td>
            </tr>
          </table>
          <div class="flex justify-end pr-1 pb-1">
            <button
              class="bg-[var(--color-hitam)] p-1 rounded-md"
              @click="read(item.id)"
            >
              Mark As Read
            </button>
          </div>
        </div>
        <div
          v-if="feedbacks.length == 0"
          class="flex justify-center h-full items-center font-bold text-[var(--color-merah)] text-xl"
        >
          Tidak ada feedback terbaru
        </div>
      </div>
    </div>
    <div class="bg-[var(--color-sand)] mx-2 rounded-lg mb-4 overflow-y-hidden">
      <div class="text-2xl font-bold pl-2 pt-2">Read Feedback</div>
      <div class="h-[calc(100%-40px)] overflow-y-scroll">
        <div class="reverse">
          <div
            v-for="item in feedbackr"
            :key="item"
            class="bg-[var(--color-persian)] m-2 rounded-md text-white"
          >
            <div class="flex justify-end mr-2">
              {{ dayjs(item.date).format("DD/MM/YYYY") }}
            </div>
            <table class="ml-2">
              <tr>
                <td>From:</td>
                <td class="pl-1">{{ item.email }}</td>
              </tr>
              <tr>
                <td class="flex items-start">Message:</td>
                <td class="pl-1">{{ item.message }}</td>
              </tr>
            </table>
            <div class="p-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 5px !important;
}

::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 10px;
}

.reverse {
  display: flex;
  flex-direction: column-reverse;
}
</style>
