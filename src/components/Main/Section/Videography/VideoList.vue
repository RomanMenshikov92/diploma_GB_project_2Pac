<template lang="pug">
.home__videography-clips
  template(v-if="dataVideoFrame.length > 0 && dataVideoFrame")
    swiper.mySwiper(
      class="home__videography-clips-list"
      :modules="modules"
      :navigation="{prevEl: prev, nextEl: next}"
      :slidesPerView="slidesPerView"
      :grid="gridConfig"
      :pagination="{el: pagination , clickable: true,bulletClass: 'home__videography-clips-btn-pagination-bullet', bulletActiveClass: 'home__videography-clips-btn-pagination-bullet--active'}"
    )
      swiper-slide(
        class="home__videography-clips-item"
        v-for="frame in dataVideoFrame" v-if="dataVideoFrame"
        :key="frame.id"
        @click="openModal(frame)"
      )
        .home__videography-clips-wrapper
          img(
            class="home__videography-clips-img"
            :src="getThumbnailUrl(frame.url)"
            width="100%"
            height="100%"
            :alt="frame.title"
          )
          .home__videography-clips-text
            .home__videography-clips-author-title  {{ frame.title }}
              span(v-if="frame.featuring") ( ft. {{ frame.featuring }})
            .home__videography-clips-album {{ frame.album }}
            .home__videography-clips-year ({{ frame.year }})
    button.btn-reset.swiper-button-prev.home__videography-clips-btn-prev(ref="prev")
      ArrowIcon(:rotate="-180")
    button.btn-reset.swiper-button-next.home__videography-clips-btn-next(ref="next")
      ArrowIcon
    button.btn-reset.swiper-pagination.home__videography-clips-btn-pagination(ref="pagination")
  template(v-else)
    LoaderIcon
.home__videography-modal(v-if="showModal")
  .home__videography-modal-content(@wheel.prevent @touchmove.prevent @scroll.prevent)
    iframe(
      class="home__videography-modal-frame"
      width="800",
      height="500px",
      :src="videoIframeSrc",
      :title="modalInfo.title",
      frameborder="0",
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen
    )
    .home__videography-modal-text
      .home__videography-modal-author-title {{ modalInfo.author }} - {{ modalInfo.title }}
        span(v-if="modalInfo.featuring") ( ft. {{ modalInfo.featuring }})
      .home__videography-modal-album {{ modalInfo.album }}
      .home__videography-modal-year ({{ modalInfo.year }})
    button.btn-reset.home__videography-modal-btn-close(@click="closeModal")
      CrossIcon
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType, reactive, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Grid, Pagination } from "swiper/modules";
import { VideoFrameItem } from "@/interfaces/IFrame";
import CrossIcon from "@/components/Icon/CrossIcon.vue";
import ArrowIcon from "@/components/Icon/ArrowIcon.vue";
import LoaderIcon from "@/components/Icon/LoaderIcon.vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import { GridOptions } from "swiper/types/modules/grid";

export default defineComponent({
  name: "VideoList",
  components: {
    Swiper,
    SwiperSlide,
    CrossIcon,
    ArrowIcon,
    LoaderIcon,
  },
  props: {
    dataVideoFrame: {
      type: Array as PropType<VideoFrameItem[]>,
      required: true,
    },
  },
  setup() {
    const prev = ref<HTMLElement | null>(null);
    const next = ref<HTMLElement | null>(null);
    const pagination = ref<HTMLElement | null>(null);
    const showModal = ref<boolean>(false);
    const videoIframeSrc = ref<string>("");
    const modalInfo = reactive<VideoFrameItem>({
      author: "",
      title: "",
      album: "",
      featuring: "",
      year: 0,
      directors: "",
      url: "",
      src: "",
      id: 0,
    });
    const slidesPerView = ref<number>(3);
    const gridConfig = ref<GridOptions>({ rows: 3, fill: "row" });

    const updateResponsiveValues = () => {
      const screenWidth = window.innerWidth;
      switch (true) {
        case screenWidth <= 768:
          slidesPerView.value = 1;
          gridConfig.value = { rows: 1, fill: "row" };
          break;
        case screenWidth <= 1024:
          slidesPerView.value = 1;
          gridConfig.value = { rows: 2, fill: "row" };
          break;
        case screenWidth <= 1360:
          slidesPerView.value = 2;
          gridConfig.value = { rows: 2, fill: "row" };
          break;
        default:
          slidesPerView.value = 3;
          gridConfig.value = { rows: 3, fill: "row" };
          break;
      }
    };

    const getThumbnailUrl = (videoId: string) => {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    };

    const openModal = async (frame: VideoFrameItem) => {
      videoIframeSrc.value = `https://www.youtube.com/embed/${frame.url}?autoplay=1`;
      showModal.value = true;
      modalInfo.author = frame.author;
      modalInfo.title = frame.title;
      modalInfo.featuring = frame.featuring;
      modalInfo.year = frame.year;
      modalInfo.album = frame.album;
    };

    const closeModal = () => {
      showModal.value = false;
      videoIframeSrc.value = "";
    };

    onMounted(() => {
      updateResponsiveValues();
      window.addEventListener("resize", updateResponsiveValues);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateResponsiveValues);
    });

    return {
      modules: [Navigation, Grid, Pagination],
      showModal,
      videoIframeSrc,
      openModal,
      closeModal,
      getThumbnailUrl,
      modalInfo,
      prev,
      next,
      slidesPerView,
      gridConfig,
      updateResponsiveValues,
      pagination,
    };
  },
});
</script>

<style lang="sass" scoped>
.swiper
  max-width: 800px
  margin: 0
  width: 100%
  max-height: 800px
  height: 100%
  padding: 5px
  @media(max-width: 1360px)
    max-width: 600px
    max-height: 600px
  @media(max-width: 1024px)
    max-width: 300px
    max-height: 600px
  @media(max-width: 768px)
    max-width: 300px
    max-height: 300px
    margin-bottom: 5px
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
  right: 6%
  z-index: 999
  display: block
  width: 100px
  height: 100px
  @media(max-width: 1360px)
    right: 3%
    width: 80px
    height: 80px
  @media(max-width: 1024px)
    right: 15%
  @media(max-width: 768px)
    display: none
    right: 5%
    width: 60px
    height: 60px
  @media(max-width: 480px)
    right: 25%
    top: 105%
    width: 40px
    height: 40px
.swiper-button-prev
  left: 6%
  @media(max-width: 1360px)
    left: 3%
  @media(max-width: 1024px)
    left: 15%
  @media(max-width: 768px)
    left: 5%
  @media(max-width: 480px)
    left: 25%
.swiper-pagination
  @media(max-width: 768px)
    display: flex
    justify-content: center
    align-items: center
    gap: 10px
    bottom: 0% !important
    width: 100%
</style>
