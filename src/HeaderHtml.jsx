import React from 'react';

const HeaderHtml = (props) =>
  `\n<div class="panel panel-default">
    <div
      class="panel-heading"
      id="heading${props.id}"
      role="tab"
      style="border-radius:5px; background-color:#e9ebec;"
    >
      <p class="panel-title" style="padding: 10px 15px 10px 15px">
        <a
          aria-controls="collapse${props.id}"
          aria-expanded="false"
          class="collapsed"
          data-parent="#accordion"
          data-toggle="collapse"
          href="#collapse${props.id}"
          role="button"
          >+ ${props.text}</a
        >
      </p>
    </div>

    <div
      aria-expanded="false"
      aria-labelledby="heading${props.id}"
      class="panel-collapse collapse"
      id="collapse${props.id}"
      role="tabpanel"
      style="height: 0px;"
    >
      <div class="panel-body">
        <ul>
  `;

export default HeaderHtml;
