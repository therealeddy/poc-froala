const configImage = {
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
    }
  },
};

const configVideo = {
  videoUpload: false,
};

const configFile = {
  fileUpload: false,
};

const config = {
  key: import.meta.env.API_KEY || '',

  heightMin: 200,
  heightMax: 300,
  placeholderText: "",
  language: "pt_br",

  toolbarButtons: {
    moreText: {
      buttons: [
        "bold",
        "italic",
        "underline",
        "strikeThrough",
        "subscript",
        "superscript",
        "fontFamily",
        "fontSize",
        "textColor",
        "backgroundColor",
        "inlineClass",
        "clearFormatting",
      ],

      buttonsVisible: 3,
    },

    moreParagraph: {
      buttons: [
        "alignLeft",
        "alignCenter",
        "alignRight",
        "alignJustify",
        "formatOLSimple",
        "formatOL",
        "formatUL",
        "paragraphFormat",
        "paragraphStyle",
        "lineHeight",
        "outdent",
        "indent",
        "quote",
      ],

      buttonsVisible: 3,
    },

    moreRich: {
      buttons: [
        "insertTable",
        "insertImage",
        "insertLink",
        "insertHR",
        "insertFile",
        "insertVideo",
        "emoticons",
        "specialCharacters",
        "embedly",
      ],

      buttonsVisible: 4,
    },

    moreMisc: {
      buttons: [
        "undo",
        "redo",
        "models",
        "fullscreen",
        "print",
        "html",
        "selectAll",
        "help",
      ],

      align: "right",
      buttonsVisible: 3,
    },
  },

  ...configImage,
  ...configVideo,
  ...configFile
};

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
      '<p id="isPasted"><span style="color: rgb(75, 75, 75); font-family: adobe-clean, sans-serif; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(244, 244, 244); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">O exame dermatoscópico detectou a presença de lesão suspeita (lesão 1) com indicação de remoção, que deve ser realizada por dermatologista ou cirurgião plástico. O exame dermatoscópico sugere a impressão diagnóstica, que deve ser confirmada pelo exame anatomopatológico. Segue imagem em anexo.&nbsp;</span></p><p><span style="color: rgb(75, 75, 75); font-family: adobe-clean, sans-serif; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(244, 244, 244); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Devido ao seu risco&nbsp;</span><span style="color: rgb(209, 72, 65); font-family: adobe-clean, sans-serif; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(244, 244, 244); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;">moderado/alto</span><span style="color: rgb(75, 75, 75); font-family: adobe-clean, sans-serif; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(244, 244, 244); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">&nbsp;para o surgimento de câncer de pele, recomendamos a realização do mapeamento corporal total e dermatoscopia digital anualmente/ semestralmente.&nbsp;</span></p><p><span style="color: rgb(75, 75, 75); font-family: adobe-clean, sans-serif; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(244, 244, 244); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Devido a seu risco&nbsp;</span><span style="color: rgb(209, 72, 65); font-family: adobe-clean, sans-serif; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(244, 244, 244); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;">moderado/baixo</span><span style="color: rgb(75, 75, 75); font-family: adobe-clean, sans-serif; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(244, 244, 244); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">&nbsp;para o desenvolvimento de câncer de pele, recomendamos seguimento anual com seu dermatologista.&nbsp;</span></p><p><span style="color: rgb(75, 75, 75); font-family: adobe-clean, sans-serif; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(244, 244, 244); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Embora seu exame dermatólogico não tenha detectado nenhuma lesão suspeita neste momento, ressalta-se o seguimento anual e o auto-exame, uma vez que o processo de envelhecimento e neoplásico são eventos dinâmicos.&nbsp;</span></p><p><span style="color: rgb(75, 75, 75); font-family: adobe-clean, sans-serif; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(244, 244, 244); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">O exame dermatológico detectou queratoses actínicas em áreas expostas, com indicação de tratamento dermatológico e intensificação das medidas de proteção solar. Queratoses actínicas são lesões pré-neoplásicas decorrentes da exposição solar intensa, que necessitam de tratamento específico, com seu dermatologista.&nbsp;</span></p><p><br></p><p><span style="color: rgb(75, 75, 75); font-family: adobe-clean, sans-serif; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(244, 244, 244); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">O exame dermatológico detectou leucodermias solares, melanoses solares, poiquilodermia solar em áreas expostas, que embora sejam lesões benignas, indicam histórico de dano solar e, portanto, risco aumentado para desenvolvimento de câncer de pele. Dessa forma, sugere-se intensificação das medidas de proteção solar.</span></p><p><br></p><p><span style="color: rgb(75, 75, 75); font-family: adobe-clean, sans-serif; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(244, 244, 244); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">O exame dermatológico detectou lesões benignas como:&nbsp;</span><span style="color: rgb(209, 72, 65); font-family: adobe-clean, sans-serif; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(244, 244, 244); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;">nevos rubis, nevos intradérmicos, queratoses seborreicas, dermatofibromas</span><span style="color: rgb(75, 75, 75); font-family: adobe-clean, sans-serif; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(244, 244, 244); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">. Tais lesões não necessitam ser tratadas, porém podem ser removidas com o dermatologista, a critério do paciente. O exame detectou presença de …… Trata-se de uma dermatose crônica que necessita de seguimento com o dermatologista. Recomenda-se a realização de exame complementar micológico direto e cultura para fungos / ultrassom de partes moles para melhor avaliação do quadro apresentado. Tais resultados devem ser levados para acompanhamento dermatológico posterior, com seu dermatologista.</span></p>',
  },
] as const;

export default { config, models };
