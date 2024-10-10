# POC Froala

Este repositório contém uma prova de conceito para a utilização do editor de texto Froala com diversos plugins e configurações customizadas.

## Como Rodar o Projeto

Siga os passos abaixo para configurar e rodar o projeto localmente:

### 1. Clone o repositório
Execute o seguinte comando no seu terminal para clonar o repositório:

### 2. Instale as dependências
Navegue até a pasta do projeto e instale as dependências utilizando o Yarn:

```bash
yarn
```

### 3. Configure as variáveis de ambiente
Crie um arquivo ```.env``` na raiz do projeto e adicione a sua chave de API:

```bash
API_KEY=sua-chave-aqui
```

### 4. Rode o projeto
Com as dependências instaladas e a chave de API configurada, inicie o servidor de desenvolvimento:

```bash
yarn dev
```

## Plugins

Para adicionar os botões e funcionalidades necessários ao editor, os seguintes plugins são utilizados:

```javascript
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Import all Froala Editor plugins;
// import 'froala-editor/js/plugins.pkgd.min.js';

// Import a language file.
import 'froala-editor/js/languages/pt_br.js';

// Import rich plugins
import 'froala-editor/js/plugins/image.min.js'
import 'froala-editor/js/plugins/image_manager.min.js'
import 'froala-editor/js/plugins/table.min.js'
import 'froala-editor/js/plugins/link.min.js'
import 'froala-editor/js/plugins/file.min.js';
import 'froala-editor/js/plugins/files_manager.min.js';
import 'froala-editor/js/plugins/video.min.js';
import 'froala-editor/js/plugins/emoticons.min.js';
import 'froala-editor/js/plugins/special_characters.min.js';

// Import paragraph plugins
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/paragraph_format.min.js';
import 'froala-editor/js/plugins/paragraph_style.min.js';
import 'froala-editor/js/plugins/line_height.min.js';
import 'froala-editor/js/plugins/quote.min.js';

// Import text plugins
import 'froala-editor/js/plugins/font_family.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/colors.min.js';
import 'froala-editor/js/plugins/inline_class.min.js';

// Import misc plugins
import 'froala-editor/js/plugins/fullscreen.min.js';
import 'froala-editor/js/plugins/print.min.js';
import 'froala-editor/js/plugins/code_view.min.js';
import 'froala-editor/js/plugins/help.min.js';

// Import a third-party plugin.
import 'froala-editor/js/third_party/embedly.min.js';
```

## Configuração

Toda a configuração do campo é definida por meio de uma propriedade objeto `config`, podendo conter os atributos listados abaixo.

```javascript
<Froala config={config} />
```

## Configuração Padrão

- **key**: Chave de ativação do Froala
- **heightMin**: Altura mínima
- **heightMax**: Altura máxima
- **placeholderText**: Adiciona uma legenda no campo
- **language**: Define um idioma padrão

## Configuração de Botões da Barra de Ferramentas (`toolbarButtons`)

### moreText
Configuração dos botões de formatação de texto:
- **bold**: Formata o texto em negrito
- **italic**: Formata o texto em itálico
- **underline**: Sublinha o texto
- **strikeThrough**: Aplica tachado ao texto
- **subscript**: Coloca o texto abaixo da linha base
- **superscript**: Coloca o texto acima da linha base
- **fontFamily**: Altera a fonte do texto
- **fontSize**: Altera o tamanho do texto
- **textColor**: Altera a cor do texto
- **backgroundColor**: Altera a cor de fundo
- **inlineClass**: Aplica estilos prontos ao texto
- **clearFormatting**: Remove toda a formatação aplicada ao texto

### moreParagraph
Configuração dos botões de formatação de parágrafos:
- **alignLeft**: Alinha o texto à esquerda
- **alignCenter**: Alinha o texto ao centro
- **alignRight**: Alinha o texto à direita
- **alignJustify**: Justifica o texto
- **formatOLSimple**: Lista ordenada simples
- **formatOL**: Opções de lista ordenada
- **formatUL**: Opções de lista não ordenada
- **paragraphFormat**: Formatos de cabeçalhos
- **paragraphStyle**: Estilos de parágrafo
- **lineHeight**: Altera a altura de linha do texto
- **outdent**: Reduz recuo à esquerda
- **indent**: Aumenta recuo à direita
- **quote**: Insere uma citação

