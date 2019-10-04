npx react-native init nomeDoProjeto

editorconfig

deletar o .eslintrc.js
yarn add eslint -D
yarn eslint --init
deletar package-lock.json
yarn

yarn add -D prettier eslint-config-prettier eslint-plugin-prettier babel-eslint
configurar o arquivo .eslintrc.js:
  add no extends 'prettier', 'prettier/react'
  add parser:'babel-eslint'
  add 'prettier' nos plugins
  add rules abaixo:
  rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extensions': [
        'warn',
        {
          extensions: ['.jsx', '.js']
        }
      ],
      'import/prefer-default-export': 'off'
    },

criar o arquivo .prettierrc com o singlequote e trailingcomma

yarn add reactotron-react-native
criar o src/config/reactotron.js com as config - --DEV-- configurar no .eslintrc.js no globals/readonly

yarn add react-navigation react-native-gesture-handler react-native-reanimated
//lidam com navegacao e possui componentes específicos para cada plataforma (android/ios), gestos de navegacao e animacoes na navegacao, nesta ordem
ANDROID configurar o gesture handler no MainActivity.java
IOS acessar a pasta ios e rodar o pod install para instalar as dependencias nativas do gesture handler e reanimated

yarn add react-navigation-stack //caso use o stack navigator - apartir do react-navigation 4 os navigators migraram para um novo repo

Tipos de navegacao por rotas - Para mais detalhes consulte documentacao
createStackNavigator - cria uma pilha de telas e permite voltar para anterior
createSwitchNavigator - navega de uma tela para outra eliminando a anterior - Ex login para tela inicial
createBottomTabNavigator - criar abas na parte inferior
createMaterialTopTabNavigator - cria abas na parte superior - stileguide android
createDrawerNavigator - cria "menu/aba lateral" - no android eh preciso configurar mais coisas - consulta documentacao

yarn add styles-component

yarn add react-native-vector-icons //lib de icones para o reactnative
react-native link react-native-vector-icons
AFIM DE EVITAR OS PROBLEMAS DE DUPLICACAO DE FONTES E TER QUE IR NO XCODE REMOVER OS DUPLICADOS USE O NATIVE-BASE
yarn add native-base
react-native link
e usa assim:
import { Icon } from 'native-base';
<Icon type="MaterialIcons" name="add" style={{ fontSize: 20, color: '#fff' }} />

yarn add @react-native-community/async-storage
IOS acesse a pasta ios e rode o pod install
ANDROID só rodar novamente react-native run-android

yarn add prop-types
