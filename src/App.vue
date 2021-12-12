<template lang="pug">
v-app
  v-system-bar(app)
    v-spacer
    v-icon fas fa-camera
    v-icon fas fa-archway
    v-icon fas fa-atlas
  v-app-bar(
    absolute
    dark
    shrink-on-scroll
    prominent

    app
    clipped-right
    flat
    height='172'
    src="/img/44-1920x172.jpg"
  )
    template(v-slot:img="{ props }")
      v-img(
        v-bind="props"
        gradient="to top right, rgba(58,59,55,.7), rgba(25,32,72,.7)"
      )
    v-app-bar-nav-icon(@click.stop="drawer = !drawer")
    v-toolbar-title Название истории
    v-spacer
    v-btn(icon)
      v-icon fas fa-archway
    v-btn(icon)
      v-icon fas fa-archway
    //- v-spacer
    //- v-responsive(max-width='156')
    //-   v-text-field(dense flat hide-details rounded solo-inverted)
  v-navigation-drawer(v-model='drawer' app width='300')
    v-navigation-drawer(v-model='drawer' absolute color='grey darken-3' mini-variant)
      router-link(:to="{name: 'Home'}")
        v-avatar.d-block.text-center.mx-auto.mt-4(size='40')
          v-img(src="/img/stratton-oakmont.png")
      v-divider.mx-3.my-5

      left-icon-link(:item="v" v-for="(v, i) in menus" :key="i")

    //- v-sheet(color='grey darken-5' height='128' width='100%')
    v-list.pl-14(flat)
      v-subheader Участники
      v-list-item-group
        v-list-item(v-for="n in 5" :key="n")
          v-list-item-content
            v-list-item-title Участник {{ n }}

      v-subheader Роли
      v-list-item-group
        v-list-item(v-for="n in 5" :key="n")
          v-list-item-content
            v-list-item-title Роль {{ n }}

  v-navigation-drawer(app clipped right v-model='drawer')
    v-list.pl-4(flat)
      v-list-subheader Роли
      v-list-item(v-for='n in 5' :key='n' link)
        v-list-item-content
          v-list-item-title Item {{ n }}
  v-main
    v-container(fluid tag="main")
      router-view
  //- v-footer(app color='transparent' height='72' inset)
    v-text-field(background-color='grey darken-1' dense flat hide-details rounded solo)

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LeftIconLink from '@/components/left-icon-link.vue'

@Component({
  name: 'App',
  components: {
    LeftIconLink
  }
})
export default class extends Vue{
  private drawer = true

  private menus = [
    { text: 'Истории', icon: 'fa-angry' },
    { text: 'Архивы', icon: 'fa-allergies' },
    { text: 'Поиск', icon: 'fa-ankh' },
  ]
}
</script>
