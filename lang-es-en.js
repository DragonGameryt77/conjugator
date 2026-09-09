// ═══════════════════════════════════════════════════════════
//  Conjugation engines for Spanish and English
// ═══════════════════════════════════════════════════════════

// ── ENGLISH CONJUGATION ENGINE ──
const EN_IRREGULARS = {
  be: { past: 'was/were', pp: 'been', s: 'is', gerund: 'being',
    present: ['am','are','is','are','are','are'],
    past_full: ['was','were','was','were','were','were'] },
  have: { past: 'had', pp: 'had', s: 'has', gerund: 'having' },
  do: { past: 'did', pp: 'done', s: 'does', gerund: 'doing' },
  go: { past: 'went', pp: 'gone', s: 'goes', gerund: 'going' },
  say: { past: 'said', pp: 'said', s: 'says' },
  get: { past: 'got', pp: 'gotten' },
  make: { past: 'made', pp: 'made' },
  know: { past: 'knew', pp: 'known' },
  think: { past: 'thought', pp: 'thought' },
  take: { past: 'took', pp: 'taken' },
  see: { past: 'saw', pp: 'seen' },
  come: { past: 'came', pp: 'come' },
  give: { past: 'gave', pp: 'given' },
  find: { past: 'found', pp: 'found' },
  tell: { past: 'told', pp: 'told' },
  write: { past: 'wrote', pp: 'written' },
  read: { past: 'read', pp: 'read' },
  run: { past: 'ran', pp: 'run', gerund: 'running' },
  eat: { past: 'ate', pp: 'eaten' },
  drink: { past: 'drank', pp: 'drunk' },
  speak: { past: 'spoke', pp: 'spoken' },
  drive: { past: 'drove', pp: 'driven' },
  swim: { past: 'swam', pp: 'swum', gerund: 'swimming' },
  begin: { past: 'began', pp: 'begun', gerund: 'beginning' },
  break: { past: 'broke', pp: 'broken' },
  bring: { past: 'brought', pp: 'brought' },
  build: { past: 'built', pp: 'built' },
  buy: { past: 'bought', pp: 'bought' },
  catch: { past: 'caught', pp: 'caught', s: 'catches' },
  choose: { past: 'chose', pp: 'chosen' },
  draw: { past: 'drew', pp: 'drawn' },
  fall: { past: 'fell', pp: 'fallen' },
  feel: { past: 'felt', pp: 'felt' },
  fly: { past: 'flew', pp: 'flown', s: 'flies' },
  forget: { past: 'forgot', pp: 'forgotten', gerund: 'forgetting' },
  grow: { past: 'grew', pp: 'grown' },
  hear: { past: 'heard', pp: 'heard' },
  hide: { past: 'hid', pp: 'hidden' },
  hold: { past: 'held', pp: 'held' },
  keep: { past: 'kept', pp: 'kept' },
  leave: { past: 'left', pp: 'left' },
  let: { past: 'let', pp: 'let', gerund: 'letting' },
  lie: { past: 'lay', pp: 'lain', gerund: 'lying' },
  lose: { past: 'lost', pp: 'lost' },
  meet: { past: 'met', pp: 'met' },
  pay: { past: 'paid', pp: 'paid' },
  put: { past: 'put', pp: 'put', gerund: 'putting' },
  ring: { past: 'rang', pp: 'rung' },
  rise: { past: 'rose', pp: 'risen' },
  sell: { past: 'sold', pp: 'sold' },
  send: { past: 'sent', pp: 'sent' },
  set: { past: 'set', pp: 'set', gerund: 'setting' },
  show: { past: 'showed', pp: 'shown' },
  shut: { past: 'shut', pp: 'shut', gerund: 'shutting' },
  sing: { past: 'sang', pp: 'sung' },
  sit: { past: 'sat', pp: 'sat', gerund: 'sitting' },
  sleep: { past: 'slept', pp: 'slept' },
  spend: { past: 'spent', pp: 'spent' },
  stand: { past: 'stood', pp: 'stood' },
  steal: { past: 'stole', pp: 'stolen' },
  teach: { past: 'taught', pp: 'taught', s: 'teaches' },
  throw: { past: 'threw', pp: 'thrown' },
  understand: { past: 'understood', pp: 'understood' },
  wake: { past: 'woke', pp: 'woken' },
  wear: { past: 'wore', pp: 'worn' },
  win: { past: 'won', pp: 'won', gerund: 'winning' },
  can: { past: 'could', pp: '-', s: 'can', modal: true },
  will: { past: 'would', pp: '-', s: 'will', modal: true },
  shall: { past: 'should', pp: '-', s: 'shall', modal: true },
  may: { past: 'might', pp: '-', s: 'may', modal: true },
  must: { past: 'must', pp: '-', s: 'must', modal: true },
};

