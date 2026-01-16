import { q as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_Y2_RHZR7.mjs';
import 'clsx';

const frontmatter = {
  "title": "Desarrollo Delphi Moderno: Conceptos de Dext Framework",
  "description": "Desmitificando el Dext Framework para el desarrollador tradicional: Inyección de Dependencia, API Fluida, Code-First y más.",
  "date": "2026-01-16T00:00:00.000Z",
  "tags": ["Delphi", "Dext", "Arquitectura", "DI", "API Fluida"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  }, {Fragment} = _components;
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode("div", {
    class: "not-prose",
    children: [createVNode("script", {
      src: "https://cdn.tailwindcss.com"
    }), createVNode("script", {
      src: "https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"
    }), createVNode("div", {
      class: "text-gray-800 bg-gray-50 rounded-xl overflow-hidden shadow-sm",
      children: [createVNode("header", {
        class: "bg-gradient-to-r from-indigo-800 to-indigo-600 text-white p-8 md:p-12 shadow-md",
        children: createVNode("div", {
          class: "max-w-7xl mx-auto text-center",
          children: [createVNode("h1", {
            class: "text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white",
            "set:html": "<p>Modernizando Delphi</p>"
          }), createVNode("p", {
            class: "text-lg md:text-xl font-light text-indigo-100 mb-8",
            "set:html": "<p>Desmitificando el Dext Framework para el Desarrollador Tradicional</p>"
          }), createVNode("div", {
            class: "grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8",
            children: [createVNode("div", {
              class: "bg-indigo-900 bg-opacity-30 p-4 rounded-lg backdrop-blur-sm border border-indigo-400",
              children: [createVNode("span", {
                class: "block text-2xl font-bold text-cyan-400",
                "set:html": "RAD"
              }), createVNode("span", {
                class: "text-sm text-indigo-200",
                "set:html": "Las Raíces"
              })]
            }), createVNode("div", {
              class: "flex items-center justify-center text-3xl text-white opacity-50",
              "set:html": "<p>➜</p>"
            }), createVNode("div", {
              class: "bg-indigo-900 bg-opacity-30 p-4 rounded-lg backdrop-blur-sm border border-indigo-400",
              children: [createVNode("span", {
                class: "block text-2xl font-bold text-orange-400",
                "set:html": "DEXT"
              }), createVNode("span", {
                class: "text-sm text-indigo-200",
                "set:html": "El Futuro"
              })]
            })]
          })]
        })
      }), createVNode("section", {
        class: "max-w-5xl mx-auto py-8 px-6",
        children: createVNode("div", {
          class: "bg-white rounded-xl shadow-sm p-6 border-l-8 border-indigo-600",
          children: [createVNode("h2", {
            class: "text-xl font-bold text-indigo-900 mb-4 mt-0",
            "set:html": "¿Por qué cambiar lo que funciona?"
          }), createVNode("p", {
            class: "text-base leading-relaxed text-gray-600",
            "set:html": "<p>Usted ha construido sistemas robustos con TForm e TDataSet por años. Pero a medida que los requisitos crescen (Móvil, Web, Nube), la “vieja manera” de acoplar fuertemente la lógica a los formularios visuales se convierte en um cuello de botella. El Dext Framework introduce patrones globales probados a Delphi. No son nuevos lenguajes — es solo una nueva gramática para el lenguaje que ya ama.</p>"
          })]
        })
      }), createVNode("main", {
        class: "max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 gap-12",
        children: [createVNode("section", {
          class: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100",
          children: [createVNode("div", {
            class: "p-6 md:p-8",
            children: [createVNode("div", {
              class: "inline-block bg-orange-100 text-orange-600 font-bold px-3 py-1 rounded-full text-xs mb-4",
              "set:html": "Concepto Core"
            }), createVNode("h3", {
              class: "text-2xl font-bold text-gray-900 mb-4 mt-0",
              "set:html": "Inyección de Dependencia (DI)"
            }), createVNode("h4", {
              class: "text-lg text-indigo-600 font-semibold mb-4",
              "set:html": "“La Analogía de la Batería del Coche”"
            }), createVNode("p", {
              class: "text-gray-600 mb-6 leading-relaxed text-sm",
              "set:html": "<p>Pience en su código como un coche. Antiguamente (acoplamiento fuerte), usted soldaba la batería directamente al bloque del motor. Para cambiar la batería, había que cortar el coche.</p><br><br><p><strong>Inyección de Dependencia</strong> es simplemente añadir un “slot de batería” (Interface). Puede deslizar una <strong>Bosch</strong>, una <strong>Varta</strong> o una <strong>ACDelco</strong> (Implementación), siempre que quepa en el slot.</p>"
            })]
          }), createVNode("div", {
            class: "bg-gray-50 p-6 flex flex-col justify-center items-center h-full border-l border-gray-100 min-h-[300px]",
            children: [createVNode("h5", {
              class: "text-center font-bold text-gray-700 mb-4 text-sm",
              "set:html": "Comparación de Modularidade do Sistema"
            }), createVNode("div", {
              class: "relative w-full h-[200px]",
              children: createVNode("canvas", {
                id: "diChart"
              })
            }), createVNode("p", {
              class: "text-center text-xs text-gray-500 mt-4 italic",
              "set:html": "<p>DI reduce el “Código Espagueti” (Acoplamiento) y aumenta la facilidad de pruebas.</p>"
            })]
          })]
        }), createVNode("section", {
          class: "grid grid-cols-1 gap-8 items-center bg-white rounded-2xl shadow-md overflow-hidden p-6 border border-gray-100",
          children: [createVNode("div", {
            class: "text-center max-w-3xl mx-auto",
            children: [createVNode("div", {
              class: "inline-block bg-cyan-100 text-cyan-700 font-bold px-3 py-1 rounded-full text-xs mb-4",
              "set:html": "Arquitectura de Base de Datos"
            }), createVNode("h3", {
              class: "text-2xl font-bold text-gray-900 mb-4 mt-0",
              "set:html": "Desarrollo Code-First"
            }), createVNode("p", {
              class: "text-gray-600 mb-4 leading-relaxed text-sm",
              "set:html": "<p>Deje de escribir scripts <code dir=\"auto\">CREATE TABLE</code> manualmente. Con Code-First, sus clases Delphi <strong>son</strong> la definición maestra. Usted define una propiedad, y Dext actualiza el esquema de la base de datos automáticamente. Mantiene su código y datos perfectamente sincronizados.</p>"
            })]
          }), createVNode("div", {
            class: "flex flex-col md:flex-row justify-center items-center gap-4 w-full py-6 bg-slate-50 rounded-xl border border-slate-200 px-4",
            children: [createVNode("div", {
              class: "bg-white p-4 rounded-lg shadow-sm border-t-4 border-indigo-500 w-full md:w-56 overflow-hidden",
              children: [createVNode("h4", {
                class: "font-bold text-gray-800 text-xs mb-2 text-center uppercase tracking-wider",
                "set:html": "Clase Delphi"
              }), createVNode("div", {
                class: "bg-slate-900 rounded p-2 text-[10px] font-mono leading-tight text-indigo-300",
                children: createVNode(_components.p, {
                  children: [createVNode("span", {
                    class: "text-purple-400",
                    "set:html": "type"
                  }), " TUser = ", createVNode("span", {
                    class: "text-purple-400",
                    "set:html": "class"
                  }), createVNode(Fragment, {
                    "set:html": "<br>\r\n  [Column] Name: "
                  }), createVNode("span", {
                    class: "text-blue-300",
                    "set:html": "string"
                  }), ";", createVNode(Fragment, {
                    "set:html": "<br>\r\n"
                  }), createVNode("span", {
                    class: "text-purple-400",
                    "set:html": "end"
                  }), ";"]
                })
              })]
            }), createVNode("div", {
              class: "text-2xl text-gray-400 rotate-90 md:rotate-0",
              "set:html": "➜"
            }), createVNode("div", {
              class: "bg-indigo-600 p-4 rounded-lg shadow-sm w-full md:w-56 text-center text-white",
              children: [createVNode("div", {
                class: "text-3xl mb-2",
                "set:html": "⚙️"
              }), createVNode("h4", {
                class: "font-bold text-xs uppercase tracking-wider",
                "set:html": "Motor Dext"
              }), createVNode("p", {
                class: "text-[10px] text-indigo-200 mt-2",
                "set:html": "<p>Mapeo Automático<br>\r\n&#x26; Lógica de Migración</p>"
              })]
            }), createVNode("div", {
              class: "text-2xl text-gray-400 rotate-90 md:rotate-0",
              "set:html": "➜"
            }), createVNode("div", {
              class: "bg-white p-4 rounded-lg shadow-sm border-t-4 border-cyan-500 w-full md:w-56 overflow-hidden",
              children: [createVNode("h4", {
                class: "font-bold text-gray-800 text-xs mb-2 text-center uppercase tracking-wider",
                "set:html": "Base SQL"
              }), createVNode("div", {
                class: "bg-slate-900 rounded p-2 text-[10px] font-mono leading-tight text-cyan-300",
                children: createVNode(_components.p, {
                  children: [createVNode("span", {
                    class: "text-purple-400",
                    "set:html": "CREATE TABLE"
                  }), " Users (", createVNode(Fragment, {
                    "set:html": "<br>\r\n  Name "
                  }), createVNode("span", {
                    class: "text-blue-300",
                    "set:html": "VARCHAR"
                  }), "(255)", createVNode(Fragment, {
                    "set:html": "<br>\r\n);"
                  })]
                })
              })]
            })]
          })]
        }), createVNode("section", {
          class: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100",
          children: [createVNode("div", {
            class: "bg-gray-50 p-6 flex flex-col justify-center items-center h-full border-r border-gray-100 order-2 md:order-1 min-h-[300px]",
            children: [createVNode("h5", {
              class: "text-center font-bold text-gray-700 mb-4 text-sm",
              "set:html": "Claridad y Brevedad del Código"
            }), createVNode("div", {
              class: "relative w-full h-[200px]",
              children: createVNode("canvas", {
                id: "fluentChart"
              })
            })]
          }), createVNode("div", {
            class: "p-6 md:p-8 order-1 md:order-2",
            children: [createVNode("div", {
              class: "inline-block bg-purple-100 text-purple-600 font-bold px-3 py-1 rounded-full text-xs mb-4",
              "set:html": "Estilo de Codificación"
            }), createVNode("h3", {
              class: "text-2xl font-bold text-gray-900 mb-4 mt-0",
              "set:html": "API Fluida"
            }), createVNode("h4", {
              class: "text-lg text-indigo-600 font-semibold mb-4",
              "set:html": "”Código que cuenta una historia”"
            }), createVNode("p", {
              class: "text-gray-600 mb-6 leading-relaxed text-sm",
              "set:html": "<p>API Fluida es solo una forma de encadenar llamadas para que se lean como una frase. Es azúcar sintáctico para hacer el código más legible, pareciéndose a una oración en lugar de una serie de comandos.</p>"
            }), createVNode("div", {
              class: "bg-gray-900 p-4 rounded-lg font-mono text-xs text-indigo-300 shadow-inner",
              children: [createVNode("p", {
                class: "text-gray-500 mb-2 border-b border-gray-800 pb-1 italic text-[10px]",
                "set:html": "// Tradicional"
              }), createVNode(Fragment, {
                "set:html": "<p>Query.SQL.Text := ’…‘;</p><p>Query.Open;</p><p>Query.First;</p>"
              }), createVNode("p", {
                class: "text-gray-500 my-2 border-b border-gray-800 pb-1 italic text-[10px]",
                "set:html": "// En Dext"
              }), createVNode("p", {
                class: "text-white",
                "set:html": "Query.From(‘Users’).Where(‘Id’, 1).Open();"
              })]
            })]
          })]
        }), createVNode("section", {
          class: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100",
          children: [createVNode("div", {
            class: "p-6 md:p-8",
            children: [createVNode("div", {
              class: "inline-block bg-green-100 text-green-600 font-bold px-3 py-1 rounded-full text-xs mb-4",
              "set:html": "Arquitectura"
            }), createVNode("h3", {
              class: "text-2xl font-bold text-gray-900 mb-4 mt-0",
              "set:html": "Web API"
            }), createVNode("h4", {
              class: "text-lg text-indigo-600 font-semibold mb-4",
              "set:html": "”Su EXE en la Nube”"
            }), createVNode("p", {
              class: "text-gray-600 mb-6 leading-relaxed text-sm",
              "set:html": "<p>Un app Delphi tradicional atrapa la lógica dentro de um Formulario Windows. Una <strong>Web API</strong> es solo una función que devuelve datos (JSON) en lugar de abrir una ventana.</p><br><br><p>Al mover la lógica a una API, su único código base Delphi puede ahora alimentar un sitio React, una app de iPhone y una integración con terceros simultáneamente.</p>"
            })]
          }), createVNode("div", {
            class: "bg-gray-50 p-6 flex flex-col justify-center items-center h-full border-l border-gray-100 min-h-[300px]",
            children: [createVNode("h5", {
              class: "text-center font-bold text-gray-700 mb-4 text-sm",
              "set:html": "Potencial de Alcance del Cliente"
            }), createVNode("div", {
              class: "relative w-full h-[200px]",
              children: createVNode("canvas", {
                id: "apiChart"
              })
            }), createVNode("p", {
              class: "text-center text-xs text-gray-500 mt-4 italic",
              "set:html": "<p>Desbloquee el 100% del ecosistema digital, no solo Windows Desktop.</p>"
            })]
          })]
        }), createVNode("section", {
          class: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100",
          children: [createVNode("div", {
            class: "bg-gray-50 p-6 flex flex-col justify-center items-center h-full border-r border-gray-100 order-2 md:order-1 min-h-[300px]",
            children: [createVNode("h5", {
              class: "text-center font-bold text-gray-700 mb-4 text-sm",
              "set:html": "Responsividade da UI (FPS)"
            }), createVNode("div", {
              class: "relative w-full h-[200px]",
              children: createVNode("canvas", {
                id: "asyncChart"
              })
            })]
          }), createVNode("div", {
            class: "p-6 md:p-8 order-1 md:order-2",
            children: [createVNode("div", {
              class: "inline-block bg-red-100 text-red-600 font-bold px-3 py-1 rounded-full text-xs mb-4",
              "set:html": "Performance"
            }), createVNode("h3", {
              class: "text-2xl font-bold text-gray-900 mb-4 mt-0",
              "set:html": "Programação Assíncrona"
            }), createVNode("h4", {
              class: "text-lg text-indigo-600 font-semibold mb-4",
              "set:html": "”No más pantallas blancas”"
            }), createVNode("p", {
              class: "text-gray-600 mb-6 leading-relaxed text-sm",
              "set:html": "<p>Todos hemos visto esto: la aplicación se pone blanca y dice “No responde” mientras ejecuta una consulta. Eso es código “bloqueante”.</p><br><br><p><strong>Async</strong> permite que la UI continúe respondiendo mientras la base de datos trabaja en segundo plano. Parece magia para o usuario, mas é apenas um agendamento eficiente de recursos.</p>"
            })]
          })]
        })]
      }), createVNode("footer", {
        class: "bg-gray-900 text-white py-10 mt-12",
        children: createVNode("div", {
          class: "max-w-7xl mx-auto px-6 text-center",
          children: [createVNode("h2", {
            class: "text-2xl font-bold mb-4 text-white",
            "set:html": "¿Listo para modernizar?"
          }), createVNode("div", {
            class: "flex flex-col md:flex-row justify-center items-center gap-4 mb-8",
            children: [createVNode("a", {
              href: "https://github.com/cesarliws/dext/tree/main/Docs/Book",
              class: "bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 no-underline text-xs",
              "set:html": "Leer la Doc (EN)"
            }), createVNode("a", {
              href: "https://github.com/cesarliws/dext/tree/main/Docs/Book.pt-br",
              class: "bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 no-underline text-xs",
              "set:html": "Leer la Doc (PT)"
            }), createVNode("a", {
              href: "https://www.cesarromero.com.br/articles/",
              class: "border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-bold py-2 px-6 rounded-full transition duration-300 no-underline text-xs",
              "set:html": "Ver Otros Artículos"
            })]
          }), createVNode("p", {
            class: "text-gray-500 text-[10px]",
            "set:html": "Diseñado para la comunidad de Dext Framework."
          })]
        })
      })]
    }), createVNode("script", {
      dangerouslySetInnerHTML: {
        __html: `
(function() {
  let attempts = 0;
  function renderCharts() {
      if (typeof Chart === 'undefined' || !document.getElementById('diChart')) {
          if (attempts < 50) { attempts++; setTimeout(renderCharts, 200); }
          return;
      }
      function splitLabel(s) {
          if (s.length <= 16) return s;
          const w = s.split(' ');
          const l = []; let c = w[0];
          for (let i = 1; i < w.length; i++) {
              if ((c + " " + w[i]).length < 16) { c += " " + w[i]; }
              else { l.push(c); c = w[i]; }
          }
          l.push(c); return l;
      }
      Chart.defaults.font.family = "'Inter', sans-serif";
      Chart.defaults.color = '#4B5563';
      Chart.defaults.responsive = true;
      Chart.defaults.maintainAspectRatio = false;
      new Chart(document.getElementById('diChart'), {
          type: 'bar',
          data: {
              labels: [splitLabel('Tradicional (TForm)'), splitLabel('Moderno (Dext DI)')],
              datasets: [
                  { label: 'Acoplamiento', data: [85, 15], backgroundColor: '#F97316', borderRadius: 4 },
                  { label: 'Flexibilidad', data: [15, 85], backgroundColor: '#4F46E5', borderRadius: 4 }
              ]
          },
          options: { plugins: { legend: { position: 'bottom' } }, scales: { x: { stacked: true }, y: { stacked: true, max: 100 } } }
      });
      new Chart(document.getElementById('fluentChart'), {
          type: 'bar', indexAxis: 'y',
          data: {
              labels: [splitLabel('Tradicional'), splitLabel('Fluido')],
              datasets: [{ label: 'Líneas', data: [12, 4], backgroundColor: '#06B6D4' }]
          },
          options: { plugins: { legend: { display: false } } }
      });
      new Chart(document.getElementById('apiChart'), {
          type: 'doughnut',
          data: {
              labels: ['Windows', 'Mobile', 'Web', 'API'],
              datasets: [{ data: [25, 25, 25, 25], backgroundColor: ['#4F46E5', '#06B6D4', '#F97316', '#10B981'] }]
          },
          options: { plugins: { legend: { position: 'right' } } }
      });
      new Chart(document.getElementById('asyncChart'), {
          type: 'line',
          data: {
              labels: ['1', '2', '3', '4', '5'],
              datasets: [
                  { label: 'Bloqueante', data: [60, 0, 0, 0, 60], borderColor: '#EF4444', fill: false },
                  { label: 'Asíncrono', data: [60, 58, 59, 60, 60], borderColor: '#10B981', fill: false }
              ]
          },
          options: { plugins: { title: { display: true, text: 'FPS' } } }
      });
  }
  renderCharts();
  document.addEventListener('astro:page-load', renderCharts);
})();
`
      }
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
const url = "src/content/docs/es/articles/modern-delphi-concepts.mdx";
const file = "C:/Users/Cezar/OneDrive/Documentos/Delphi Threads Book/Hotsite/new-site/src/content/docs/es/articles/modern-delphi-concepts.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Cezar/OneDrive/Documentos/Delphi Threads Book/Hotsite/new-site/src/content/docs/es/articles/modern-delphi-concepts.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