### moreRich
Configuração dos botões de elementos ricos:
- **insertTable**: Permite adicionar tabelas
- **insertImage**: Permite inserir imagens
- **insertLink**: Permite inserir links
- **insertHR**: Insere uma linha horizontal
- **insertFile**: Permite adicionar arquivos
- **insertVideo**: Permite inserir vídeos
- **emoticons**: Seleção de emojis
- **specialCharacters**: Seletor de caracteres especiais
- **embody**: Adicionar links incorporados

### moreMisc
Configuração dos botões de ações diversas:
- **undo**: Desfaz a última ação
- **redo**: Refaz a última ação
- **models**: Seleciona modelos de layout
- **fullscreen**: Alterna para o modo de tela cheia
- **print**: Permite imprimir o conteúdo
- **html**: Permite editar o HTML
- **selectAll**: Seleciona todo o texto
- **help**: Exibe um modal de ajuda

## Atributos Adicionais

Cada uma dessas categorias pode conter os seguintes atributos adicionais:

- **align**: Alinha o grupo de botões (`"right"` ou `"left"`)
- **buttonsVisible**: Define quantos botões serão visíveis inicialmente, o restante será colocado em um menu escondido.

Exemplo: `buttonsVisible: 3` significa que as três primeiras opções serão visíveis, enquanto o restante ficará escondido.

## Modelos

É possível adicionar modelos prontos para preenchimento do campo desta forma:

```javascript
import FroalaEditor from "froala-editor";

const [content, setContent] = useState("");
const [openModels, setOpenModels] = useState(false);

const models = [
  {
    id: "1",
    title: "Recomendações gerais",
    content:
      "<ul><li>Orientamos uso di&aacute;rio de filtro solar com FPS m&iacute;nimo 30.</li><li>Destacamos a import&acirc;ncia da realiza&ccedil;&atilde;o do auto-exame com frequ&ecirc;ncia.</li><li>Avalia&ccedil;&atilde;o dermatol&oacute;gica anual.</li></ul>",
  },
  {
    id: "2",
    title: "Segundo modelo",
    content:
      '<ul><li>Orientamos uso di&aacute;rio de filtro solar com FPS m&iacute;nimo 30.</li><li>Destacamos a import&acirc;ncia da realiza&ccedil;&atilde;o do auto-exame com frequ&ecirc;ncia.</li><li>Avalia&ccedil;&atilde;o dermatol&oacute;gica anual.</li></ul>',
  },
] as const;

if (models.length) {
  FroalaEditor.DefineIcon("models", { SVG_KEY: "search" });

  FroalaEditor.RegisterCommand("models", {
    title: "Modelos",
    icon: "models",
    focus: true,
    undo: false,
    refreshAfterCallback: true,
    callback: () => {
      setOpenModels(!openModels);
    },
  });
}

const Models = () => (
  <ModelModalContainer>
    <button type="button" className="close" onClick={() => setOpenModels(false)}>X</button>
    {models.map((model) => (
      <button
        key={String(model.id)}
        type="button"
        className="model"
        onClick={() => {
          setContent(model.content);
          setOpenModels(false);
        }}
      >
        {model.title}
      </button>
    ))}
  </ModelModalContainer>
);

return (
  <>
    {openModels && <Models />}
  </>
);
```

## Arquivos e Geral

Para adição de imagem, vídeo e arquivos, o usuário pode simplesmente copiar uma imagem da internet, e o campo montado será uma tag `<img>` com o link no `src`. O mesmo vale para vídeos.

No entanto, para adicionar um arquivo, vídeo ou imagem do seu próprio computador, o componente faz um *blob* do arquivo. O ideal seria enviar o arquivo para um endpoint para fazer o upload para um servidor e, em seguida, retornar um link.

Podemos configurar isso da seguinte maneira, lembrando que a mesma regra se aplica para imagens, vídeos e arquivos:

```javascript
imageUpload: false,
imageDefaultWidth: 300,
imageAllowedTypes: ["jpeg", "jpg", "png"],

imageUploadParam: 'image_param',
imageUploadURL: '/upload_image',
imageUploadMethod: 'POST',
imageMaxSize: 5 * 1024 * 1024,

events: {
  'image.beforeUpload': function (images) {
    // Return false if you want to stop the image upload.
  },
  'image.uploaded': function (response) {
    // Image was uploaded to the server.
  },
  'image.inserted': function ($img, response) {
    // Image was inserted in the editor.
  },
  'image.replaced': function ($img, response) {
    // Image was replaced in the editor.
  },
  'image.error': function (error, response) {
    // Handle the error.
  }
}
```