'use strict';

// Interface text for every supported language. Business content (service
// names, about text, reviews) lives in each client's JSON file instead.
// Placeholders like {business} are filled in by t() in render.js.

module.exports = {
  en: {
    locale: 'en-IE',
    nav_services: 'Services', nav_about: 'About', nav_hours: 'Hours', nav_contact: 'Contact',
    book_now: 'Book now', call: 'Call',
    services_title: 'Services & prices', from: 'from', min: 'min',
    about_title: 'About us', reviews_title: 'What our clients say', gallery_title: 'Gallery',
    booking_title: 'Book an appointment',
    booking_intro_form: 'Choose a service and a time that suits you. We will confirm your appointment by message.',
    booking_intro_online: 'Pick your service and a free time slot online. It takes less than a minute.',
    booking_online_btn: 'Book online', booking_or: 'or send us a request',
    f_service: 'Service', f_date: 'Date', f_time: 'Preferred time', f_name: 'Your name',
    f_note: 'Anything else? (optional)', f_submit_wa: 'Send request via WhatsApp', f_submit_mail: 'Send request by email',
    msg_intro: 'Hi {business}! I would like to book an appointment.',
    msg_service: 'Service', msg_date: 'Date', msg_time: 'Time', msg_name: 'Name', msg_note: 'Note',
    or_call: 'Prefer to talk? Call us at',
    hours_title: 'Opening hours', open_now: 'Open now', closed_now: 'Closed now', closed: 'Closed',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    find_title: 'Find us', directions: 'Get directions', phone: 'Phone', email: 'Email',
    follow: 'Follow us on Instagram',
    legal_link: 'Legal notice & privacy', back: 'Back to the website',
    preview_banner: 'Preview concept. This is not the official website of {business}.',
    imprint_title: 'Legal notice', imprint_owner: 'Responsible for this website', vat: 'VAT ID', register: 'Registration',
    privacy_title: 'Privacy',
    privacy_text: [
      'This website does not use cookies, analytics or any other tracking.',
      'When you visit, our hosting provider ({host}) automatically processes technical data such as your IP address and browser type. This is necessary to deliver the website securely (Art. 6(1)(f) GDPR).',
      'If you contact us or request an appointment by phone, WhatsApp or email, we use the details you give us only to handle your request (Art. 6(1)(b) GDPR). WhatsApp is operated by WhatsApp Ireland Ltd.; its own privacy policy applies.',
      'You have the right to access, correct and delete your data, to restrict its processing, and to lodge a complaint with a data protection authority. To use these rights, contact the person responsible named above.'
    ]
  },

  de: {
    locale: 'de-DE',
    nav_services: 'Leistungen', nav_about: 'Über uns', nav_hours: 'Öffnungszeiten', nav_contact: 'Kontakt',
    book_now: 'Termin buchen', call: 'Anrufen',
    services_title: 'Leistungen & Preise', from: 'ab', min: 'Min.',
    about_title: 'Über uns', reviews_title: 'Das sagen unsere Kunden', gallery_title: 'Galerie',
    booking_title: 'Termin vereinbaren',
    booking_intro_form: 'Wähle eine Leistung und eine Uhrzeit, die dir passt. Wir bestätigen deinen Termin per Nachricht.',
    booking_intro_online: 'Wähle deine Leistung und einen freien Termin online. Das dauert keine Minute.',
    booking_online_btn: 'Online buchen', booking_or: 'oder schick uns eine Anfrage',
    f_service: 'Leistung', f_date: 'Datum', f_time: 'Wunschzeit', f_name: 'Dein Name',
    f_note: 'Noch etwas? (optional)', f_submit_wa: 'Anfrage per WhatsApp senden', f_submit_mail: 'Anfrage per E-Mail senden',
    msg_intro: 'Hallo {business}! Ich möchte gern einen Termin buchen.',
    msg_service: 'Leistung', msg_date: 'Datum', msg_time: 'Uhrzeit', msg_name: 'Name', msg_note: 'Anmerkung',
    or_call: 'Lieber telefonieren? Ruf uns an:',
    hours_title: 'Öffnungszeiten', open_now: 'Jetzt geöffnet', closed_now: 'Jetzt geschlossen', closed: 'Geschlossen',
    days: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
    find_title: 'So findest du uns', directions: 'Route planen', phone: 'Telefon', email: 'E-Mail',
    follow: 'Folge uns auf Instagram',
    legal_link: 'Impressum & Datenschutz', back: 'Zurück zur Website',
    preview_banner: 'Entwurf zur Vorschau. Dies ist nicht die offizielle Website von {business}.',
    imprint_title: 'Impressum', imprint_owner: 'Angaben gemäß § 5 DDG', vat: 'USt-IdNr.', register: 'Registereintrag',
    privacy_title: 'Datenschutz',
    privacy_text: [
      'Diese Website verwendet keine Cookies, keine Analyse-Tools und kein Tracking.',
      'Beim Aufruf verarbeitet unser Hosting-Anbieter ({host}) automatisch technische Daten wie deine IP-Adresse und deinen Browsertyp. Das ist nötig, um die Website sicher auszuliefern (Art. 6 Abs. 1 lit. f DSGVO).',
      'Wenn du uns per Telefon, WhatsApp oder E-Mail kontaktierst oder einen Termin anfragst, nutzen wir deine Angaben nur zur Bearbeitung deiner Anfrage (Art. 6 Abs. 1 lit. b DSGVO). WhatsApp wird von der WhatsApp Ireland Ltd. betrieben; es gilt deren Datenschutzerklärung.',
      'Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner Daten sowie auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde. Wende dich dazu an die oben genannte verantwortliche Person.'
    ]
  },

  fr: {
    locale: 'fr-FR',
    nav_services: 'Prestations', nav_about: 'À propos', nav_hours: 'Horaires', nav_contact: 'Contact',
    book_now: 'Réserver', call: 'Appeler',
    services_title: 'Prestations & tarifs', from: 'à partir de', min: 'min',
    about_title: 'À propos', reviews_title: 'Ce que disent nos clients', gallery_title: 'Galerie',
    booking_title: 'Prendre rendez-vous',
    booking_intro_form: 'Choisissez une prestation et un horaire qui vous conviennent. Nous confirmons votre rendez-vous par message.',
    booking_intro_online: 'Choisissez votre prestation et un créneau libre en ligne. Cela prend moins d’une minute.',
    booking_online_btn: 'Réserver en ligne', booking_or: 'ou envoyez-nous une demande',
    f_service: 'Prestation', f_date: 'Date', f_time: 'Heure souhaitée', f_name: 'Votre nom',
    f_note: 'Autre chose ? (facultatif)', f_submit_wa: 'Envoyer la demande via WhatsApp', f_submit_mail: 'Envoyer la demande par e-mail',
    msg_intro: 'Bonjour {business} ! Je souhaite prendre rendez-vous.',
    msg_service: 'Prestation', msg_date: 'Date', msg_time: 'Heure', msg_name: 'Nom', msg_note: 'Remarque',
    or_call: 'Vous préférez appeler ? Joignez-nous au',
    hours_title: 'Horaires d’ouverture', open_now: 'Ouvert maintenant', closed_now: 'Fermé actuellement', closed: 'Fermé',
    days: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    find_title: 'Nous trouver', directions: 'Itinéraire', phone: 'Téléphone', email: 'E-mail',
    follow: 'Suivez-nous sur Instagram',
    legal_link: 'Mentions légales & confidentialité', back: 'Retour au site',
    preview_banner: 'Maquette de présentation. Ce n’est pas le site officiel de {business}.',
    imprint_title: 'Mentions légales', imprint_owner: 'Responsable du site', vat: 'N° de TVA', register: 'Immatriculation',
    privacy_title: 'Confidentialité',
    privacy_text: [
      'Ce site n’utilise ni cookies, ni outils d’analyse, ni aucun autre suivi.',
      'Lors de votre visite, notre hébergeur ({host}) traite automatiquement des données techniques comme votre adresse IP et votre type de navigateur. C’est nécessaire pour fournir le site de manière sécurisée (art. 6, par. 1, point f du RGPD).',
      'Si vous nous contactez ou demandez un rendez-vous par téléphone, WhatsApp ou e-mail, nous utilisons vos informations uniquement pour traiter votre demande (art. 6, par. 1, point b du RGPD). WhatsApp est exploité par WhatsApp Ireland Ltd. ; sa propre politique de confidentialité s’applique.',
      'Vous disposez d’un droit d’accès, de rectification, d’effacement et de limitation du traitement de vos données, ainsi que du droit d’introduire une réclamation auprès d’une autorité de protection des données (en France : la CNIL). Pour exercer ces droits, contactez le responsable indiqué ci-dessus.'
    ]
  },

  es: {
    locale: 'es-ES',
    nav_services: 'Servicios', nav_about: 'Nosotros', nav_hours: 'Horario', nav_contact: 'Contacto',
    book_now: 'Reservar', call: 'Llamar',
    services_title: 'Servicios y precios', from: 'desde', min: 'min',
    about_title: 'Sobre nosotros', reviews_title: 'Lo que dicen nuestros clientes', gallery_title: 'Galería',
    booking_title: 'Reserva tu cita',
    booking_intro_form: 'Elige un servicio y la hora que mejor te venga. Te confirmamos la cita por mensaje.',
    booking_intro_online: 'Elige tu servicio y un hueco libre online. Tardas menos de un minuto.',
    booking_online_btn: 'Reservar online', booking_or: 'o envíanos una solicitud',
    f_service: 'Servicio', f_date: 'Fecha', f_time: 'Hora preferida', f_name: 'Tu nombre',
    f_note: '¿Algo más? (opcional)', f_submit_wa: 'Enviar solicitud por WhatsApp', f_submit_mail: 'Enviar solicitud por e-mail',
    msg_intro: '¡Hola, {business}! Me gustaría reservar una cita.',
    msg_service: 'Servicio', msg_date: 'Fecha', msg_time: 'Hora', msg_name: 'Nombre', msg_note: 'Nota',
    or_call: '¿Prefieres hablar? Llámanos al',
    hours_title: 'Horario', open_now: 'Abierto ahora', closed_now: 'Cerrado ahora', closed: 'Cerrado',
    days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    find_title: 'Dónde estamos', directions: 'Cómo llegar', phone: 'Teléfono', email: 'E-mail',
    follow: 'Síguenos en Instagram',
    legal_link: 'Aviso legal y privacidad', back: 'Volver a la web',
    preview_banner: 'Propuesta de diseño. Esta no es la web oficial de {business}.',
    imprint_title: 'Aviso legal', imprint_owner: 'Titular de la web', vat: 'NIF/CIF', register: 'Registro',
    privacy_title: 'Privacidad',
    privacy_text: [
      'Esta web no utiliza cookies, herramientas de analítica ni ningún otro tipo de seguimiento.',
      'Cuando la visitas, nuestro proveedor de alojamiento ({host}) trata automáticamente datos técnicos como tu dirección IP y tu tipo de navegador. Es necesario para ofrecer la web de forma segura (art. 6.1.f RGPD).',
      'Si nos contactas o pides cita por teléfono, WhatsApp o e-mail, usamos tus datos solo para gestionar tu solicitud (art. 6.1.b RGPD). WhatsApp es un servicio de WhatsApp Ireland Ltd.; se aplica su propia política de privacidad.',
      'Tienes derecho a acceder, rectificar y suprimir tus datos, a limitar su tratamiento y a presentar una reclamación ante una autoridad de protección de datos (en España, la AEPD). Para ejercerlos, contacta con el titular indicado arriba.'
    ]
  },

  it: {
    locale: 'it-IT',
    nav_services: 'Servizi', nav_about: 'Chi siamo', nav_hours: 'Orari', nav_contact: 'Contatti',
    book_now: 'Prenota', call: 'Chiama',
    services_title: 'Servizi e prezzi', from: 'da', min: 'min',
    about_title: 'Chi siamo', reviews_title: 'Cosa dicono i nostri clienti', gallery_title: 'Galleria',
    booking_title: 'Prenota un appuntamento',
    booking_intro_form: 'Scegli un servizio e l’orario che preferisci. Ti confermiamo l’appuntamento con un messaggio.',
    booking_intro_online: 'Scegli il servizio e un orario libero online. Ci vuole meno di un minuto.',
    booking_online_btn: 'Prenota online', booking_or: 'oppure inviaci una richiesta',
    f_service: 'Servizio', f_date: 'Data', f_time: 'Orario preferito', f_name: 'Il tuo nome',
    f_note: 'Altro? (facoltativo)', f_submit_wa: 'Invia richiesta su WhatsApp', f_submit_mail: 'Invia richiesta via e-mail',
    msg_intro: 'Ciao {business}! Vorrei prenotare un appuntamento.',
    msg_service: 'Servizio', msg_date: 'Data', msg_time: 'Orario', msg_name: 'Nome', msg_note: 'Nota',
    or_call: 'Preferisci parlare? Chiamaci al',
    hours_title: 'Orari di apertura', open_now: 'Aperto ora', closed_now: 'Chiuso ora', closed: 'Chiuso',
    days: ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'],
    find_title: 'Dove siamo', directions: 'Indicazioni', phone: 'Telefono', email: 'E-mail',
    follow: 'Seguici su Instagram',
    legal_link: 'Note legali e privacy', back: 'Torna al sito',
    preview_banner: 'Bozza di presentazione. Questo non è il sito ufficiale di {business}.',
    imprint_title: 'Note legali', imprint_owner: 'Titolare del sito', vat: 'P. IVA', register: 'Registro imprese',
    privacy_title: 'Privacy',
    privacy_text: [
      'Questo sito non utilizza cookie, strumenti di analisi né altri sistemi di tracciamento.',
      'Durante la visita, il nostro fornitore di hosting ({host}) tratta automaticamente dati tecnici come l’indirizzo IP e il tipo di browser. Ciò è necessario per fornire il sito in modo sicuro (art. 6, par. 1, lett. f GDPR).',
      'Se ci contatti o richiedi un appuntamento via telefono, WhatsApp o e-mail, usiamo i tuoi dati solo per gestire la richiesta (art. 6, par. 1, lett. b GDPR). WhatsApp è gestito da WhatsApp Ireland Ltd.; si applica la sua informativa sulla privacy.',
      'Hai il diritto di accedere ai tuoi dati, rettificarli, cancellarli e limitarne il trattamento, nonché di proporre reclamo a un’autorità di controllo (in Italia, il Garante Privacy). Per esercitarli, contatta il titolare indicato sopra.'
    ]
  },

  nl: {
    locale: 'nl-NL',
    nav_services: 'Behandelingen', nav_about: 'Over ons', nav_hours: 'Openingstijden', nav_contact: 'Contact',
    book_now: 'Afspraak maken', call: 'Bellen',
    services_title: 'Behandelingen & prijzen', from: 'vanaf', min: 'min',
    about_title: 'Over ons', reviews_title: 'Wat onze klanten zeggen', gallery_title: 'Galerij',
    booking_title: 'Maak een afspraak',
    booking_intro_form: 'Kies een behandeling en een tijd die jou uitkomt. We bevestigen je afspraak via een bericht.',
    booking_intro_online: 'Kies je behandeling en een vrij tijdslot online. Het duurt nog geen minuut.',
    booking_online_btn: 'Online boeken', booking_or: 'of stuur ons een aanvraag',
    f_service: 'Behandeling', f_date: 'Datum', f_time: 'Gewenste tijd', f_name: 'Je naam',
    f_note: 'Nog iets? (optioneel)', f_submit_wa: 'Aanvraag sturen via WhatsApp', f_submit_mail: 'Aanvraag sturen per e-mail',
    msg_intro: 'Hoi {business}! Ik wil graag een afspraak maken.',
    msg_service: 'Behandeling', msg_date: 'Datum', msg_time: 'Tijd', msg_name: 'Naam', msg_note: 'Opmerking',
    or_call: 'Liever bellen? Bel ons op',
    hours_title: 'Openingstijden', open_now: 'Nu open', closed_now: 'Nu gesloten', closed: 'Gesloten',
    days: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
    find_title: 'Hier vind je ons', directions: 'Route plannen', phone: 'Telefoon', email: 'E-mail',
    follow: 'Volg ons op Instagram',
    legal_link: 'Colofon & privacy', back: 'Terug naar de website',
    preview_banner: 'Voorbeeldontwerp. Dit is niet de officiële website van {business}.',
    imprint_title: 'Colofon', imprint_owner: 'Verantwoordelijk voor deze website', vat: 'Btw-nummer', register: 'KvK-nummer',
    privacy_title: 'Privacy',
    privacy_text: [
      'Deze website gebruikt geen cookies, analysetools of andere tracking.',
      'Bij een bezoek verwerkt onze hostingprovider ({host}) automatisch technische gegevens zoals je IP-adres en browsertype. Dit is nodig om de website veilig te leveren (art. 6 lid 1 sub f AVG).',
      'Als je ons belt, via WhatsApp of e-mail contact opneemt of een afspraak aanvraagt, gebruiken we je gegevens alleen om je aanvraag af te handelen (art. 6 lid 1 sub b AVG). WhatsApp wordt beheerd door WhatsApp Ireland Ltd.; hun eigen privacybeleid is van toepassing.',
      'Je hebt het recht op inzage, correctie, verwijdering en beperking van de verwerking van je gegevens, en het recht een klacht in te dienen bij een toezichthouder (in Nederland de Autoriteit Persoonsgegevens). Neem hiervoor contact op met de hierboven genoemde verantwoordelijke.'
    ]
  },

  pl: {
    locale: 'pl-PL',
    nav_services: 'Usługi', nav_about: 'O nas', nav_hours: 'Godziny', nav_contact: 'Kontakt',
    book_now: 'Umów wizytę', call: 'Zadzwoń',
    services_title: 'Usługi i ceny', from: 'od', min: 'min',
    about_title: 'O nas', reviews_title: 'Co mówią nasi klienci', gallery_title: 'Galeria',
    booking_title: 'Umów wizytę',
    booking_intro_form: 'Wybierz usługę i dogodną godzinę. Potwierdzimy wizytę wiadomością.',
    booking_intro_online: 'Wybierz usługę i wolny termin online. Zajmie to mniej niż minutę.',
    booking_online_btn: 'Rezerwuj online', booking_or: 'lub wyślij nam zapytanie',
    f_service: 'Usługa', f_date: 'Data', f_time: 'Preferowana godzina', f_name: 'Imię',
    f_note: 'Coś jeszcze? (opcjonalnie)', f_submit_wa: 'Wyślij przez WhatsApp', f_submit_mail: 'Wyślij e-mailem',
    msg_intro: 'Dzień dobry, {business}! Chciałbym/chciałabym umówić wizytę.',
    msg_service: 'Usługa', msg_date: 'Data', msg_time: 'Godzina', msg_name: 'Imię', msg_note: 'Uwagi',
    or_call: 'Wolisz porozmawiać? Zadzwoń:',
    hours_title: 'Godziny otwarcia', open_now: 'Teraz otwarte', closed_now: 'Teraz zamknięte', closed: 'Zamknięte',
    days: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'],
    find_title: 'Jak do nas trafić', directions: 'Wyznacz trasę', phone: 'Telefon', email: 'E-mail',
    follow: 'Obserwuj nas na Instagramie',
    legal_link: 'Informacje prawne i prywatność', back: 'Powrót do strony',
    preview_banner: 'Projekt poglądowy. To nie jest oficjalna strona {business}.',
    imprint_title: 'Informacje prawne', imprint_owner: 'Właściciel strony', vat: 'NIP', register: 'REGON / KRS',
    privacy_title: 'Prywatność',
    privacy_text: [
      'Ta strona nie używa plików cookie, narzędzi analitycznych ani żadnego innego śledzenia.',
      'Podczas wizyty nasz dostawca hostingu ({host}) automatycznie przetwarza dane techniczne, takie jak adres IP i typ przeglądarki. Jest to niezbędne do bezpiecznego udostępnienia strony (art. 6 ust. 1 lit. f RODO).',
      'Jeśli kontaktujesz się z nami lub umawiasz wizytę telefonicznie, przez WhatsApp lub e-mail, wykorzystujemy Twoje dane wyłącznie do obsługi zapytania (art. 6 ust. 1 lit. b RODO). WhatsApp jest prowadzony przez WhatsApp Ireland Ltd.; obowiązuje jego polityka prywatności.',
      'Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia i ograniczenia przetwarzania oraz prawo wniesienia skargi do organu nadzorczego (w Polsce: Prezes UODO). Aby z nich skorzystać, skontaktuj się z właścicielem strony wskazanym powyżej.'
    ]
  },

  pt: {
    locale: 'pt-PT',
    nav_services: 'Serviços', nav_about: 'Sobre nós', nav_hours: 'Horário', nav_contact: 'Contacto',
    book_now: 'Marcar', call: 'Ligar',
    services_title: 'Serviços e preços', from: 'desde', min: 'min',
    about_title: 'Sobre nós', reviews_title: 'O que dizem os nossos clientes', gallery_title: 'Galeria',
    booking_title: 'Marque a sua visita',
    booking_intro_form: 'Escolha um serviço e a hora que lhe dá mais jeito. Confirmamos a marcação por mensagem.',
    booking_intro_online: 'Escolha o serviço e um horário livre online. Demora menos de um minuto.',
    booking_online_btn: 'Marcar online', booking_or: 'ou envie-nos um pedido',
    f_service: 'Serviço', f_date: 'Data', f_time: 'Hora preferida', f_name: 'O seu nome',
    f_note: 'Mais alguma coisa? (opcional)', f_submit_wa: 'Enviar pedido por WhatsApp', f_submit_mail: 'Enviar pedido por e-mail',
    msg_intro: 'Olá, {business}! Gostaria de fazer uma marcação.',
    msg_service: 'Serviço', msg_date: 'Data', msg_time: 'Hora', msg_name: 'Nome', msg_note: 'Nota',
    or_call: 'Prefere falar? Ligue-nos para o',
    hours_title: 'Horário', open_now: 'Aberto agora', closed_now: 'Fechado agora', closed: 'Fechado',
    days: ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'],
    find_title: 'Onde estamos', directions: 'Obter direções', phone: 'Telefone', email: 'E-mail',
    follow: 'Siga-nos no Instagram',
    legal_link: 'Informação legal e privacidade', back: 'Voltar ao site',
    preview_banner: 'Proposta de design. Este não é o site oficial de {business}.',
    imprint_title: 'Informação legal', imprint_owner: 'Responsável pelo site', vat: 'NIF', register: 'Registo',
    privacy_title: 'Privacidade',
    privacy_text: [
      'Este site não utiliza cookies, ferramentas de análise nem qualquer outro tipo de rastreamento.',
      'Durante a visita, o nosso fornecedor de alojamento ({host}) trata automaticamente dados técnicos como o seu endereço IP e o tipo de navegador. Isto é necessário para disponibilizar o site em segurança (art. 6.º, n.º 1, al. f) do RGPD).',
      'Se nos contactar ou pedir uma marcação por telefone, WhatsApp ou e-mail, usamos os seus dados apenas para tratar o pedido (art. 6.º, n.º 1, al. b) do RGPD). O WhatsApp é gerido pela WhatsApp Ireland Ltd.; aplica-se a sua política de privacidade.',
      'Tem o direito de aceder, retificar e apagar os seus dados, de limitar o seu tratamento e de apresentar reclamação a uma autoridade de controlo (em Portugal, a CNPD). Para os exercer, contacte o responsável indicado acima.'
    ]
  }
};

