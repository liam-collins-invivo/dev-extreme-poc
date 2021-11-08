<template>
  <div class="home">
    <Chart slug="data_template_3"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Chart from "@/components/Chart.vue";

export default {
  name: "Home",
  components: {
    Chart,
  },
};
</script>
