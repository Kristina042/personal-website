import angularIcon from '~/assets/svg/skills/angular.svg'
import javascriptIcon from '~/assets/svg/skills/javascript.svg'
import graphQLIcon from '~/assets/svg/skills/graphQL.svg'
import rxjsIcon from '~/assets/rxjs.png'
import nuxtIcon from '~/assets/svg/skills/nuxt.svg'
import tsIcon from '~/assets/svg/skills/typescript.svg'
import ngrxIcon from '~/assets/ngrx.png'
import vueIcon from '~/assets/svg/skills/vue.svg'
import piniaIcon from '~/assets/svg/skills/pinia.svg'
import scssIcon from '~/assets/svg/skills/scss.svg'
import tailwindIcon from '~/assets/svg/skills/tailwind.svg'
import htmlIcon from '~/assets/svg/skills/html.svg'
import cssIcon from '~/assets/svg/skills/css.svg'
import restApiIcon from '~/assets/svg/skills/rest.svg'
import jiraIcon from '~/assets/svg/skills/jira.svg'
import nodeJsIcon from '~/assets/svg/skills/nodejs.svg'
import supabaseIcon from '~/assets/svg/skills/supabase.svg'
import C from '~/assets/svg/skills/cIcon.svg'
import expressIcon from '~/assets/express.png'
import firebaseIcon from '~/assets/firebase.png'
import gitlabIcon from '~/assets/svg/skills/gitlab.svg'
import githubIcon from '~/assets/svg/skills/github.svg'
import notionIcon from '~/assets/svg/skills/notion.svg'
import confluenceIcon from '~/assets/svg/skills/confluence.svg'
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
  [IconNames.CSS]: cssIcon,
  [IconNames.JIRA]: jiraIcon,
  [IconNames.NODE]: nodeJsIcon,
  [IconNames.SUPABSE]: supabaseIcon,
  [IconNames.C]: C,
  [IconNames.EXPRESS]: expressIcon,
  [IconNames.FIREBASE]: firebaseIcon,
  [IconNames.GITLAB]: gitlabIcon,
  [IconNames.GITHUB]: githubIcon,
  [IconNames.NOTION]: notionIcon,
  [IconNames.CONFLUENCE]: confluenceIcon,
}
