<script setup>
const galeri = [
  {
    title: "Indoor Room",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Outdoor Room",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Front Yard",
    desc: "Lorem ipsum dolor sit amet",
  },
];
</script>

<template>
  <div class="spacer"></div>
  <el-carousel arrow="always" height="auto">
    <el-carousel-item style="height: 80vh" v-for="item in galeri" :key="item">
      <h3 class="flex justify-center h-full items-center">
        {{ item.title }}
      </h3>
    </el-carousel-item>
  </el-carousel>
  <div class="spacer"></div>
</template>

<style scoped>
.spacer {
  background-color: var(--color-sand);
  height: 10vh;
}

.el-carousel__item h3 {
  color: white;
  font-family: "poppins", sans-serif;
  font-weight: 700;
  font-size: 70px;
}

.el-carousel__item:nth-child(1) {
  background-image: url("../assets/images/background/Home.jpg");
  background-position: 50% 20%;
  background-repeat: no-repeat;
  background-size: cover;
}

.el-carousel__item:nth-child(2) {
  background-image: url("../assets/images/background/News.jpg");
  background-position: 50% 20%;
  background-repeat: no-repeat;
  background-size: cover;
}

.el-carousel__item:nth-child(3) {
  background-image: url("../assets/images/background/Garden.jpg");
  background-position: 50% 20%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
