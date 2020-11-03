<template>
  <v-layout
    row
    wrap >
    <v-flex
      md12
      sm12
      xs12
      class="text-xs-center" >
      <v-tabs
        :centered="center"
        :right="right"
        show-arrows
        color="transparent" >
        <v-tabs-slider color="transparent"/>
        <v-tab
          v-for="item in items"
          :key="items.indexOf(item)"
          :ripple="false"
          class="myTb" >
          <v-chip
            v-if="item.value === true"
            :color="item.color ? item.color : color"
            :text-color="item.text_color ? item.text_color : text_color"
            :label="label"
            :outline="outline"
            :small="small"
            :class=" disabled ? '' : 'ss-chip'" >
            <i
              v-if="item.prepend_activo"
              :color="item.icon_color ? item.icon_color : icon_color"
              :class="item.prepend_activo"
              class="pr-1" /> 
            <v-icon
              small
              color="yellow"
              v-if="destacar.prop != null && item[destacar.prop] === destacar.value"
              class="pr-1" >
              {{ destacado_icon }}
            </v-icon>
            <v-icon
              v-if="item.prepend_activo"
              :color="item.icon_color ? item.icon_color : icon_color"
              class="pr-1" >
              {{ item.prepend_activo }}
            </v-icon>
            <img
              v-if="item.imagen_prepend_activo"
              :src="item.imagen_prepend_activo "
              height="25px"
              class="pr-1" >
            <strong class="text-capitalize" >
              {{ item.texto }}
            </strong>
            <img
              v-if="item.imagen_append_activo"
              :src="item.imagen_append_activo "
              height="25px"
              class="pl-1" >
            <v-icon
              v-if="item.append_activo"
              :color="item.icon_color ? item.icon_color : icon_color"
              class="pl-1" >
              {{ item.append_activo }}
            </v-icon>
            <v-avatar
              v-if="badge"
              :color="item.badge_color ? item.badge_color : color"
              :style="'color: '+ (item.badge_text_color ? item.badge_text_color : text_color)"
              class=" font-weight-bold ml-2" >
              {{ item.badge_value ? item.badge_value : 0 }}
            </v-avatar>
            <v-icon
              v-if="edit"
              :color="item.text_color ? item.text_color : text_color"
              class="pl-1"
              @click="editItem(item)" >
              {{ edit_icon }}
            </v-icon>
            <v-icon
              v-if="close"
              :color="item.text_color ? item.text_color : text_color"
              class="pl-1"
              @click="removeItem(item)" >
              {{ clear_icon }}
            </v-icon>
          </v-chip>
          <v-chip
            v-else
            :color="item.unactive_color ? item.unactive_color : unactive_color"
            :disabled="disabled"
            :label="label"
            :outline="outline"
            :small="small"
            :text-color="item.unactive_text_color ? item.unactive_text_color : unactive_text_color"
            :class=" disabled ? '' : 'ss-chip'"
            @click="disabled ? '' : select(item)"
            @keyup.enter="disabled ? '' : select(item)" >
            <v-icon
              small
              color="yellow"
              v-if="destacar.prop != null && item[destacar.prop] === destacar.value"
              class="pr-1" >
              {{ destacado_icon }}
            </v-icon>
            <v-icon
              v-if="item.prepend_inactivo"
              class="pr-1" >
              {{ item.prepend_inactivo }}
            </v-icon>
            <img
              v-if="item.imagen_prepend_inactivo"
              :src="item.imagen_prepend_inactivo "
              height="25px"
              class="pr-1"
              style="filter: grayscale(100%)" >
            <strong class="text-capitalize" >
              {{ item.texto }}
            </strong>
            <img
              v-if="item.imagen_append_inactivo"
              :src="item.imagen_append_inactivo "
              height="25px"
              class="pl-1"
              style="filter: grayscale(100%)" >
            <v-icon
              v-if="item.append_inactivo"
              class="pl-1" >
              {{ item.append_inactivo }}
            </v-icon>
            <v-avatar
              v-if="badge"
              :color="item.badge_color ? item.badge_color : color"
              :style="'color: '+ (item.badge_text_color ? item.badge_text_color : text_color)"
              class="font-weight-bold  ml-2 badgeAvatar " >
              {{ item.badge_value ? item.badge_value : 0 }}
            </v-avatar>
            <v-icon
              v-if="edit"
              :color="item.unactive_text_color ? item.unactive_text_color : unactive_text_color"
              class="pl-1"
              @click="editItem(item)" >
              {{ edit_icon }}
            </v-icon>
            <v-icon
              v-if="close"
              :color="item.unactive_text_color ? item.unactive_text_color : unactive_text_color"
              class="pl-1"
              @click="removeItem(item)" >
              {{ clear_icon }}
            </v-icon>
          </v-chip>
        </v-tab>
      </v-tabs>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'DvSwitch',
  model: {
    prop: 'selected',
    event: 'input'
  },
  props: {
    close: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#616161'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    clear_icon: {
      type: String,
      default: 'close'
    },
    destacar: {
      type: Object,
      default: () => { return {} }
    },
    destacado_icon: {
      type: String,
      default: 'star'
    },
    edit: {
      type: Boolean,
      default: false
    },
    edit_icon: {
      type: String,
      default: 'edit'
    },
    items: {
      type: Array,
      default: function () { return [] }
    },
    item_value: {
      type: String,
      default: null
    },
    label: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    selected: {
      type: [Number, String, Array, Object, Boolean],
      required: true
    },
    small: {
      type: Boolean,
      default: false
    },
    text_color: {
      type: String,
      default: 'black'
    },
    icon_color: {
      type: String,
      default: 'black'
    },
    unactive_color: {
      type: String,
      default: '#b5b5b5'
    },
    unactive_text_color: {
      type: String,
      default: 'grey darken-3'
    },
    rules: {
      type: Array,
      default: function () { return [] }
    },
    right: {
      type: Boolean,
      default: false
    },
    return_object: {
      type: Boolean,
      default: false
    },
    badge: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      modelo: null
    }
  },
  watch: {
    selected () {
      this.modelo =  this.selected
      this.items.forEach(element => {
        if (this.return_object === true) {
          if (JSON.stringify(element) === JSON.stringify(this.selected)) {
            element.value = true
            this.enviarModelo()
          } else {
            element.value = false
          }
        } else if (this.item_value === null) {
          if (this.items.indexOf(element) === parseInt(this.selected)) {
            element.value = true
            this.enviarModelo()
          } else {
            element.value = false
          }
        } else if (element[this.item_value] !== undefined) {
          if (element[this.item_value] === this.selected) {
            element.value = true
            this.enviarModelo()
          } else {
            element.value = false
          }
        }
      })
      this.$forceUpdate()
    },
    rules () {
      // console.log(this.rules)
    }
  },
  created () {
    this.modelo = this.selected
    this.items.forEach(element => {
      if (this.return_object === true) {
        if (JSON.stringify(element) === JSON.stringify(this.selected)) {
          element.value = true
          this.enviarModelo()
        } else {
          element.value = false
        }
      } else if (this.item_value === null) {
        if (this.items.indexOf(element) === parseInt(this.selected)) {
          element.value = true
          this.enviarModelo()
        } else {
          element.value = false
        }
      } else if (element[this.item_value] !== undefined) {
        if (element[this.item_value] === this.selected) {
          element.value = true
          this.enviarModelo()
        } else {
          element.value = false
        }
      }
    })
    this.$forceUpdate()
  },
  methods: {
    enviarModelo () {
      this.$emit('input', this.modelo)
    },
    select (item) {
      this.items.forEach(element => {
        if (element === item) {
          element.value = true
          this.$forceUpdate()
          if (this.return_object === true) {
            this.modelo = element
          } else if (this.item_value === null) {
            this.modelo = this.items.indexOf(element)
          } else if (element[this.item_value] === undefined) {
            this.modelo = 'undefined'
          } else {
            this.modelo = element[this.item_value]
          }
          this.enviarModelo()
        } else {
          element.value = false
        }
      })
      this.$forceUpdate()
      this.$emit('change')
    },
    reset () {
      this.select(null)
      this.modelo = null
      this.enviarModelo()
    },
    removeItem (item) {
      this.$alertify.confirmWithTitle(
        "Eliminar Registro",
        "¿Esta seguro de Eliminar el Registro de " + item.tipo + " ?",
        () => {
          this.$emit('removeItem', item)
        },
        () => { 
           
        }
      )
    },
    editItem (item) {
      this.$emit('editItem', item)
    }
  }
}
</script>
<style>
.myTb a.v-tabs__item:not(.v-tabs__item--active) {
  opacity: 1;
}
.myTb a.v-tabs__item {
  padding: 0;
}
</style>