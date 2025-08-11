import angularIcon from '~/assets/svg/angular.svg'
import javascriptIcon from '~/assets/svg/javascript.svg'
import graphQLIcon from '~/assets/svg/graphQL.svg'
import rxjsIcon from '~/assets/svg/rxjs.svg'
import { IconNames } from '~/enums/IconNames'

export const iconsNameSvgMap: Record<IconNames, string> = {
  [IconNames.ANGULAR]: angularIcon,
  [IconNames.JAVASCRIPT]: javascriptIcon,
  [IconNames.GRAPHQL]: graphQLIcon,
  [IconNames.RXJS]: rxjsIcon,
}
