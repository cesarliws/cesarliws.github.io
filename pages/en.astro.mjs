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
    return id.startsWith("en/blog/");
  });
  const recentPosts = posts.sort((a, b) => new Date(b.data.date || 0).getTime() - new Date(a.data.date || 0).getTime()).slice(0, 3);
  const pageTitle = "Cesar Romero | Delphi Expert & Software Architect";
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="astro-dhfotatx"> <head><meta charset="utf-8"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', "><title>", '</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"><script defer src="https://cloud.umami.is/script.js" data-website-id="effced3c-a26c-415d-9185-02d6354dd6b6"><\/script>', `</head> <body class="astro-dhfotatx"> <header class="navbar astro-dhfotatx"> <div class="container nav-container astro-dhfotatx"> <a href="/en" class="logo astro-dhfotatx">Cesar <span class="astro-dhfotatx">Romero</span></a> <nav class="astro-dhfotatx"> <ul class="astro-dhfotatx"> <li class="astro-dhfotatx"><a href="#books" class="astro-dhfotatx">Books</a></li> <li class="astro-dhfotatx"><a href="#projects" class="astro-dhfotatx">Projects</a></li> <li class="astro-dhfotatx"><a href="#articles" class="astro-dhfotatx">Articles</a></li> <li class="astro-dhfotatx"><a href="/en/blog/enterprise-patterns-delphi" class="btn-primary astro-dhfotatx">Blog</a></li> <li class="astro-dhfotatx"> <div class="lang-switcher astro-dhfotatx"> <select onchange="window.location.href=this.value" class="astro-dhfotatx"> <option value="/" class="astro-dhfotatx">\u{1F1E7}\u{1F1F7} PT</option> <option value="/en" selected class="astro-dhfotatx">\u{1F1FA}\u{1F1F8} EN</option> <option value="/es" class="astro-dhfotatx">\u{1F1EA}\u{1F1F8} ES</option> </select> </div> </li> </ul> </nav> </div> </header> <section id="books" class="hero astro-dhfotatx"> <div class="container astro-dhfotatx"> <div class="hero-intro astro-dhfotatx"> <h1 class="astro-dhfotatx">Delphi Multithreading</h1> <p class="subtitle astro-dhfotatx">Master parallelism and performance in Delphi with the definitive guide.</p> </div> <div class="books-grid astro-dhfotatx"> <div class="book-card astro-dhfotatx"> <a href="/books/pt" class="book-image-link astro-dhfotatx"> <div class="book-image astro-dhfotatx"> <img src="/images/cover.jpg" alt="Portuguese Book Cover" onerror="this.src='https://placehold.co/300x400/1e293b/FFF?text=Capa+PT'" class="astro-dhfotatx"> </div> </a> <div class="book-content astro-dhfotatx"> <h3 class="astro-dhfotatx">Portuguese Edition</h3> <p class="astro-dhfotatx">The complete guide for Brazilian developers.</p> <div class="actions astro-dhfotatx"> <a href="/books/pt" class="btn-outline astro-dhfotatx">Learn More</a> <a href="https://clubedeautores.com.br/livro/delphi-multithreading" target="_blank" class="btn-solid astro-dhfotatx">Buy</a> </div> </div> </div> <div class="book-card astro-dhfotatx"> <a href="/books/en" class="book-image-link astro-dhfotatx"> <div class="book-image astro-dhfotatx"> <img src="/images/cover_en.png" alt="English Edition Cover" onerror="this.src='https://placehold.co/300x400/1e293b/FFF?text=Cover+EN'" class="astro-dhfotatx"> </div> </a> <div class="book-content astro-dhfotatx"> <h3 class="astro-dhfotatx">English Edition</h3> <p class="astro-dhfotatx">Mastering parallel programming patterns.</p> <div class="actions astro-dhfotatx"> <a href="/books/en" class="btn-outline astro-dhfotatx">Learn More</a> <a href="https://www.amazon.com/dp/B0CXXY3V5D" target="_blank" class="btn-solid astro-dhfotatx">Buy Now</a> </div> </div> </div> </div> </div> </section> <section id="projects" class="projects-section astro-dhfotatx"> <div class="container astro-dhfotatx"> <h2 class="section-title astro-dhfotatx">Open Source Projects</h2> <div class="project-highlight astro-dhfotatx"> <div class="project-info astro-dhfotatx"> <h3 class="astro-dhfotatx">DEXT Framework</h3> <p class="tech-tag astro-dhfotatx">Delphi \u2022 Web API \u2022 ORM \u2022 Architecture</p> <p class="astro-dhfotatx">Dext Framework - Modern Full-Stack Development for Delphi.</p> <p class="astro-dhfotatx">A fullstack framework inspired by ASP.NET Core and EF Core, bringing Clean Architecture, Domain-Driven Design, and high performance to the Delphi ecosystem.</p> <ul class="features-list astro-dhfotatx"> <li class="astro-dhfotatx">\u2713 Fluent Mapping & API</li> <li class="astro-dhfotatx">\u2713 CQRS Ready</li> <li class="astro-dhfotatx">\u2713 Multi-Database Support</li> </ul> <a href="https://github.com/cesarliws/dext" target="_blank" class="btn-arrow astro-dhfotatx">View on GitHub &rarr;</a> </div> <div class="project-visual astro-dhfotatx"> <div class="code-window astro-dhfotatx"> <div class="window-header astro-dhfotatx"> <span class="dot red astro-dhfotatx"></span><span class="dot yellow astro-dhfotatx"></span><span class="dot green astro-dhfotatx"></span> </div> `, ' </div> </div> </div> </div> </section> <section id="articles" class="articles-section astro-dhfotatx"> <div class="container astro-dhfotatx"> <div class="section-header astro-dhfotatx"> <h2 class="section-title astro-dhfotatx">Latest Articles</h2> <a href="/en/articles" class="view-all astro-dhfotatx">View all &rarr;</a> </div> <div class="articles-list astro-dhfotatx"> ', ' </div> </div> </section> <section id="about" class="about-section astro-dhfotatx"> <div class="container astro-dhfotatx"> <div class="about-card glass-panel astro-dhfotatx"> <div class="about-image-wrapper astro-dhfotatx"> <img src="/images/cesar-romero-profile.png" alt="Cesar Romero" class="astro-dhfotatx"> <div class="image-accent-border astro-dhfotatx"></div> </div> <div class="about-content astro-dhfotatx"> <h2 class="section-title astro-dhfotatx">About the Author</h2> <p class="astro-dhfotatx"><strong class="astro-dhfotatx">Cesar Romero</strong> is a Software Architect, Systems Engineer, and a veteran of the Delphi platform, with which he has worked passionately since 1996.</p> <p class="astro-dhfotatx">With a career spanning nearly 30 years, he has extensive experience leading teams and designing robust architectures for critical systems in Windows, Linux, Cloud, and Mobile environments.</p> <p class="astro-dhfotatx">As an <strong class="astro-dhfotatx">Embarcadero MVP</strong>, he is an active voice in the community, frequently speaking at events in Brazil and abroad.</p> <div class="social-links-about astro-dhfotatx"> <a href="https://github.com/cesarliws" target="_blank" class="social-badge astro-dhfotatx">GitHub</a> <a href="https://linkedin.com/in/cesarliws" target="_blank" class="social-badge astro-dhfotatx">LinkedIn</a> </div> </div> </div> </div> </section> <footer class="astro-dhfotatx"> <div class="container footer-content astro-dhfotatx"> <div class="socials astro-dhfotatx"> <a href="https://github.com/cesarliws" target="_blank" class="astro-dhfotatx">GitHub</a> <a href="https://linkedin.com/in/cesarliws" target="_blank" class="astro-dhfotatx">LinkedIn</a> <a href="mailto:cesarliws@gmail.com" class="astro-dhfotatx">Contact</a> </div> <p class="astro-dhfotatx">&copy; ', " Cesar Romero. All rights reserved.</p> </div> </footer> </body></html>"])), addAttribute(Astro2.generator, "content"), pageTitle, renderHead(), renderComponent($$result, "Code", $$Code, { "code": `// GET /orders/pending
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
  end);`, "lang": "pascal", "theme": "dracula", "class": "astro-dhfotatx" }), recentPosts.length > 0 ? recentPosts.map((post) => {
    const slug = post.slug || post.id.replace(/\.[^/.]+$/, "");
    return renderTemplate`<article class="article-item astro-dhfotatx"> <div class="article-meta astro-dhfotatx"> <span class="date astro-dhfotatx">${post.data.date ? new Date(post.data.date).toLocaleDateString("en-US") : "Recent"}</span> ${post.data.tags && renderTemplate`<span class="tag astro-dhfotatx">${post.data.tags[0]}</span>`} </div> <h3 class="astro-dhfotatx"><a${addAttribute(`/${slug}`, "href")} class="astro-dhfotatx">${post.data.title}</a></h3> <p class="astro-dhfotatx">${post.data.description}</p> </article>`;
  }) : (
    // Fallback case
    renderTemplate`<article class="article-item astro-dhfotatx"> <div class="article-meta astro-dhfotatx"> <span class="date astro-dhfotatx">Architecture</span> <span class="tag astro-dhfotatx">Featured</span> </div> <h3 class="astro-dhfotatx"><a href="/en/blog/enterprise-patterns-delphi" class="astro-dhfotatx">Enterprise Patterns with Dext</a></h3> <p class="astro-dhfotatx">How to apply Domain Model and CQRS to modernize your Delphi architecture.</p> </article>`
  ), (/* @__PURE__ */ new Date()).getFullYear());
}, "C:/Users/Cezar/OneDrive/Documentos/Delphi Threads Book/Hotsite/new-site/src/pages/en/index.astro", void 0);

const $$file = "C:/Users/Cezar/OneDrive/Documentos/Delphi Threads Book/Hotsite/new-site/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
