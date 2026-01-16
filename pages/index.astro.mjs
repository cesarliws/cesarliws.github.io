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
    return id.startsWith("articles/") && !id.includes("welcome") && !id.includes("index");
  });
  const recentPosts = posts.sort((a, b) => {
    const dateA = new Date(a.data.pubDate || a.data.date || 0).getTime();
    const dateB = new Date(b.data.pubDate || b.data.date || 0).getTime();
    return dateB - dateA;
  }).slice(0, 3);
  const pageTitle = "Cesar Romero | Delphi Expert & Software Architect";
  return renderTemplate(_a || (_a = __template(['<html lang="pt-BR" class="astro-j7pv25f6"> <head><meta charset="utf-8"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', "><title>", '</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"><script defer src="https://cloud.umami.is/script.js" data-website-id="effced3c-a26c-415d-9185-02d6354dd6b6"><\/script>', `</head> <body class="astro-j7pv25f6"> <header class="navbar astro-j7pv25f6"> <div class="container nav-container astro-j7pv25f6"> <a href="/" class="logo astro-j7pv25f6">Cesar <span class="astro-j7pv25f6">Romero</span></a> <nav class="astro-j7pv25f6"> <ul class="astro-j7pv25f6"> <li class="astro-j7pv25f6"><a href="#livros" class="astro-j7pv25f6">Livros</a></li> <li class="astro-j7pv25f6"><a href="#projetos" class="astro-j7pv25f6">Projetos</a></li> <li class="astro-j7pv25f6"><a href="#artigos" class="astro-j7pv25f6">Artigos</a></li> <li class="astro-j7pv25f6"><a href="/articles" class="btn-primary astro-j7pv25f6">Blog</a></li> <li class="astro-j7pv25f6"> <div class="lang-switcher astro-j7pv25f6"> <select onchange="window.location.href=this.value" class="astro-j7pv25f6"> <option value="/" selected class="astro-j7pv25f6">\u{1F1E7}\u{1F1F7} PT</option> <option value="/en" class="astro-j7pv25f6">\u{1F1FA}\u{1F1F8} EN</option> <option value="/es" class="astro-j7pv25f6">\u{1F1EA}\u{1F1F8} ES</option> </select> </div> </li> </ul> </nav> </div> </header> <section id="livros" class="hero astro-j7pv25f6"> <div class="container astro-j7pv25f6"> <div class="hero-intro astro-j7pv25f6"> <h1 class="astro-j7pv25f6">Delphi Multithreading</h1> <p class="subtitle astro-j7pv25f6">Domine o paralelismo e a performance em Delphi com o guia definitivo.</p> </div> <div class="books-grid astro-j7pv25f6"> <div class="book-card astro-j7pv25f6"> <a href="/books/pt" class="book-image-link astro-j7pv25f6"> <div class="book-image astro-j7pv25f6"> <img src="/images/cover.jpg" alt="Capa Livro Portugu\xEAs" onerror="this.src='https://placehold.co/300x400/1e293b/FFF?text=Capa+PT'" class="astro-j7pv25f6"> </div> </a> <div class="book-content astro-j7pv25f6"> <h3 class="astro-j7pv25f6">Edi\xE7\xE3o em Portugu\xEAs</h3> <p class="astro-j7pv25f6">O guia completo para desenvolvedores brasileiros.</p> <div class="actions astro-j7pv25f6"> <a href="/books/pt" class="btn-outline astro-j7pv25f6">Saiba Mais</a> <a href="https://clubedeautores.com.br/livro/delphi-multithreading" target="_blank" class="btn-solid astro-j7pv25f6">Comprar</a> </div> </div> </div> <div class="book-card astro-j7pv25f6"> <a href="/books/en" class="book-image-link astro-j7pv25f6"> <div class="book-image astro-j7pv25f6"> <img src="/images/cover_en.png" alt="English Edition Cover" onerror="this.src='https://placehold.co/300x400/1e293b/FFF?text=Cover+EN'" class="astro-j7pv25f6"> </div> </a> <div class="book-content astro-j7pv25f6"> <h3 class="astro-j7pv25f6">English Edition</h3> <p class="astro-j7pv25f6">Mastering parallel programming patterns.</p> <div class="actions astro-j7pv25f6"> <a href="/books/en" class="btn-outline astro-j7pv25f6">Learn More</a> <a href="https://www.amazon.com/dp/B0CXXY3V5D" target="_blank" class="btn-solid astro-j7pv25f6">Buy Now</a> </div> </div> </div> </div> </div> </section> <section id="projetos" class="projects-section astro-j7pv25f6"> <div class="container astro-j7pv25f6"> <h2 class="section-title astro-j7pv25f6">Projetos Open Source</h2> <div class="project-highlight astro-j7pv25f6"> <div class="project-info astro-j7pv25f6"> <h3 class="astro-j7pv25f6">DEXT Framework</h3> <p class="tech-tag astro-j7pv25f6">Delphi \u2022 Web API \u2022 ORM \u2022 Architecture</p> <p class="astro-j7pv25f6">Dext Framework - Modern Full-Stack Development for Delphi.</p> <p class="astro-j7pv25f6">Um framework fullstack inspirado no ASP.NET Core e EF Core, trazendo Clean Architecture, Domain-Driven Design e alta performance para o ecossistema Delphi.</p> <ul class="features-list astro-j7pv25f6"> <li class="astro-j7pv25f6">\u2713 Fluent Mapping & API</li> <li class="astro-j7pv25f6">\u2713 CQRS Ready</li> <li class="astro-j7pv25f6">\u2713 Multi-Database Support</li> </ul> <a href="https://github.com/cesarliws/dext" target="_blank" class="btn-arrow astro-j7pv25f6">Ver no GitHub &rarr;</a> </div> <div class="project-visual astro-j7pv25f6"> <div class="code-window astro-j7pv25f6"> <div class="window-header astro-j7pv25f6"> <span class="dot red astro-j7pv25f6"></span><span class="dot yellow astro-j7pv25f6"></span><span class="dot green astro-j7pv25f6"></span> </div> `, ' </div> </div> </div> </div> </section> <section id="artigos" class="articles-section astro-j7pv25f6"> <div class="container astro-j7pv25f6"> <div class="section-header astro-j7pv25f6"> <h2 class="section-title astro-j7pv25f6">\xDAltimos Artigos</h2> <a href="/articles" class="view-all astro-j7pv25f6">Ver todos &rarr;</a> </div> <div class="articles-list astro-j7pv25f6"> ', ' </div> </div> </section> <section id="sobre" class="about-section astro-j7pv25f6"> <div class="container astro-j7pv25f6"> <div class="about-card glass-panel astro-j7pv25f6"> <div class="about-image-wrapper astro-j7pv25f6"> <img src="/images/cesar-romero-profile.png" alt="Cesar Romero" class="astro-j7pv25f6"> <div class="image-accent-border astro-j7pv25f6"></div> </div> <div class="about-content astro-j7pv25f6"> <h2 class="section-title astro-j7pv25f6">Sobre o Autor</h2> <p class="astro-j7pv25f6"><strong class="astro-j7pv25f6">Cesar Romero</strong> \xE9 um Arquiteto de Software, Engenheiro de Sistemas e um veterano da plataforma Delphi, com a qual tem trabalhado apaixonadamente desde 1996.</p> <p class="astro-j7pv25f6">Com uma carreira de quase 30 anos, acumulou vasta experi\xEAncia liderando equipes e projetando arquiteturas robustas para sistemas cr\xEDticos em ambientes Windows, Linux, Cloud e Mobile.</p> <p class="astro-j7pv25f6">Como <strong class="astro-j7pv25f6">Embarcadero MVP</strong>, \xE9 uma voz ativa na comunidade, palestrando frequentemente em eventos no Brasil e no exterior.</p> <div class="social-links-about astro-j7pv25f6"> <a href="https://github.com/cesarliws" target="_blank" class="social-badge astro-j7pv25f6">GitHub</a> <a href="https://linkedin.com/in/cesarliws" target="_blank" class="social-badge astro-j7pv25f6">LinkedIn</a> </div> </div> </div> </div> </section> <footer class="astro-j7pv25f6"> <div class="container footer-content astro-j7pv25f6"> <div class="socials astro-j7pv25f6"> <a href="https://github.com/cesarliws" target="_blank" class="astro-j7pv25f6">GitHub</a> <a href="https://linkedin.com/in/cesarliws" target="_blank" class="astro-j7pv25f6">LinkedIn</a> <a href="mailto:cesarliws@gmail.com" class="astro-j7pv25f6">Contato</a> </div> <p class="astro-j7pv25f6">&copy; ', " Cesar Romero. Todos os direitos reservados.</p> </div> </footer> </body></html>"])), addAttribute(Astro2.generator, "content"), pageTitle, renderHead(), renderComponent($$result, "Code", $$Code, { "code": `// GET /orders/pending
App.MapGet('/orders/pending', 
  function(Context: THttpContext; Repo: IOrderRepository): IResult
  begin
    // "Traga pedidos onde Status \xE9 'Submitted' E Total > 1000, 
    //  incluindo os Itens, ordenados por data de cria\xE7\xE3o"
    var Spec := Specification.Where<TOrderEntity>(
                  (OrderEntity.Status = 'Submitted') and 
                  (OrderEntity.Total > 1000)
                )
                .Include('Items')
                .OrderBy(OrderEntity.CreatedAt.Desc);

    // O Repository apenas executa a especifica\xE7\xE3o. Limpo.
    var Orders := Repo.List(Spec);
    
    Result := Results.Ok(Orders);
  end);`, "lang": "pascal", "theme": "dracula", "class": "astro-j7pv25f6" }), recentPosts.length > 0 ? recentPosts.map((post) => {
    const slug = post.slug || post.id.replace(/\.[^/.]+$/, "");
    return renderTemplate`<article class="article-item astro-j7pv25f6"> <div class="article-meta astro-j7pv25f6"> <span class="date astro-j7pv25f6">${post.data.date ? new Date(post.data.date).toLocaleDateString("pt-BR") : "Recente"}</span> ${post.data.tags && renderTemplate`<span class="tag astro-j7pv25f6">${post.data.tags[0]}</span>`} </div> <h3 class="astro-j7pv25f6"><a${addAttribute(`/${slug}`, "href")} class="astro-j7pv25f6">${post.data.title}</a></h3> <p class="astro-j7pv25f6">${post.data.description}</p> </article>`;
  }) : (
    // Fallback caso não tenha posts ainda
    renderTemplate`<article class="article-item astro-j7pv25f6"> <div class="article-meta astro-j7pv25f6"> <span class="date astro-j7pv25f6">Arquitetura</span> <span class="tag astro-j7pv25f6">Destaque</span> </div> <h3 class="astro-j7pv25f6"><a href="#" class="astro-j7pv25f6">Enterprise Patterns com Dext</a></h3> <p class="astro-j7pv25f6">Como aplicar Domain Model e CQRS para modernizar sua arquitetura Delphi e preparar seu sistema para alta escalabilidade.</p> </article>
             <article class="article-item astro-j7pv25f6"> <div class="article-meta astro-j7pv25f6"> <span class="date astro-j7pv25f6">Multithreading</span> </div> <h3 class="astro-j7pv25f6"><a href="#" class="astro-j7pv25f6">Tasks vs Threads: Qual usar?</a></h3> <p class="astro-j7pv25f6">Entenda a diferença fundamental e quando aplicar cada conceito em projetos modernos.</p> </article>`
  ), (/* @__PURE__ */ new Date()).getFullYear());
}, "C:/Users/Cezar/OneDrive/Documentos/Delphi Threads Book/Hotsite/new-site/src/pages/index.astro", void 0);

const $$file = "C:/Users/Cezar/OneDrive/Documentos/Delphi Threads Book/Hotsite/new-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
