<template lang="pug">
  v-tooltip(bottom)
    template(#activator="{ on, attrs }")
      //- router-link(href="#asdasd")
      v-avatar.d-block.text-center.mx-auto.mb-9(
        size='28'
        v-bind="attrs" v-on="on"
      )
        v-icon fas {{ item.icon }}
    | {{ item.text }}
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface IIconLinkItem {
  text: string
  icon: string
}

@Component({
  name: 'LeftIconLink'
})
export default class extends Vue {
  @Prop({ required: true })
  private item!: IIconLinkItem


}
</script>