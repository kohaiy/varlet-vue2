<template>
  <div class="var-cell-outer">
    <div>
      <app-type>{{ pack.basicUsage }}</app-type>
      <var-cell> {{ pack.content }} </var-cell>
      <var-cell> {{ pack.content }} </var-cell>
    </div>
    <div>
      <app-type>{{ pack.showIcon }}</app-type>
      <var-cell icon="fire" :title="pack.content">
        <template #extra>
          <var-icon name="information" />
        </template>
      </var-cell>
      <var-cell icon="fire" :title="pack.content">
        <template #extra>
          <var-icon name="information" />
        </template>
      </var-cell>
    </div>
    <div>
      <app-type>{{ pack.showDesc }}</app-type>
      <var-cell icon="fire" :title="pack.content" :desc="pack.description">
        <template #extra>
          <var-icon name="information" />
        </template>
      </var-cell>
      <var-cell :title="pack.content" :desc="pack.description" />
    </div>
    <div>
      <app-type>{{ pack.showBorder }}</app-type>
      <var-cell border> {{ pack.content }} </var-cell>
      <var-cell border> {{ pack.content }} </var-cell>
    </div>
  </div>
</template>

<script>
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import VarIcon from '../../icon'
import VarCell from '..'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'CellExample',

  components: {
    VarIcon,
    VarCell,
    AppType,
  },

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use)
    watchDarkMode(this, dark)
  },
}
</script>
