<template>
  <div class="grid grid-cols-2 h-screen">
    <div class="flex justify-center pt-[100px]">
      <img
        src="../assets/images/Home Ramen.png"
        alt="Foto Ramen Besar"
        class="pt-16 pr-16"
      />
    </div>
    <div class="ml-5 mt-20 pt-[100px]">
      <div class="mt-20 text-4xl">
        Hi User,<br />
        Welcome to
        <span style="color: var(--color-merah)">Take no Ki!</span>
      </div>
      <div class="mt-3 text-2xl mr-36 teks-kecil">
        Here we provide a variety of Japanese food. We hope you get satisfaction
        and different sensations here. Enjoy your meal!
      </div>
      <button class="mt-5 pl-6 pr-6 pt-3 pb-3 text-2xl rounded-full">
        Explore
      </button>
    </div>
  </div>
</template>

<style scoped>
.grid {
  background: rgb(236, 200, 175);
  background: linear-gradient(
      0deg,
      rgba(236, 200, 175, 1) 0%,
      rgba(236, 200, 175, 0.6610293775713411) 92%
    ),
    url("../assets/images/background/Home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 20%;
}
.text-4xl {
  font-weight: 700;
  color: var(--color-hitam);
}
.teks-kecil {
  font-family: "Lora", sans-serif;
  font-weight: 400;
  color: var(--color-hitam);
}
button {
  background-color: var(--color-merah);
  color: white;
  font-family: "poppins", sans-serif;
  font-weight: 700;
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0.5);
}
</style>