function enGerund(verb) {
  const irr = EN_IRREGULARS[verb];
  if (irr?.gerund) return irr.gerund;
  if (verb.endsWith('ie')) return verb.slice(0, -2) + 'ying';
  if (verb.endsWith('e') && !verb.endsWith('ee')) return verb.slice(0, -1) + 'ing';
  if (/[^aeiou][aeiou][^aeiouxw]$/.test(verb)) return verb + verb.slice(-1) + 'ing';
  return verb + 'ing';
}

function enThirdPerson(verb) {
  const irr = EN_IRREGULARS[verb];
  if (irr?.s) return irr.s;
  if (verb.endsWith('y') && !/[aeiou]y$/.test(verb)) return verb.slice(0, -1) + 'ies';
  if (/(?:s|sh|ch|x|z|o)$/.test(verb)) return verb + 'es';
  return verb + 's';
}

function enPast(verb) {
  const irr = EN_IRREGULARS[verb];
  if (irr?.past) return irr.past;
  if (verb.endsWith('e')) return verb + 'd';
  if (verb.endsWith('y') && !/[aeiou]y$/.test(verb)) return verb.slice(0, -1) + 'ied';
  if (/[^aeiou][aeiou][^aeiouxw]$/.test(verb)) return verb + verb.slice(-1) + 'ed';
  return verb + 'ed';
}

function enPP(verb) {
  const irr = EN_IRREGULARS[verb];
  if (irr?.pp) return irr.pp;
  return enPast(verb);
}

function conjugateEnglish(verb) {
  verb = verb.toLowerCase().trim();
  const pronouns = ['I', 'you', 'he/she', 'we', 'you (pl.)', 'they'];
  const irr = EN_IRREGULARS[verb];
  const s = enThirdPerson(verb);
  const past = enPast(verb);
  const pp = enPP(verb);
  const ger = enGerund(verb);

  const result = {};

  if (irr?.modal) {
    result['Present'] = { 'Simple': pronouns.map(() => verb) };
    if (irr.past !== '-') result['Past'] = { 'Simple': pronouns.map(() => irr.past) };
    return result;
  }

  // Special: be
  if (verb === 'be') {
    result['Present'] = {
      'Simple': ['am', 'are', 'is', 'are', 'are', 'are'],
      'Continuous': pronouns.map((_, i) => ['am','are','is','are','are','are'][i] + ' being'),
      'Perfect': pronouns.map((_, i) => (['have','have','has','have','have','have'][i]) + ' been'),
    };
    result['Past'] = {
      'Simple': ['was', 'were', 'was', 'were', 'were', 'were'],
      'Continuous': ['was being', 'were being', 'was being', 'were being', 'were being', 'were being'],
      'Perfect': pronouns.map(() => 'had been'),
    };
    result['Future'] = {
      'Simple': pronouns.map(() => 'will be'),
      'Perfect': pronouns.map(() => 'will have been'),
    };
    return result;
  }

  result['Present'] = {
    'Simple': [verb, verb, s, verb, verb, verb],
    'Continuous': pronouns.map((_, i) => ['am','are','is','are','are','are'][i] + ' ' + ger),
    'Perfect': pronouns.map((_, i) => (['have','have','has','have','have','have'][i]) + ' ' + pp),
  };
  result['Past'] = {
    'Simple': pronouns.map(() => past),
    'Continuous': pronouns.map((_, i) => (['was','were','was','were','were','were'][i]) + ' ' + ger),
    'Perfect': pronouns.map(() => 'had ' + pp),
  };
  result['Future'] = {
    'Simple': pronouns.map(() => 'will ' + verb),
    'Perfect': pronouns.map(() => 'will have ' + pp),
  };
  result['Conditional'] = {
    'Simple': pronouns.map(() => 'would ' + verb),
    'Perfect': pronouns.map(() => 'would have ' + pp),
  };

  return result;
}

