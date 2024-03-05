const h1 = React.createElement(
  "h1",
  { className: "heading", id: "heading" },
  "Topics covered"
);

const sh = React.createElement(
  "h6",
  null,
  "The following is a list of all the topics we cover in the MDN learning area."
);

const div1 = React.createElement(
  "div",
  null,
  React.createElement(
    "a",
    {
      href: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web",
    },
    "Getting started with the web"
  ),
  React.createElement(
    "p",
    null,
    "Provides a practical introduction to web development for complete beginners."
  )
);

const div2 = React.createElement(
  "div",
  null,
  React.createElement(
    "a",
    {
      href: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
    },
    "HTML — Structuring the web"
  ),
  React.createElement(
    "p",
    null,
    "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail."
  )
);

const div3 = React.createElement(
  "div",
  null,
  React.createElement(
    "a",
    {
      href: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
    },
    "CSS — Styling the web"
  ),
  React.createElement(
    "p",
    null,
    "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS."
  )
);

const ele = React.createElement(
  "div",
  { className: "container" },
  h1,
  sh,
  div1,
  div2,
  div3
);

ReactDOM.render(ele, document.getElementById("root"));
