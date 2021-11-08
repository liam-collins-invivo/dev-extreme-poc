<template>
  <div class="chart-container">
    <DxChart 
      :title="{
        text: config?.title?.text
      }"
      :data-source="data" 
      @legend-click="legendClickHandler($event)"
      :crosshair="{
        enabled: config?.crosshair?.enabled,
        color: '#000',
        dashStyle: 'dash',
        horizontalLine: {
          visible: config?.crosshair?.horizontal,
          label: {
            visible: true,
          }
        },
        verticalLine: {
          visible: config?.crosshair?.vertical,
          label: {
            visible: true,
            customizeText: customizeXAxisCrosshairLabelText
          }
        },
      }"
    >
      <DxArgumentAxis
        :title="{
          text: config?.xAxis?.title?.text,
          margin: (this.config?.xAxis?.type && this.config.xAxis.type.includes('custom')) ? 32 : 0,
        }"
        :custom-position="0"
        :whole-range="[config?.xAxis?.range?.low,config?.xAxis?.range?.high]"
        :visual-range="[config?.xAxis?.range?.low,config?.xAxis?.range?.high]"
        :type="defaultTo(config?.xAxis?.type,'continuous')"
        :label="{
          alignment: 'center',
          position: 'outside',
          customizeText: customizeXAxisLabelText
        }"
        :tick-interval="config?.xAxis?.majorTick?.interval"
        :minor-tick-interval="config?.xAxis?.minorTick?.interval"
        :strips="[
          /* TODO: Grouping X-axis elements
          {
            startValue:0,
            endValue:1,
            color: '#FFFFFF00',
            label: {
              visible: true,
              text: 'Week 0',
              verticalAlignment: 'bottom',
              position:'outside',
            }
          },
          {
            startValue:2,
            endValue:3,
            color: '#FFFFFF00',
            label: {
              visible: true,
              text: 'Week 2',
              verticalAlignment: 'bottom',
              position:'outside',
            }
          }
          */
        ]"
        :constantLines="getXAxisConstantLines()"
      >
        <DxTick :visible="defaultTo(config?.xAxis?.majorTick?.enabled,true)"/>
        <DxMinorTick :visible="config?.xAxis?.minorTick?.enabled" :opacity="1"/>
      </DxArgumentAxis>
      <DxValueAxis
        :title="{
          text: config?.yAxis?.title?.text
        }"
        :visual-range="[config?.yAxis?.range?.low,config?.yAxis?.range?.high]"
        :tick-interval="config?.yAxis?.majorTick?.interval"
        :minor-tick-interval="config?.yAxis?.minorTick?.interval"
        :breaks="[
        /*
          {
            startValue: 0,
            endValue: 20,
          }
        */
        ]"
      >
        <DxTick :visible="defaultTo(config?.yAxis?.majorTick?.enabled,true)"/>
        <DxMinorTick :visible="config?.yAxis?.minorTick?.enabled" :opacity="1"/>
      </DxValueAxis>
      <DxCommonSeriesSettings name-field="set" argument-field="x" value-field="y" :type="config.type" 
      >
        <DxValueErrorBar
          v-if="config?.error?.enabled"
          :opacity="0.5"
          high-value-field="errorHigh"
          low-value-field="errorLow"
        />
      </DxCommonSeriesSettings>
      <DxSeriesTemplate
        :customize-series="customizeSeries"
        name-field="set"
      >
      </DxSeriesTemplate>
      <DxTooltip 
        :enabled="true" 
        :customizeTooltip="customizeTooltip"
      />
      <DxLegend
        position="outside"
        horizontal-alignment="right"
        vertical-alignment=""
        :customize-items="customizeLegendItems"
      />
      <DxAnnotation
        v-for="(tick,index) in config?.xAxis?.customTicks"
        :key="index"
        type="custom"
        :argument='tick?.value'
        :value="0"
        :text="tick?.label"
        template="xAxisTick"
        :offsetY="11"
        :opacity="0"
      />
      <template #xAxisTick="{ data }">
        <XAxisTick :annotation="data" color="#767676"/>
      </template>
    </DxChart>
  </div>
</template>
     
<script>
import DxChart, {
  DxArgumentAxis,
  DxTick,
  DxMinorTick,
  DxValueAxis,
  DxCommonSeriesSettings,
  DxSeriesTemplate,
  DxValueErrorBar,
  DxTooltip,
  DxLegend,
  DxAnnotation,
} from "devextreme-vue/chart"; 

import XAxisTick from './XAxisTick.vue';

