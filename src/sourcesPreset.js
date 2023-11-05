export default [
    {
        name: 'custom',
        title: 'Свои значения',
    },
    {
        name: 'google_ads',
        title: 'Google Ads',
        utmSource: {
            val: 'google'
        },
        utmMedium: {
            val: 'cpc'
        },
        utmCampaign: {
            val: '{network}',
            help: 'Вместо {network} Google Ads подставит \'g\' (поиск), \'s\' (поисковый партнер) или \'d\' (КМС)'
        },
        utmContent: {
            val: '{creative}',
            help: 'Вместо {creative} Google Ads автоматически подставит ID объявления'
        },
        utmTerm: {
            val: '{keyword}',
            help: 'Вместо {keyword} Google Ads автоматически подставит ключевое слово'
        }
    },
    {
        name: 'yandex',
        title: 'Яндекс.Директ',
        utmSource: {
            val: 'yandex'
        },
        utmMedium: {
            val: 'cpc'
        },
        utmCampaign: {
            val: '{campaign_id}',
            help: 'Вместо {campaign_id} Яндекс.Директ автоматически подставит ID кампании'
        },
        utmContent: {
            val: '{ad_id}',
            help: 'Вместо {ad_id} Яндекс.Директ автоматически подставит ID объявления'
        },
        utmTerm: {
            val: '{keyword}',
            help: 'Вместо {keyword} Яндекс.Директ автоматически подставит ключевое слово'
        }
    },
    {
        name: 'vkontakte',
        title: 'Вконтакте',
        utmSource: {
            val: 'vkontakte'
        },
        utmMedium: {
            val: 'cpc'
        },
        utmCampaign: {
            val: '{campaign_id}',
            help: 'Вместо {campaign_id} Вконтакте автоматически подставит ID объявления'
        },
        utmContent: {
            val: '{ad_id}',
            help: 'Вместо {ad_id} Вконтакте автоматически подставит ID объявления'
        }
    },
    {
        name: 'mycom',
        title: 'Target My.com',
        utmSource: {
            val: 'mycom'
        },
        utmMedium: {
            val: 'cpc'
        },
        utmCampaign: {
            val: '{campaign_id}',
            help: 'Вместо {{campaign_id}} Target My.com автоматически подставит ID кампании'
        },
        utmContent: {
            val: '{{banner_id}}',
            help: 'Вместо {{banner_id}} Target My.com автоматически подставит ID баннера'
        },
        utmTerm: {
            val: '{{geo}}.{{gender}}.{{age}}',
            help: 'Вместо {{geo}}.{{gender}}.{{age}} Target My.com автоматически подставит ID региона, пол и возраст кликнувшего по рекламе'
        }
    },
]