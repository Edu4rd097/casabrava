/* ============================================================
   Casa Brava · Selector de idioma (ES / EN / PT)

   Cómo funciona:
   - El español es el idioma base y vive directamente en index.html.
   - Cada texto traducible lleva un atributo data-i18n="clave".
   - Aquí abajo están las traducciones al inglés (en) y portugués (pt)
     con esas mismas claves. Si a una clave le falta traducción,
     se deja el texto en español.
   - El idioma elegido se guarda en el navegador (localStorage) y se
     respeta en la siguiente visita. También se puede forzar con
     ?lang=en o ?lang=pt en la URL.
   ============================================================ */
(function () {
  'use strict';

  var IDIOMAS = ['es', 'en', 'pt'];
  var CLAVE_GUARDADO = 'casabrava-idioma';

  var T = {

    /* ------------------------------ INGLÉS ------------------------------ */
    en: {
      "marca.completa": "Casa Brava — Combat Academy",
      "nav.cta": "See the app",

      "hero.titulo": "Your academy runs itself. <em>Your students don't want to leave.</em>",
      "hero.sub": "The app your students use on their phones and you use from any computer. Payments, attendance and fighter profiles, all in one place. No paper, no Excel, no WhatsApp to collect payments.",
      "hero.boton1": "See how it works",
      "hero.boton2": "Explore the features",

      "videos.titulo": "See it in action",
      "videos.intro": "Seven real walkthroughs of the app: how attendance works with the QR code, what everything looks like on the computer and what it looks like on the phone. For the owner, the coach and the student.",

      "pasarlista": "Taking attendance",
      "grupo1.nota": "What happens every time a student shows up to train.",
      "qr.etiqueta": "QR attendance",
      "qr.titulo": "The student shows their code, you scan it and you're done",
      "qr.p1": "The student arrives, opens the app on their phone and shows their QR code, the little square of dots on their screen. You point the camera at it and, right then, it records who came, to which class and at what time. No signing sheets, no hunting for names on a list.",
      "qr.p2": "Every check-in earns points and extends the student's streak. Ten classes in a row earn a badge, fifty earn another. That way, taking attendance is also what makes them want to come back tomorrow.",

      "grupo2.titulo": "From the computer",
      "grupo2.nota": "For managing calmly from the front desk, the office or a tablet. Everyone signs in with their own account and sees only what concerns them.",
      "rol.dueno": "Owner or front desk",
      "rol.maestro": "Coach",
      "rol.alumno": "Student",
      "staffweb.titulo": "The dashboard that runs the whole academy",
      "staffweb.p": "It's your command center. At a glance you see how much came in this month, how many students you have, who owes, who is paid up and who hasn't shown up. You log a cash, card or bank transfer payment in seconds and the receipt goes straight to the student's email. You also assign which disciplines each coach teaches and download reports without doing the math by hand.",
      "maestroweb.titulo": "What the coach knows about their students",
      "maestroweb.p": "The coach signs in and sees only what's theirs: the disciplines they teach, their classes and who attended each one. They can open any student's profile and see how many classes they've taken, their fight record, their BJJ belt, whether they're injured or have a tournament coming up. Everything they need before sending them to spar or compete.",
      "alumnoweb.titulo": "Their history and payments, without having to ask",
      "alumnoweb.p": "This is what the student sees when they sign in from a computer. Their full profile, every class they've taken, their attendance calendar, their tournaments and their belts. Their payments too: when their membership expires, their receipts and whether they're in green, yellow or red. Fewer questions for you at the front desk.",

      "grupo3.titulo": "From the phone",
      "grupo3.nota": "The same app in your pocket. It works for the owner walking around the gym, for the coach on the mat and for the student anywhere.",
      "staffmovil.titulo": "Manage from any corner of the gym",
      "staffmovil.p": "The owner's full dashboard, but on the phone. You collect payments, check who owes, look up your numbers for the month and take attendance without going to the front desk or turning on the computer.",
      "maestromovil.titulo": "The coach with their group in hand",
      "maestromovil.p": "Take attendance, see who made it to class and check each student's profile from their own phone. Built for when they're in the ring or on the mat, not at a desk.",
      "peleador.titulo": "Their fighter profile",
      "peleadormovil.p": "The profile that makes them feel part of something serious: photo, nickname, fight record and their striking, wrestling and defense levels, like on Tapology. Here they see their points, their streak, their badges and their place in the ranking. Plus their payment status light, their notices and their receipts.",
      "video.fallback": "Your browser can't play this video.",

      "funciones.titulo": "What it does for each person",
      "funciones.intro": "One app, two views: the owner who manages and the student who trains.",
      "col1.titulo": "For you — owner or front desk",
      "f1.titulo": "Billing and payments",
      "f1.p": "You know exactly who owes you and who is paid up. The app sends a heads-up before memberships expire. You log cash, card or bank transfer in seconds.",
      "f2.p": "The student shows their QR, you scan it and you're done. No signing sheets or hunting for names on a list.",
      "f3.titulo": "Complete student profiles",
      "f3.p": "Classes taken, fight record, BJJ belt, injuries, tournaments. All of it before sending them to spar or compete.",
      "f4.titulo": "Your numbers, clear",
      "f4.p": "How much you brought in this month, how many students you have, who hasn't shown up, who holds the longest streak. A dashboard that says it all at a glance.",
      "f5.titulo": "Automatic notifications and receipts",
      "f5.p": "Payment reminders, badges and rank changes arrive on their own in the app and by email. Every payment generates its receipt without you lifting a finger.",

      "col2.titulo": "For your students",
      "a1.p": "Photo, nickname, record, striking, wrestling and defense, like on Tapology. They feel part of something serious, not just another gym.",
      "a2.titulo": "They know if they're paid up",
      "a2.p": "Green means they're fine, yellow means the due date is near, red means they owe. No surprises, no excuses.",
      "a3.titulo": "Reminders that arrive on their own",
      "a3.p": "Five days before their membership expires they get a notification and an email. They renew on time, you get paid on time.",
      "a4.titulo": "Achievements that bring them back",
      "a4.p": "Every class earns points. There are streaks, badges and a ranking, just like a video game but in the gym.",
      "a5.titulo": "Their history in their pocket",
      "a5.p": "Classes taken, attendance, tournaments and belts, all from their phone at any time.",

      "semaforo.corriente": "Paid up",
      "semaforo.porvencer": "Due soon",
      "semaforo.vencido": "Overdue",

      "tabla.titulo": "Why this changes your academy",
      "tabla.intro": "Before and after, in a single table.",
      "tabla.sin": "Without the app",
      "tabla.con": "With the app",
      "tabla.f1.sin": "Paper lists that get lost",
      "tabla.f1.con": "Everything logged automatically",
      "tabla.f2.sin": "You call one by one to collect",
      "tabla.f2.con": "The app reminds whoever owes, by itself",
      "tabla.f3.sin": "You don't know who comes regularly",
      "tabla.f3.con": "You see streaks and attendance instantly",
      "tabla.f4.sin": "Students get bored and leave",
      "tabla.f4.con": "Points and achievements keep them motivated",
      "tabla.f5.sin": "Excel for payments",
      "tabla.f5.con": "Reports ready to download",
      "tabla.f6.sin": "The student doesn't know when to pay",
      "tabla.f6.con": "They see it on their phone in green or red",
      "tabla.f7.sin": "You send receipts by hand over WhatsApp",
      "tabla.f7.con": "The email goes out instantly, on its own",
      "tabla.f8.sin": "You're the one chasing overdue payments",
      "tabla.f8.con": "The app does it by itself every morning",

      "cierre.frase": "Your gym runs <span class=\"rojo\">itself</span>. Your students don't want to leave. You get paid on time."
    },

    /* ---------------------------- PORTUGUÉS ----------------------------- */
    pt: {
      "marca.completa": "Casa Brava — Academia de Combate",
      "nav.cta": "Ver o app",

      "hero.titulo": "Sua academia funciona sozinha. <em>Seus alunos não querem ir embora.</em>",
      "hero.sub": "O app que seus alunos usam no celular e você usa em qualquer computador. Cobranças, presença e fichas de lutador, tudo em um só lugar. Sem papel, sem Excel, sem WhatsApp para cobrar.",
      "hero.boton1": "Veja como funciona",
      "hero.boton2": "Conheça as funções",

      "videos.titulo": "Veja em ação",
      "videos.intro": "Sete tours reais pelo app: como funciona a chamada com o código QR, como tudo aparece no computador e como aparece no celular. Para o dono, para o professor e para o aluno.",

      "pasarlista": "Fazer a chamada",
      "grupo1.nota": "O que acontece toda vez que um aluno chega para treinar.",
      "qr.etiqueta": "Presença por QR",
      "qr.titulo": "O aluno mostra o código, você escaneia e pronto",
      "qr.p1": "O aluno chega, abre o app no celular e mostra o código QR, aquele quadradinho de pontos que aparece na tela. Você aponta a câmera e, na mesma hora, fica registrado quem veio, em qual aula e a que hora. Sem assinar folhas, sem procurar nomes em uma lista.",
      "qr.p2": "Cada presença soma pontos e aumenta a sequência do aluno. Com 10 aulas seguidas ele ganha uma medalha, com 50 ganha outra. Assim, a chamada também é o que faz ele querer voltar amanhã.",

      "grupo2.titulo": "No computador",
      "grupo2.nota": "Para administrar com calma da recepção, do escritório ou de um tablet. Cada um entra com o seu usuário e vê só o que lhe cabe.",
      "rol.dueno": "Dono ou recepção",
      "rol.maestro": "Professor",
      "rol.alumno": "Aluno",
      "staffweb.titulo": "O painel que administra toda a academia",
      "staffweb.p": "É o seu centro de comando. De uma olhada você vê quanto entrou este mês, quantos alunos tem, quem deve, quem está em dia e quem não tem vindo. Registra um pagamento em dinheiro, cartão ou transferência em segundos e o recibo chega sozinho no e-mail do aluno. Também define quais modalidades cada professor dá e baixa relatórios sem fazer contas na mão.",
      "maestroweb.titulo": "O que o professor sabe dos seus alunos",
      "maestroweb.p": "O professor entra e vê só o que é dele: as modalidades que ensina, suas aulas e quem esteve em cada uma. Pode abrir a ficha de qualquer aluno e saber quantas aulas ele já fez, seu cartel de lutas, sua faixa de BJJ, se está lesionado ou se tem um torneio chegando. Tudo o que precisa antes de mandá-lo para um sparring ou para competir.",
      "alumnoweb.titulo": "Seu histórico e seus pagamentos, sem precisar perguntar",
      "alumnoweb.p": "É assim que o aluno vê quando entra de um computador. Sua ficha completa, todas as aulas que já fez, seu calendário de presença, seus torneios e suas faixas. Também seus pagamentos: quando vence o plano, seus comprovantes e se está no verde, no amarelo ou no vermelho. Menos perguntas para você na recepção.",

      "grupo3.titulo": "No celular",
      "grupo3.nota": "O mesmo app no bolso. Serve para o dono que circula pela academia, para o professor no tatame e para o aluno em qualquer lugar.",
      "staffmovil.titulo": "Administre de qualquer canto da academia",
      "staffmovil.p": "Todo o painel do dono, mas no celular. Você cobra, vê quem deve, consulta seus números do mês e faz a chamada sem ir à recepção nem ligar o computador.",
      "maestromovil.titulo": "O professor com a turma na mão",
      "maestromovil.p": "Faz a chamada, vê quem chegou na aula e consulta a ficha de cada aluno do próprio celular. Pensado para quando está no ringue ou no tatame, não em uma mesa de escritório.",
      "peleador.titulo": "Sua ficha de lutador",
      "peleadormovil.p": "O perfil que faz ele se sentir parte de algo sério: foto, apelido, cartel de lutas e seu nível de striking, luta e defesa, como no Tapology. Aqui ele vê seus pontos, sua sequência, suas medalhas e seu lugar no ranking. Também o semáforo do pagamento, seus avisos e seus recibos.",
      "video.fallback": "Seu navegador não consegue reproduzir este vídeo.",

      "funciones.titulo": "O que ele faz por cada um",
      "funciones.intro": "Um mesmo app, duas visões: a do dono que administra e a do aluno que treina.",
      "col1.titulo": "Para você — dono ou recepção",
      "f1.titulo": "Cobranças e pagamentos",
      "f1.p": "Você sabe exatamente quem te deve e quem está em dia. O app avisa antes dos planos vencerem. Registra dinheiro, cartão ou transferência em segundos.",
      "f2.p": "O aluno mostra o QR, você escaneia e pronto. Sem assinar folhas nem procurar nomes em uma lista.",
      "f3.titulo": "Fichas completas dos alunos",
      "f3.p": "Aulas feitas, cartel de lutas, faixa de BJJ, lesões, torneios. Tudo antes de mandá-los para um sparring ou para competir.",
      "f4.titulo": "Seus números claros",
      "f4.p": "Quanto entrou este mês, quantos alunos você tem, quem não tem vindo, quem tem a maior sequência. Um painel que diz tudo de uma olhada.",
      "f5.titulo": "Notificações e recibos automáticos",
      "f5.p": "Avisos de pagamento, medalhas e mudanças de graduação chegam sozinhos no app e no e-mail. Cada pagamento gera seu comprovante sem você precisar fazer nada.",

      "col2.titulo": "Para seus alunos",
      "a1.p": "Foto, apelido, cartel, striking, luta e defesa, como no Tapology. Eles se sentem parte de algo sério, não de mais uma academia.",
      "a2.titulo": "Sabem se estão em dia",
      "a2.p": "Verde significa que está tudo certo, amarelo que a data está chegando, vermelho que estão devendo. Sem surpresas, sem desculpas.",
      "a3.titulo": "Avisos que chegam sozinhos",
      "a3.p": "Cinco dias antes do plano vencer, eles recebem uma notificação e um e-mail. Renovam em dia, você recebe em dia.",
      "a4.titulo": "Conquistas que fazem eles voltarem",
      "a4.p": "Cada aula soma pontos. Tem sequências, medalhas e um ranking, igual a um videogame, só que na academia.",
      "a5.titulo": "Seu histórico no bolso",
      "a5.p": "Aulas feitas, presença, torneios e faixas, tudo pelo celular a qualquer hora.",

      "semaforo.corriente": "Em dia",
      "semaforo.porvencer": "A vencer",
      "semaforo.vencido": "Vencido",

      "tabla.titulo": "Por que isso muda a sua academia",
      "tabla.intro": "O antes e o depois, em uma só tabela.",
      "tabla.sin": "Sem o app",
      "tabla.con": "Com o app",
      "tabla.f1.sin": "Listas de papel que se perdem",
      "tabla.f1.con": "Tudo registrado automaticamente",
      "tabla.f2.sin": "Você liga um por um para cobrar",
      "tabla.f2.con": "O app avisa sozinho quem está devendo",
      "tabla.f3.sin": "Você não sabe quem vem com frequência",
      "tabla.f3.con": "Você vê sequências e presença na hora",
      "tabla.f4.sin": "Os alunos se entediam e vão embora",
      "tabla.f4.con": "Os pontos e conquistas motivam eles",
      "tabla.f5.sin": "Excel para os pagamentos",
      "tabla.f5.con": "Relatórios prontos para baixar",
      "tabla.f6.sin": "O aluno não sabe quando pagar",
      "tabla.f6.con": "Ele vê no celular em verde ou vermelho",
      "tabla.f7.sin": "Você manda recibos na mão pelo WhatsApp",
      "tabla.f7.con": "O e-mail chega sozinho na hora",
      "tabla.f8.sin": "Você é quem avisa dos pagamentos vencidos",
      "tabla.f8.con": "O app faz isso sozinho toda manhã",

      "cierre.frase": "Sua academia funciona <span class=\"rojo\">sozinha</span>. Seus alunos não querem ir embora. Você recebe em dia."
    }
  };

  /* ------------------------------ motor ------------------------------ */

  var nodos = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var botones = Array.prototype.slice.call(document.querySelectorAll('.selector-idioma [data-lang]'));

  // Guardamos el español original de cada nodo para poder volver a él.
  var originales = nodos.map(function (el) {
    return el.tagName === 'TITLE' ? el.textContent : el.innerHTML;
  });

  function aplicar(lang) {
    if (IDIOMAS.indexOf(lang) === -1) lang = 'es';
    var dic = T[lang] || {};

    nodos.forEach(function (el, i) {
      var clave = el.getAttribute('data-i18n');
      var texto = originales[i];
      if (lang !== 'es' && Object.prototype.hasOwnProperty.call(dic, clave)) {
        texto = dic[clave];
      }
      if (el.tagName === 'TITLE') {
        el.textContent = texto;
      } else {
        el.innerHTML = texto;
      }
    });

    document.documentElement.setAttribute('lang', lang);

    botones.forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });

    try { localStorage.setItem(CLAVE_GUARDADO, lang); } catch (e) { /* modo privado, sin problema */ }
  }

  function idiomaInicial() {
    // 1) ?lang=xx en la URL
    var m = /[?&]lang=([a-zA-Z]{2})/.exec(window.location.search);
    if (m && IDIOMAS.indexOf(m[1].toLowerCase()) !== -1) return m[1].toLowerCase();

    // 2) lo que la persona eligió la última vez
    try {
      var guardado = localStorage.getItem(CLAVE_GUARDADO);
      if (guardado && IDIOMAS.indexOf(guardado) !== -1) return guardado;
    } catch (e) { /* sin acceso a localStorage */ }

    // 3) idioma del navegador, si es uno de los tres
    var nav = (navigator.language || navigator.userLanguage || 'es').slice(0, 2).toLowerCase();
    return IDIOMAS.indexOf(nav) !== -1 ? nav : 'es';
  }

  botones.forEach(function (b) {
    b.addEventListener('click', function () {
      aplicar(b.getAttribute('data-lang'));
    });
  });

  aplicar(idiomaInicial());
})();
