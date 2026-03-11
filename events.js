// ═══════════════════════════════════════════════════════════════
// FIGHTVIBES — EVENT DATA
// ═══════════════════════════════════════════════════════════════
// Fight IDs are STABLE SLOT IDs — never change, even if a fighter
// is replaced. Format: {eventId}-{slot number}
// When a fighter is replaced: update f1/f2 name + set replaced:true
// on the old fighter, Supabase data stays attached to the slot ID.
//
// To add an event: copy a block, give it a new id, fill in fights.
// To replace a fighter: just change the name. Done.
// ═══════════════════════════════════════════════════════════════

const EVENTS = [

  // ─────────────────────────────────────────────────────────────
  // UFC 326 · Mar 7, 2026 · Las Vegas
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ufc326',
    name: 'UFC 326',
    subtitle: 'Holloway vs. Oliveira 2',
    date: 'Mar 7', day: 7, year: 2026,
    venue: 'T-Mobile Arena · Las Vegas',
    timeUTC: '2026-03-08T03:00:00Z',
    winOverride: '2026-04-30T23:59:00Z',
    fotn: { fightId: 'ufc326-09', note: 'Performance bonuses via Tapology' },
    tabs: {
      main: { label: 'Main Card', fights: [
        { id: 'ufc326-01', f1: 'Max Holloway',      f2: 'Charles Oliveira',   cls: 'Lightweight',       title: 'BMF Title' },
        { id: 'ufc326-02', f1: 'Caio Borralho',     f2: 'Reinier de Ridder',  cls: 'Middleweight',      title: '' },
        { id: 'ufc326-03', f1: 'Raul Rosas Jr.',    f2: 'Rob Font',           cls: 'Bantamweight',      title: '' },
        { id: 'ufc326-04', f1: 'Drew Dober',        f2: 'Michael Johnson',    cls: 'Lightweight',       title: '' },
        { id: 'ufc326-05', f1: 'Gregory Rodrigues', f2: 'Brunno Ferreira',    cls: 'Middleweight',      title: '' },
      ]},
      prelims: { label: 'Prelims', fights: [
        { id: 'ufc326-06', f1: 'Cody Garbrandt',    f2: 'Xiao Long',          cls: 'Bantamweight',      title: '' },
        { id: 'ufc326-07', f1: 'Donte Johnson',     f2: 'Cody Brundage',      cls: 'Middleweight',      title: '' },
        { id: 'ufc326-08', f1: 'Alberto Montes',    f2: 'Ricky Turcios',      cls: 'Featherweight',     title: '' },
        { id: 'ufc326-09', f1: 'Nyamjargal Tumendemberel', f2: 'Cody Durden', cls: 'Flyweight',         title: '' },
      ]},
      early: { label: 'Early Prelims', fights: [
        { id: 'ufc326-10', f1: 'Rodolfo Bellato',   f2: 'Luke Fernandez',     cls: 'Light Heavyweight', title: '' },
        { id: 'ufc326-11', f1: 'Diyar Nurgozhay',   f2: 'Rafael Tobias',      cls: 'Welterweight',      title: '' },
        { id: 'ufc326-12', f1: 'Su Mudaerji',       f2: 'Jesus Aguilar',      cls: 'Flyweight',         title: '' },
      ]},
    },
  },

  // ─────────────────────────────────────────────────────────────
  // UFC Fight Night · Feb 28, 2026 · Mexico City
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ufcfn-moreno',
    name: 'UFC Fight Night',
    subtitle: 'Moreno vs. Kavanagh',
    date: 'Feb 28', day: 28, year: 2026,
    venue: 'Foro Sol · Mexico City',
    timeUTC: '2026-03-01T02:00:00Z',
    winOverride: '2026-04-30T23:59:00Z',
    fotn: { fightId: 'ufcfn-moreno-01', note: '' },
    tabs: {
      main: { label: 'Main Card', fights: [
        { id: 'ufcfn-moreno-01', f1: "Lone'er Kavanagh",  f2: 'Brandon Moreno',             cls: 'Flyweight',       title: '' },
        { id: 'ufcfn-moreno-02', f1: 'David Martínez',    f2: 'Marlon Vera',                cls: 'Bantamweight',    title: '' },
        { id: 'ufcfn-moreno-03', f1: 'King Green',        f2: 'Daniel Zellhuber',           cls: 'Lightweight',     title: '' },
        { id: 'ufcfn-moreno-04', f1: 'Édgar Cháirez',    f2: 'Felipe Bunes',               cls: 'Bantamweight',    title: '' },
        { id: 'ufcfn-moreno-05', f1: 'Imanol Rodríguez', f2: 'Kevin Borjas',               cls: 'Lightweight',     title: '' },
        { id: 'ufcfn-moreno-06', f1: 'Santiago Luna',     f2: 'Angel Pacheco',              cls: 'Featherweight',   title: '' },
      ]},
      prelims: { label: 'Prelims', fights: [
        { id: 'ufcfn-moreno-07', f1: 'Ryan Gandra',       f2: 'José Medina',               cls: 'Featherweight',   title: '' },
        { id: 'ufcfn-moreno-08', f1: 'Ailín Pérez',      f2: 'Macy Chiasson',              cls: 'W. Featherweight',title: '' },
        { id: 'ufcfn-moreno-09', f1: 'Cristian Quiñónez',f2: 'Kris Moutinho',             cls: 'Bantamweight',    title: '' },
        { id: 'ufcfn-moreno-10', f1: 'Javier Reyes',      f2: 'Douglas Silva de Andrade',  cls: 'Bantamweight',    title: '' },
      ]},
      early: { label: 'Early Prelims', fights: [
        { id: 'ufcfn-moreno-11', f1: 'Regina Tarin',      f2: 'Ernesta Kareckaitė',        cls: 'W. Strawweight',  title: '' },
        { id: 'ufcfn-moreno-12', f1: 'Francis Marshall',  f2: 'Erik Silva',                cls: 'Featherweight',   title: '' },
        { id: 'ufcfn-moreno-13', f1: 'Damian Pinas',      f2: 'Wesley Schultz',            cls: 'Lightweight',     title: '' },
      ]},
    },
  },

  // ─────────────────────────────────────────────────────────────
  // UFC 325 · Jan 31, 2026 · Sydney
  // NOTE: Verify this card — data may be incomplete
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ufc325',
    name: 'UFC 325',
    subtitle: 'Volkanovski vs. Lopes 2',
    date: 'Jan 31', day: 31, year: 2026,
    venue: 'Qudos Bank Arena · Sydney',
    timeUTC: '2026-02-01T10:00:00Z',
    winOverride: '2026-04-30T23:59:00Z',
    fotn: { fightId: 'ufc325-01', note: '' },
    tabs: {
      main: { label: 'Main Card', fights: [
        { id: 'ufc325-01', f1: 'Alexander Volkanovski', f2: 'Diego Lopes',      cls: 'Featherweight',     title: 'FW Title' },
        { id: 'ufc325-02', f1: 'Dan Hooker',            f2: 'Dricus du Plessis',cls: 'Middleweight',      title: 'MW Title' },
        { id: 'ufc325-03', f1: 'Robert Whittaker',      f2: 'Ikram Aliskerov',  cls: 'Middleweight',      title: '' },
      ]},
      prelims: { label: 'Prelims', fights: [
        { id: 'ufc325-04', f1: 'Justin Tafa',           f2: 'Justin Rodrigues', cls: 'Heavyweight',       title: '' },
        { id: 'ufc325-05', f1: 'Tyson Pedro',           f2: 'Marcin Prachnio',  cls: 'Light Heavyweight', title: '' },
      ]},
      early: { label: 'Early Prelims', fights: [
        { id: 'ufc325-06', f1: 'Jamie Mullarkey',       f2: 'Dean Barry',       cls: 'Lightweight',       title: '' },
      ]},
    },
  },

  // ─────────────────────────────────────────────────────────────
  // UFC 324 · Jan 24, 2026 · Las Vegas
  // NOTE: Verify this card — data may be incomplete
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ufc324',
    name: 'UFC 324',
    subtitle: 'Gaethje vs. Pimblett',
    date: 'Jan 24', day: 24, year: 2026,
    venue: 'T-Mobile Arena · Las Vegas',
    timeUTC: '2026-01-25T03:00:00Z',
    winOverride: '2026-04-30T23:59:00Z',
    fotn: { fightId: 'ufc324-01', note: '' },
    tabs: {
      main: { label: 'Main Card', fights: [
        { id: 'ufc324-01', f1: 'Justin Gaethje',    f2: 'Paddy Pimblett',       cls: 'Lightweight',   title: '' },
        { id: 'ufc324-02', f1: 'Aljamain Sterling', f2: 'Umar Nurmagomedov',    cls: 'Bantamweight',  title: 'BW Title' },
        { id: 'ufc324-03', f1: 'Chris Weidman',     f2: 'Brendan Allen',        cls: 'Middleweight',  title: '' },
      ]},
      prelims: { label: 'Prelims', fights: [
        { id: 'ufc324-04', f1: 'Song Yadong',       f2: 'Merab Dvalishvili',    cls: 'Bantamweight',  title: '' },
        { id: 'ufc324-05', f1: 'Bo Nickal',         f2: 'Eryk Anders',          cls: 'Middleweight',  title: '' },
      ]},
      early: { label: 'Early Prelims', fights: [
        { id: 'ufc324-06', f1: 'Michael Morales',   f2: 'Randy Brown',          cls: 'Welterweight',  title: '' },
      ]},
    },
  },

];

