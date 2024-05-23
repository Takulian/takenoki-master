<template>
  <div
    class="bg-[var(--color-sand)] grid grid-cols-2 p-6 gap-16 h-[60vh] pb-16"
  >
    <div class="">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3038573220297!2d106.77281821069734!3d-6.354697493608708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef137524c5ad%3A0x7fa41d1aaa119126!2sTake%20no%20ki!5e0!3m2!1sid!2sid!4v1716378160362!5m2!1sid!2sid"
        class="w-full h-full"
        style="border-radius: 10px"
        allowfullscreen="false"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div>
      <div class="font-bold text-6xl">
        Visit <span class="text-[var(--color-merah)]">Take No Ki!</span>
      </div>
      <div class="text-2xl my-3">
        Jl. Limo Raya, Kec. Limo, Kota Depok, Jawa Barat 16516, Samping UPN
      </div>
      <div class="m-6">
        <button
          class="bg-[var(--color-merah)] p-3 text-white rounded-md flex items-center"
        >
          <a
            href="https://maps.app.goo.gl/vahbyzgn6sV6mNXk6"
            class="flex items-center"
          >
            <img
              src="@/assets/images/Maps.png"
              alt=""
              class="h-[2rem] pr-3"
            />Open Maps</a
          >
        </button>
      </div>
    </div>
  </div>
</template>
