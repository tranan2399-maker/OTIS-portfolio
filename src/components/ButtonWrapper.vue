<script setup lang="ts">
import { computed } from "vue";

export interface Props {
  renderAs?: "button" | "a" | "div";
  variant?: "accent" | "border" | "theme" | "background" | "gray";
  rounded?: boolean;
}

const props = defineProps<Props>();

const classes = computed(() => [
  "button-wrapper",
  { [`button-wrapper-${props.variant}`]: props.variant !== undefined },
  { "button-wrapper-rounded": props.rounded },
]);
</script>

<template>
  <component :is="props.renderAs ?? 'button'" :class="classes">
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">
.button-wrapper {
  position: relative;
  border: none;
  border-radius: 100px;
  letter-spacing: 0.02em;
  font-size: var(--font-size-md);
  font-weight: 800;
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  transition:
    background-color 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.15s ease;

  // ── Liquid Glass shimmer layer (ánh sáng phản chiếu trên mặt kính) ──
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.45) 0%,
      rgba(255, 255, 255, 0.08) 40%,
      rgba(255, 255, 255, 0.0)  60%,
      rgba(255, 255, 255, 0.12) 100%
    );
    pointer-events: none;
    z-index: 1;
    transition: opacity 0.25s ease;
  }

  // Nội dung nằm trên lớp shimmer
  :slotted(*) {
    position: relative;
    z-index: 2;
  }

  &-rounded {
    border-radius: 50%;
    aspect-ratio: 1;
  }

  // ── Accent (nút cam chính) ──
  &-accent {
    background: linear-gradient(
      135deg,
      rgba(var(--color-accent-rgb, 255 140 0) / 0.85) 0%,
      rgba(var(--color-accent-rgb, 230 100 0) / 0.70) 100%
    );
    background-color: var(--color-accent-400, var(--color-orange-400));
    color: var(--color-accent-text-400, var(--color-white-400));
    --icon-color: var(--color-accent-text-400, var(--color-white-400));
    border: 1px solid rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(16px) saturate(1.8);
    -webkit-backdrop-filter: blur(16px) saturate(1.8);
    box-shadow:
      0 4px 24px rgba(0,0,0,0.18),
      inset 0 1px 0 rgba(255,255,255,0.5),
      inset 0 -1px 0 rgba(0,0,0,0.12);

    @include mixins.hover {
      &:hover {
        background-color: var(--color-hover, var(--color-black-400));
        color: var(--color-hover-text, var(--color-white-400));
        --icon-color: var(--color-hover-text, var(--color-white-400));
        box-shadow:
          0 8px 32px rgba(0,0,0,0.28),
          inset 0 1px 0 rgba(255,255,255,0.45);
        transform: translateY(-1px);
      }
    }
  }

  // ── Theme ──
  &-theme {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(20px) saturate(1.6);
    -webkit-backdrop-filter: blur(20px) saturate(1.6);
    color: var(--color-text-400);
    --icon-color: var(--color-text-400);
    border: 1px solid rgba(255, 255, 255, 0.28);
    box-shadow:
      0 4px 20px rgba(0,0,0,0.12),
      inset 0 1px 0 rgba(255,255,255,0.55),
      inset 0 -1px 0 rgba(0,0,0,0.08);

    @include mixins.hover {
      &:hover {
        background: rgba(255, 255, 255, 0.22);
        color: var(--color-text-400);
        box-shadow:
          0 8px 28px rgba(0,0,0,0.18),
          inset 0 1px 0 rgba(255,255,255,0.6);
        transform: translateY(-1px);
      }
    }
  }

  // ── Background ──
  &-background {
    background: rgba(255, 255, 255, 0.10);
    backdrop-filter: blur(18px) saturate(1.5);
    -webkit-backdrop-filter: blur(18px) saturate(1.5);
    color: var(--color-text-400);
    --icon-color: var(--color-text-400);
    border: 1px solid rgba(255, 255, 255, 0.22);
    box-shadow:
      0 2px 16px rgba(0,0,0,0.10),
      inset 0 1px 0 rgba(255,255,255,0.50);

    @include mixins.hover {
      &:hover {
        background: rgba(255, 255, 255, 0.20);
        color: var(--color-text-400);
        box-shadow:
          0 6px 24px rgba(0,0,0,0.16),
          inset 0 1px 0 rgba(255,255,255,0.55);
        transform: translateY(-1px);
      }
    }
  }

  // ── Gray ──
  &-gray {
    background: rgba(120, 120, 130, 0.55);
    backdrop-filter: blur(16px) saturate(1.4);
    -webkit-backdrop-filter: blur(16px) saturate(1.4);
    color: var(--color-white-400);
    --icon-color: var(--color-white-400);
    border: 1px solid rgba(255, 255, 255, 0.22);
    box-shadow:
      0 4px 20px rgba(0,0,0,0.15),
      inset 0 1px 0 rgba(255,255,255,0.40);

    @include mixins.hover {
      &:hover {
        background: rgba(140, 140, 150, 0.70);
        box-shadow:
          0 6px 24px rgba(0,0,0,0.22),
          inset 0 1px 0 rgba(255,255,255,0.45);
        transform: translateY(-1px);
      }
    }
  }

  // ── Border ──
  &-border {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px) saturate(1.6);
    -webkit-backdrop-filter: blur(20px) saturate(1.6);
    border: 1.5px solid rgba(255, 255, 255, 0.35);
    color: var(--color-text-400);
    --icon-color: var(--color-text-400);
    box-shadow:
      0 2px 16px rgba(0,0,0,0.10),
      inset 0 1px 0 rgba(255,255,255,0.45),
      inset 0 -1px 0 rgba(0,0,0,0.06);

    @include mixins.hover {
      &:hover {
        background: rgba(255, 255, 255, 0.18);
        border-color: rgba(255, 255, 255, 0.55);
        color: var(--color-text-400);
        box-shadow:
          0 6px 24px rgba(0,0,0,0.16),
          inset 0 1px 0 rgba(255,255,255,0.55);
        transform: translateY(-1px);
      }
    }
  }

  // ── Liquid Glass (variant thuần thủy tinh trong suốt) ──
  &-liquid-glass {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(24px) saturate(2) brightness(1.1);
    -webkit-backdrop-filter: blur(24px) saturate(2) brightness(1.1);
    border: 1.5px solid rgba(255, 255, 255, 0.45);
    color: var(--color-text-400);
    --icon-color: var(--color-text-400);
    box-shadow:
      0 8px 32px rgba(0,0,0,0.12),
      0 1px 0 rgba(255,255,255,0.8) inset,
      0 -1px 0 rgba(0,0,0,0.06) inset;

    @include mixins.hover {
      &:hover {
        background: rgba(255, 255, 255, 0.28);
        border-color: rgba(255, 255, 255, 0.65);
        box-shadow:
          0 12px 40px rgba(0,0,0,0.18),
          0 1px 0 rgba(255,255,255,0.9) inset;
        transform: translateY(-2px);
      }
    }
  }
}
</style>
