import { q as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_Y2_RHZR7.mjs';
import 'clsx';

const frontmatter = {
  "title": "Modern Delphi Development: Dext Framework Concepts",
  "description": "Demystifying the Dext Framework for the Traditional Developer: Dependency Injection, Fluent API, Code-First, and more.",
  "date": "2026-01-16T00:00:00.000Z",
  "tags": ["Delphi", "Dext", "Architecture", "DI", "Fluent API"]
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
            "set:html": "<p>Modernizing Delphi</p>"
          }), createVNode("p", {
            class: "text-lg md:text-xl font-light text-indigo-100 mb-8",
            "set:html": "<p>Demystifying the Dext Framework for the Traditional Developer</p>"
          }), createVNode("div", {
            class: "grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8",
            children: [createVNode("div", {
              class: "bg-indigo-900 bg-opacity-30 p-4 rounded-lg backdrop-blur-sm border border-indigo-400",
              children: [createVNode("span", {
                class: "block text-2xl font-bold text-cyan-400",
                "set:html": "RAD"
              }), createVNode("span", {
                class: "text-sm text-indigo-200",
                "set:html": "The Roots"
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
                "set:html": "The Future"
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
            "set:html": "Why Change What Works?"
          }), createVNode("p", {
            class: "text-base leading-relaxed text-gray-600",
            "set:html": "<p>You’ve built robust systems with TForm and TDataSet for years. But as requirements grow (Mobile, Web, Cloud), the “Old Way” of tightly coupling logic to visual forms becomes a bottleneck. The Dext Framework introduces proven global patterns to Delphi. These aren’t new languages—they are just a new grammar for the language you already love.</p>"
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
              "set:html": "Core Concept"
            }), createVNode("h3", {
              class: "text-2xl font-bold text-gray-900 mb-4 mt-0",
              "set:html": "Dependency Injection (DI)"
            }), createVNode("h4", {
              class: "text-lg text-indigo-600 font-semibold mb-4",
              "set:html": "“The Car Battery Analogy”"
            }), createVNode("p", {
              class: "text-gray-600 mb-6 leading-relaxed text-sm",
              "set:html": "<p>Think of your code like a car. In the old days (tight coupling), you welded the battery directly to the engine block. To change the battery, you had to cut the car open.</p><br><br><p><strong>Dependency Injection</strong> is simply adding a “battery slot” (Interface). You can slide in a <strong>Bosch</strong>, a <strong>Varta</strong>, or an <strong>ACDelco</strong> (Implementation), as long as it fits the slot.</p>"
            })]
          }), createVNode("div", {
            class: "bg-gray-50 p-6 flex flex-col justify-center items-center h-full border-l border-gray-100 min-h-[300px]",
            children: [createVNode("h5", {
              class: "text-center font-bold text-gray-700 mb-4 text-sm",
              "set:html": "System Modularity Comparison"
            }), createVNode("div", {
              class: "relative w-full h-[200px]",
              children: createVNode("canvas", {
                id: "diChart"
              })
            }), createVNode("p", {
              class: "text-center text-xs text-gray-500 mt-4 italic",
              "set:html": "<p>DI reduces “Spaghetti Code” (Coupling) and increases the ease of testing.</p>"
            })]
          })]
        }), createVNode("section", {
          class: "grid grid-cols-1 gap-8 items-center bg-white rounded-2xl shadow-md overflow-hidden p-6 border border-gray-100",
          children: [createVNode("div", {
            class: "text-center max-w-3xl mx-auto",
            children: [createVNode("div", {
              class: "inline-block bg-cyan-100 text-cyan-700 font-bold px-3 py-1 rounded-full text-xs mb-4",
              "set:html": "Database Architecture"
            }), createVNode("h3", {
              class: "text-2xl font-bold text-gray-900 mb-4 mt-0",
              "set:html": "Code-First Development"
            }), createVNode("p", {
              class: "text-gray-600 mb-4 leading-relaxed text-sm",
              "set:html": "<p>Stop manually writing <code dir=\"auto\">CREATE TABLE</code> scripts. With Code-First, your Delphi Classes <strong>are</strong> the master definition. You define a property, and Dext updates the database schema automatically. It keeps your code and data perfectly synchronized.</p>"
            })]
          }), createVNode("div", {
            class: "flex flex-col md:flex-row justify-center items-center gap-4 w-full py-6 bg-slate-50 rounded-xl border border-slate-200 px-4",
            children: [createVNode("div", {
              class: "bg-white p-4 rounded-lg shadow-sm border-t-4 border-indigo-500 w-full md:w-56 overflow-hidden",
              children: [createVNode("h4", {
                class: "font-bold text-gray-800 text-xs mb-2 text-center uppercase tracking-wider",
                "set:html": "Delphi Class"
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
                "set:html": "Dext Engine"
              }), createVNode("p", {
                class: "text-[10px] text-indigo-200 mt-2",
                "set:html": "<p>Automatic Mapping<br>\r\n&#x26; Migration Logic</p>"
              })]
            }), createVNode("div", {
              class: "text-2xl text-gray-400 rotate-90 md:rotate-0",
              "set:html": "➜"
            }), createVNode("div", {
              class: "bg-white p-4 rounded-lg shadow-sm border-t-4 border-cyan-500 w-full md:w-56 overflow-hidden",
              children: [createVNode("h4", {
                class: "font-bold text-gray-800 text-xs mb-2 text-center uppercase tracking-wider",
                "set:html": "SQL Database"
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
              "set:html": "Code Clarity &#x26; Brevity"
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
              "set:html": "Coding Style"
            }), createVNode("h3", {
              class: "text-2xl font-bold text-gray-900 mb-4 mt-0",
              "set:html": "Fluent API"
            }), createVNode("h4", {
              class: "text-lg text-indigo-600 font-semibold mb-4",
              "set:html": "”Code that Tells a Story”"
            }), createVNode("p", {
              class: "text-gray-600 mb-6 leading-relaxed text-sm",
              "set:html": "<p>Fluent API is just a way to chain calls to read like a sentence. It is syntactic sugar to make code more readable, resembling a sentence rather than a series of commands.</p>"
            }), createVNode("div", {
              class: "bg-gray-900 p-4 rounded-lg font-mono text-xs text-indigo-300 shadow-inner",
              children: [createVNode("p", {
                class: "text-gray-500 mb-2 border-b border-gray-800 pb-1 italic text-[10px]",
                "set:html": "// Traditional"
              }), createVNode(Fragment, {
                "set:html": "<p>Query.SQL.Text := ’…‘;</p><p>Query.Open;</p><p>Query.First;</p>"
              }), createVNode("p", {
                class: "text-gray-500 my-2 border-b border-gray-800 pb-1 italic text-[10px]",
                "set:html": "// In Dext"
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
              "set:html": "Architecture"
            }), createVNode("h3", {
              class: "text-2xl font-bold text-gray-900 mb-4 mt-0",
              "set:html": "Web API"
            }), createVNode("h4", {
              class: "text-lg text-indigo-600 font-semibold mb-4",
              "set:html": "”Your EXE in the Cloud”"
            }), createVNode("p", {
              class: "text-gray-600 mb-6 leading-relaxed text-sm",
              "set:html": "<p>A traditional Delphi App traps business logic inside a Windows Form. A <strong>Web API</strong> is just a function that returns data (JSON) instead of opening a window.</p><br><br><p>By moving logic to an API, your single Delphi codebase can now power a React website, an iPhone app, and a 3rd party integration simultaneously.</p>"
            })]
          }), createVNode("div", {
            class: "bg-gray-50 p-6 flex flex-col justify-center items-center h-full border-l border-gray-100 min-h-[300px]",
            children: [createVNode("h5", {
              class: "text-center font-bold text-gray-700 mb-4 text-sm",
              "set:html": "Client Reach Potential"
            }), createVNode("div", {
              class: "relative w-full h-[200px]",
              children: createVNode("canvas", {
                id: "apiChart"
              })
            }), createVNode("p", {
              class: "text-center text-xs text-gray-500 mt-4 italic",
              "set:html": "<p>Unlock 100% of the digital ecosystem, not just Windows Desktop.</p>"
            })]
          })]
        }), createVNode("section", {
          class: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100",
          children: [createVNode("div", {
            class: "bg-gray-50 p-6 flex flex-col justify-center items-center h-full border-r border-gray-100 order-2 md:order-1 min-h-[300px]",
            children: [createVNode("h5", {
              class: "text-center font-bold text-gray-700 mb-4 text-sm",
              "set:html": "UI Responsiveness (FPS)"
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
              "set:html": "Asynchronous Programming"
            }), createVNode("h4", {
              class: "text-lg text-indigo-600 font-semibold mb-4",
              "set:html": "”No More White Screens”"
            }), createVNode("p", {
              class: "text-gray-600 mb-6 leading-relaxed text-sm",
              "set:html": "<p>We’ve all seen it: the application turns white and says “Not Responding” while running a query. That’s “Blocking” code.</p><br><br><p><strong>Async</strong> allows the UI to keep drawing and responding to mouse clicks while the database works in the background. It feels magical to the user, but it’s just efficient resource scheduling.</p>"
            })]
          })]
        })]
      }), createVNode("footer", {
        class: "bg-gray-900 text-white py-10 mt-12",
        children: createVNode("div", {
          class: "max-w-7xl mx-auto px-6 text-center",
          children: [createVNode("h2", {
            class: "text-2xl font-bold mb-4 text-white",
            "set:html": "Ready to Modernize?"
          }), createVNode("div", {
            class: "flex flex-col md:flex-row justify-center items-center gap-4 mb-8",
            children: [createVNode("a", {
              href: "https://github.com/cesarliws/dext/tree/main/Docs/Book",
              class: "bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 no-underline text-xs",
              "set:html": "Read The Docs (EN)"
            }), createVNode("a", {
              href: "https://github.com/cesarliws/dext/tree/main/Docs/Book.pt-br",
              class: "bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 no-underline text-xs",
              "set:html": "Read The Docs (PT)"
            }), createVNode("a", {
              href: "https://www.cesarromero.com.br/articles/",
              class: "border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-bold py-2 px-6 rounded-full transition duration-300 no-underline text-xs",
              "set:html": "View Blog Articles"
            })]
          }), createVNode("p", {
            class: "text-gray-500 text-[10px]",
            "set:html": "Designed for the Dext Framework Community."
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
              labels: [splitLabel('Traditional (TForm)'), splitLabel('Modern (Dext DI)')],
              datasets: [
                  { label: 'Coupling', data: [85, 15], backgroundColor: '#F97316', borderRadius: 4 },
                  { label: 'Flexibility', data: [15, 85], backgroundColor: '#4F46E5', borderRadius: 4 }
              ]
          },
          options: { plugins: { legend: { position: 'bottom' } }, scales: { x: { stacked: true }, y: { stacked: true, max: 100 } } }
      });
      new Chart(document.getElementById('fluentChart'), {
          type: 'bar', indexAxis: 'y',
          data: {
              labels: [splitLabel('Traditional'), splitLabel('Fluent')],
              datasets: [{ label: 'Lines', data: [12, 4], backgroundColor: '#06B6D4' }]
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
                  { label: 'Blocking', data: [60, 0, 0, 0, 60], borderColor: '#EF4444', fill: false },
                  { label: 'Asynchronous', data: [60, 58, 59, 60, 60], borderColor: '#10B981', fill: false }
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
const url = "src/content/docs/en/articles/modern-delphi-concepts.mdx";
const file = "C:/Users/Cezar/OneDrive/Documentos/Delphi Threads Book/Hotsite/new-site/src/content/docs/en/articles/modern-delphi-concepts.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Cezar/OneDrive/Documentos/Delphi Threads Book/Hotsite/new-site/src/content/docs/en/articles/modern-delphi-concepts.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
