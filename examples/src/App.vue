<template>
  <v-container
    fill-height
    grid-list-xl>
    <v-layout
      justify-center
      wrap >
      <v-flex
        xs12
        md10
        offset-md-1
        style="background: white;" >
        <span class="display-1" >
          Simple Switch
        </span>
        <br>
        <v-chip
          label
          outline
          color="red" >
          <strong>
            dv-switch
          </strong>
        </v-chip>
        <v-card flat >
          <v-card-text>
            <v-container >
              <v-layout >
                <dv-switch
                  v-model="selected"
                  :items="items"
                  color="pink"
                  outline
                  badge
                  item_value="texto" />
                <v-text-field
                  v-model="selected" />
              </v-layout>
            </v-container>
            <v-container >
              <v-layout >
                <dv-switch
                  v-model="selected2"
                  :items="items"
                  :destacar="{ prop: 'texto', value: 'Color' }"
                  color="blue-grey"
                  label />
                <v-text-field
                  v-model="selected2" />
              </v-layout>
            </v-container>
            <v-container >
              <v-layout >
                <dv-switch
                  v-model="selected3"
                  :items="items"
                  color="cyan"
                  :destacar="{ prop: 'prepend_activo', value: 'swap_vertical_circle' }"
                  label
                  return_object />
              </v-layout>
            </v-container>
          </v-card-text>
          {{ selected3 }}
          <dv-data-list :data="data" />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { Api } from './API' 
export default {
  name: 'App',
  data () {
    return {
      data: [ ...Api ],
      selected: 'Peliculas',
      selected2: 4,
      selected3: {
        texto: 'Color',
        append: 'backup',
        value: false
      },
      items: [
        {
          texto: 'Todas',
          color: 'orange',
          prepend_activo: 'swap_vertical_circle',
          prepend_inactivo: 'settings_bluetooth'
        },
        {
          texto: 'animales',
          imagen_append_activo: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/crisis-management-2534703-2129518.png',
          imagen_prepend: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/delivery-product-2534902-2129568.png',
          color: 'deep-purple'
        },
        {
          texto: 'Importantes',
          color: 'indigo',
          append: 'settings_bluetooth'
        },
        {
          texto: 'Plantas',
          imagen_append: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/delivery-product-2534902-2129568.png',
          color: 'cyan'
        },
        {
          texto: 'Imagenes',
          color: 'blue',
          prepend: 'extension'
        },
        {
          texto: 'Paises',
          imagen_prepend: 'replace',
          color: 'light-green darken-3'
        },
        {
          texto: 'Color',
          append: 'backup'
        },
        {
          texto: 'Comida',
          imagen_append_activo: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/delivery-product-2534902-2129568.png',
          imagen_append_inactivo: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/delivery-product-2534902-2129568.png',
          color: 'amber darken-1'
        },
        {
          texto: 'Texto',
          color: 'red',
          prepend: 'bug_report'
        },
        {
          texto: 'Bebidas',
          imagen_prepend: 'productos',
          color: 'blue-grey darken-2',
          badge_value: 5
        },
        {
          texto: 'tamaño',
          color: 'yellow',
          append: 'mail'
        },
        {
          texto: 'Peliculas',
          imagen_append: 'favicon',
          imagen_prepend: 'productos',
          append: 'backup',
          prepend: 'swap_vertical_circle'
        }
      ]
    }
  }
}
</script>
<style>
  body {
      background-color: #072d1a;
      background-image: url("https://www.entropiacreatividad.com/wp-content/uploads/2017/12/fondo-web-entropia-1920x1200-grisoscuro3-1200x900.png");
      background-repeat: repeat;
      font-family: 'Varela Round', sans-serif;
    }
</style>