// ─────────────────────────────────────────────────────────────
// UPCOMING EVENTS
// ─────────────────────────────────────────────────────────────
const UPCOMING = [

  {
    id: 'ufcfn-emmett',
    date: 'Mar 14', day: 14, year: 2026,
    name: 'UFC Fight Night', main: 'Emmett vs. Vallejos',
    venue: 'UFC Apex · Las Vegas',
    timeUTC: '2026-03-15T01:00:00Z',
    tabs: {
      main: { label: 'Main Card', fights: [
        { id: 'ufcfn-emmett-01', f1: 'Josh Emmett',    f2: 'Leandro Vallejos',  cls: 'Featherweight', title: '' },
        { id: 'ufcfn-emmett-02', f1: 'Randy Brown',    f2: 'Wellington Turman', cls: 'Welterweight',  title: '' },
        { id: 'ufcfn-emmett-03', f1: 'TJ Brown',       f2: 'Hunter Azure',      cls: 'Featherweight', title: '' },
        { id: 'ufcfn-emmett-04', f1: 'Cody Durden',    f2: 'Nate Maness',       cls: 'Flyweight',     title: '' },
      ]},
      prelims: { label: 'Prelims', fights: [
        { id: 'ufcfn-emmett-05', f1: 'Tanner Boser',   f2: 'Jhonata Diniz',     cls: 'Heavyweight',   title: '' },
        { id: 'ufcfn-emmett-06', f1: 'Tresean Gore',   f2: 'Josh Fremd',        cls: 'Middleweight',  title: '' },
        { id: 'ufcfn-emmett-07', f1: 'Jessica Penne',  f2: 'Luana Pinheiro',   cls: 'Strawweight',   title: '' },
      ]},
      early: { label: 'Early Prelims', fights: [
        { id: 'ufcfn-emmett-08', f1: 'AJ Dobson',      f2: 'Alen Amedovski',    cls: 'Middleweight',  title: '' },
        { id: 'ufcfn-emmett-09', f1: 'Marcelo Rojo',   f2: 'Kyle Nelson',       cls: 'Featherweight', title: '' },
      ]},
    },
  },

  {
    id: 'ufcfn-evloev',
    date: 'Mar 21', day: 21, year: 2026,
    name: 'UFC Fight Night', main: 'Evloev vs. Murphy',
    venue: 'O2 Arena · London',
    timeUTC: '2026-03-21T17:00:00Z',
    tabs: {
      main: { label: 'Main Card', fights: [
        { id: 'ufcfn-evloev-01', f1: 'Movsar Evloev',   f2: 'Lerone Murphy',   cls: 'Featherweight', title: '' },
        { id: 'ufcfn-evloev-02', f1: 'Paddy Pimblett',  f2: 'TBA',            cls: 'Lightweight',   title: '' },
        { id: 'ufcfn-evloev-03', f1: 'Molly McCann',    f2: 'TBA',            cls: 'Flyweight',     title: '' },
      ]},
      prelims: { label: 'Prelims', fights: [
        { id: 'ufcfn-evloev-04', f1: 'Muhammad Mokaev', f2: 'TBA',            cls: 'Flyweight',     title: '' },
      ]},
      early: { label: 'Early Prelims', fights: [] },
    },
  },

  {
    id: 'ufcfn-adesanya',
    date: 'Mar 28', day: 28, year: 2026,
    name: 'UFC Fight Night', main: 'Adesanya vs. Pyfer',
    venue: 'Climate Pledge Arena · Seattle',
    timeUTC: '2026-03-29T02:00:00Z',
    tabs: {
      main: { label: 'Main Card', fights: [
        { id: 'ufcfn-adesanya-01', f1: 'Israel Adesanya', f2: 'Joe Pyfer',   cls: 'Middleweight',  title: '' },
        { id: 'ufcfn-adesanya-02', f1: 'Kyler Phillips',  f2: 'TBA',         cls: 'Bantamweight',  title: '' },
      ]},
      prelims: { label: 'Prelims', fights: [] },
      early:   { label: 'Early Prelims', fights: [] },
    },
  },

  {
    id: 'ufcfn-moicano',
    date: 'Apr 4', day: 4, year: 2026,
    name: 'UFC Fight Night', main: 'Moicano vs. Duncan',
    venue: 'TBA', timeUTC: '2026-04-05T01:00:00Z',
    tabs: {
      main:   { label: 'Main Card', fights: [
        { id: 'ufcfn-moicano-01', f1: 'Renato Moicano', f2: 'Erin Duncan', cls: 'Lightweight', title: '' },
      ]},
      prelims: { label: 'Prelims', fights: [] },
      early:   { label: 'Early Prelims', fights: [] },
    },
  },

  {
    id: 'ufc327',
    date: 'Apr 11', day: 11, year: 2026,
    name: 'UFC 327', main: 'Procházka vs. Ulberg',
    venue: 'Kaseya Center · Miami',
    timeUTC: '2026-04-12T02:00:00Z',
    tabs: {
      main: { label: 'Main Card', fights: [
        { id: 'ufc327-01', f1: 'Jiří Procházka', f2: 'Carlos Ulberg', cls: 'Light Heavyweight', title: 'LHW Title' },
      ]},
      prelims: { label: 'Prelims', fights: [] },
      early:   { label: 'Early Prelims', fights: [] },
    },
  },

  {
    id: 'ufcfn-burns',
    date: 'Apr 18', day: 18, year: 2026,
    name: 'UFC Fight Night', main: 'Burns vs. Malott',
    venue: 'TBA', timeUTC: '2026-04-19T01:00:00Z',
    tabs: {
      main: { label: 'Main Card', fights: [
        { id: 'ufcfn-burns-01', f1: 'Gilbert Burns', f2: 'Carlos Malott', cls: 'Welterweight', title: '' },
      ]},
      prelims: { label: 'Prelims', fights: [] },
      early:   { label: 'Early Prelims', fights: [] },
    },
  },

  {
    id: 'ufcfn-brady',
    date: 'Apr 25', day: 25, year: 2026,
    name: 'UFC Fight Night', main: 'Brady vs. Buckley',
    venue: 'TBA', timeUTC: '2026-04-26T01:00:00Z',
    tabs: {
      main: { label: 'Main Card', fights: [
        { id: 'ufcfn-brady-01', f1: 'Sean Brady', f2: 'Jalin Turner', cls: 'Welterweight', title: '' },
      ]},
      prelims: { label: 'Prelims', fights: [] },
      early:   { label: 'Early Prelims', fights: [] },
    },
  },

  {
    id: 'ufcfn-jdm',
    date: 'May 2', day: 2, year: 2026,
    name: 'UFC Fight Night', main: 'Della Maddalena vs. Prates',
    venue: 'RAC Arena · Perth',
    timeUTC: '2026-05-03T11:00:00Z',
    tabs: {
      main: { label: 'Main Card', fights: [
        { id: 'ufcfn-jdm-01', f1: 'Jack Della Maddalena', f2: 'Carlos Prates', cls: 'Welterweight', title: '' },
      ]},
      prelims: { label: 'Prelims', fights: [] },
      early:   { label: 'Early Prelims', fights: [] },
    },
  },

];
