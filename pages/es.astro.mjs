import { e as createAstro, c as createComponent, b as renderTemplate, f as addAttribute, r as renderComponent, d as renderHead } from '../chunks/astro/server_Y2_RHZR7.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_DgB4gWoj.mjs';
import { $ as $$Code } from '../chunks/Debug_BJR7XQl2.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.cesarromero.com.br");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("docs", ({ id }) => {
    return id.startsWith("es/blog/");
  });
  const recentPosts = posts.sort((a, b) => new Date(b.data.date || 0).getTime() - new Date(a.data.date || 0).getTime()).slice(0, 3);
  const pageTitle = "Cesar Romero | Experto en Delphi & Arquitecto de Software";
  return renderTemplate(_a || (_a = __template(['<html lang="es" class="astro-7pewbour"> <head><meta charset="utf-8"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', "><title>", '</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"><script defer src="https://cloud.umami.is/script.js" data-website-id="effced3c-a26c-415d-9185-02d6354dd6b6"><\/script>', `</head> <body class="astro-7pewbour"> <header class="navbar astro-7pewbour"> <div class="container nav-container astro-7pewbour"> <a href="/es" class="logo astro-7pewbour">Cesar <span class="astro-7pewbour">Romero</span></a> <nav class="astro-7pewbour"> <ul class="astro-7pewbour"> <li class="astro-7pewbour"><a href="#books" class="astro-7pewbour">Libros</a></li> <li class="astro-7pewbour"><a href="#projects" class="astro-7pewbour">Proyectos</a></li> <li class="astro-7pewbour"><a href="#articles" class="astro-7pewbour">Art\xEDculos</a></li> <li class="astro-7pewbour"><a href="/es/blog/enterprise-patterns-delphi" class="btn-primary astro-7pewbour">Blog</a></li> <li class="astro-7pewbour"> <div class="lang-switcher astro-7pewbour"> <select onchange="window.location.href=this.value" class="astro-7pewbour"> <option value="/" class="astro-7pewbour">\u{1F1E7}\u{1F1F7} PT</option> <option value="/en" class="astro-7pewbour">\u{1F1FA}\u{1F1F8} EN</option> <option value="/es" selected class="astro-7pewbour">\u{1F1EA}\u{1F1F8} ES</option> </select> </div> </li> </ul> </nav> </div> </header> <section id="books" class="hero astro-7pewbour"> <div class="container astro-7pewbour"> <div class="hero-intro astro-7pewbour"> <h1 class="astro-7pewbour">Delphi Multithreading</h1> <p class="subtitle astro-7pewbour">Domine el paralelismo y el rendimiento en Delphi con la gu\xEDa definitiva.</p> </div> <div class="books-grid astro-7pewbour"> <div class="book-card astro-7pewbour"> <a href="/books/pt" class="book-image-link astro-7pewbour"> <div class="book-image astro-7pewbour"> <img src="/images/cover.jpg" alt="Portada Edici\xF3n Portugu\xE9s" onerror="this.src='https://placehold.co/300x400/1e293b/FFF?text=Capa+PT'" class="astro-7pewbour"> </div> </a> <div class="book-content astro-7pewbour"> <h3 class="astro-7pewbour">Edici\xF3n en Portugu\xE9s</h3> <p class="astro-7pewbour">La gu\xEDa completa para desarrolladores.</p> <div class="actions astro-7pewbour"> <a href="/books/pt" class="btn-outline astro-7pewbour">Saber M\xE1s</a> <a href="https://clubedeautores.com.br/livro/delphi-multithreading" target="_blank" class="btn-solid astro-7pewbour">Comprar</a> </div> </div> </div> <div class="book-card astro-7pewbour"> <a href="/books/en" class="book-image-link astro-7pewbour"> <div class="book-image astro-7pewbour"> <img src="/images/cover_en.png" alt="English Edition Cover" onerror="this.src='https://placehold.co/300x400/1e293b/FFF?text=Cover+EN'" class="astro-7pewbour"> </div> </a> <div class="book-content astro-7pewbour"> <h3 class="astro-7pewbour">English Edition</h3> <p class="astro-7pewbour">Mastering parallel programming patterns.</p> <div class="actions astro-7pewbour"> <a href="/books/en" class="btn-outline astro-7pewbour">Saber M\xE1s</a> <a href="https://www.amazon.com/dp/B0CXXY3V5D" target="_blank" class="btn-solid astro-7pewbour">Comprar</a> </div> </div> </div> </div> </div> </section> <section id="projects" class="projects-section astro-7pewbour"> <div class="container astro-7pewbour"> <h2 class="section-title astro-7pewbour">Proyectos Open Source</h2> <div class="project-highlight astro-7pewbour"> <div class="project-info astro-7pewbour"> <h3 class="astro-7pewbour">DEXT Framework</h3> <p class="tech-tag astro-7pewbour">Delphi \u2022 Web API \u2022 ORM \u2022 Architecture</p> <p class="astro-7pewbour">Dext Framework - Desarrollo Full-Stack Moderno para Delphi.</p> <p class="astro-7pewbour">Un framework fullstack inspirado en ASP.NET Core y EF Core, trayendo Clean Architecture, Domain-Driven Design y alto rendimiento al ecosistema Delphi.</p> <ul class="features-list astro-7pewbour"> <li class="astro-7pewbour">\u2713 Fluent Mapping & API</li> <li class="astro-7pewbour">\u2713 CQRS Ready</li> <li class="astro-7pewbour">\u2713 Multi-Database Support</li> </ul> <a href="https://github.com/cesarliws/dext" target="_blank" class="btn-arrow astro-7pewbour">Ver en GitHub &rarr;</a> </div> <div class="project-visual astro-7pewbour"> <div class="code-window astro-7pewbour"> <div class="window-header astro-7pewbour"> <span class="dot red astro-7pewbour"></span><span class="dot yellow astro-7pewbour"></span><span class="dot green astro-7pewbour"></span> </div> `, ' </div> </div> </div> </div> </section> <section id="articles" class="articles-section astro-7pewbour"> <div class="container astro-7pewbour"> <div class="section-header astro-7pewbour"> <h2 class="section-title astro-7pewbour">\xDAltimos Art\xEDculos</h2> <a href="/es/articles" class="view-all astro-7pewbour">Ver todos &rarr;</a> </div> <div class="articles-list astro-7pewbour"> ', ' </div> </div> </section> <section id="about" class="about-section astro-7pewbour"> <div class="container astro-7pewbour"> <div class="about-card glass-panel astro-7pewbour"> <div class="about-image-wrapper astro-7pewbour"> <img src="/images/cesar-romero-profile.png" alt="Cesar Romero" class="astro-7pewbour"> <div class="image-accent-border astro-7pewbour"></div> </div> <div class="about-content astro-7pewbour"> <h2 class="section-title astro-7pewbour">Sobre el Autor</h2> <p class="astro-7pewbour"><strong class="astro-7pewbour">Cesar Romero</strong> es Arquitecto de Software, Ingeniero de Sistemas y veterano de la plataforma Delphi, con la que trabaja apasionadamente desde 1996.</p> <p class="astro-7pewbour">Con casi 30 a\xF1os de carrera, tiene vasta experiencia liderando equipos y dise\xF1ando arquitecturas robustas para sistemas cr\xEDticos en entornos Windows, Linux, Cloud y Mobile.</p> <p class="astro-7pewbour">Como <strong class="astro-7pewbour">Embarcadero MVP</strong>, es una voz activa en la comunidad, participando frecuentemente en eventos en Brasil y en el extranjero.</p> <div class="social-links-about astro-7pewbour"> <a href="https://github.com/cesarliws" target="_blank" class="social-badge astro-7pewbour">GitHub</a> <a href="https://linkedin.com/in/cesarliws" target="_blank" class="social-badge astro-7pewbour">LinkedIn</a> </div> </div> </div> </div> </section> <footer class="astro-7pewbour"> <div class="container footer-content astro-7pewbour"> <div class="socials astro-7pewbour"> <a href="https://github.com/cesarliws" target="_blank" class="astro-7pewbour">GitHub</a> <a href="https://linkedin.com/in/cesarliws" target="_blank" class="astro-7pewbour">LinkedIn</a> <a href="mailto:cesarliws@gmail.com" class="astro-7pewbour">Contacto</a> </div> <p class="astro-7pewbour">&copy; ', " Cesar Romero. Todos los derechos reservados.</p> </div> </footer> </body></html>"])), addAttribute(Astro2.generator, "content"), pageTitle, renderHead(), renderComponent($$result, "Code", $$Code, { "code": `// GET /orders/pending
App.MapGet('/orders/pending', 
  function(Context: THttpContext; Repo: IOrderRepository): IResult
  begin
    // "Fetch orders where Status is 'Submitted' AND Total > 1000, 
    //  including Items, ordered by Date"
    var Spec := Specification.Where<TOrderEntity>(
                  (OrderEntity.Status = 'Submitted') and 
                  (OrderEntity.Total > 1000)
                )
                .Include('Items')
                .OrderBy(OrderEntity.CreatedAt.Desc);

    // The Repository only executes the specification. Clean.
    var Orders := Repo.List(Spec);
    
    Result := Results.Ok(Orders);
  end);`, "lang": "pascal", "theme": "dracula", "class": "astro-7pewbour" }), recentPosts.length > 0 ? recentPosts.map((post) => {
    const slug = post.slug || post.id.replace(/\.[^/.]+$/, "");
    return renderTemplate`<article class="article-item astro-7pewbour"> <div class="article-meta astro-7pewbour"> <span class="date astro-7pewbour">${post.data.date ? new Date(post.data.date).toLocaleDateString("es-ES") : "Reciente"}</span> ${post.data.tags && renderTemplate`<span class="tag astro-7pewbour">${post.data.tags[0]}</span>`} </div> <h3 class="astro-7pewbour"><a${addAttribute(`/${slug}`, "href")} class="astro-7pewbour">${post.data.title}</a></h3> <p class="astro-7pewbour">${post.data.description}</p> </article>`;
  }) : (
    // Fallback case
    renderTemplate`<article class="article-item astro-7pewbour"> <div class="article-meta astro-7pewbour"> <span class="date astro-7pewbour">Arquitectura</span> <span class="tag astro-7pewbour">Destacado</span> </div> <h3 class="astro-7pewbour"><a href="/es/blog/enterprise-patterns-delphi" class="astro-7pewbour">Enterprise Patterns con Dext</a></h3> <p class="astro-7pewbour">Cómo aplicar Domain Model y CQRS para modernizar su arquitectura Delphi.</p> </article>`
  ), (/* @__PURE__ */ new Date()).getFullYear());
}, "C:/Users/Cezar/OneDrive/Documentos/Delphi Threads Book/Hotsite/new-site/src/pages/es/index.astro", void 0);

const $$file = "C:/Users/Cezar/OneDrive/Documentos/Delphi Threads Book/Hotsite/new-site/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
