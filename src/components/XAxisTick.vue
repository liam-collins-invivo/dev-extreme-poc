<template>
  <svg width="100px" class="annotation">
    <line x1="50%" y1="0" x2="50%" y2="7" stroke-width="1" :stroke="strokeColor" />
    <text :fill="textColor" text-anchor="middle"
      x="50%"
      y="20"
    >
      <tspan class="label">{{annotation.text}}</tspan>
    </text>
  </svg>
</template>
<script>

export default {
  props: {
    annotation: {
      type: Object,
      default: () => ({}),
    },
    strokeColor: {
      type: String,
      default: "#767676"
    },
    textColor: {
      type: String,
      default: "#767676"
    }
  },
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {
    console.log(this.annotation);
  }
};
</script>
<style>
.annotation {
  font-size: 12px;
}

.label {
  font-weight: normal;
}
</style>