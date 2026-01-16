import { q as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_Y2_RHZR7.mjs';
import { c as $$CardGrid, d as $$Card } from './Code_CzaPU1qH.mjs';
import 'clsx';

const frontmatter = {
  "title": "Cesar Romero",
  "description": "Entusiasta Delphi, MVP e Arquiteto de Software.",
  "template": "splash",
  "hero": {
    "tagline": "Entusiasta Delphi, MVP e Arquiteto de Software.",
    "image": {
      "file": "../../assets/blog-placeholder-about.jpg"
    },
    "actions": [{
      "text": "Meus Livros",
      "link": "/books/",
      "icon": "open-book"
    }, {
      "text": "Conheça o Dext",
      "link": "/projects/dext/",
      "icon": "rocket",
      "variant": "primary"
    }]
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "destaques",
    "text": "Destaques"
  }, {
    "depth": 2,
    "slug": "timeline",
    "text": "Timeline"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"destaques\">Destaques</h2><a class=\"sl-anchor-link\" href=\"#destaques\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Seção intitulada “Destaques”</span></a></div>\n"
    }), createVNode($$CardGrid, {
      stagger: true,
      children: [createVNode($$Card, {
        title: "Expert Delphi",
        icon: "star",
        "set:html": "<p>Autor dos livros best-sellers sobre <strong>Delphi</strong>, <strong>Threads</strong> e <strong>Programação Reativa</strong>.</p><p><a href=\"/books/\">Ver Livros</a></p>"
      }), createVNode($$Card, {
        title: "Dext Framework",
        icon: "rocket",
        "set:html": "<p>O framework Fullstack para Delphi inspirado no ASP.NET Core. Moderno, Rápido e Escalável.</p><p><a href=\"/projects/dext/\">Documentação</a></p>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"timeline\">Timeline</h2><a class=\"sl-anchor-link\" href=\"#timeline\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Seção intitulada “Timeline”</span></a></div>\n"
    }), createVNode("div", {
      class: "timeline-feed",
      "set:html": "<p><em>🚧 Em construção… Aqui você verá meus últimos artigos e eventos.</em></p><ul><li><p><strong>📝 Artigo:</strong> Enterprise Patterns com Dext\r\n<br><small>22 Dez 2024</small></p></li><li><p><strong>📅 Evento:</strong> Embarcadero Conference 2024\r\n<br><small>22 Out 2024</small></p></li></ul>"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/start-starlight.mdx";
const file = "C:/Users/Cezar/OneDrive/Documentos/Delphi Threads Book/Hotsite/new-site/src/content/docs/start-starlight.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Cezar/OneDrive/Documentos/Delphi Threads Book/Hotsite/new-site/src/content/docs/start-starlight.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