// ── SPANISH CONJUGATION ENGINE ──
const ES_IRREGULARS = {
  ser: {
    presente: ['soy','eres','es','somos','sois','son'],
    preterito: ['fui','fuiste','fue','fuimos','fuisteis','fueron'],
    imperfecto: ['era','eras','era','éramos','erais','eran'],
    futuro: ['seré','serás','será','seremos','seréis','serán'],
    subjuntivo: ['sea','seas','sea','seamos','seáis','sean'],
    imperativo: ['-','sé','sea','seamos','sed','sean'],
    gerundio: 'siendo', participio: 'sido',
  },
  estar: {
    presente: ['estoy','estás','está','estamos','estáis','están'],
    preterito: ['estuve','estuviste','estuvo','estuvimos','estuvisteis','estuvieron'],
    imperfecto: ['estaba','estabas','estaba','estábamos','estabais','estaban'],
    futuro: ['estaré','estarás','estará','estaremos','estaréis','estarán'],
    subjuntivo: ['esté','estés','esté','estemos','estéis','estén'],
    gerundio: 'estando', participio: 'estado',
  },
  haber: {
    presente: ['he','has','ha','hemos','habéis','han'],
    preterito: ['hube','hubiste','hubo','hubimos','hubisteis','hubieron'],
    imperfecto: ['había','habías','había','habíamos','habíais','habían'],
    futuro: ['habré','habrás','habrá','habremos','habréis','habrán'],
    subjuntivo: ['haya','hayas','haya','hayamos','hayáis','hayan'],
    gerundio: 'habiendo', participio: 'habido',
  },
  tener: {
    presente: ['tengo','tienes','tiene','tenemos','tenéis','tienen'],
    preterito: ['tuve','tuviste','tuvo','tuvimos','tuvisteis','tuvieron'],
    futuro: ['tendré','tendrás','tendrá','tendremos','tendréis','tendrán'],
    subjuntivo: ['tenga','tengas','tenga','tengamos','tengáis','tengan'],
    gerundio: 'teniendo', participio: 'tenido',
  },
  ir: {
    presente: ['voy','vas','va','vamos','vais','van'],
    preterito: ['fui','fuiste','fue','fuimos','fuisteis','fueron'],
    imperfecto: ['iba','ibas','iba','íbamos','ibais','iban'],
    futuro: ['iré','irás','irá','iremos','iréis','irán'],
    subjuntivo: ['vaya','vayas','vaya','vayamos','vayáis','vayan'],
    gerundio: 'yendo', participio: 'ido',
  },
  hacer: {
    presente: ['hago','haces','hace','hacemos','hacéis','hacen'],
    preterito: ['hice','hiciste','hizo','hicimos','hicisteis','hicieron'],
    futuro: ['haré','harás','hará','haremos','haréis','harán'],
    subjuntivo: ['haga','hagas','haga','hagamos','hagáis','hagan'],
    participio: 'hecho',
  },
  decir: {
    presente: ['digo','dices','dice','decimos','decís','dicen'],
    preterito: ['dije','dijiste','dijo','dijimos','dijisteis','dijeron'],
    futuro: ['diré','dirás','dirá','diremos','diréis','dirán'],
    subjuntivo: ['diga','digas','diga','digamos','digáis','digan'],
    gerundio: 'diciendo', participio: 'dicho',
  },
  poder: {
    presente: ['puedo','puedes','puede','podemos','podéis','pueden'],
    preterito: ['pude','pudiste','pudo','pudimos','pudisteis','pudieron'],
    futuro: ['podré','podrás','podrá','podremos','podréis','podrán'],
    subjuntivo: ['pueda','puedas','pueda','podamos','podáis','puedan'],
    gerundio: 'pudiendo',
  },
  querer: {
    presente: ['quiero','quieres','quiere','queremos','queréis','quieren'],
    preterito: ['quise','quisiste','quiso','quisimos','quisisteis','quisieron'],
    futuro: ['querré','querrás','querrá','querremos','querréis','querrán'],
    subjuntivo: ['quiera','quieras','quiera','queramos','queráis','quieran'],
  },
  saber: {
    presente: ['sé','sabes','sabe','sabemos','sabéis','saben'],
    preterito: ['supe','supiste','supo','supimos','supisteis','supieron'],
    futuro: ['sabré','sabrás','sabrá','sabremos','sabréis','sabrán'],
    subjuntivo: ['sepa','sepas','sepa','sepamos','sepáis','sepan'],
  },
  poner: {
    presente: ['pongo','pones','pone','ponemos','ponéis','ponen'],
    preterito: ['puse','pusiste','puso','pusimos','pusisteis','pusieron'],
    futuro: ['pondré','pondrás','pondrá','pondremos','pondréis','pondrán'],
    subjuntivo: ['ponga','pongas','ponga','pongamos','pongáis','pongan'],
    participio: 'puesto',
  },
  venir: {
    presente: ['vengo','vienes','viene','venimos','venís','vienen'],
    preterito: ['vine','viniste','vino','vinimos','vinisteis','vinieron'],
    futuro: ['vendré','vendrás','vendrá','vendremos','vendréis','vendrán'],
    subjuntivo: ['venga','vengas','venga','vengamos','vengáis','vengan'],
    gerundio: 'viniendo',
  },
  salir: {
    presente: ['salgo','sales','sale','salimos','salís','salen'],
    futuro: ['saldré','saldrás','saldrá','saldremos','saldréis','saldrán'],
    subjuntivo: ['salga','salgas','salga','salgamos','salgáis','salgan'],
  },
  dar: {
    presente: ['doy','das','da','damos','dais','dan'],
    preterito: ['di','diste','dio','dimos','disteis','dieron'],
    subjuntivo: ['dé','des','dé','demos','deis','den'],
  },
  ver: {
    presente: ['veo','ves','ve','vemos','veis','ven'],
    preterito: ['vi','viste','vio','vimos','visteis','vieron'],
    imperfecto: ['veía','veías','veía','veíamos','veíais','veían'],
    subjuntivo: ['vea','veas','vea','veamos','veáis','vean'],
    participio: 'visto',
  },
  dormir: {
    presente: ['duermo','duermes','duerme','dormimos','dormís','duermen'],
    preterito: ['dormí','dormiste','durmió','dormimos','dormisteis','durmieron'],
    subjuntivo: ['duerma','duermas','duerma','durmamos','durmáis','duerman'],
    gerundio: 'durmiendo',
  },
  seguir: {
    presente: ['sigo','sigues','sigue','seguimos','seguís','siguen'],
    gerundio: 'siguiendo',
  },
  sentir: {
    presente: ['siento','sientes','siente','sentimos','sentís','sienten'],
    gerundio: 'sintiendo',
  },
  conocer: {
    presente: ['conozco','conoces','conoce','conocemos','conocéis','conocen'],
    subjuntivo: ['conozca','conozcas','conozca','conozcamos','conozcáis','conozcan'],
  },
  pensar: {
    presente: ['pienso','piensas','piensa','pensamos','pensáis','piensan'],
    subjuntivo: ['piense','pienses','piense','pensemos','penséis','piensen'],
  },
  volver: {
    presente: ['vuelvo','vuelves','vuelve','volvemos','volvéis','vuelven'],
    subjuntivo: ['vuelva','vuelvas','vuelva','volvamos','volváis','vuelvan'],
    participio: 'vuelto',
  },
  escribir: { participio: 'escrito' },
  abrir: { participio: 'abierto' },
  morir: {
    presente: ['muero','mueres','muere','morimos','morís','mueren'],
    participio: 'muerto', gerundio: 'muriendo',
  },
  romper: { participio: 'roto' },
};

