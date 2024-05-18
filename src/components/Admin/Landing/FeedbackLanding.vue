<script lang="ts" setup>
import useFeedback from "@/composable/feedback";
import { onMounted } from "vue";

const { feedbackr, feedbacks, getFeedback, getFeedRead } = useFeedback();

onMounted(() => {
  getFeedback(), getFeedRead();
});
</script>

<template>
  <div class="w-full bg-[var(--color-sand)] rounded-lg h-full">
    <div class="font-bold text-black text-xl pt-2 pl-2">Feedback</div>
    <div class="grid grid-rows-2 gap-2 h-[calc(100%-36px)] p-3">
      <div class="h-full w-full bg-[var(--color-persian)] rounded-full">
        <div class="flex justify-start h-full items-center text-xl">
          <div
            class="bg-[var(--color-hitam)] p-3 px-5 rounded-full mx-5 font-bold"
          >
            {{ feedbacks.length }}
          </div>
          <div class="pr-6 font-bold">Unread Feedback</div>
        </div>
      </div>
      <div class="h-full w-full bg-[var(--color-persian)] rounded-full">
        <div class="flex justify-start h-full items-center text-xl">
          <div
            class="bg-[var(--color-hitam)] p-3 px-5 rounded-full mx-5 font-bold"
          >
            {{ feedbackr.length }}
          </div>
          <div class="pr-6 font-bold">Read Feedback</div>
        </div>
      </div>
    </div>
  </div>
</template>
