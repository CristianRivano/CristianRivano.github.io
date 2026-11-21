import { useEffect, useRef, useState } from "react";
import "../assets/site.min.css";

const WHATSAPP_NUMBER = "56989878687";

function SiteContent({ menuOpen, onMenuToggle, onMenuClose, onOpenBooking, toastVisible, toastMessage, whatsappAttention }) {
  return (
    <div id="site-shell">
      <div>


          <div id="toast" role="status" aria-live="polite" className={`fixed toast-overlay-position z-50 transform transition-all duration-300 bg-buddhist-900 text-buddhist-100 px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 border border-buddhist-gold/30 ${toastVisible ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"}`}>
              <i className="fa-solid fa-circle-check text-buddhist-saffron text-xl" aria-hidden="true"></i>
              <div>
                  <p className="font-bold text-sm" id="toast-title">{toastVisible ? "Consulta preparada" : "Mensaje"}</p>
                  <p className="text-xs text-buddhist-200" id="toast-msg">{toastMessage}</p>
              </div>
          </div>

          <a className="skip-link" href="#inicio">Saltar al contenido</a>


          <header className="sticky top-0 z-40 bg-buddhist-50/90 backdrop-blur-md border-b border-buddhist-200" role="banner">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

                  <a href="#inicio" aria-label="NANAI, Masajes a Domicilio, inicio" className="flex shrink-0 items-center gap-2 rounded-lg p-1 outline-none focus-visible:ring-2 focus-visible:ring-buddhist-saffron">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-buddhist-saffron shadow-md sm:h-14 sm:w-14">
                          <img src="/assets/logo-nanai.svg" alt="" aria-hidden="true" width="48" height="48" className="h-10 w-10 object-contain sm:h-12 sm:w-12" />
                      </span>
                      <span className="flex flex-col leading-none">
                          <span className="font-serif text-xl font-bold tracking-wider text-white sm:text-2xl">NANAI</span>
                          <span className="mt-1 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.12em] text-buddhist-200 sm:text-[10px]">Masajes a Domicilio</span>
                      </span>
                  </a>

                  <nav className="hidden lg:flex items-center space-x-5 font-medium text-sm text-buddhist-800">
                      <a href="#inicio" className="hover:text-buddhist-saffron transition-colors">Inicio</a>
                      <a href="#servicios" className="hover:text-buddhist-saffron transition-colors">Masajes principales</a>
                      <a href="#beneficios" className="hover:text-buddhist-saffron transition-colors">Beneficios</a>
                      <a href="#como-funciona" className="hover:text-buddhist-saffron transition-colors">Cómo Funciona</a>
                      <a href="#preguntas-frecuentes" className="hover:text-buddhist-saffron transition-colors">Preguntas frecuentes</a>
                      <a href="#contacto" className="hover:text-buddhist-saffron transition-colors">Contacto</a>
                  </nav>


                  <div className="hidden lg:block">
                      <a href="https://wa.me/56989878687?text=Hola%20Nanai%2C%20quisiera%20consultar%20por%20disponibilidad%20en%20Talca." target="_blank" rel="noopener noreferrer" className="saffron-gradient text-buddhist-coffee px-6 py-2.5 rounded-full font-medium text-sm shadow-lg shadow-buddhist-saffron/20 hover:opacity-95 transition-all transform hover:-translate-y-0.5">WhatsApp</a>
                  </div>


                  <button id="mobile-menu-btn" onClick={onMenuToggle} type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="mobile-menu" className="lg:hidden min-w-11 min-h-11 inline-flex items-center justify-center text-buddhist-maroon text-2xl p-2">
                      <i className="fa-solid fa-bars" aria-hidden="true"></i>
                  </button>
              </div>


              <div id="mobile-menu" onClick={onMenuClose} className={menuOpen ? "lg:hidden bg-buddhist-100 border-b border-buddhist-200 px-6 py-4 space-y-3" : "hidden lg:hidden bg-buddhist-100 border-b border-buddhist-200 px-6 py-4 space-y-3"}>
                  <a href="#inicio" className="block min-h-11 flex items-center text-buddhist-800 font-medium py-2">Inicio</a>
                  <a href="#servicios" className="block min-h-11 flex items-center text-buddhist-800 font-medium py-2">Masajes principales</a>
                  <a href="#beneficios" className="block min-h-11 flex items-center text-buddhist-800 font-medium py-2">Beneficios</a>
                  <a href="#como-funciona" className="block min-h-11 flex items-center text-buddhist-800 font-medium py-2">Cómo Funciona</a>
                  <a href="#preguntas-frecuentes" className="block min-h-11 flex items-center text-buddhist-800 font-medium py-2">Preguntas frecuentes</a>
                  <a href="#contacto" className="block min-h-11 flex items-center text-buddhist-800 font-medium py-2">Contacto</a>
                  <a href="https://wa.me/56989878687?text=Hola%20Nanai%2C%20quisiera%20consultar%20por%20disponibilidad%20en%20Talca." target="_blank" rel="noopener noreferrer" className="block min-h-11 w-full mt-2 saffron-gradient text-buddhist-coffee py-2.5 rounded-full font-medium text-sm text-center shadow">WhatsApp</a>
                  <button type="button" onClick={() => onOpenBooking("")} className="min-h-11 w-full border-2 border-buddhist-maroon text-buddhist-maroon py-2.5 rounded-full font-medium text-sm text-center hover:bg-buddhist-saffron hover:text-buddhist-coffee transition-all">Completar formulario</button>
              </div>
          </header>

          <main id="contenido">

          <section id="inicio" className="relative overflow-hidden bg-buddhist-50 py-8 sm:py-10 lg:py-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <h1 className="sr-only">Masajes a domicilio en Talca</h1>
                  <img src="/assets/og-image-20261104-logo.jpg" alt="Imagen promocional de NANAI, masajes a domicilio en Talca, con el mensaje: Una pausa de bienestar, en casa. Elige tu masaje y coordina tu momento con Nanai." width="1200" height="675" fetchPriority="high" decoding="async" className="mx-auto block h-auto w-full max-w-6xl rounded-2xl shadow-xl sm:rounded-3xl" />
                  <div className="mx-auto mt-6 max-w-3xl space-y-5 text-center">
                      <p className="text-lg font-light leading-relaxed text-buddhist-750">Consulta cobertura, duración y valor según la modalidad que te interesa.</p>
                      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                          <a href="https://wa.me/56989878687?text=Hola%20Nanai%2C%20quisiera%20consultar%20por%20disponibilidad%20en%20Talca." target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center space-x-2 rounded-full saffron-gradient px-8 py-3.5 font-semibold text-buddhist-coffee shadow-xl shadow-buddhist-saffron/20 transition-transform hover:scale-[1.02] sm:w-auto"><span>Consultar por WhatsApp</span><i className="fa-brands fa-whatsapp" aria-hidden="true"></i></a>
                          <button type="button" onClick={() => onOpenBooking("")} className="w-full rounded-full border-2 border-buddhist-maroon bg-transparent px-8 py-3.5 text-center font-semibold text-buddhist-maroon transition-all hover:bg-buddhist-saffron hover:text-buddhist-coffee sm:w-auto">Prefiero completar el formulario</button>
                      </div>
                  </div>
              </div>
          </section>


          <section id="como-funciona" className="py-20 bg-buddhist-100/70 border-y border-buddhist-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                      <span className="text-buddhist-saffron font-bold uppercase tracking-widest text-xs">Simple y Cómodo</span>
                      <h2 className="text-3xl sm:text-4xl font-bold font-serif text-buddhist-maroon">¿Cómo Funciona el Masaje a Domicilio?</h2>
                      <div className="w-20 h-1 bg-buddhist-gold mx-auto rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                      <div className="bg-buddhist-50 p-8 rounded-2xl shadow-sm border border-buddhist-200 card-hover text-center space-y-4">
                          <div className="w-16 h-16 mx-auto rounded-2xl buddhist-gradient flex items-center justify-center text-buddhist-gold text-2xl font-serif font-bold shadow-md">
                              1
                          </div>
                          <h3 className="font-serif font-bold text-xl text-buddhist-maroon">Eliges tu Masaje</h3>
                          <p className="text-sm text-buddhist-750 leading-relaxed">
                              Indica la modalidad y tu sector para consultar cobertura, valor y disponibilidad.
                          </p>
                      </div>


                      <div className="bg-buddhist-50 p-8 rounded-2xl shadow-sm border border-buddhist-200 card-hover text-center space-y-4">
                          <div className="w-16 h-16 mx-auto rounded-2xl buddhist-gradient flex items-center justify-center text-buddhist-gold text-2xl font-serif font-bold shadow-md">
                              2
                          </div>
                          <h3 className="font-serif font-bold text-xl text-buddhist-maroon">Coordinamos los detalles</h3>
                          <p className="text-sm text-buddhist-750 leading-relaxed">
                              Confirma duración, equipamiento y condiciones prácticas antes de coordinar.
                          </p>
                      </div>


                      <div className="bg-buddhist-50 p-8 rounded-2xl shadow-sm border border-buddhist-200 card-hover text-center space-y-4">
                          <div className="w-16 h-16 mx-auto rounded-2xl buddhist-gradient flex items-center justify-center text-buddhist-gold text-2xl font-serif font-bold shadow-md">
                              3
                          </div>
                          <h3 className="font-serif font-bold text-xl text-buddhist-maroon">Recibe confirmación</h3>
                          <p className="text-sm text-buddhist-750 leading-relaxed">
                              La hora queda coordinada cuando Nanai confirma la disponibilidad por WhatsApp.
                          </p>
                      </div>
                  </div>
              </div>
          </section>


          <section id="servicios" className="py-20 bg-buddhist-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                      <span className="text-buddhist-saffron font-bold uppercase tracking-widest text-xs">Modalidades disponibles</span>
                      <h2 className="text-3xl sm:text-4xl font-bold font-serif text-buddhist-maroon">Masajes principales en Talca</h2>
                      <div className="w-20 h-1 bg-buddhist-gold mx-auto rounded-full"></div>
                      <p className="text-buddhist-750 font-light">
                          Tarifas por cada 60 minutos. El Relajante Nirvana de 90 minutos cuesta $45.000. Traslado no incluido; se cotiza según tu sector. Abre cada ficha para ver el procedimiento orientativo.
                      </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3" aria-label="Tarjetas de masajes principales">
                      <article className="flex h-full flex-col rounded-2xl border border-buddhist-200 bg-buddhist-100 p-6 text-center shadow-md card-hover">
                          <div className="mb-5 flex flex-col items-center justify-center gap-3">
                              <span className="feature-icon" aria-hidden="true"><i className="fa-solid fa-leaf" aria-hidden="true"></i></span>
                              <span className="rounded-full bg-buddhist-50 px-3 py-1.5 text-center text-xs font-semibold text-buddhist-maroon">$30.000 por 60 min · sesión de 60–90 min</span>
                          </div>
                          <h3 className="font-serif text-lg font-bold text-buddhist-maroon">Masaje Relajante Nirvana / Sueco</h3>
                          <p className="mt-3 flex-grow text-sm leading-relaxed text-buddhist-750">Pases largos, amasamiento y maniobras suaves para una experiencia enfocada en la relajación.</p>
                          <details className="mt-4 text-sm text-buddhist-750">
                              <summary className="min-h-11 flex cursor-pointer items-center justify-center font-semibold text-buddhist-maroon">Ver procedimiento orientativo</summary>
                              <p className="mt-2 leading-relaxed">La sesión suele combinar pases largos, amasamientos y fricciones suaves. Se inicia con movimientos amplios y puede dedicar más tiempo a las zonas que indiques. El ritmo y la presión se ajustan a tu comodidad.</p>
                          </details>

                          <button type="button" onClick={() => onOpenBooking("Masaje Relajante Nirvana")} className="saffron-gradient mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 py-2 font-semibold text-buddhist-coffee shadow">Consultar esta modalidad</button>
                      </article>
                      <article className="flex h-full flex-col rounded-2xl border border-buddhist-200 bg-buddhist-100 p-6 text-center shadow-md card-hover">
                          <div className="mb-5 flex flex-col items-center justify-center gap-3">
                              <span className="feature-icon" aria-hidden="true"><i className="fa-solid fa-hands" aria-hidden="true"></i></span>
                              <span className="rounded-full bg-buddhist-50 px-3 py-1.5 text-center text-xs font-semibold text-buddhist-maroon">$28.000 por 60 min</span>
                          </div>
                          <h3 className="font-serif text-lg font-bold text-buddhist-maroon">Masaje Descontracturante</h3>
                          <p className="mt-3 flex-grow text-sm leading-relaxed text-buddhist-750">Presión focalizada en zonas de tensión percibida; la intensidad se adapta a tu tolerancia. Comenta molestias o sensibilidad antes de coordinar.</p>
                          <details className="mt-4 text-sm text-buddhist-750">
                              <summary className="min-h-11 flex cursor-pointer items-center justify-center font-semibold text-buddhist-maroon">Ver procedimiento orientativo</summary>
                              <p className="mt-2 leading-relaxed">Primero se conversa sobre las zonas a trabajar y la presión que te resulta cómoda. Luego se aplican maniobras manuales graduales y focalizadas, como amasamientos y compresiones, con pausas para revisar cómo se siente la intensidad.</p>
                          </details>

                          <button type="button" onClick={() => onOpenBooking("Masaje Descontracturante")} className="saffron-gradient mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 py-2 font-semibold text-buddhist-coffee shadow">Consultar esta modalidad</button>
                      </article>
                      <article className="flex h-full flex-col rounded-2xl border border-buddhist-200 bg-buddhist-100 p-6 text-center shadow-md card-hover">
                          <div className="mb-5 flex flex-col items-center justify-center gap-3">
                              <span className="feature-icon" aria-hidden="true"><i className="fa-solid fa-spa" aria-hidden="true"></i></span>
                              <span className="rounded-full bg-buddhist-50 px-3 py-1.5 text-center text-xs font-semibold text-buddhist-maroon">$30.000 por 60 min · duración a consultar</span>
                          </div>
                          <h3 className="font-serif text-lg font-bold text-buddhist-maroon">Masaje Reductivo</h3>
                          <p className="mt-3 flex-grow text-sm leading-relaxed text-buddhist-750">Consulta con Nanai sobre las maniobras, las zonas de interés y los detalles de esta modalidad antes de agendar.</p>
                          <details className="mt-4 text-sm text-buddhist-750">
                              <summary className="min-h-11 flex cursor-pointer items-center justify-center font-semibold text-buddhist-maroon">Ver procedimiento orientativo</summary>
                              <p className="mt-2 leading-relaxed">Se acuerdan las áreas de interés y los límites de presión. El procedimiento puede combinar pases, fricciones y amasamientos manuales en las zonas seleccionadas. No se plantea como método para bajar de peso; consulta los detalles antes de reservar.</p>
                          </details>

                          <button type="button" onClick={() => onOpenBooking("Masaje Reductivo")} className="saffron-gradient mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 py-2 font-semibold text-buddhist-coffee shadow">Consultar esta modalidad</button>
                      </article>
                      <article className="flex h-full flex-col rounded-2xl border border-buddhist-200 bg-buddhist-100 p-6 text-center shadow-md card-hover">
                          <div className="mb-5 flex flex-col items-center justify-center gap-3">
                              <span className="feature-icon" aria-hidden="true"><i className="fa-solid fa-hand-sparkles" aria-hidden="true"></i></span>
                              <span className="rounded-full bg-buddhist-50 px-3 py-1.5 text-center text-xs font-semibold text-buddhist-maroon">$35.000 por 60 min · duración a consultar</span>
                          </div>
                          <h3 className="font-serif text-lg font-bold text-buddhist-maroon">Tejido profundo (Deep Tissue)</h3>
                          <p className="mt-3 flex-grow text-sm leading-relaxed text-buddhist-750">Movimientos lentos y presión firme focalizada sobre tejidos blandos; la intensidad se adapta a tu comodidad.</p>
                          <details className="mt-4 text-sm text-buddhist-750">
                              <summary className="min-h-11 flex cursor-pointer items-center justify-center font-semibold text-buddhist-maroon">Ver procedimiento orientativo</summary>
                              <p className="mt-2 leading-relaxed">Se emplean pases lentos y presión progresiva sobre tejidos blandos o grupos musculares seleccionados. La intensidad se conversa y puede reducirse o cambiarse en cualquier momento si no resulta cómoda.</p>
                          </details>

                          <button type="button" onClick={() => onOpenBooking("Masaje de tejido profundo (Deep Tissue)")} className="saffron-gradient mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 py-2 font-semibold text-buddhist-coffee shadow">Consultar esta modalidad</button>
                      </article>
                      <article className="flex h-full flex-col rounded-2xl border border-buddhist-200 bg-buddhist-100 p-6 text-center shadow-md card-hover">
                          <div className="mb-5 flex flex-col items-center justify-center gap-3">
                              <span className="feature-icon" aria-hidden="true"><i className="fa-solid fa-hand-holding-medical" aria-hidden="true"></i></span>
                              <span className="rounded-full bg-buddhist-50 px-3 py-1.5 text-center text-xs font-semibold text-buddhist-maroon">$35.000 por 60 min · duración a consultar</span>
                          </div>
                          <h3 className="font-serif text-lg font-bold text-buddhist-maroon">Liberación miofascial</h3>
                          <p className="mt-3 flex-grow text-sm leading-relaxed text-buddhist-750">Presión suave y sostenida sobre tejidos blandos y fascia. La respuesta puede variar entre personas.</p>
                          <details className="mt-4 text-sm text-buddhist-750">
                              <summary className="min-h-11 flex cursor-pointer items-center justify-center font-semibold text-buddhist-maroon">Ver procedimiento orientativo</summary>
                              <p className="mt-2 leading-relaxed">Se utiliza contacto lento y presión suave sostenida sobre tejidos blandos, con liberación gradual y ajustes según la sensibilidad. La intensidad debe mantenerse dentro de una sensación tolerable, no de dolor agudo.</p>
                          </details>

                          <button type="button" onClick={() => onOpenBooking("Liberación miofascial")} className="saffron-gradient mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 py-2 font-semibold text-buddhist-coffee shadow">Consultar esta modalidad</button>
                      </article>
                      <article className="flex h-full flex-col rounded-2xl border border-buddhist-200 bg-buddhist-100 p-6 text-center shadow-md card-hover">
                          <div className="mb-5 flex flex-col items-center justify-center gap-3">
                              <span className="feature-icon" aria-hidden="true"><i className="fa-solid fa-bullseye" aria-hidden="true"></i></span>
                              <span className="rounded-full bg-buddhist-50 px-3 py-1.5 text-center text-xs font-semibold text-buddhist-maroon">$35.000 por 60 min · duración a consultar</span>
                          </div>
                          <h3 className="font-serif text-lg font-bold text-buddhist-maroon">Puntos gatillo (Trigger Point)</h3>
                          <p className="mt-3 flex-grow text-sm leading-relaxed text-buddhist-750">Presión gradual y localizada en zonas de tensión muscular percibida; no constituye un diagnóstico.</p>
                          <details className="mt-4 text-sm text-buddhist-750">
                              <summary className="min-h-11 flex cursor-pointer items-center justify-center font-semibold text-buddhist-maroon">Ver procedimiento orientativo</summary>
                              <p className="mt-2 leading-relaxed">Se trabaja sobre puntos o zonas de tensión que indiques, aplicando presión localizada de forma progresiva y por intervalos breves, con pausas para revisar la sensación. Es una descripción de masaje, no un diagnóstico.</p>
                          </details>

                          <button type="button" onClick={() => onOpenBooking("Terapia de puntos gatillo (Trigger Point)")} className="saffron-gradient mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 py-2 font-semibold text-buddhist-coffee shadow">Consultar esta modalidad</button>
                      </article>
                      <article className="flex h-full flex-col rounded-2xl border border-buddhist-200 bg-buddhist-100 p-6 text-center shadow-md card-hover">
                          <div className="mb-5 flex flex-col items-center justify-center gap-3">
                              <span className="feature-icon" aria-hidden="true"><i className="fa-solid fa-person-running" aria-hidden="true"></i></span>
                              <span className="rounded-full bg-buddhist-50 px-3 py-1.5 text-center text-xs font-semibold text-buddhist-maroon">$32.000 por 60 min · duración a consultar</span>
                          </div>
                          <h3 className="font-serif text-lg font-bold text-buddhist-maroon">Deportivo precompetitivo</h3>
                          <p className="mt-3 flex-grow text-sm leading-relaxed text-buddhist-750">Masaje antes de la actividad física, orientado a acompañar la sensación de preparación; no sustituye el calentamiento.</p>
                          <details className="mt-4 text-sm text-buddhist-750">
                              <summary className="min-h-11 flex cursor-pointer items-center justify-center font-semibold text-buddhist-maroon">Ver procedimiento orientativo</summary>
                              <p className="mt-2 leading-relaxed">Se acuerdan los grupos musculares y el momento de la actividad. Puede incluir pases dinámicos, compresiones moderadas y movilidad cómoda según lo que converses. No reemplaza el calentamiento ni la preparación deportiva.</p>
                          </details>

                          <button type="button" onClick={() => onOpenBooking("Masaje deportivo precompetitivo")} className="saffron-gradient mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 py-2 font-semibold text-buddhist-coffee shadow">Consultar esta modalidad</button>
                      </article>
                      <article className="flex h-full flex-col rounded-2xl border border-buddhist-200 bg-buddhist-100 p-6 text-center shadow-md card-hover">
                          <div className="mb-5 flex flex-col items-center justify-center gap-3">
                              <span className="feature-icon" aria-hidden="true"><i className="fa-solid fa-heart-pulse" aria-hidden="true"></i></span>
                              <span className="rounded-full bg-buddhist-50 px-3 py-1.5 text-center text-xs font-semibold text-buddhist-maroon">$30.000 por 60 min · duración a consultar</span>
                          </div>
                          <h3 className="font-serif text-lg font-bold text-buddhist-maroon">Deportivo postcompetitivo o de descarga</h3>
                          <p className="mt-3 flex-grow text-sm leading-relaxed text-buddhist-750">Masaje manual después del ejercicio, orientado al bienestar y a una posible sensación temporal de menor tensión.</p>
                          <details className="mt-4 text-sm text-buddhist-750">
                              <summary className="min-h-11 flex cursor-pointer items-center justify-center font-semibold text-buddhist-maroon">Ver procedimiento orientativo</summary>
                              <p className="mt-2 leading-relaxed">Después de la actividad se pueden usar pases amplios y compresiones de intensidad cómoda en las zonas que señales. La sesión se adapta a tu tolerancia; no promete acelerar la recuperación ni tratar lesiones.</p>
                          </details>

                          <button type="button" onClick={() => onOpenBooking("Masaje deportivo postcompetitivo o de descarga")} className="saffron-gradient mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 py-2 font-semibold text-buddhist-coffee shadow">Consultar esta modalidad</button>
                      </article>
                      <article className="flex h-full flex-col rounded-2xl border border-buddhist-200 bg-buddhist-100 p-6 text-center shadow-md card-hover">
                          <div className="mb-5 flex flex-col items-center justify-center gap-3">
                              <span className="feature-icon" aria-hidden="true"><i className="fa-solid fa-dumbbell" aria-hidden="true"></i></span>
                              <span className="rounded-full bg-buddhist-50 px-3 py-1.5 text-center text-xs font-semibold text-buddhist-maroon">$30.000 por 60 min · duración a consultar</span>
                          </div>
                          <h3 className="font-serif text-lg font-bold text-buddhist-maroon">Deportivo de mantenimiento</h3>
                          <p className="mt-3 flex-grow text-sm leading-relaxed text-buddhist-750">Enfoque de comodidad y relajación asociado al entrenamiento; no se presenta como prevención de lesiones.</p>
                          <details className="mt-4 text-sm text-buddhist-750">
                              <summary className="min-h-11 flex cursor-pointer items-center justify-center font-semibold text-buddhist-maroon">Ver procedimiento orientativo</summary>
                              <p className="mt-2 leading-relaxed">Se conversa sobre tu rutina y las zonas que quieres priorizar. El trabajo puede combinar pases, amasamientos y presión moderada, con ajustes de comodidad. No reemplaza rehabilitación ni garantiza prevenir lesiones.</p>
                          </details>

                          <button type="button" onClick={() => onOpenBooking("Masaje deportivo de mantenimiento")} className="saffron-gradient mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 py-2 font-semibold text-buddhist-coffee shadow">Consultar esta modalidad</button>
                      </article>
                      <article className="flex h-full flex-col rounded-2xl border border-buddhist-200 bg-buddhist-100 p-6 text-center shadow-md card-hover">
                          <div className="mb-5 flex flex-col items-center justify-center gap-3">
                              <span className="feature-icon" aria-hidden="true"><i className="fa-solid fa-water" aria-hidden="true"></i></span>
                              <span className="rounded-full bg-buddhist-50 px-3 py-1.5 text-center text-xs font-semibold text-buddhist-maroon">$32.000 por 60 min · duración a consultar</span>
                          </div>
                          <h3 className="font-serif text-lg font-bold text-buddhist-maroon">Drenaje linfático manual (DLM)</h3>
                          <p className="mt-3 flex-grow text-sm leading-relaxed text-buddhist-750">Técnica de movimientos suaves y rítmicos sobre la piel; no es una desintoxicación ni un tratamiento médico. Para edema o recuperación posoperatoria, requiere evaluación e indicación o confirmación de un profesional de salud.</p>
                          <details className="mt-4 text-sm text-buddhist-750">
                              <summary className="min-h-11 flex cursor-pointer items-center justify-center font-semibold text-buddhist-maroon">Ver procedimiento orientativo</summary>
                              <p className="mt-2 leading-relaxed">Consiste en movimientos superficiales, muy suaves y rítmicos, siguiendo una secuencia manual; no es un masaje de presión profunda ni una “desintoxicación”. Si consultas por edema o recuperación posoperatoria, requiere evaluación e indicación o confirmación de un profesional de salud.</p>
                          </details>

                          <button type="button" onClick={() => onOpenBooking("Drenaje linfático manual (DLM)")} className="saffron-gradient mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 py-2 font-semibold text-buddhist-coffee shadow">Consultar esta modalidad</button>
                      </article>
                      <article className="flex h-full flex-col rounded-2xl border border-buddhist-200 bg-buddhist-100 p-6 text-center shadow-md card-hover">
                          <div className="mb-5 flex flex-col items-center justify-center gap-3">
                              <span className="feature-icon" aria-hidden="true"><i className="fa-solid fa-person-walking" aria-hidden="true"></i></span>
                              <span className="rounded-full bg-buddhist-50 px-3 py-1.5 text-center text-xs font-semibold text-buddhist-maroon">$30.000 por 60 min · duración a consultar</span>
                          </div>
                          <h3 className="font-serif text-lg font-bold text-buddhist-maroon">Bienestar en piernas</h3>
                          <p className="mt-3 flex-grow text-sm leading-relaxed text-buddhist-750">Maniobras suaves ascendentes para una sensación de descanso en piernas cansadas; no trata problemas venosos ni edema.</p>
                          <details className="mt-4 text-sm text-buddhist-750">
                              <summary className="min-h-11 flex cursor-pointer items-center justify-center font-semibold text-buddhist-maroon">Ver procedimiento orientativo</summary>
                              <p className="mt-2 leading-relaxed">Se realizan pases lentos y suaves desde los tobillos hacia la parte alta de las piernas, con presión cómoda y sin maniobras dolorosas. Es una modalidad de bienestar; no trata edema ni problemas venosos.</p>
                          </details>

                          <button type="button" onClick={() => onOpenBooking("Masaje de bienestar en piernas")} className="saffron-gradient mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 py-2 font-semibold text-buddhist-coffee shadow">Consultar esta modalidad</button>
                      </article>
                  </div>
              </div>
          </section>





          <section id="regala-un-nanai" className="py-16 bg-buddhist-100/70 border-y border-buddhist-200" aria-labelledby="gift-title">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
                      <span className="text-buddhist-saffron font-bold uppercase tracking-widest text-xs">Una pausa que se puede regalar</span>
                      <h2 id="gift-title" className="text-3xl sm:text-4xl font-bold font-serif text-buddhist-maroon">Regala un Nanai</h2>
                      <p className="text-buddhist-750">Para cumpleaños, aniversarios o porque sí. Consulta opciones digitales y packs para las modalidades de masaje.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <article className="bg-buddhist-50 rounded-2xl border border-buddhist-gold/40 p-7 sm:p-8 shadow-sm text-center space-y-4 card-hover">
                          <div className="w-14 h-14 mx-auto rounded-2xl buddhist-gradient flex items-center justify-center text-buddhist-gold text-xl shadow-md" aria-hidden="true"><i className="fa-solid fa-gift" aria-hidden="true"></i></div>
                          <h3 className="font-serif font-bold text-xl text-buddhist-maroon">Gift card digital</h3>
                          <p className="text-sm text-buddhist-750 leading-relaxed">Un detalle listo para regalar. Consulta si puede destinarse a la modalidad que elijas, además del monto, vigencia, forma de entrega digital y condiciones.</p>
                          <a href="https://wa.me/56989878687?text=Hola%20Nanai%2C%20quiero%20consultar%20por%20una%20gift%20card%20digital.%20%C2%BFQu%C3%A9%20modalidades%20admite%20y%20qu%C3%A9%20valores%2C%20vigencia%2C%20entrega%20y%20condiciones%20tiene%3F" target="_blank" rel="noopener noreferrer" className="saffron-gradient min-h-11 inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-buddhist-coffee shadow" aria-label="Consultar gift card digital por WhatsApp">Consultar gift card</a>
                      </article>
                      <article className="bg-buddhist-50 rounded-2xl border border-buddhist-200 p-7 sm:p-8 shadow-sm text-center space-y-4 card-hover">
                          <div className="w-14 h-14 mx-auto rounded-2xl buddhist-gradient flex items-center justify-center text-buddhist-gold text-xl shadow-md" aria-hidden="true"><i className="fa-solid fa-layer-group" aria-hidden="true"></i></div>
                          <h3 className="font-serif font-bold text-xl text-buddhist-maroon">Packs de 3 o 5 sesiones</h3>
                          <p className="text-sm text-buddhist-750 leading-relaxed">Consulta si las sesiones pueden combinarse entre masaje relajante, descontracturante, deportivo u otras modalidades, y pide el valor total, vigencia, disponibilidad y condiciones.</p>
                          <a href="https://wa.me/56989878687?text=Hola%20Nanai%2C%20quiero%20consultar%20packs%20de%203%20o%205%20sesiones%20para%20las%20modalidades%20de%20masaje.%20%C2%BFSe%20pueden%20combinar%20y%20cu%C3%A1les%20son%20sus%20valores%2C%20vigencia%20y%20condiciones%3F" target="_blank" rel="noopener noreferrer" className="saffron-gradient min-h-11 inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-buddhist-coffee shadow" aria-label="Consultar packs de 3 o 5 sesiones por WhatsApp">Consultar packs</a>
                      </article>
                  </div>
                  <p className="mt-6 text-center text-xs leading-relaxed text-buddhist-750">Modalidades elegibles, valor, vigencia, entrega y condiciones se confirman antes de comprar. No todas las técnicas necesariamente comparten duración o precio.</p>
              </div>
          </section>


          <section id="incluye" className="py-20 bg-buddhist-50" aria-labelledby="incluye-title">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
                      <span className="text-buddhist-saffron font-bold uppercase tracking-widest text-xs">Atención a domicilio</span>
                      <h2 id="incluye-title" className="text-3xl sm:text-4xl font-bold font-serif text-buddhist-maroon">Lo que se coordina antes de la visita</h2>
                      <p className="text-buddhist-750">Nanai confirma contigo el equipo, los productos y los detalles prácticos antes de agendar.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      <article className="bg-buddhist-100 p-6 rounded-2xl shadow-sm border border-buddhist-200 text-center space-y-3"><span className="feature-icon"><i className="fa-solid fa-chair" aria-hidden="true"></i></span><h3 className="font-serif font-bold text-lg text-buddhist-maroon">Camilla o silla de masajes</h3><p className="text-sm text-buddhist-750">Indica si prefieres camilla o silla; Nanai te confirma la alternativa para tu espacio.</p></article>
                      <article className="bg-buddhist-100 p-6 rounded-2xl shadow-sm border border-buddhist-200 text-center space-y-3"><span className="feature-icon"><i className="fa-solid fa-droplet" aria-hidden="true"></i></span><h3 className="font-serif font-bold text-lg text-buddhist-maroon">Aceites</h3><p className="text-sm text-buddhist-750">Pregunta por aromas y aceites disponibles. Cuéntanos antes si tienes alergias o sensibilidad.</p></article>
                      <article className="bg-buddhist-100 p-6 rounded-2xl shadow-sm border border-buddhist-200 text-center space-y-3"><span className="feature-icon"><i className="fa-solid fa-sheet-plastic" aria-hidden="true"></i></span><h3 className="font-serif font-bold text-lg text-buddhist-maroon">Toallas</h3><p className="text-sm text-buddhist-750">Consulta qué productos y toallas estarán disponibles para tu sesión; se confirma al coordinar.</p></article>
                      <article className="bg-buddhist-100 p-6 rounded-2xl shadow-sm border border-buddhist-200 text-center space-y-3"><span className="feature-icon"><i className="fa-solid fa-music" aria-hidden="true"></i></span><h3 className="font-serif font-bold text-lg text-buddhist-maroon">Música o silencio</h3><p className="text-sm text-buddhist-750">Cuéntanos si prefieres música suave o silencio para acompañar tu pausa.</p></article>
                  </div>
                  <div className="mt-8 text-center">
                      <button type="button" onClick={() => onOpenBooking("")} className="saffron-gradient min-h-11 inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-buddhist-coffee shadow-lg">Compartir mis preferencias</button>
                  </div>
              </div>
          </section>


          <section id="beneficios" className="py-20 bg-buddhist-100/70 border-y border-buddhist-200" aria-labelledby="beneficios-title">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
                      <span className="text-buddhist-saffron font-bold uppercase tracking-widest text-xs">Qué puedes esperar</span>
                      <h2 id="beneficios-title" className="text-3xl sm:text-4xl font-bold font-serif text-buddhist-maroon">Beneficios posibles del masaje</h2>
                      <div className="w-20 h-1 bg-buddhist-gold mx-auto rounded-full"></div>
                      <p className="text-buddhist-750 font-light">La experiencia y sus efectos varían entre personas; el masaje no sustituye una evaluación ni un tratamiento de salud.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      <article className="bg-buddhist-50 p-8 rounded-2xl shadow-sm border border-buddhist-200 card-hover text-center space-y-4">
                          <div className="w-14 h-14 mx-auto rounded-2xl buddhist-gradient flex items-center justify-center text-buddhist-gold text-xl shadow-md" aria-hidden="true"><i className="fa-solid fa-spa" aria-hidden="true"></i></div>
                          <h3 className="font-serif font-bold text-xl text-buddhist-maroon">Relajación y descanso</h3>
                          <p className="text-sm text-buddhist-750 leading-relaxed">El masaje relajante puede ofrecer una pausa y una sensación de bienestar durante o después de la sesión.</p>
                      </article>
                      <article className="bg-buddhist-50 p-8 rounded-2xl shadow-sm border border-buddhist-200 card-hover text-center space-y-4">
                          <div className="w-14 h-14 mx-auto rounded-2xl buddhist-gradient flex items-center justify-center text-buddhist-gold text-xl shadow-md" aria-hidden="true"><i className="fa-solid fa-person-circle-check" aria-hidden="true"></i></div>
                          <h3 className="font-serif font-bold text-xl text-buddhist-maroon">Tensión muscular</h3>
                          <p className="text-sm text-buddhist-750 leading-relaxed">Algunas personas consultan por molestias o tensión en cuello y hombros. Si hay alivio, puede ser temporal y varía según la persona.</p>
                      </article>
                      <article className="bg-buddhist-50 p-8 rounded-2xl shadow-sm border border-buddhist-200 card-hover text-center space-y-4">
                          <div className="w-14 h-14 mx-auto rounded-2xl buddhist-gradient flex items-center justify-center text-buddhist-gold text-xl shadow-md" aria-hidden="true"><i className="fa-solid fa-comments" aria-hidden="true"></i></div>
                          <h3 className="font-serif font-bold text-xl text-buddhist-maroon">Una sesión conversada</h3>
                          <p className="text-sm text-buddhist-750 leading-relaxed">Puedes comunicar la presión que prefieres y las zonas que deseas evitar; también puedes pedir un ajuste o detener la sesión.</p>
                      </article>
                  </div>
              </div>
          </section>


          <section id="preguntas-frecuentes" className="py-20 bg-buddhist-100/70 border-y border-buddhist-200" aria-labelledby="faq-title">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
                      <span className="text-buddhist-saffron font-bold uppercase tracking-widest text-xs">Antes de agendar</span>
                      <h2 id="faq-title" className="text-3xl sm:text-4xl font-bold font-serif text-buddhist-maroon">Preguntas frecuentes</h2>
                      <div className="w-20 h-1 bg-buddhist-gold mx-auto rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                      <details className="bg-buddhist-100 p-5 sm:p-6 rounded-2xl border border-buddhist-200 shadow-sm text-center"><summary className="cursor-pointer min-h-11 flex items-center justify-center font-serif font-bold text-buddhist-maroon">¿Qué sectores atienden y cómo confirman mi ubicación?</summary><p className="text-sm text-buddhist-750 leading-relaxed mt-3 max-w-3xl mx-auto">La atención se coordina en Talca. Escribe solo tu sector en el formulario; la cobertura, el traslado y la disponibilidad se confirman por WhatsApp antes de reservar. La dirección exacta se coordina después, si es necesaria.</p></details>
                      <details className="bg-buddhist-100 p-5 sm:p-6 rounded-2xl border border-buddhist-200 shadow-sm text-center"><summary className="cursor-pointer min-h-11 flex items-center justify-center font-serif font-bold text-buddhist-maroon">¿Cuánto dura cada masaje?</summary><p className="text-sm text-buddhist-750 leading-relaxed mt-3 max-w-3xl mx-auto">Las tarifas publicadas corresponden a cada 60 minutos. El Relajante Nirvana dura entre 60 y 90 minutos; una sesión de 90 minutos cuesta $45.000. El Descontracturante dura aproximadamente 60 minutos; consulta la duración total de las demás modalidades.</p></details>
                      <details className="bg-buddhist-100 p-5 sm:p-6 rounded-2xl border border-buddhist-200 shadow-sm text-center"><summary className="cursor-pointer min-h-11 flex items-center justify-center font-serif font-bold text-buddhist-maroon">¿Qué información conviene avisar antes de la visita?</summary><p className="text-sm text-buddhist-750 leading-relaxed mt-3 max-w-3xl mx-auto">Comenta alergias o sensibilidad a productos y prepara un espacio despejado para el equipo. Comparte solo lo necesario para coordinar.</p></details>
                      <details className="bg-buddhist-100 p-5 sm:p-6 rounded-2xl border border-buddhist-200 shadow-sm text-center"><summary className="cursor-pointer min-h-11 flex items-center justify-center font-serif font-bold text-buddhist-maroon">¿Cómo preparo el espacio en mi hogar?</summary><p className="text-sm text-buddhist-750 leading-relaxed mt-3 max-w-3xl mx-auto">Deja despejada una zona adecuada para instalar el equipo. Confirma con Nanai las necesidades de espacio y comenta cualquier preferencia práctica.</p></details>
                      <details className="bg-buddhist-100 p-5 sm:p-6 rounded-2xl border border-buddhist-200 shadow-sm text-center"><summary className="cursor-pointer min-h-11 flex items-center justify-center font-serif font-bold text-buddhist-maroon">¿Cómo reservo y cuándo queda confirmada la hora?</summary><p className="text-sm text-buddhist-750 leading-relaxed mt-3 max-w-3xl mx-auto">Puedes escribir por WhatsApp o completar el formulario con el servicio y, si quieres, un día y horario preferidos. El formulario prepara un mensaje que debes enviar desde WhatsApp. Las preferencias no reservan una hora: Nanai confirma la disponibilidad por respuesta directa.</p></details>
                      <details className="bg-buddhist-100 p-5 sm:p-6 rounded-2xl border border-buddhist-200 shadow-sm text-center"><summary className="cursor-pointer min-h-11 flex items-center justify-center font-serif font-bold text-buddhist-maroon">¿Qué hago si estoy embarazada, tengo una lesión o una condición de salud?</summary><p className="text-sm text-buddhist-750 leading-relaxed mt-3 max-w-3xl mx-auto">Coméntalo antes de coordinar y, si tienes dudas sobre si el masaje es apropiado, consulta a un profesional de salud. Puedes pedir un ajuste o detener la sesión en cualquier momento. <a className="underline" href="#salud-y-seguridad">Consulta la información de salud y seguridad</a>.</p></details>
                      <details className="bg-buddhist-100 p-5 sm:p-6 rounded-2xl border border-buddhist-200 shadow-sm text-center"><summary className="cursor-pointer min-h-11 flex items-center justify-center font-serif font-bold text-buddhist-maroon">¿Cuál es el valor y qué formas de pago aceptan?</summary><p className="text-sm text-buddhist-750 leading-relaxed mt-3 max-w-3xl mx-auto">Las tarifas son por cada 60 minutos. El traslado no está incluido y se cotiza según tu sector; consulta los medios de pago antes de confirmar.</p></details>
                      <details className="bg-buddhist-100 p-5 sm:p-6 rounded-2xl border border-buddhist-200 shadow-sm text-center"><summary className="cursor-pointer min-h-11 flex items-center justify-center font-serif font-bold text-buddhist-maroon">¿Cuál es la política de cancelación o reprogramación?</summary><p className="text-sm text-buddhist-750 leading-relaxed mt-3 max-w-3xl mx-auto">Si necesitas cambiar o cancelar, avisa con la mayor anticipación posible por WhatsApp. Idealmente con al menos 12 horas de anticipación para facilitar la reorganización de la agenda. Las condiciones definitivas se confirman al coordinar la visita. En caso de imprevisto de último minuto, escribe lo antes posible para buscar una solución.</p></details>
                      <details className="bg-buddhist-100 p-5 sm:p-6 rounded-2xl border border-buddhist-200 shadow-sm text-center"><summary className="cursor-pointer min-h-11 flex items-center justify-center font-serif font-bold text-buddhist-maroon">¿Puedo solicitar continuidad con el mismo profesional?</summary><p className="text-sm text-buddhist-750 leading-relaxed mt-3 max-w-3xl mx-auto">Puedes solicitarlo al hacer la consulta. La continuidad depende de la disponibilidad y debe quedar confirmada antes de reservar.</p></details>

                      <details id="salud-y-seguridad" className="bg-buddhist-100 p-5 sm:p-6 rounded-2xl border border-buddhist-gold/40 shadow-sm text-center">
                          <summary className="cursor-pointer min-h-11 flex items-center justify-center font-serif font-bold text-buddhist-maroon">Información de salud y seguridad</summary>
                          <div className="text-sm text-buddhist-750 leading-relaxed mt-3 max-w-3xl mx-auto space-y-3">
                              <p>El masaje puede sentirse distinto para cada persona; no diagnostica ni reemplaza atención de salud. Si el dolor es intenso o persistente, apareció después de una lesión o viene acompañado de otros síntomas, consulta con un profesional de salud. Informa a Nanai sobre lesiones, embarazo, enfermedades, medicamentos, alergias o sensibilidad a productos antes de coordinar.</p>
                              <p className="text-xs">Fuentes: <a className="underline hover:text-buddhist-maroon" href="https://www.nccih.nih.gov/health/massage-therapy-what-you-need-to-know" target="_blank" rel="noopener noreferrer">NCCIH, información sobre masaje y dolor</a>; <a className="underline hover:text-buddhist-maroon" href="https://www.nccih.nih.gov/health/low-back-pain-and-complementary-health-approaches-what-you-need-to-know" target="_blank" rel="noopener noreferrer">NCCIH, dolor lumbar y enfoques complementarios</a>; <a className="underline hover:text-buddhist-maroon" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3950594/" target="_blank" rel="noopener noreferrer">revisión sistemática sobre masaje y dolor cervical</a>; <a className="underline hover:text-buddhist-maroon" href="https://www.nhs.uk/conditions/lymphoedema/treatment/" target="_blank" rel="noopener noreferrer">NHS, tratamiento del linfedema</a>; <a className="underline hover:text-buddhist-maroon" href="https://www.nhs.uk/conditions/deep-vein-thrombosis-dvt/" target="_blank" rel="noopener noreferrer">NHS, trombosis venosa profunda</a>.</p>
                          </div>
                      </details>
      </div>
              </div>
          </section>


          <section className="py-16 bg-buddhist-50" aria-labelledby="consulta-title">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
                  <span className="text-buddhist-saffron font-bold uppercase tracking-widest text-xs">Consulta de agenda</span>
                  <h2 id="consulta-title" className="text-3xl sm:text-4xl font-bold font-serif text-buddhist-maroon">¿Quieres consultar disponibilidad?</h2>
                  <p className="text-buddhist-750">Indica qué modalidad te interesa y tu sector; Nanai te confirmará los detalles antes de coordinar.</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a href="https://wa.me/56989878687?text=Hola%20Nanai%2C%20quisiera%20consultar%20por%20disponibilidad%20en%20Talca." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto min-h-11 inline-flex items-center justify-center gap-2 rounded-full saffron-gradient px-6 py-3 font-semibold text-buddhist-coffee shadow"><i className="fa-brands fa-whatsapp" aria-hidden="true"></i> Consultar por WhatsApp</a>
                      <button type="button" onClick={() => onOpenBooking("")} className="w-full sm:w-auto min-h-11 rounded-full border-2 border-buddhist-maroon px-6 py-3 font-semibold text-buddhist-maroon hover:bg-buddhist-200">Completar formulario</button>
                  </div>
              </div>
          </section>

          <section id="opiniones-google" className="py-20 bg-buddhist-50" aria-labelledby="reviews-title">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
                      <span className="text-buddhist-saffron font-bold uppercase tracking-widest text-xs">Reseñas de clientes</span>
                      <h2 id="reviews-title" className="text-3xl sm:text-4xl font-bold font-serif text-buddhist-maroon">Opiniones en Google</h2>
                      <div className="w-20 h-1 bg-buddhist-gold mx-auto rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6">
                      <article className="bg-buddhist-100 p-7 rounded-2xl border border-buddhist-200 shadow-sm flex flex-col text-center">
                          <p className="text-buddhist-coffee text-xl tracking-widest" aria-hidden="true">★★★★★</p><span className="sr-only">5 de 5 estrellas</span>
                          <blockquote className="mt-4 text-buddhist-750 leading-relaxed">“Sumamente acogedor, comprensivo y la atención destaca por su profesionalismo y dedicación.”</blockquote>
                          <p className="mt-5 text-sm font-semibold text-buddhist-maroon">Carmen Gloria · <span className="font-normal">Google</span></p>
                      </article>
                      <article className="bg-buddhist-100 p-7 rounded-2xl border border-buddhist-200 shadow-sm flex flex-col text-center">
                          <p className="text-buddhist-coffee text-xl tracking-widest" aria-hidden="true">★★★★★</p><span className="sr-only">5 de 5 estrellas</span>
                          <blockquote className="mt-4 text-buddhist-750 leading-relaxed">“Excelente servicio”</blockquote>
                          <p className="mt-5 text-sm font-semibold text-buddhist-maroon">Fabian · <span className="font-normal">Google</span></p>
                      </article>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                      <a href="https://www.google.com/maps/place/Masajes+Nanai/@-35.4260086,-71.7362591,12z/data=!3m1!4b1!4m6!3m5!1s0x8ec2d0831bfd6357:0x18a60a3056a98d45!8m2!3d-35.4260366!4d-71.653858!16s%2Fg%2F11p2bhs9wx" target="_blank" rel="noopener noreferrer" className="min-h-11 inline-flex items-center justify-center rounded-full border-2 border-buddhist-maroon px-5 py-2 font-semibold text-buddhist-maroon hover:bg-buddhist-200">Ver opiniones en Google</a>
                      <a href="https://g.page/r/CUWNqVYwCqYYEAE/review" target="_blank" rel="noopener noreferrer" className="min-h-11 inline-flex items-center justify-center rounded-full saffron-gradient px-5 py-2 font-semibold text-buddhist-coffee">Dejar una reseña</a>
                  </div>
              </div>
          </section>

          </main>


          <footer id="contacto" className="buddhist-gradient text-buddhist-100 pt-16 pb-12 border-t border-buddhist-gold/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                      <div className="space-y-4">
                          <div className="flex items-center gap-3">
                              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-buddhist-saffron shadow-md">
                                  <img src="/assets/logo-nanai.svg" alt="" aria-hidden="true" width="44" height="44" className="h-10 w-10 object-contain" />
                              </span>
                              <span className="flex flex-col leading-none"><span className="font-serif text-xl font-bold tracking-wider text-white">NANAI</span><span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-buddhist-200">Masajes a Domicilio</span></span>
                          </div>
                          <p className="text-sm text-buddhist-200 leading-relaxed">Masajes de bienestar a domicilio en Talca.</p>
                      </div>
                      <div className="space-y-3">
                          <p className="font-serif font-bold text-buddhist-gold text-base">Explora</p>
                          <ul className="space-y-2 text-sm text-buddhist-200"><li><a href="#servicios" className="hover:text-white">Servicios</a></li><li><a href="#regala-un-nanai" className="hover:text-white">Regala un Nanai</a></li><li><a href="#opiniones-google" className="hover:text-white">Opiniones en Google</a></li><li><a href="#salud-y-seguridad" className="hover:text-white">Salud y seguridad</a></li><li><a href="#beneficios" className="hover:text-white">Beneficios</a></li><li><a href="#como-funciona" className="hover:text-white">Cómo funciona</a></li><li><a href="#preguntas-frecuentes" className="hover:text-white">Preguntas frecuentes</a></li></ul>
                      </div>
                      <div className="space-y-3">
                          <p className="font-serif font-bold text-buddhist-gold text-base">Consulta de agenda</p>
                          <p className="text-sm text-buddhist-200">WhatsApp es el canal principal. También puedes completar el formulario antes de abrirlo; la reserva queda pendiente hasta recibir confirmación.</p>
                          <div className="flex flex-wrap items-center gap-3">
                              <a href="https://wa.me/56989878687?text=Hola%20Nanai%2C%20quisiera%20consultar%20por%20disponibilidad%20en%20Talca." target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-buddhist-cream/10 px-4 py-2 text-sm font-semibold text-white hover:bg-buddhist-saffron hover:text-buddhist-coffee" aria-label="Consultar agenda de Nanai por WhatsApp al +56 9 8987 8687"><i className="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp</a>
                              <a href="tel:+56989878687" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-buddhist-cream/10 px-4 py-2 text-sm font-semibold text-white hover:bg-buddhist-saffron hover:text-buddhist-coffee" aria-label="Llamar al +56 9 8987 8687"><i className="fa-solid fa-phone" aria-hidden="true"></i> +56 9 8987 8687</a>
                              <a href="https://www.instagram.com/Ka0s/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-buddhist-cream/10 px-4 py-2 text-sm font-semibold text-white hover:bg-buddhist-saffron hover:text-buddhist-coffee" aria-label="Instagram @Ka0s"><i className="fa-brands fa-instagram" aria-hidden="true"></i> @Ka0s</a>
                              <a href="https://g.page/r/CUWNqVYwCqYYEAE/review" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-buddhist-cream/10 px-4 py-2 text-sm font-semibold text-white hover:bg-buddhist-saffron hover:text-buddhist-coffee" aria-label="Deja tu reseña en Google"><i className="fa-brands fa-google" aria-hidden="true"></i> Deja tu reseña en Google</a>
                          </div>
                          <button type="button" onClick={() => onOpenBooking("")} className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-buddhist-cream/10">Completar formulario</button>
                      </div>
                  </div>

                  <div className="border-t border-white/10 pt-8 text-center text-xs text-buddhist-300 font-light">
                      <p>&copy; 2026 Nanai Masajes a Domicilio. Todos los derechos reservados. Armonía en tu hogar.</p>

                  </div>
              </div>
          </footer>


          <a className={`whatsapp-fab ${whatsappAttention ? "is-attention" : ""}`} href="https://wa.me/56989878687?text=Hola%20Nanai%2C%20quisiera%20consultar%20por%20disponibilidad%20en%20Talca." target="_blank" rel="noopener noreferrer" aria-label="¿Dudas? Hablemos con Nanai por WhatsApp">
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              <span className="whatsapp-fab-label" aria-hidden="true">¿Dudas? Hablemos</span>
          </a>
      </div>
    </div>
  );
}