function esRegularPresente(stem, group) {
  if (group === 'ar') return [stem+'o', stem+'as', stem+'a', stem+'amos', stem+'áis', stem+'an'];
  if (group === 'er') return [stem+'o', stem+'es', stem+'e', stem+'emos', stem+'éis', stem+'en'];
  return [stem+'o', stem+'es', stem+'e', stem+'imos', stem+'ís', stem+'en'];
}

function esRegularPreterito(stem, group) {
  if (group === 'ar') return [stem+'é', stem+'aste', stem+'ó', stem+'amos', stem+'asteis', stem+'aron'];
  return [stem+'í', stem+'iste', stem+'ió', stem+'imos', stem+'isteis', stem+'ieron'];
}

function esRegularImperfecto(stem, group) {
  if (group === 'ar') return [stem+'aba', stem+'abas', stem+'aba', stem+'ábamos', stem+'abais', stem+'aban'];
  return [stem+'ía', stem+'ías', stem+'ía', stem+'íamos', stem+'íais', stem+'ían'];
}

function esRegularFuturo(inf) {
  return [inf+'é', inf+'ás', inf+'á', inf+'emos', inf+'éis', inf+'án'];
}

function esRegularCondicional(inf) {
  return [inf+'ía', inf+'ías', inf+'ía', inf+'íamos', inf+'íais', inf+'ían'];
}

