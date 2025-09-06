import React from "react";

export const components: Record<
  string,
  {
    component: React.LazyExoticComponent<React.ComponentType<unknown>>;
    src: string;
  }
> = {
  "aspect-ratio-demo": {
    component: React.lazy(() => import("@/components/demo/aspect-ratio-demo")),
    src: "src/components/demo/aspect-ratio-demo.tsx",
  },
  "aspect-ratio-square": {
    component: React.lazy(
      () => import("@/components/demo/aspect-ratio-square")
    ),
    src: "src/components/demo/aspect-ratio-square.tsx",
  },
  "aspect-ratio-video": {
    component: React.lazy(() => import("@/components/demo/aspect-ratio-video")),
    src: "src/components/demo/aspect-ratio-video.tsx",
  },
  "avatar-demo": {
    component: React.lazy(() => import("@/components/demo/avatar-demo")),
    src: "src/components/demo/avatar-demo.tsx",
  },
  "avatar-default": {
    component: React.lazy(() => import("@/components/demo/avatar-default")),
    src: "src/components/demo/avatar-default.tsx",
  },
  "avatar-initials": {
    component: React.lazy(() => import("@/components/demo/avatar-initials")),
    src: "src/components/demo/avatar-initials.tsx",
  },
  "avatar-fallback": {
    component: React.lazy(() => import("@/components/demo/avatar-fallback")),
    src: "src/components/demo/avatar-fallback.tsx",
  },
  "avatar-shape": {
    component: React.lazy(() => import("@/components/demo/avatar-shape")),
    src: "src/components/demo/avatar-shape.tsx",
  },
  "avatar-size": {
    component: React.lazy(() => import("@/components/demo/avatar-size")),
    src: "src/components/demo/avatar-size.tsx",
  },
  "avatar-status": {
    component: React.lazy(() => import("@/components/demo/avatar-status")),
    src: "src/components/demo/avatar-status.tsx",
  },
  "avatar-badge": {
    component: React.lazy(() => import("@/components/demo/avatar-badge")),
    src: "src/components/demo/avatar-badge.tsx",
  },
  "avatar-group": {
    component: React.lazy(() => import("@/components/demo/avatar-group")),
    src: "src/components/demo/avatar-group.tsx",
  },
  "avatar-ring": {
    component: React.lazy(() => import("@/components/demo/avatar-ring")),
    src: "src/components/demo/avatar-ring.tsx",
  },
  "accordion-demo": {
    component: React.lazy(() => import("@/components/demo/accordion-demo")),
    src: "src/components/demo/accordion-demo.tsx",
  },
  "accordion-with-icon": {
    component: React.lazy(
      () => import("@/components/demo/accordion-with-icon")
    ),
    src: "src/components/demo/accordion-with-icon.tsx",
  },
  "accordion-tabs": {
    component: React.lazy(() => import("@/components/demo/accordion-tabs")),
    src: "src/components/demo/accordion-tabs.tsx",
  },
  "accordion-multiple-items-open": {
    component: React.lazy(
      () => import("@/components/demo/accordion-multiple-items-open")
    ),
    src: "src/components/demo/accordion-multiple-items-open.tsx",
  },
  "accordion-plus-minus-indicator": {
    component: React.lazy(
      () => import("@/components/demo/accordion-plus-minus-indicator")
    ),
    src: "src/components/demo/accordion-plus-minus-indicator.tsx",
  },
  "alert-dialog-demo": {
    component: React.lazy(() => import("@/components/demo/alert-dialog-demo")),
    src: "src/components/demo/alert-dialog-demo.tsx",
  },
  "alert-dialog-with-icon": {
    component: React.lazy(
      () => import("@/components/demo/alert-dialog-with-icon")
    ),
    src: "src/components/demo/alert-dialog-with-icon.tsx",
  },
  "alert-dialog-destructive": {
    component: React.lazy(
      () => import("@/components/demo/alert-dialog-destructive")
    ),
    src: "src/components/demo/alert-dialog-destructive.tsx",
  },
  "alert-dialog-header": {
    component: React.lazy(
      () => import("@/components/demo/alert-dialog-header")
    ),
    src: "src/components/demo/alert-dialog-header.tsx",
  },
  "alert-dialog-with-close-button": {
    component: React.lazy(
      () => import("@/components/demo/alert-dialog-with-close-button")
    ),
    src: "src/components/demo/alert-dialog-with-close-button.tsx",
  },
  "autocomplete-demo": {
    component: React.lazy(() => import("@/components/demo/autocomplete-demo")),
    src: "src/components/demo/autocomplete-demo.tsx",
  },
  "autocomplete-group": {
    component: React.lazy(() => import("@/components/demo/autocomplete-group")),
    src: "src/components/demo/autocomplete-group.tsx",
  },
  "autocomplete-limit-results": {
    component: React.lazy(
      () => import("@/components/demo/autocomplete-limit-results")
    ),
    src: "src/components/demo/autocomplete-limit-results.tsx",
  },
  "autocomplete-auto-highlight": {
    component: React.lazy(
      () => import("@/components/demo/autocomplete-auto-highlight")
    ),
    src: "src/components/demo/autocomplete-auto-highlight.tsx",
  },
  "autocomplete-clear": {
    component: React.lazy(() => import("@/components/demo/autocomplete-clear")),
    src: "src/components/demo/autocomplete-clear.tsx",
  },
  "autocomplete-emoji-picker": {
    component: React.lazy(
      () => import("@/components/demo/autocomplete-emoji-picker")
    ),
    src: "src/components/demo/autocomplete-emoji-picker.tsx",
  },
  "badge-demo": {
    component: React.lazy(() => import("@/components/demo/badge-demo")),
    src: "src/components/demo/badge-demo.tsx",
  },
  "badge-variants": {
    component: React.lazy(() => import("@/components/demo/badge-variants")),
    src: "src/components/demo/badge-variants.tsx",
  },
  "badge-status": {
    component: React.lazy(() => import("@/components/demo/badge-status")),
    src: "src/components/demo/badge-status.tsx",
  },
  "badge-image": {
    component: React.lazy(() => import("@/components/demo/badge-image")),
    src: "src/components/demo/badge-image.tsx",
  },
  "badge-indicator": {
    component: React.lazy(() => import("@/components/demo/badge-indicator")),
    src: "src/components/demo/badge-indicator.tsx",
  },
  "breadcrumb-demo": {
    component: React.lazy(() => import("@/components/demo/breadcrumb-demo")),
    src: "src/components/demo/breadcrumb-demo.tsx",
  },
  "breadcrumb-custom-separator": {
    component: React.lazy(
      () => import("@/components/demo/breadcrumb-custom-separator")
    ),
    src: "src/components/demo/breadcrumb-custom-separator.tsx",
  },
  "breadcrumb-with-icon": {
    component: React.lazy(
      () => import("@/components/demo/breadcrumb-with-icon")
    ),
    src: "src/components/demo/breadcrumb-with-icon.tsx",
  },
  "breadcrumb-with-background": {
    component: React.lazy(
      () => import("@/components/demo/breadcrumb-with-background")
    ),
    src: "src/components/demo/breadcrumb-with-background.tsx",
  },
  "breadcrumb-tabs": {
    component: React.lazy(() => import("@/components/demo/breadcrumb-tabs")),
    src: "src/components/demo/breadcrumb-tabs.tsx",
  },
  "button-demo": {
    component: React.lazy(() => import("@/components/demo/button-demo")),
    src: "src/components/demo/button-demo.tsx",
  },
  "button-variants": {
    component: React.lazy(() => import("@/components/demo/button-variants")),
    src: "src/components/demo/button-variants.tsx",
  },
  "button-shape": {
    component: React.lazy(() => import("@/components/demo/button-shape")),
    src: "src/components/demo/button-shape.tsx",
  },
  "button-loading": {
    component: React.lazy(() => import("@/components/demo/button-loading")),
    src: "src/components/demo/button-loading.tsx",
  },
  "button-group": {
    component: React.lazy(() => import("@/components/demo/button-group")),
    src: "src/components/demo/button-group.tsx",
  },
  "button-split": {
    component: React.lazy(() => import("@/components/demo/button-split")),
    src: "src/components/demo/button-split.tsx",
  },
  "button-with-icon": {
    component: React.lazy(() => import("@/components/demo/button-with-icon")),
    src: "src/components/demo/button-with-icon.tsx",
  },
  "calendar-demo": {
    component: React.lazy(() => import("@/components/demo/calendar-demo")),
    src: "src/components/demo/calendar-demo.tsx",
  },
  "calendar-range": {
    component: React.lazy(() => import("@/components/demo/calendar-range")),
    src: "src/components/demo/calendar-range.tsx",
  },
  "calendar-month-year-selector": {
    component: React.lazy(
      () => import("@/components/demo/calendar-month-year-selector")
    ),
    src: "src/components/demo/calendar-month-year-selector.tsx",
  },
  "calendar-date-of-birth-picker": {
    component: React.lazy(
      () => import("@/components/demo/calendar-date-of-birth-picker")
    ),
    src: "src/components/demo/calendar-date-of-birth-picker.tsx",
  },
  "calendar-date-and-time-picker": {
    component: React.lazy(
      () => import("@/components/demo/calendar-date-and-time-picker")
    ),
    src: "src/components/demo/calendar-date-and-time-picker.tsx",
  },
  "carousel-demo": {
    component: React.lazy(() => import("@/components/demo/carousel-demo")),
    src: "src/components/demo/carousel-demo.tsx",
  },
  "checkbox-demo": {
    component: React.lazy(() => import("@/components/demo/checkbox-demo")),
    src: "src/components/demo/checkbox-demo.tsx",
  },
  "checkbox-size": {
    component: React.lazy(() => import("@/components/demo/checkbox-size")),
    src: "src/components/demo/checkbox-size.tsx",
  },
  "checkbox-shape": {
    component: React.lazy(() => import("@/components/demo/checkbox-shape")),
    src: "src/components/demo/checkbox-shape.tsx",
  },
  "checkbox-color": {
    component: React.lazy(() => import("@/components/demo/checkbox-color")),
    src: "src/components/demo/checkbox-color.tsx",
  },
  "checkbox-cards": {
    component: React.lazy(() => import("@/components/demo/checkbox-cards")),
    src: "src/components/demo/checkbox-cards.tsx",
  },
  "collapsible-demo": {
    component: React.lazy(() => import("@/components/demo/collapsible-demo")),
    src: "src/components/demo/collapsible-demo.tsx",
  },
  "combobox-demo": {
    component: React.lazy(() => import("@/components/demo/combobox-demo")),
    src: "src/components/demo/combobox-demo.tsx",
  },
  "combobox-with-icon": {
    component: React.lazy(() => import("@/components/demo/combobox-with-icon")),
    src: "src/components/demo/combobox-with-icon.tsx",
  },
  "combobox-baseui-demo": {
    component: React.lazy(
      () => import("@/components/demo/combobox-baseui-demo")
    ),
    src: "src/components/demo/combobox-baseui-demo.tsx",
  },
  "combobox-baseui-chips": {
    component: React.lazy(
      () => import("@/components/demo/combobox-baseui-chips")
    ),
    src: "src/components/demo/combobox-baseui-chips.tsx",
  },
  "combobox-baseui-input-inside-popup": {
    component: React.lazy(
      () => import("@/components/demo/combobox-baseui-input-inside-popup")
    ),
    src: "src/components/demo/combobox-baseui-input-inside-popup.tsx",
  },
  "combobox-baseui-groups": {
    component: React.lazy(
      () => import("@/components/demo/combobox-baseui-groups")
    ),
    src: "src/components/demo/combobox-baseui-groups.tsx",
  },
  "combobox-baseui-separator": {
    component: React.lazy(
      () => import("@/components/demo/combobox-baseui-separator")
    ),
    src: "src/components/demo/combobox-baseui-separator.tsx",
  },
  "combobox-baseui-creatable": {
    component: React.lazy(
      () => import("@/components/demo/combobox-baseui-creatable")
    ),
    src: "src/components/demo/combobox-baseui-creatable.tsx",
  },
  "command-demo": {
    component: React.lazy(() => import("@/components/demo/command-demo")),
    src: "src/components/demo/command-demo.tsx",
  },
  "context-menu-demo": {
    component: React.lazy(() => import("@/components/demo/context-menu-demo")),
    src: "src/components/demo/context-menu-demo.tsx",
  },
  "dialog-demo": {
    component: React.lazy(() => import("@/components/demo/dialog-demo")),
    src: "src/components/demo/dialog-demo.tsx",
  },
  "dropdown-menu-demo": {
    component: React.lazy(() => import("@/components/demo/dropdown-menu-demo")),
    src: "src/components/demo/dropdown-menu-demo.tsx",
  },
  "form-demo": {
    component: React.lazy(() => import("@/components/demo/form-demo")),
    src: "src/components/demo/form-demo.tsx",
  },
  "checkbox-form": {
    component: React.lazy(() => import("@/components/demo/checkbox-form")),
    src: "src/components/demo/checkbox-form.tsx",
  },
  "checkbox-tanstack-form": {
    component: React.lazy(
      () => import("@/components/demo/checkbox-tanstack-form")
    ),
    src: "src/components/demo/checkbox-tanstack-form.tsx",
  },
  "radio-form": {
    component: React.lazy(() => import("@/components/demo/radio-form")),
    src: "src/components/demo/radio-form.tsx",
  },
  "radio-tanstack-form": {
    component: React.lazy(
      () => import("@/components/demo/radio-tanstack-form")
    ),
    src: "src/components/demo/radio-tanstack-form.tsx",
  },
  "select-form": {
    component: React.lazy(() => import("@/components/demo/select-form")),
    src: "src/components/demo/select-form.tsx",
  },
  "select-tanstack-form": {
    component: React.lazy(
      () => import("@/components/demo/select-tanstack-form")
    ),
    src: "src/components/demo/select-tanstack-form.tsx",
  },
  "switch-form": {
    component: React.lazy(() => import("@/components/demo/switch-form")),
    src: "src/components/demo/switch-form.tsx",
  },
  "switch-tanstack-form": {
    component: React.lazy(
      () => import("@/components/demo/switch-tanstack-form")
    ),
    src: "src/components/demo/switch-tanstack-form.tsx",
  },
  "textarea-form": {
    component: React.lazy(() => import("@/components/demo/textarea-form")),
    src: "src/components/demo/textarea-form.tsx",
  },
  "textarea-tanstack-form": {
    component: React.lazy(
      () => import("@/components/demo/textarea-tanstack-form")
    ),
    src: "src/components/demo/textarea-tanstack-form.tsx",
  },
  "combobox-form": {
    component: React.lazy(() => import("@/components/demo/combobox-form")),
    src: "src/components/demo/combobox-form.tsx",
  },
  "combobox-tanstack-form": {
    component: React.lazy(
      () => import("@/components/demo/combobox-tanstack-form")
    ),
    src: "src/components/demo/combobox-tanstack-form.tsx",
  },
  "date-picker-form": {
    component: React.lazy(() => import("@/components/demo/date-picker-form")),
    src: "src/components/demo/date-picker-form.tsx",
  },
  "date-picker-tanstack-form": {
    component: React.lazy(
      () => import("@/components/demo/date-picker-tanstack-form")
    ),
    src: "src/components/demo/date-picker-tanstack-form.tsx",
  },
  "form-tanstack-demo": {
    component: React.lazy(() => import("@/components/demo/form-tanstack-demo")),
    src: "src/components/demo/form-tanstack-demo.tsx",
  },
  "hover-card-demo": {
    component: React.lazy(() => import("@/components/demo/hover-card-demo")),
    src: "src/components/demo/hover-card-demo.tsx",
  },
  "input-demo": {
    component: React.lazy(() => import("@/components/demo/input-demo")),
    src: "src/components/demo/input-demo.tsx",
  },
  "label-demo": {
    component: React.lazy(() => import("@/components/demo/label-demo")),
    src: "src/components/demo/label-demo.tsx",
  },
  "menubar-demo": {
    component: React.lazy(() => import("@/components/demo/menubar-demo")),
    src: "src/components/demo/menubar-demo.tsx",
  },
  "navigation-menu-demo": {
    component: React.lazy(
      () => import("@/components/demo/navigation-menu-demo")
    ),
    src: "src/components/demo/navigation-menu-demo.tsx",
  },
  "navigation-menu-with-arrow": {
    component: React.lazy(
      () => import("@/components/demo/navigation-menu-with-arrow")
    ),
    src: "src/components/demo/navigation-menu-with-arrow.tsx",
  },
  "pagination-demo": {
    component: React.lazy(() => import("@/components/demo/pagination-demo")),
    src: "src/components/demo/pagination-demo.tsx",
  },
  "popover-demo": {
    component: React.lazy(() => import("@/components/demo/popover-demo")),
    src: "src/components/demo/popover-demo.tsx",
  },
  "progress-demo": {
    component: React.lazy(() => import("@/components/demo/progress-demo")),
    src: "src/components/demo/progress-demo.tsx",
  },
  "progress-color": {
    component: React.lazy(() => import("@/components/demo/progress-color")),
    src: "src/components/demo/progress-color.tsx",
  },
  "progress-shape": {
    component: React.lazy(() => import("@/components/demo/progress-shape")),
    src: "src/components/demo/progress-shape.tsx",
  },
  "progress-with-value": {
    component: React.lazy(
      () => import("@/components/demo/progress-with-value")
    ),
    src: "src/components/demo/progress-with-value.tsx",
  },
  "progress-with-label": {
    component: React.lazy(
      () => import("@/components/demo/progress-with-label")
    ),
    src: "src/components/demo/progress-with-label.tsx",
  },
  "radio-group-demo": {
    component: React.lazy(() => import("@/components/demo/radio-group-demo")),
    src: "src/components/demo/radio-group-demo.tsx",
  },
  "radio-group-horizontal": {
    component: React.lazy(
      () => import("@/components/demo/radio-group-horizontal")
    ),
    src: "src/components/demo/radio-group-horizontal.tsx",
  },
  "radio-group-size": {
    component: React.lazy(() => import("@/components/demo/radio-group-size")),
    src: "src/components/demo/radio-group-size.tsx",
  },
  "radio-group-color": {
    component: React.lazy(() => import("@/components/demo/radio-group-color")),
    src: "src/components/demo/radio-group-color.tsx",
  },
  "radio-group-variants": {
    component: React.lazy(
      () => import("@/components/demo/radio-group-variants")
    ),
    src: "src/components/demo/radio-group-variants.tsx",
  },
  "radio-group-cards": {
    component: React.lazy(() => import("@/components/demo/radio-group-cards")),
    src: "src/components/demo/radio-group-cards.tsx",
  },
  "scroll-area-demo": {
    component: React.lazy(() => import("@/components/demo/scroll-area-demo")),
    src: "src/components/demo/scroll-area-demo.tsx",
  },
  "select-demo": {
    component: React.lazy(() => import("@/components/demo/select-demo")),
    src: "src/components/demo/select-demo.tsx",
  },
  "separator-demo": {
    component: React.lazy(() => import("@/components/demo/separator-demo")),
    src: "src/components/demo/separator-demo.tsx",
  },
  "separator-with-label": {
    component: React.lazy(
      () => import("@/components/demo/separator-with-label")
    ),
    src: "src/components/demo/separator-with-label.tsx",
  },
  "sheet-demo": {
    component: React.lazy(() => import("@/components/demo/sheet-demo")),
    src: "src/components/demo/sheet-demo.tsx",
  },
  "sidebar-demo": {
    component: React.lazy(() => import("@/components/demo/sidebar-demo")),
    src: "src/components/demo/sidebar-demo.tsx",
  },
  "slider-demo": {
    component: React.lazy(() => import("@/components/demo/slider-demo")),
    src: "src/components/demo/slider-demo.tsx",
  },
  "slider-with-multiple-thumbs": {
    component: React.lazy(
      () => import("@/components/demo/slider-with-multiple-thumbs")
    ),
    src: "src/components/demo/slider-with-multiple-thumbs.tsx",
  },
  "slider-size": {
    component: React.lazy(() => import("@/components/demo/slider-size")),
    src: "src/components/demo/slider-size.tsx",
  },
  "slider-color": {
    component: React.lazy(() => import("@/components/demo/slider-color")),
    src: "src/components/demo/slider-color.tsx",
  },
  "slider-thumb-icon": {
    component: React.lazy(() => import("@/components/demo/slider-thumb-icon")),
    src: "src/components/demo/slider-thumb-icon.tsx",
  },
  "slider-rtl": {
    component: React.lazy(() => import("@/components/demo/slider-rtl")),
    src: "src/components/demo/slider-rtl.tsx",
  },
  "switch-demo": {
    component: React.lazy(() => import("@/components/demo/switch-demo")),
    src: "src/components/demo/switch-demo.tsx",
  },
  "switch-disabled": {
    component: React.lazy(() => import("@/components/demo/switch-disabled")),
    src: "src/components/demo/switch-disabled.tsx",
  },
  "switch-color": {
    component: React.lazy(() => import("@/components/demo/switch-color")),
    src: "src/components/demo/switch-color.tsx",
  },
  "switch-thumb-icon": {
    component: React.lazy(() => import("@/components/demo/switch-thumb-icon")),
    src: "src/components/demo/switch-thumb-icon.tsx",
  },
  "tabs-demo": {
    component: React.lazy(() => import("@/components/demo/tabs-demo")),
    src: "src/components/demo/tabs-demo.tsx",
  },
  "toggle-demo": {
    component: React.lazy(() => import("@/components/demo/toggle-demo")),
    src: "src/components/demo/toggle-demo.tsx",
  },
  "toggle-group-demo": {
    component: React.lazy(() => import("@/components/demo/toggle-group-demo")),
    src: "src/components/demo/toggle-group-demo.tsx",
  },
  "tooltip-demo": {
    component: React.lazy(() => import("@/components/demo/tooltip-demo")),
    src: "src/components/demo/tooltip-demo.tsx",
  },
};
