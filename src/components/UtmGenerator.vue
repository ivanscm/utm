<script setup>
import {computed, ref, watch} from 'vue'
import ValueInput from "./ValueInput.vue";
import sourcesPreset from "../sourcesPreset.js"
import RadioButton from "./RadioButton.vue";

const sources = ref(sourcesPreset)

const scheme = ref('https://')
const url = ref('')
const selectedSource = ref('custom')
const utmSource = ref('')
const utmMedium = ref('')
const utmCampaign = ref('')

const utmContent = ref('')
const utmTerm = ref('')

const resultUrl = ref('')

const utmSourceHelp = computed(() => {
  return sources.value.find((s) => s.name === selectedSource.value)?.utmSource?.help
})

const utmMediumHelp = computed(() => {
  return sources.value.find((s) => s.name === selectedSource.value)?.utmMedium?.help
})

const utmCampaignHelp = computed(() => {
  return sources.value.find((s) => s.name === selectedSource.value)?.utmCampaign?.help
})

const utmContentHelp = computed(() => {
  return sources.value.find((s) => s.name === selectedSource.value)?.utmContent?.help
})

const utmTermHelp = computed(() => {
  return sources.value.find((s) => s.name === selectedSource.value)?.utmTerm?.help
})

watch(selectedSource, (newSelectedSource, oldSelectedSource) => {
  utmSource.value = sources.value.find((s) => s.name === newSelectedSource)?.utmSource?.val ?? ''
  utmMedium.value = sources.value.find((s) => s.name === newSelectedSource)?.utmMedium?.val ?? ''
  utmCampaign.value = sources.value.find((s) => s.name === newSelectedSource)?.utmCampaign?.val ?? ''
  utmContent.value = sources.value.find((s) => s.name === newSelectedSource)?.utmContent?.val ?? ''
  utmTerm.value = sources.value.find((s) => s.name === newSelectedSource)?.utmTerm?.val ?? ''
})

watch(
    [scheme, url, utmSource, utmMedium, utmCampaign, utmContent, utmTerm],
    ([newScheme, newUrl, newUtmSource, newUtmMedium, newUtmCampaign, newUtmContent, newUtmTerm]
    ) => {
      let params = {}
      if (newUrl !== '') {
        if (newUtmSource !== '') {
          params.utm_source = newUtmSource
        }
        if (newUtmMedium !== '') {
          params.utm_medium = newUtmMedium
        }
        if (newUtmCampaign !== '') {
          params.utm_campaign = newUtmCampaign
        }
        if (newUtmContent !== '') {
          params.utm_content = newUtmContent
        }
        if (newUtmTerm !== '') {
          params.utm_term = newUtmTerm
        }
        params = Object.entries(params).map(p => `${p[0]}=${p[1]}`).join('&')
        params = params !== '' ? `?${params}` : ''
        resultUrl.value = `${newScheme}${newUrl}${params}`
      }

    })

</script>

<template>
  <main class="">
    <section class="m-2">
      <header>
        <h2 class="text-m-red text-4xl font-podkova font-bold">Генератор UTM-меток</h2>
      </header>
    </section>
    <section class="m-2">
      <h3 class="font-oswald text-1xl font-medium uppercase text-m-black">Адрес страницы</h3>
      <div class="flex">
        <select v-model="scheme"
                class="rounded-l-md border-2 border-r-0 border-m-black focus:border-gray-800 focus:outline-none w-auto">
          <option>https://</option>
          <option>http://</option>
        </select>
        <input v-model="url"
               class="rounded-r-md border-2 border-m-black focus:border-gray-800 focus:outline-none w-full">
      </div>
    </section>
    <section class="m-2">
      <h3 class="font-oswald text-1xl font-medium uppercase text-m-black">Источники трафика</h3>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <div v-for="source in sources" :key="source.title">
          <radio-button :name="source.name" :title="source.title" v-model="selectedSource"/>
        </div>
      </div>
    </section>
    <section class="m-2">
      <div class="grid grid-cols-2 gap-8">
        <div>
          <h3 class="font-oswald text-1xl font-medium uppercase text-m-black">Обязательные параметры</h3>
          <value-input title="Источник кампании" name="utm_source" placeholder="google, yandex, vk" v-model="utmSource"
                       :help="utmSourceHelp"/>
          <value-input title="Тип трафика" name="utm_medium" placeholder="cpc, email, banner, article"
                       v-model="utmMedium" :help="utmMediumHelp"/>
          <value-input title="Название компании" name="utm_campaign" placeholder="promo, discount, sale"
                       v-model="utmCampaign" :help="utmCampaignHelp"/>
        </div>
        <div>
          <h3 class="font-oswald text-1xl font-medium uppercase text-m-black">Необязательные параметры</h3>
          <value-input title="Идентификатор объявления" name="utm_content" placeholder="link, landing page"
                       v-model="utmContent" :help="utmContentHelp"/>
          <value-input title="Ключевое слово" name="utm_term" placeholder="free, -30%, registration"
                       v-model="utmTerm" :help="utmTermHelp"/>
        </div>
      </div>
    </section>
    <section class="m-2">
      <h3 class="font-oswald text-1xl font-medium uppercase text-m-black">Результат</h3>
      <div class="flex">
        <input v-model="resultUrl"
               class="rounded-l-md border-l-2 border-y-2 bg-gray-100 border-gray-500 focus:border-gray-800 focus:outline-none w-5/6">
        <button class="bg-m-red text-m-grey uppercase font-oswald font-light font rounded-r-md w-1/6">Копировать
        </button>
      </div>
    </section>
  </main>


</template>