function esRegularSubjuntivo(stem, group) {
  if (group === 'ar') return [stem+'e', stem+'es', stem+'e', stem+'emos', stem+'éis', stem+'en'];
  return [stem+'a', stem+'as', stem+'a', stem+'amos', stem+'áis', stem+'an'];
}

function conjugateSpanish(verb) {
  verb = verb.toLowerCase().trim();
  const pronouns = ['yo', 'tú', 'él/ella', 'nosotros', 'vosotros', 'ellos'];
  const irr = ES_IRREGULARS[verb];
  let group, stem;

  if (verb.endsWith('ar')) { group = 'ar'; stem = verb.slice(0, -2); }
  else if (verb.endsWith('er')) { group = 'er'; stem = verb.slice(0, -2); }
  else if (verb.endsWith('ir')) { group = 'ir'; stem = verb.slice(0, -2); }
  else return null;

  const gerundio = irr?.gerundio || (group === 'ar' ? stem+'ando' : stem+'iendo');
  const participio = irr?.participio || (group === 'ar' ? stem+'ado' : stem+'ido');

  const result = {};

  result['Indicativo'] = {
    'Presente': irr?.presente || esRegularPresente(stem, group),
    'Pretérito': irr?.preterito || esRegularPreterito(stem, group),
    'Imperfecto': irr?.imperfecto || esRegularImperfecto(stem, group),
    'Futuro': irr?.futuro || esRegularFuturo(verb),
    'Condicional': esRegularCondicional(verb),
    'Pretérito Perfecto': ['he','has','ha','hemos','habéis','han'].map(h => h + ' ' + participio),
  };

  result['Subjuntivo'] = {
    'Presente': irr?.subjuntivo || esRegularSubjuntivo(stem, group),
  };

  result['Formas no personales'] = {
    'Infinitivo': [verb],
    'Gerundio': [gerundio],
    'Participio': [participio],
  };

  if (irr?.imperativo) {
    result['Imperativo'] = { 'Afirmativo': irr.imperativo };
  }

  return result;
}

// ── SEARCH IN GENERATED CONJUGATIONS ──
function searchInConjugation(input, lang) {
  input = input.toLowerCase().trim();
  const results = [];

  if (lang === 'en') {
    // Try common English verbs
    const verbs = Object.keys(EN_IRREGULARS).concat([
      'play','work','walk','talk','look','watch','listen','open','close','start',
      'stop','help','need','want','like','love','hate','try','use','move','live',
      'study','learn','travel','cook','clean','dance','jump','pull','push','ask',
      'answer','call','carry','change','check','count','cover','cross','cry','cut',
    ]);
    const unique = [...new Set(verbs)];

    for (const verb of unique) {
      const conj = conjugateEnglish(verb);
      for (const mode in conj) {
        for (const tense in conj[mode]) {
          const forms = conj[mode][tense];
          const idx = forms.findIndex(f => f.toLowerCase() === input);
          if (idx >= 0) {
            results.push({ infinitif: verb, mode, temps: tense, personne: idx + 1, verbe: input });
          }
        }
      }
      if (results.length > 0) break;
    }
  }

  if (lang === 'es') {
    const verbs = Object.keys(ES_IRREGULARS).concat([
      'hablar','comer','vivir','trabajar','estudiar','comprar','vender','correr',
      'leer','aprender','beber','cantar','bailar','jugar','caminar','cocinar',
      'limpiar','mirar','escuchar','llamar','llevar','pasar','quedar','tocar',
    ]);
    const unique = [...new Set(verbs)];

    for (const verb of unique) {
      const conj = conjugateSpanish(verb);
      if (!conj) continue;
      for (const mode in conj) {
        for (const tense in conj[mode]) {
          const forms = conj[mode][tense];
          const idx = forms.findIndex(f => f.toLowerCase() === input);
          if (idx >= 0) {
            results.push({ infinitif: verb, mode, temps: tense, personne: idx + 1, verbe: input });
          }
        }
      }
      if (results.length > 0) break;
    }
  }

  return results;
}