// Text used by holiday rentals and B&Bs ("kind": "stay") and the language switch.
const STAY = {
  en: {
    lang_name: 'English', nav_rooms: 'Rooms', rooms_title: 'Rooms & rates', per_night: 'night',
    stay_title: 'Book your stay',
    stay_intro_form: 'Tell us your dates and we will get back to you quickly to confirm availability. Booking direct means the best price, with no platform fees.',
    f_room: 'Room', f_arrival: 'Arrival', f_departure: 'Departure', f_guests: 'Guests',
    stay_msg_intro: 'Hello {business}! I would like to book a stay.',
    msg_room: 'Room', msg_arrival: 'Arrival', msg_departure: 'Departure', msg_nights: 'Nights', msg_guests: 'Guests',
    check_in: 'Check-in', check_out: 'Check-out', stay_info: 'Good to know'
  },
  fr: {
    lang_name: 'Français', nav_rooms: 'Chambres', rooms_title: 'Chambres & tarifs', per_night: 'nuit',
    stay_title: 'Réservez votre séjour',
    stay_intro_form: 'Indiquez-nous vos dates : nous revenons vers vous rapidement pour confirmer la disponibilité. En réservant en direct, vous avez le meilleur prix, sans frais de plateforme.',
    f_room: 'Chambre', f_arrival: 'Arrivée', f_departure: 'Départ', f_guests: 'Voyageurs',
    stay_msg_intro: 'Bonjour {business} ! Je souhaiterais réserver un séjour.',
    msg_room: 'Chambre', msg_arrival: 'Arrivée', msg_departure: 'Départ', msg_nights: 'Nuits', msg_guests: 'Voyageurs',
    check_in: 'Arrivée', check_out: 'Départ', stay_info: 'Bon à savoir'
  },
  de: {
    lang_name: 'Deutsch', nav_rooms: 'Zimmer', rooms_title: 'Zimmer & Preise', per_night: 'Nacht',
    stay_title: 'Aufenthalt buchen',
    stay_intro_form: 'Nennen Sie uns Ihre Reisedaten, wir melden uns schnell und bestätigen die Verfügbarkeit. Direkt buchen heißt: bester Preis, keine Plattformgebühren.',
    f_room: 'Zimmer', f_arrival: 'Anreise', f_departure: 'Abreise', f_guests: 'Gäste',
    stay_msg_intro: 'Hallo {business}! Ich möchte gern einen Aufenthalt buchen.',
    msg_room: 'Zimmer', msg_arrival: 'Anreise', msg_departure: 'Abreise', msg_nights: 'Nächte', msg_guests: 'Gäste',
    check_in: 'Check-in', check_out: 'Check-out', stay_info: 'Gut zu wissen'
  },
  es: {
    lang_name: 'Español', nav_rooms: 'Habitaciones', rooms_title: 'Habitaciones y tarifas', per_night: 'noche',
    stay_title: 'Reserva tu estancia',
    stay_intro_form: 'Indícanos tus fechas y te confirmaremos la disponibilidad enseguida. Reservando directamente tienes el mejor precio, sin comisiones.',
    f_room: 'Habitación', f_arrival: 'Llegada', f_departure: 'Salida', f_guests: 'Huéspedes',
    stay_msg_intro: '¡Hola, {business}! Me gustaría reservar una estancia.',
    msg_room: 'Habitación', msg_arrival: 'Llegada', msg_departure: 'Salida', msg_nights: 'Noches', msg_guests: 'Huéspedes',
    check_in: 'Entrada', check_out: 'Salida', stay_info: 'Información útil'
  },
  it: {
    lang_name: 'Italiano', nav_rooms: 'Camere', rooms_title: 'Camere e tariffe', per_night: 'notte',
    stay_title: 'Prenota il tuo soggiorno',
    stay_intro_form: 'Indicaci le tue date: ti risponderemo subito per confermare la disponibilità. Prenotando direttamente hai il prezzo migliore, senza commissioni.',
    f_room: 'Camera', f_arrival: 'Arrivo', f_departure: 'Partenza', f_guests: 'Ospiti',
    stay_msg_intro: 'Ciao {business}! Vorrei prenotare un soggiorno.',
    msg_room: 'Camera', msg_arrival: 'Arrivo', msg_departure: 'Partenza', msg_nights: 'Notti', msg_guests: 'Ospiti',
    check_in: 'Check-in', check_out: 'Check-out', stay_info: 'Informazioni utili'
  },
  nl: {
    lang_name: 'Nederlands', nav_rooms: 'Kamers', rooms_title: 'Kamers & prijzen', per_night: 'nacht',
    stay_title: 'Boek je verblijf',
    stay_intro_form: 'Laat ons je data weten, dan bevestigen we snel of er plek is. Direct boeken betekent de beste prijs, zonder platformkosten.',
    f_room: 'Kamer', f_arrival: 'Aankomst', f_departure: 'Vertrek', f_guests: 'Gasten',
    stay_msg_intro: 'Hallo {business}! Ik wil graag een verblijf boeken.',
    msg_room: 'Kamer', msg_arrival: 'Aankomst', msg_departure: 'Vertrek', msg_nights: 'Nachten', msg_guests: 'Gasten',
    check_in: 'Inchecken', check_out: 'Uitchecken', stay_info: 'Goed om te weten'
  },
  pl: {
    lang_name: 'Polski', nav_rooms: 'Pokoje', rooms_title: 'Pokoje i ceny', per_night: 'noc',
    stay_title: 'Zarezerwuj pobyt',
    stay_intro_form: 'Podaj daty pobytu, a szybko potwierdzimy dostępność. Rezerwując bezpośrednio, masz najlepszą cenę bez prowizji.',
    f_room: 'Pokój', f_arrival: 'Przyjazd', f_departure: 'Wyjazd', f_guests: 'Goście',
    stay_msg_intro: 'Dzień dobry, {business}! Chciałbym/chciałabym zarezerwować pobyt.',
    msg_room: 'Pokój', msg_arrival: 'Przyjazd', msg_departure: 'Wyjazd', msg_nights: 'Noce', msg_guests: 'Goście',
    check_in: 'Zameldowanie', check_out: 'Wymeldowanie', stay_info: 'Warto wiedzieć'
  },
  pt: {
    lang_name: 'Português', nav_rooms: 'Quartos', rooms_title: 'Quartos e preços', per_night: 'noite',
    stay_title: 'Reserve a sua estadia',
    stay_intro_form: 'Indique-nos as suas datas e confirmamos rapidamente a disponibilidade. Ao reservar diretamente tem o melhor preço, sem comissões.',
    f_room: 'Quarto', f_arrival: 'Chegada', f_departure: 'Partida', f_guests: 'Hóspedes',
    stay_msg_intro: 'Olá, {business}! Gostaria de reservar uma estadia.',
    msg_room: 'Quarto', msg_arrival: 'Chegada', msg_departure: 'Partida', msg_nights: 'Noites', msg_guests: 'Hóspedes',
    check_in: 'Check-in', check_out: 'Check-out', stay_info: 'Informações úteis'
  }
};

for (const lang of Object.keys(STAY)) Object.assign(module.exports[lang], STAY[lang]);
