import angularIcon from '~/assets/svg/skills/angular.svg'
import javascriptIcon from '~/assets/svg/skills/javascript.svg'
import graphQLIcon from '~/assets/svg/skills/graphQL.svg'
import rxjsIcon from '~/assets/svg/skills/rxjs.svg'
import nuxtIcon from '~/assets/svg/skills/nuxt.svg'
import tsIcon from '~/assets/svg/skills/typescript.svg'
import ngrxIcon from '~/assets/svg/skills/ngrx.svg'
import vueIcon from '~/assets/svg/skills/vue.svg'
import piniaIcon from '~/assets/svg/skills/pinia.svg'
import scssIcon from '~/assets/svg/skills/scss.svg'
import tailwindIcon from '~/assets/svg/skills/tailwind.svg'
import htmlIcon from '~/assets/svg/skills/html.svg'
import cssIcon from '~/assets/svg/skills/css.svg'
import restApiIcon from '~/assets/svg/skills/rest.svg'
import { IconNames } from '~/enums/IconNames'

export const iconsNameSvgMap: Record<IconNames, string> = {
  [IconNames.TS]: tsIcon,
  [IconNames.JAVASCRIPT]: javascriptIcon,
  [IconNames.ANGULAR]: angularIcon,
  [IconNames.RXJS]: rxjsIcon,
  [IconNames.NGRX]: ngrxIcon,
  [IconNames.VUE]: vueIcon,
  [IconNames.NUXT]: nuxtIcon,
  [IconNames.PINIA]: piniaIcon,
  [IconNames.SCSS]: scssIcon,
  [IconNames.TAILWIND]: tailwindIcon,
  [IconNames.GRAPHQL]: graphQLIcon,
  [IconNames.REST]: restApiIcon,
  [IconNames.HTML]: htmlIcon,
  [IconNames.CSS]: cssIcon
}
