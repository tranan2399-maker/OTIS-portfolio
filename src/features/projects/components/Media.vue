<script setup lang="ts">
import { computed, ref, onMounted, watchEffect } from "vue";
import gsap from "gsap";
import Notch from "../../../components/Notch.vue";

const wrapperRef = ref<HTMLDivElement | null>(null);
const mediaRef = ref<HTMLVideoElement | HTMLImageElement | null>(null);
const mediaContentRef = ref<HTMLDivElement | null>(null);
const isMounted = ref(false);

export interface Props {
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
  index: number;
  originalRatio?: boolean;
}

const props = defineProps<Props>();

const wrapperClasses = computed(() => {
  return {
    "project-media": true,
    "project-media-original-ratio": props.originalRatio,
  };
});

onMounted(() => {
  if (!wrapperRef.value) {
    return;
  }

  const el = mediaContentRef.value;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapperRef.value,
      start: "top bottom",
      // "play none none none" = play once, never reset → no flicker on scroll
      toggleActions: "play none none none",
    },
    onComplete: () => {
      // Clean up will-change after animation ends to free GPU resources
      if (el) el.style.willChange = "auto";
    },
  });

  // Animate the container
  tl.fromTo(el, { scale: 0.8 }, { scale: 1, duration: 0.4, ease: "power1.out" }, 0);

  // Only scale the inner element for images (not video, to avoid stutter)
  if (props.type === "image") {
    tl.fromTo(mediaRef.value, { scale: 1.2 }, { scale: 1, duration: 0.4, ease: "power1.out" }, 0);
  }
});

onMounted(async () => {
  isMounted.value = true;
});
</script>

<template>
  <div :class="wrapperClasses" ref="wrapperRef">
    <div class="project-media-content" ref="mediaContentRef">
      <img
        v-if="props.type === 'image'"
        :src="props.src"
        :alt="props.alt"
        :loading="props.index === 0 ? 'eager' : 'lazy'"
        :fetchpriority="props.index === 0 ? 'high' : 'auto'"
        class="project-media-image"
        ref="mediaRef"
      />
      <video
        v-else
        :src="props.src"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        class="project-media-video"
        ref="mediaRef"
      >
        <source :src="props.src" type="video/mp4" />
      </video>
    </div>
    <div class="project-media-caption" v-if="props.caption">
      <Notch class="project-media-caption-notch project-media-caption-notch-left" />
      <Notch class="project-media-caption-notch project-media-caption-notch-top" />
      <p class="project-media-caption-copy">{{ props.caption }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-media {
  width: 100%;
  height: 100%;
  grid-column: 1 / 13;
  max-width: 900px;
  justify-self: center;
  position: relative;
  aspect-ratio: 16 / 9;

  @include mixins.mq("md") {
    grid-column: 2 / 12;
  }

  @include mixins.mq("lg") {
    grid-column: 3 / 11;
  }

  &-caption {
    position: absolute;
    bottom: -1px;
    right: -1px;
    background-color: var(--color-background-400);
    padding: var(--space-xxs) var(--space-sm);
    border-radius: var(--radius-md) 0 0 0;

    @include mixins.mq("md") {
      padding: var(--space-xxs) var(--space-sm);
    }

    @include mixins.mq("lg") {
      padding: var(--space-xs) var(--space-md);
      border-radius: var(--radius-lg) 0 0 0;
    }

    &-notch {
      position: absolute;
      color: var(--color-background-400);
      --icon-color: var(--color-background-400);
      width: var(--radius-md);

      @include mixins.mq("md") {
        width: var(--radius-lg);
      }

      &-left {
        left: 0;
        bottom: 0;
        transform: translate(-100%, 0) scale(-1) rotate(90deg);
      }

      &-top {
        top: 0;
        right: 0;
        transform: translate(0, -100%) scale(-1) rotate(90deg);
      }
    }

    &-copy {
      font-size: var(--font-size-sm);
      font-weight: 700;

      @include mixins.mq("md") {
        font-size: var(--font-size-md);
      }
    }
  }

  &-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

    &-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translateZ(0);
  }

  &-content {
    overflow: hidden;
    border-radius: var(--radius-lg);
    background-color: var(--color-background-300);
    width: 100%;
    height: 100%;
    will-change: transform;
    transform: translateZ(0);
  }

  &.project-media-original-ratio {
    aspect-ratio: auto;
    height: auto;

    .project-media-content {
      height: auto;
    }

    .project-media-image,
    .project-media-video {
      height: auto;
      object-fit: contain;
    }
  }
}
</style>
