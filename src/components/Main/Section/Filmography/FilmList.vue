<template lang="pug">
.home__filmography-films
  template(v-if="dataFilmList.length > 0 && dataFilmList")
    swiper.mySwiper(
        class="home__filmography-films-list"
        :rewind="true",
        :navigation="{prevEl: prev, nextEl: next,}"
        :modules="modules",
        :slidesPerView="1",
        :pagination="{el: pagination , clickable: true, bulletClass: 'home__filmography-films-btn-pagination-bullet', bulletActiveClass: 'home__filmography-films-btn-pagination-bullet--active'}"
      )
      swiper-slide(v-for="film in dataFilmList"
        class="home__filmography-clips-item"
        v-if="dataFilmList"
        :key="film.id"
      )
        .home__filmography-films-wrapper
          img(
            class="home__filmography-films-img"
            :src="film.img"
            :alt="film.title"
          )
          .home__filmography-films-text-title {{ film.title }}
            span.home__filmography-films-text-year ({{ film.year }})
          p.paragraph.paragraph-reset.home__filmography-films-text-description {{ film.description }}
    button.btn-reset.swiper-button-prev.home__filmography-films-btn-prev(ref="prev")
      ArrowIcon(:rotate="-180")
    button.btn-reset.swiper-button-next.home__filmography-films-btn-next(ref="next")
      ArrowIcon
    button.btn-reset.swiper-pagination.home__filmography-films-btn-pagination(ref="pagination")
  template(v-else)
    LoaderIcon
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { FilmList } from "@/interfaces/IFilmography";
import ArrowIcon from "@/components/Icon/ArrowIcon.vue";
import LoaderIcon from "@/components/Icon/LoaderIcon.vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default defineComponent({
  name: "FilmList",
  components: {
    Swiper,
    SwiperSlide,
    ArrowIcon,
    LoaderIcon,
  },
  props: {
    dataFilmList: {
      type: Array as PropType<FilmList[]>,
      required: true,
    },
  },
  setup() {
    const prev = ref<HTMLElement | null>(null);
    const next = ref<HTMLElement | null>(null);
    const pagination = ref<HTMLElement | null>(null);

    return {
      modules: [Navigation, Pagination],
      prev,
      next,
      pagination,
    };
  },
});
</script>

<style lang="sass" scoped>
.swiper
  max-width: 690px
  margin: 0
  width: 100%
  max-height: 1000px
  height: 100%
.swiper-slide
  text-align: center
// disable default
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after,
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after
  content: none
// prev & next btn swiper
.swiper-button-prev,
.swiper-button-next
  position: absolute
  top: 40%
  right: 10%
  z-index: 999
  display: block
  width: 100px
  height: 100px
  @media(max-width: 1360px)
    right: 5%
    width: 80px
    height: 80px
  @media(max-width: 768px)
    display: none
    right: 40%
    top: 75%
    width: 60px
    height: 60px
.swiper-button-prev
  left: 10%
  @media(max-width: 1360px)
    left: 5%
  @media(max-width: 768px)
    left: 40%
.swiper-pagination
  @media(max-width: 768px)
    display: flex
    justify-content: center
    align-items: center
    gap: 10px
    bottom: -10px
    width: 100%
  @media(max-width: 480px)
    bottom: -20px
</style>
