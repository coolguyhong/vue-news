<template>
  <div>
    <ul>
      <item-slot>
        아이템 1
      </item-slot>
      <item-slot>
        아이템 2 <button>click me</button>
      </item-slot>
      <item-slot>
        <div>
          아이템 3
        </div>
        <img src="../assets/logo.png" alt="vue logo">
      </item-slot>
      <item-slot>
        <div style="color: blue; font-size: 20px">아이템 4</div>
      </item-slot>
    </ul>
  </div>
</template>

<script>
import ItemSlot from '@/components/ItemSlot'

export default {
  name: "SlotsView",
  components: {
    ItemSlot,
  },
  data() {
    return {
      items: ['아이템 1', '아이템 2', '아이템 3', '아이템 4','아이템 5']
    }
  }
}
</script>

<style scoped>

</style>