/*!
 *
 * Bryntum Grid 3.1.5 (TRIAL VERSION)
 *
 * Copyright(c) 2020 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
!(function (e, r) { typeof exports === 'object' && typeof module === 'object' ? module.exports = r() : typeof define === 'function' && define.amd ? define('examples.SvSE', [], r) : typeof exports === 'object' ? exports['examples.SvSE'] = r() : (e.bryntum = e.bryntum || {}, e.bryntum.locales = e.bryntum.locales || {}, e.bryntum.locales['examples.SvSE'] = r()) }(window, function () { return (function (e) { var r = {}; function t (n) { if (r[n]) return r[n].exports; var a = r[n] = { i: n, l: !1, exports: {} }; return e[n].call(a.exports, a, a.exports, t), a.l = !0, a.exports } return t.m = e, t.c = r, t.d = function (e, r, n) { t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n }) }, t.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }) }, t.t = function (e, r) { if (1 & r && (e = t(e)), 8 & r) return e; if (4 & r && typeof e === 'object' && e && e.__esModule) return e; var n = Object.create(null); if (t.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & r && typeof e !== 'string') for (var a in e)t.d(n, a, function (r) { return e[r] }.bind(null, a)); return n }, t.n = function (e) { var r = e && e.__esModule ? function () { return e.default } : function () { return e }; return t.d(r, 'a', r), r }, t.o = function (e, r) { return Object.prototype.hasOwnProperty.call(e, r) }, t.p = '', t(t.s = 6) }({ 2: function (e, r, t) { 'use strict'; t.r(r); var n = { localeName: 'SvSE', localeDesc: 'Svenska', Object: { Yes: 'Ja', No: 'Nej', Cancel: 'Avbryt', Custom: 'Anpassad' }, InstancePlugin: { fnMissing: function (e) { return 'Försöker att länka fn '.concat(e.plugIntoName, '#').concat(e.fnName, ', men plugin fn ').concat(e.pluginName, '#').concat(e.fnName, ' finns inte') }, overrideFnMissing: function (e) { return 'Försöker att skriva över fn '.concat(e.plugIntoName, '#').concat(e.fnName, ', men plugin fn ').concat(e.pluginName, '#').concat(e.fnName, ' finns inte') } }, Field: { badInput: 'Ogiltigt värde', patternMismatch: 'Värdet ska matcha ett specifikt mönster', rangeOverflow: function (e) { return 'Värdet måste vara mindre än eller lika med '.concat(e.max) }, rangeUnderflow: function (e) { return 'Värdet måste vara större än eller lika med '.concat(e.min) }, stepMismatch: 'Värdet bör passa steget', tooLong: 'Värdet för långt', tooShort: 'Värdet för kort', typeMismatch: 'Värdet är inte i förväntat format', valueMissing: 'Detta fält är obligatoriskt', invalidValue: 'Ogiltigt värde', minimumValueViolation: 'För lågt värde', maximumValueViolation: 'För högt värde', fieldRequired: 'Detta fält är obligatoriskt', validateFilter: 'Värdet måste väljas från listan' }, DateField: { invalidDate: 'Ogiltigt datum' }, TimeField: { invalidTime: 'Ogiltig tid' }, DateHelper: { locale: 'sv-SE', shortWeek: 'V', shortQuarter: 'q', week: 'Vecka', weekStartDay: 1, unitNames: [{ single: 'millisekund', plural: 'millisekunder', abbrev: 'ms' }, { single: 'sekund', plural: 'sekunder', abbrev: 's' }, { single: 'minut', plural: 'minuter', abbrev: 'min' }, { single: 'timme', plural: 'timmar', abbrev: 'tim' }, { single: 'dag', plural: 'dagar', abbrev: 'd' }, { single: 'vecka', plural: 'vecka', abbrev: 'v' }, { single: 'månad', plural: 'månader', abbrev: 'mån' }, { single: 'kvartal', plural: 'kvartal', abbrev: 'kv' }, { single: 'år', plural: 'år', abbrev: 'år' }], unitAbbreviations: [['ms', 'mil'], ['s', 'sek'], ['m', 'min'], ['t', 'tim', 'h'], ['d'], ['v', 've'], ['må', 'mån'], ['kv', 'kva'], []], ordinalSuffix: function (e) { var r = e[e.length - 1]; return e + (e === '11' || e === '12' || r !== '1' && r !== '2' ? 'e' : 'a') }, parsers: { L: 'YYYY-MM-DD', LT: 'HH:mm' } }, PagingToolbar: { firstPage: 'Gå till första sidan', prevPage: 'Gå till föregående sida', page: 'Sida', nextPage: 'Gå till nästa sida', lastPage: 'Gå till sista sidan', reload: 'Ladda om den aktuella sidan', noRecords: 'Inga rader att visa', pageCountTemplate: function (e) { return 'av '.concat(e.lastPage) }, summaryTemplate: function (e) { return 'Visar poster '.concat(e.start, ' - ').concat(e.end, ' av ').concat(e.allCount) } }, List: { loading: 'Laddar...' } }; var a = { TemplateColumn: { noTemplate: 'TemplateColumn kräver en template', noFunction: 'TemplateColumn.template måste vara en funktion' }, ColumnStore: { columnTypeNotFound: function (e) { return "Kolumntypen '".concat(e.type, "' är inte registrerad") } }, ColumnPicker: { columnsMenu: 'Kolumner', hideColumn: 'Dölj kolumn', hideColumnShort: 'Dölj' }, Filter: { applyFilter: 'Använd filter', editFilter: 'Redigera filter', filter: 'Filter', on: 'På', before: 'Före', after: 'Efter', equals: 'Lika med', lessThan: 'Mindre än', moreThan: 'Större än', removeFilter: 'Ta bort filter' }, FilterBar: { enableFilterBar: 'Visa filterrad', disableFilterBar: 'Dölj filterrad' }, Group: { groupAscending: 'Gruppera stigande', groupDescending: 'Gruppera fallande', groupAscendingShort: 'Stigande', groupDescendingShort: 'Fallande', stopGrouping: 'Sluta gruppera', stopGroupingShort: 'Sluta' }, Search: { searchForValue: 'Sök efter värde' }, Sort: { sortAscending: 'Sortera stigande', sortDescending: 'Sortera fallande', multiSort: 'Multisortering', addSortAscending: 'Lägg till stigande', addSortDescending: 'Lägg till fallande', toggleSortAscending: 'Ändra till stigande', toggleSortDescending: 'Ändra till fallande', removeSorter: 'Ta bort sorterare', sortAscendingShort: 'Stigande', sortDescendingShort: 'Fallande', removeSorterShort: 'Ta bort', addSortAscendingShort: '+ Stigande', addSortDescendingShort: '+ Fallande' }, Tree: { noTreeColumn: 'För att använda featuren tree måste en kolumn vara konfigurerad med tree: true' }, Grid: { featureNotFound: function (e) { return "Featuren '".concat(e, "' är inte tillgänglig, kontrollera att den är importerad") }, invalidFeatureNameFormat: function (e) { return "Ogiltigt funktionsnamn '".concat(e, "' måste börja med en liten bokstav") } }, GridBase: { loadFailedMessage: 'Ett fel har uppstått, vänligen försök igen!', syncFailedMessage: 'Datasynkronisering misslyckades!', serverResponseLabel: 'Serversvar:', unspecifiedFailure: 'Ospecificerat fel', unknownFailure: 'Okänt fel', networkFailure: 'Nätverksfel', parseFailure: 'Det gick inte att bearbeta serversvaret', loadMask: 'Laddar...', syncMask: 'Sparar ändringar, vänligen vänta...', noRows: 'Inga rader att visa', removeRow: 'Ta bort rad', removeRows: 'Ta bort rader', moveColumnLeft: 'Flytta till vänstra sektionen', moveColumnRight: 'Flytta till högra sektionen' }, PdfExport: { 'Waiting for response from server...': 'Väntar på svar från servern...', 'Export failed': 'Export misslyckades', 'Server error': 'Serverfel' }, ExportDialog: { width: '40em', labelWidth: '13em', exportSettings: 'Exportera inställningar', export: 'Exportera', exporterType: 'Styra sidbrytningarna', cancel: 'Avbryt', fileFormat: 'Filformat', rows: 'Кader', alignRows: 'Anpassa raderna', columns: 'Kolumner', paperFormat: 'Pappersformat', orientation: 'Orientering' }, ExportRowsCombo: { all: 'Alla rader', visible: 'Synliga rader' }, ExportOrientationCombo: { portrait: 'Stående', landscape: 'Liggande' }, SinglePageExporter: { singlepage: 'En sida' }, MultiPageExporter: { multipage: 'Flera sidor', exportingPage: function (e) { var r = e.currentPage; var t = e.totalPages; return 'Exporterar sidan '.concat(r, '/').concat(t) } } }; for (var o in n)a[o] = n[o]; r.default = a }, 6: function (e, r, t) { 'use strict'; t.r(r); t(2); r.default = { extends: 'SvSE', YesNo: { Yes: 'Ja', No: 'Nej' }, Column: { Name: 'Namn', Age: 'Ålder', City: 'Ort', Food: 'Mat', Color: 'Färg', 'Color (not sortable)': 'Färg (ej sorterbar)', Custom: 'Anpassad', Link: 'Länk', 'First name': 'Förnamn', Surname: 'Efternamn', Team: 'Lag', 'Team (not filterable)': 'Lag (ej filtrerbar)', Score: 'Poäng', Rank: 'Rankning', Percent: 'Procent', Birthplace: 'Födelseort', Start: 'Start', Finish: 'Slut', 'Finish (readonly)': 'Slut (läs bara)', Time: 'Tid', Template: 'Mall', Date: 'Datum', Check: 'Kryss', Widget: 'Widget', Contact: 'Kontakt', Favorites: 'Favoriter', 'Customer#': 'Kundnummer', When: 'När', Brand: 'Märke', Model: 'Modell', 'Personal best': 'Personbästa', 'Current rank': 'Aktuell rankning', Hometown: 'Hemort', Satisfaction: 'Nöjdhet', 'Favorite color': 'Favoritfärg', Rating: 'Betyg', Cooks: 'Tillagar', Birthday: 'Födelsedag' }, Shared: { 'Locale changed': 'Språk ändrat' }, Button: { 'Add column': 'Lägg till kolumn', 'Remove column': 'Ta bort kolumn' }, MenuItem: { 'Custom header item': 'Anpassad header-meny', 'Custom cell action': 'Anpassad cell-åtgärd' }, Combo: { 'Group by': 'Gruppera på' }, Slider: { 'Font size': 'Fontstorlek' } } } })).default }))