function BookingModal({ open, onClose, onSubmit, selectedService, onServiceChange }) {
  return (

        <div id="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title" aria-describedby="modal-subtitle" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 ${open ? "" : "hidden"}`}>
            <div onClick={(event) => event.stopPropagation()} className="bg-buddhist-50 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-buddhist-gold/30 relative transform transition-all">

                <div className="sticky top-0 z-10 -mb-11 flex justify-end bg-buddhist-50/95 pt-2">
                    <button type="button" aria-label="Cerrar formulario de reserva" onClick={onClose} className="min-w-11 min-h-11 inline-flex items-center justify-center rounded-full text-buddhist-750 hover:text-buddhist-maroon text-xl">
                        <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                    </button>
                </div>


                <div className="text-center space-y-2 mb-6">
                    <div className="w-12 h-12 rounded-full buddhist-gradient mx-auto flex items-center justify-center text-buddhist-gold text-lg shadow">
                        <i className="fa-solid fa-house-medical" aria-hidden="true"></i>
                    </div>
                    <h2 id="booking-title" className="font-serif font-bold text-2xl text-buddhist-maroon">Consulta de agenda</h2>
                    <p className="text-xs text-buddhist-750" id="modal-subtitle">Cuéntanos qué masaje buscas, tu sector y tus preferencias de equipo o ambiente. La fecha y el horario son solicitudes, no una reserva.</p>
                </div>


                <form id="booking-form" onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="client-name" className="block text-xs font-semibold text-buddhist-800 uppercase tracking-wider mb-1">Nombre</label>
                        <input type="text" id="client-name" name="name" autoComplete="name" required className="w-full min-h-11 px-4 py-3 rounded-xl border border-buddhist-200 bg-buddhist-cream text-sm text-buddhist-900" placeholder="Tu nombre"/>
                    </div>
                    <fieldset aria-describedby="service-help" className="space-y-2">
                        <legend className="block text-xs font-semibold text-buddhist-800 uppercase tracking-wider mb-2">Elige tu masaje</legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <label className="min-h-11 flex items-center gap-3 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="radio" name="service" value="Masaje Relajante Nirvana" checked={selectedService === "Masaje Relajante Nirvana"} onChange={() => onServiceChange("Masaje Relajante Nirvana")} required className="accent-buddhist-maroon"/> Masaje Relajante Nirvana</label>
                            <label className="min-h-11 flex items-center gap-3 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="radio" name="service" value="Masaje Descontracturante" checked={selectedService === "Masaje Descontracturante"} onChange={() => onServiceChange("Masaje Descontracturante")} className="accent-buddhist-maroon"/> Masaje Descontracturante</label>
                            <label className="min-h-11 flex items-center gap-3 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="radio" name="service" value="Masaje Reductivo" checked={selectedService === "Masaje Reductivo"} onChange={() => onServiceChange("Masaje Reductivo")} className="accent-buddhist-maroon"/> Masaje Reductivo</label>
                            <label className="min-h-11 flex items-center gap-3 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="radio" name="service" value="Masaje de tejido profundo (Deep Tissue)" checked={selectedService === "Masaje de tejido profundo (Deep Tissue)"} onChange={() => onServiceChange("Masaje de tejido profundo (Deep Tissue)")} className="accent-buddhist-maroon"/> Masaje de tejido profundo (Deep Tissue)</label>
                            <label className="min-h-11 flex items-center gap-3 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="radio" name="service" value="Liberación miofascial" checked={selectedService === "Liberación miofascial"} onChange={() => onServiceChange("Liberación miofascial")} className="accent-buddhist-maroon"/> Liberación miofascial</label>
                            <label className="min-h-11 flex items-center gap-3 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="radio" name="service" value="Terapia de puntos gatillo (Trigger Point)" checked={selectedService === "Terapia de puntos gatillo (Trigger Point)"} onChange={() => onServiceChange("Terapia de puntos gatillo (Trigger Point)")} className="accent-buddhist-maroon"/> Terapia de puntos gatillo (Trigger Point)</label>
                            <label className="min-h-11 flex items-center gap-3 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="radio" name="service" value="Masaje sueco" checked={selectedService === "Masaje sueco"} onChange={() => onServiceChange("Masaje sueco")} className="accent-buddhist-maroon"/> Masaje sueco</label>
                            <label className="min-h-11 flex items-center gap-3 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="radio" name="service" value="Masaje deportivo precompetitivo" checked={selectedService === "Masaje deportivo precompetitivo"} onChange={() => onServiceChange("Masaje deportivo precompetitivo")} className="accent-buddhist-maroon"/> Masaje deportivo precompetitivo</label>
                            <label className="min-h-11 flex items-center gap-3 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="radio" name="service" value="Masaje deportivo postcompetitivo o de descarga" checked={selectedService === "Masaje deportivo postcompetitivo o de descarga"} onChange={() => onServiceChange("Masaje deportivo postcompetitivo o de descarga")} className="accent-buddhist-maroon"/> Masaje deportivo postcompetitivo o de descarga</label>
                            <label className="min-h-11 flex items-center gap-3 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="radio" name="service" value="Masaje deportivo de mantenimiento" checked={selectedService === "Masaje deportivo de mantenimiento"} onChange={() => onServiceChange("Masaje deportivo de mantenimiento")} className="accent-buddhist-maroon"/> Masaje deportivo de mantenimiento</label>
                            <label className="min-h-11 flex items-center gap-3 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="radio" name="service" value="Drenaje linfático manual (DLM)" checked={selectedService === "Drenaje linfático manual (DLM)"} onChange={() => onServiceChange("Drenaje linfático manual (DLM)")} className="accent-buddhist-maroon"/> Drenaje linfático manual (DLM)</label>
                            <label className="min-h-11 flex items-center gap-3 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="radio" name="service" value="Masaje de bienestar en piernas" checked={selectedService === "Masaje de bienestar en piernas"} onChange={() => onServiceChange("Masaje de bienestar en piernas")} className="accent-buddhist-maroon"/> Masaje de bienestar en piernas</label>
                            <label className="min-h-11 flex items-center gap-3 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="radio" name="service" value="Consulta general" checked={selectedService === "Consulta general"} onChange={() => onServiceChange("Consulta general")} className="accent-buddhist-maroon"/> Aún no lo tengo definido</label>
                        </div>
                        <p id="service-help" className="text-xs text-buddhist-750">Las tarifas indicadas son por cada 60 minutos. El traslado no está incluido y se cotiza según tu sector. Consulta la duración total antes de coordinar.</p>
                    </fieldset>
                    <div>
                        <label htmlFor="client-sector" className="block text-xs font-semibold text-buddhist-800 uppercase tracking-wider mb-1">Sector</label>
                        <input type="text" id="client-sector" name="sector" autoComplete="off" required className="w-full min-h-11 px-4 py-3 rounded-xl border border-buddhist-200 bg-buddhist-cream text-sm text-buddhist-900" placeholder="Escribe solo tu sector"/>
                    </div>
                    <fieldset aria-describedby="equipment-help" className="space-y-2">
                        <legend className="block text-xs font-semibold text-buddhist-800 uppercase tracking-wider">¿Tienes preferencia de equipo? (opcional)</legend>
                        <div className="flex flex-wrap gap-2">
                            <label className="min-h-11 inline-flex items-center gap-2 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="radio" name="equipment" value="Camilla" className="accent-buddhist-maroon"/> Camilla</label>
                            <label className="min-h-11 inline-flex items-center gap-2 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="radio" name="equipment" value="Silla de masajes" className="accent-buddhist-maroon"/> Silla de masajes</label>
                            <label className="min-h-11 inline-flex items-center gap-2 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="radio" name="equipment" value="Sin preferencia" className="accent-buddhist-maroon"/> Sin preferencia</label>
                        </div>
                        <p id="equipment-help" className="text-xs text-buddhist-750">La opción queda sujeta a coordinación y al espacio disponible.</p>
                    </fieldset>
                    <fieldset className="space-y-2">
                        <legend className="block text-xs font-semibold text-buddhist-800 uppercase tracking-wider">¿Qué ambiente te gustaría? (opcional)</legend>
                        <div className="flex flex-wrap gap-2">
                            <label className="min-h-11 inline-flex items-center gap-2 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="checkbox" name="ambiente" value="Consultar aromas o aromaterapia" className="accent-buddhist-maroon"/> Aromas</label>
                            <label className="min-h-11 inline-flex items-center gap-2 rounded-xl border border-buddhist-200 bg-buddhist-cream px-3 py-2 text-sm text-buddhist-900"><input type="checkbox" name="ambiente" value="Música suave" className="accent-buddhist-maroon"/> Música suave</label>
                        </div>
                        <p className="text-xs text-buddhist-750">Son preferencias para consultar; Nanai confirmará las opciones disponibles.</p>
                    </fieldset>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="preferred-date" className="block text-xs font-semibold text-buddhist-800 uppercase tracking-wider mb-1">Día preferido (opcional)</label>
                            <input type="date" id="preferred-date" name="preferredDate" aria-describedby="booking-preferences-note" className="w-full min-h-11 px-4 py-3 rounded-xl border border-buddhist-200 bg-buddhist-cream text-sm text-buddhist-900"/>
                        </div>
                        <div>
                            <label htmlFor="preferred-time" className="block text-xs font-semibold text-buddhist-800 uppercase tracking-wider mb-1">Horario preferido (opcional)</label>
                            <input type="time" id="preferred-time" name="preferredTime" aria-describedby="booking-preferences-note" className="w-full min-h-11 px-4 py-3 rounded-xl border border-buddhist-200 bg-buddhist-cream text-sm text-buddhist-900"/>
                        </div>
                    </div>
                    <p id="booking-preferences-note" className="-mt-2 text-xs text-buddhist-750">El día y el horario son preferencias sujetas a disponibilidad; no reservan una hora.</p>
                    <div>
                        <label htmlFor="client-message" className="block text-xs font-semibold text-buddhist-800 uppercase tracking-wider mb-1">Consulta adicional (opcional)</label>
                        <textarea id="client-message" name="message" rows="3" className="w-full min-h-11 px-4 py-3 rounded-xl border border-buddhist-200 bg-buddhist-cream text-sm text-buddhist-900" placeholder="Cuéntanos alguna preferencia o duda…"></textarea>
                    </div>
                    <p className="text-xs leading-relaxed text-buddhist-750">Al continuar, se abrirá WhatsApp con los datos que ingresaste para que revises y envíes la consulta. Comparte solo la información necesaria para coordinar.</p>
                    <button type="submit" className="w-full saffron-gradient text-buddhist-coffee py-3 rounded-xl font-semibold text-sm shadow-lg shadow-buddhist-saffron/20 hover:opacity-95 transition-all mt-2">
                        Continuar a WhatsApp
                    </button>
                </form>
            </div>
        </div>


  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("Operación exitosa");
  const [whatsappAttention, setWhatsappAttention] = useState(false);
  const lastBookingTrigger = useRef(null);
  const toastTimer = useRef(null);

  const openBookingModal = (serviceName = "") => {
    lastBookingTrigger.current = document.activeElement;
    setSelectedService(serviceName === "Sesión General" ? "Consulta general" : serviceName);
    setMenuOpen(false);
    setBookingOpen(true);
  };

  const closeBookingModal = () => {
    setBookingOpen(false);
    setSelectedService("");
    const trigger = lastBookingTrigger.current;
    const focusTarget = trigger?.closest?.("#mobile-menu")
      ? document.getElementById("mobile-menu-btn")
      : trigger;
    window.setTimeout(() => focusTarget?.focus?.(), 0);
    lastBookingTrigger.current = null;
  };

  useEffect(() => {
    const dateField = document.getElementById("preferred-date");
    if (!dateField) return;
    const today = new Date();
    dateField.min = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, "0"),
      String(today.getDate()).padStart(2, "0"),
    ].join("-");
  }, []);

  useEffect(() => {
    if (!bookingOpen) return undefined;

    const shell = document.getElementById("site-shell");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (shell) {
      shell.inert = true;
      shell.setAttribute("aria-hidden", "true");
    }

    const focusFrame = window.requestAnimationFrame(() => {
      document.getElementById("client-name")?.focus();
    });
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeBookingModal();
        return;
      }
      if (event.key !== "Tab") return;

      const dialog = document.getElementById("booking-modal");
      const focusable = dialog?.querySelectorAll(
        "button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), a[href]",
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (shell) {
        shell.inert = false;
        shell.removeAttribute("aria-hidden");
      }
    };
  }, [bookingOpen]);

  useEffect(() => {
    let hintShown = false;
    let timer;
    const showScrollHint = () => {
      if (hintShown || window.scrollY < 280) return;
      hintShown = true;
      setWhatsappAttention(true);
      timer = window.setTimeout(() => setWhatsappAttention(false), 4200);
    };

    window.addEventListener("scroll", showScrollHint, { passive: true });
    return () => {
      window.removeEventListener("scroll", showScrollHint);
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const service = String(data.get("service") || "Consulta general");
    const sector = String(data.get("sector") || "").trim();
    const equipment = data.get("equipment");
    const ambience = data.getAll("ambiente");
    const preferredDate = data.get("preferredDate");
    const preferredTime = data.get("preferredTime");
    const message = String(data.get("message") || "").trim();

    const bodyLines = [
      `Hola Nanai, soy ${name}.`,
      `Servicio de interés: ${service}.`,
      `Mi sector es: ${sector}.`,
    ];
    if (equipment) bodyLines.push(`Preferencia de equipo: ${equipment} (por coordinar).`);
    if (ambience.length) {
      bodyLines.push(`Preferencias de ambiente: ${ambience.join(", ")} (por coordinar).`);
    }
    if (preferredDate) bodyLines.push(`Día preferido: ${preferredDate}.`);
    if (preferredTime) bodyLines.push(`Horario preferido: ${preferredTime}.`);
    if (message) bodyLines.push(`Consulta adicional: ${message}`);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bodyLines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
    event.currentTarget.reset();
    closeBookingModal();
    setToastMessage(
      "Tu mensaje quedó preparado en WhatsApp. Revísalo y envíalo para consultar; la hora solo queda confirmada cuando Nanai responda.",
    );
    setToastVisible(true);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToastVisible(false), 7000);
  };

  return (
    <>
      <SiteContent
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((current) => !current)}
        onMenuClose={() => setMenuOpen(false)}
        onOpenBooking={openBookingModal}
        toastVisible={toastVisible}
        toastMessage={toastMessage}
        whatsappAttention={whatsappAttention}
      />
      <BookingModal
        open={bookingOpen}
        onClose={closeBookingModal}
        onSubmit={handleBookingSubmit}
        selectedService={selectedService}
        onServiceChange={setSelectedService}
      />
    </>
  );
}
