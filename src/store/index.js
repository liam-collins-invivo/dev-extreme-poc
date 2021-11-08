import { createStore } from "vuex";

import linechartTestData1 from "@/data/data_template.js";
import linechartTestData2 from "@/data/data_template_2.js";
import linechartTestData3 from "@/data/data_template_3.js";

export default createStore({
  state () {
    return {
      chartData: {
        "data_template_1": linechartTestData1,
        "data_template_2": linechartTestData2,
        "data_template_3": linechartTestData3,
      }
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