export default {
  components: {
    DxChart,
    DxArgumentAxis,
    DxTick,
    DxMinorTick,
    DxValueAxis,
    DxCommonSeriesSettings,
    DxSeriesTemplate,
    DxValueErrorBar,
    DxTooltip,
    DxLegend,
    DxAnnotation,
    XAxisTick
  },

  props: {
    slug: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      data: this.$store.state.chartData[this.slug].data,
      config: this.$store.state.chartData[this.slug].config,
    };
  },

  computed: {

  },

  methods: {
    // used for looking up a property using optional chaining (?.)
    // default value is usually 'undefined', we would like it to be ... whatever we want.
    defaultTo(property,defaultValue) {
      if (property === undefined) {
        return defaultValue;
      }
      else {
        return property;
      }
    },
    legendClickHandler(e) {
      const series = e.target;
      if (series.isVisible()) {
        series.hide();
      } else {
        series.show();
      }
    },
    customizeLegendItems(items) {
      items.forEach((item) => {
        var sets = this.config.sets.filter(set => set.slug==item.text);
        var set = (sets && sets.length > 0) ? sets[0] : null
        item.text = set ? set.name : item.text;
      });
      return items;
    },
    customizeSeries(seriesName) {
      var sets = this.config.sets.filter(set => set.slug==seriesName);
      var set = (sets && sets.length > 0) ? sets[0] : null;
      var obj = set ? { 
        color: set?.color,
        point: { symbol: set?.symbol },
        valueErrorBar: { color: set?.color },
        type: set?.type
      } : { };
      return obj;
    },
    getXAxisLabelText(label) {
      var overrides = this.config.xAxis.overrides.filter(override => override.value==label.value || override.default);
      var override = (overrides && overrides.length > 0) ? overrides[0] : null;
      return override ? override.replace : label.value;
    },
    customizeXAxisLabelText(label) {
      return this.getXAxisLabelText(label);
    },
    customizeXAxisCrosshairLabelText(label) {
      var labelText = this.getXAxisLabelText(label);
      return (labelText != "") ? labelText : label.value;
    },
    customizeTooltip(pointInfo) {
      var tooltipText = this.config?.tooltip?.format;
      if (tooltipText) {
        tooltipText = tooltipText.replace("{x}",pointInfo.argument);
        tooltipText = tooltipText.replace("{xUnit}",(pointInfo.argument != 1) ? (this.config?.xAxis?.unit?.plural ? this.config?.xAxis?.unit?.plural : "units") : this.config?.xAxis?.unit?.singular ? this.config?.xAxis?.unit?.singular : "unit");
        tooltipText = tooltipText.replace("{y}",pointInfo.value);
        tooltipText = tooltipText.replace("{yUnit}",(pointInfo.argument != 1) ? (this.config?.yAxis?.unit?.plural ? this.config?.yAxis?.unit?.plural : "units") : this.config?.yAxis?.unit?.singular ? this.config?.yAxis?.unit?.singular : "unit");
        tooltipText = tooltipText.replace("{errorLow}",pointInfo.lowErrorValue);
        tooltipText = tooltipText.replace("{errorHigh}",pointInfo.highErrorValue);
        return {
          text: tooltipText,
        };
      }
      else {
        return { };
      }
    },
    getXAxisConstantLines() {
      var constantLines = [];
      if (this?.config?.xAxis?.constantLines?.lines) {
        Array.prototype.forEach.call(this?.config?.xAxis?.constantLines?.lines, (line) => {
          var color = line?.style?.color ? line?.style?.color : this?.config?.xAxis?.constantLines?.style?.color ? this?.config?.xAxis?.constantLines?.style?.color : "#000000";
          var horizontalAlignment = line?.style?.horizontalAlignment ? line?.style?.horizontalAlignment : this?.config?.xAxis?.constantLines?.style?.horizontalAlignment ? this?.config?.xAxis?.constantLines?.style?.horizontalAlignment : "center";
          var verticalAlignment = line?.style?.verticalAlignment ? line?.style?.verticalAlignment : this?.config?.xAxis?.constantLines?.style?.verticalAlignment ? this?.config?.xAxis?.constantLines?.style?.verticalAlignment : "bottom";
          var position = line?.style?.position ? line?.style?.position : this?.config?.xAxis?.constantLines?.style?.position ? this?.config?.xAxis?.constantLines?.style?.position : "outside";
          var displayBehindSeries = line?.style?.displayBehindSeries ? line?.style?.displayBehindSeries : this?.config?.xAxis?.constantLines?.style?.displayBehindSeries ? this?.config?.xAxis?.constantLines?.style?.displayBehindSeries : true;
          if (line.value) {
            constantLines.push({
              value: line?.value,
              color: color,
              displayBehindSeries: displayBehindSeries,
              label: {
                text: line?.label,
                horizontalAlignment: horizontalAlignment,
                verticalAlignment: verticalAlignment,
                position: position,

              }
            });
          }
        });
      }
      return constantLines;
    }
  },
};
</script>

<style scoped lang="scss">
.chart-container {
  height: 1000px;
}
</style>