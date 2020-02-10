# Criando um Ecommerce no React-Native com arquitetura Flux

1. Iniciamos o projeto com:

    ```bash
    ~$ npx react-native init ecommercern
    ~$ cd ecommercern
    ```

2. Padronizando mensagens de commit do Git usando commitlint, husky e o commitizen.

   Com o EditorConfig for VS Code instalado damos um Generation .editorconfig dentro do VSCode na raiz do projeto e editamos nesse arquivo as seguintes linhas:

   end_of_line = lf,

   trim_trailing_whitespace = true,

   insert_final_newline = true

     ```bash
     # iniciar o git
     ~/ecommercern$ git init
     # commitlint
     ~/ecommercern$ yarn add @commitlint/config-conventional @commitlint/cli -D
     ~/ecommercern$ echo "module.exports = {extends: ['@commitlintconfig-conventional']}" > commitlint.config.js
     # husky
     ~/ecommercern$ yarn add husky -D
     # commitizen
     ~/ecommercern$ yarn add commitizen -D
     ~/ecommercern$ yarn commitizen init cz-conventional-changelog --yarn --dev--exact
     ```

   No package.json colamos isso

    ```json
    },
    "husky": {
      "hooks": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
        // usando o poder do husky quando for digitado git commit ele executa o
        //commitizen
        "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true"
      }
    },
    "dependencies": {
    ```

3. Configuramos o EditorConfig, ESLint & Prettier.

   Com o EditorConfig for VS Code instalado damos um Generation .editorconfig dentro do VSCode na raiz do projeto e editamos nesse arquivo as seguintes linhas:

   end_of_line = lf,

   trim_trailing_whitespace = true,

   insert_final_newline = true

   Vamos configurar o ESLint

    ```bash
    # Delete os arquivos .eslintrc e .prettierrc se eles já existirem no projeto
    comp:~/first-project-with-react$ yarn add eslint -D
    comp:~/first-project-with-react$ yarn eslint --init
    # E escolhemos
    ❯ To check syntax, find problems, and enforce code style
    ❯ JavaScript modules (import/export)
    ❯ React
    ? Does your project use TypeScript? (y/N) N
    # Deselecionar todos com tecla de espaço e dar enter
    ❯○ Browser
    ❯○ Node
    ❯ Use a popular style guide
    ❯ Airbnb: https://github.com/airbnb/javascript
    ❯ JavaScript
    ? Would you like to install them now with npm? (Y/n) Y
    # Removemos o arquivo package-lock.json e rodamos yarn na raiz do projeto
    comp:~/first-project-with-react$ yarn
    # Damos continuação configurando o Prettier
    comp:~/first-project-with-react$ yarn add prettier eslint-config-prettiereslint-plugin-prettier babel-eslint -D
    #  Vamos para o arquivo .eslintrc.js e criamos o arquivo .prettierrc
    ```

    ```js
    // ~/MyApp/.eslintrc.js
    module.exports = {
      env: {
        es6: true,
      },
      extends: ['airbnb', 'prettier', 'prettier/react'],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        __DEV__: 'readonly',
      },
      parser: 'babel-eslint',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['react', 'prettier'],
      rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
          'warn',
          {
            extensions: ['.jsx', '.js'],
          },
        ],
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        //'no-restricted-syntax': [
        //  'error',
        //  {
        //    selector:
        //      "CallExpression[callee.object.name='console'][callee.propertyname!=/^(log|warn|error|info|trace)$/]",
        //    message: 'Unexpected property on console object was called',
        //  },
        //],
        //'no-unused-vars': [
        //  'error',
        //  { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
        //],
        //'react/state-in-constructor': ['error', 'never'],
        //'react/static-property-placement': ['error', 'static public field'],
      },
    };
    ```

    ```json
    // ~/MyApp/.prettierrc.json
    {
      // aspas simples
      "singleQuote": true,
      // virgula à direita
      "trailingComma": "es5"
    }
    ```

4. Para fazer debugger da aplicação usamos o Reactotron.

    ```bash
    ~/ecommercern$ yarn add reactotron-react-native
    # importando o arquivo do ReactotronConfig para index.js da pasta src do projeto
    ```

5. Iniciamos uma nova estrutura de pasta e arquivos para configurar a navegação

    ```bash
    ~/ecommercern$ yarn add react-navigation
    # vamos até a documentação do react navigation e fazemos o passo a passo para configura-lo.
    ~/ecommercern$ yarn add react-navigation-stack
    # e teremos essa estrutura
    ~/ecommercern$ tree -I 'node_modules|.git|__tests__|android|ios'
    .
    ├── app.json
    ├── babel.config.js
    ├── .buckconfig
    ├── commitlint.config.js
    ├── .editorconfig
    ├── .eslintrc.js
    ├── .flowconfig
    ├── .gitattributes
    ├── .gitignore
    ├── index.js # alterar o import do App para a pasta src
    ├── metro.config.js
    ├── package.json
    ├── .prettierrc.js
    ├── README.md
    ├── src
    │   ├── config
    │   │   └── ReactotronConfig.js
    │   ├── index.js # recebe os import do ReactotronConfig e do Routes
    │   ├── pages
    │   │   ├── Cart
    │   │   │   └── index.js
    │   │   └── Home
    │   │       └── index.js
    │   └── Routes.js # recebe os import das pages
    ├── stepbystep.md
    ├── .watchmanconfig
    └── yarn.lock
    ```

6. Criando o Header
