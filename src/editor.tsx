import "./plugins";

import React, { useState } from "react";

import { Content, ModelModalContainer } from "./styles";

import Froala from "react-froala-wysiwyg";
import FroalaEditor from "froala-editor";

import data from "./data";

export const FroalaRichText = () => {
  const [content, setContent] = useState("");
  const [openModels, setOpenModels] = useState(false);

  const { config, models } = data;

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
      <Content>
        {openModels && <Models />}
        <Froala
          tag="textarea"
          model={content}
          onModelChange={setContent}
          config={config}
        />
      </Content>

      <div>
        <h3>Pré-visualização:</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
};

export default FroalaRichText;
