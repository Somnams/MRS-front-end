import I18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import ZH_CN from './common/i18n/zh.json';
import EN_US from './common/i18n/en.json';

export async function initI18nInstance() {
    return I18n.use(initReactI18next).init({
        react: {
            useSuspense: false
        },
        lng: 'zh',
        keySeparator: false,
        resources: {
            zh: {
                translation: ZH_CN
            },
            en: {
                translation: EN_US
            }
        }
    });
}
