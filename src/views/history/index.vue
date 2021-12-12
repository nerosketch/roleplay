<template lang="pug">
  v-card
    v-list(three-line)
      v-subheader Subheader
      template(v-for="(item, i) in items")
        v-list-item(:key="i")
          v-list-item-avatar(v-if="item.right")
            v-img(:src="item.avatar")
          v-list-item-content
            v-list-item-title(v-html="item.content")
            v-list-item-subtitle(v-html="item.subtitle")
          v-list-item-avatar(v-if="!item.right")
            v-img(:src="item.avatar")
        v-divider(:key="i*-1")

    v-card-text
      v-textarea(
        label="Сюда текст твоего сообщения"
      )
    v-card-actions
      v-btn Отправить
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue{
  private items = [
    { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', content: ' Html content', subtitle: ' asdas asd KJH iuyh iU'},
    { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', content: ' Html content', subtitle: ' asdas asd KJH iuyh iU', right: true}
  ]
}
</script>