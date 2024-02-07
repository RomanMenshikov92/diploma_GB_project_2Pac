<template lang="pug">
swiper.mySwiper(
  class="home__books-list",
  :loop="false",
  :direction="'horizontal'",
  :modules="modules",
  :spaceBetween="10"
  :slidesPerView="1"
  :autoplay="{delay: 2500,disableOnInteraction: false,}"
  :pagination="{el: pagination , clickable: true, bulletClass: 'home__books-btn-pagination-bullet', bulletActiveClass: 'home__books-btn-pagination-bullet--active'}"
  :breakpoints="{'769': {slidesPerView: 'auto', direction: 'vertical', spaceBetween: 0},}"
)
  swiper-slide(
    class="home__books-item"
    v-for="(book, i) in booksList"
    v-if="booksList"
    :key="book.id"
  )
    img(
      class="home__books-img"
      :src="book.img.src"
      :alt="book.img.alt"
      )
    .home__books-text
      p.paragraph.paragraph-reset.home__books-paragraph {{ book.description }}
      RouterLink.home__books-link(:href="book.link" to="" target="_blank") Купить
button.btn-reset.swiper-pagination.home__filmography-films-btn-pagination(ref="pagination")
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { RouterLink } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import { BooksList } from "@/interfaces/IBooks";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

export default defineComponent({
  name: "BooksList",
  components: {
    Swiper,
    SwiperSlide,
    RouterLink,
  },
  props: {
    booksList: {
      type: Array as PropType<BooksList[]>,
      required: true,
    },
  },
  setup() {
    const pagination = ref<HTMLElement | null>(null);

    return {
      modules: [Autoplay, Pagination],
      pagination,
    };
  },
});
</script>

<style lang="sass" scoped>
.swiper
  width: 100%
  padding: 5px
.swiper-wrapper
  display: flex !important
  align-items: center !important
.swiper-slide
  display: flex
  justify-content: center
  align-items: center
  max-width: 90%
  // height: 450px
  filter: blur(3px)
  background-color: #282828
  overflow: hidden
  @media(max-width: 768px)
    flex-direction: column
    align-items: flex-start
    max-width: 100%
    // min-height: 650px
    background-color: transparent
    justify-content: flex-start
  @media(max-width: 480px)
    // min-height: 850px
.swiper-slide-active
  max-width: 100%
  z-index: 99
  filter: none
  background-color: #585858
  @media(max-width: 768px)
    background-color: #282828
    background-color: transparent
// .swiper-slide-prev
//   margin-bottom: -100px
//   @media(max-width: 768px)
//     margin-bottom: 0
// .swiper-slide-next
//   margin-top: -100px
//   @media(max-width: 768px)
//     margin-top: 0
.swiper-pagination
  @media(max-width: 768px)
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    gap: 10px
    bottom: 25px
    width: 100%
  @media(max-width: 480px)
    bottom: 30px
</style>
