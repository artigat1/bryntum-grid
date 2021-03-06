/*!
 *
 * Bryntum Grid 3.1.5 (TRIAL VERSION)
 *
 * Copyright(c) 2020 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
!(function (e, n) { typeof exports === 'object' && typeof module === 'object' ? module.exports = n() : typeof define === 'function' && define.amd ? define('Nl', [], n) : typeof exports === 'object' ? exports.Nl = n() : (e.bryntum = e.bryntum || {}, e.bryntum.locales = e.bryntum.locales || {}, e.bryntum.locales.Nl = n()) }(window, function () { return (function (e) { var n = {}; function r (t) { if (n[t]) return n[t].exports; var a = n[t] = { i: t, l: !1, exports: {} }; return e[t].call(a.exports, a, a.exports, r), a.l = !0, a.exports } return r.m = e, r.c = n, r.d = function (e, n, t) { r.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t }) }, r.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }) }, r.t = function (e, n) { if (1 & n && (e = r(e)), 8 & n) return e; if (4 & n && typeof e === 'object' && e && e.__esModule) return e; var t = Object.create(null); if (r.r(t), Object.defineProperty(t, 'default', { enumerable: !0, value: e }), 2 & n && typeof e !== 'string') for (var a in e)r.d(t, a, function (n) { return e[n] }.bind(null, a)); return t }, r.n = function (e) { var n = e && e.__esModule ? function () { return e.default } : function () { return e }; return r.d(n, 'a', n), n }, r.o = function (e, n) { return Object.prototype.hasOwnProperty.call(e, n) }, r.p = '', r(r.s = 0) }([function (e, n, r) { 'use strict'; r.r(n); var t = { localeName: 'Nl', localeDesc: 'Nederlands', Object: { Yes: 'Ja', No: 'Nee', Cancel: 'Annuleren', Custom: 'Gewoonte' }, InstancePlugin: { fnMissing: function (e) { return 'Het lukt niet fn '.concat(e.plugIntoName, '#').concat(e.fnName, ' te schakelen, de plugin fn ').concat(e.pluginName, '#').concat(e.fnName, ' bestaat niet') }, overrideFnMissing: function (e) { return 'Het lukt niet fn te overerven '.concat(e.plugIntoName, '#').concat(e.fnName, ', de plugin fn ').concat(e.pluginName, '#').concat(e.fnName, ' bestaat niet') } }, Field: { badInput: 'Ongeldige veldwaarde', patternMismatch: 'Waarde moet overeenkomen met een specifiek patroon', rangeOverflow: function (e) { return 'Waarde moet kleiner zijn dan of gelijk aan '.concat(e.max) }, rangeUnderflow: function (e) { return 'Waarde moet groter zijn dan of gelijk aan '.concat(e.min) }, stepMismatch: 'Waarde moet bij de stap passen', tooLong: 'Waarde moet korter zijn', tooShort: 'Waarde moet langer zijn', typeMismatch: 'Waarde moet een speciaal formaat hebben', valueMissing: 'Dit veld is verplicht', invalidValue: 'Ongeldige veldwaarde', minimumValueViolation: 'Minimale waarde schending', maximumValueViolation: 'Maximale waarde schending', fieldRequired: 'Dit veld is verplicht', validateFilter: 'Waarde moet worden geselecteerd in de lijst' }, DateField: { invalidDate: 'Ongeldige datuminvoer' }, TimeField: { invalidTime: 'Ongeldige tijdsinvoer' }, DateHelper: { locale: 'nl', shortWeek: 'w', shortQuarter: 'kw', week: 'Week', weekStartDay: 1, unitNames: [{ single: 'ms', plural: 'ms', abbrev: 'ms' }, { single: 'seconde', plural: 'seconden', abbrev: 's' }, { single: 'minuut', plural: 'minuten', abbrev: 'm' }, { single: 'uur', plural: 'uren', abbrev: 'u' }, { single: 'dag', plural: 'dagen', abbrev: 'd' }, { single: 'week', plural: 'weken', abbrev: 'w' }, { single: 'maand', plural: 'maanden', abbrev: 'ma' }, { single: 'kwartaal', plural: 'kwartalen', abbrev: 'kw' }, { single: 'jaar', plural: 'jaren', abbrev: 'j' }], unitAbbreviations: [['mil'], ['s', 'sec'], ['m', 'min'], ['u'], ['d'], ['w', 'wk'], ['ma', 'mnd', 'm'], ['k', 'kwar', 'kwt', 'kw'], ['j', 'jr']], parsers: { L: 'DD-MM-YYYY', LT: 'HH:mm' }, ordinalSuffix: function (e) { return e } }, PagingToolbar: { firstPage: 'Ga naar de eerste pagina', prevPage: 'Ga naar de vorige pagina', page: 'Pagina', nextPage: 'Ga naar de volgende pagina', lastPage: 'Ga naar de laatste pagina', reload: 'Laad huidige pagina opnieuw', noRecords: 'Geen rijen om weer te geven', pageCountTemplate: function (e) { return 'van '.concat(e.lastPage) }, summaryTemplate: function (e) { return 'Records '.concat(e.start, ' - ').concat(e.end, ' van ').concat(e.allCount, ' worden weergegeven') } }, List: { loading: 'Laden...' } }; var a = { TemplateColumn: { noTemplate: 'TemplateColumn heeft een template nodig', noFunction: 'TemplateColumn.template moet een functie zijn' }, ColumnStore: { columnTypeNotFound: function (e) { return "Kolom type '".concat(e.type, "' is niet geregistreerd") } }, ColumnPicker: { columnsMenu: 'Kolommen', hideColumn: 'Verberg Kolom', hideColumnShort: 'Verberg' }, Filter: { applyFilter: 'Pas filter toe', filter: 'Filter', editFilter: 'Wijzig filter', on: 'Aan', before: 'Voor', after: 'Na', equals: 'Is gelijk', lessThan: 'Minder dan', moreThan: 'Meer dan', removeFilter: 'Verwijder filter' }, FilterBar: { enableFilterBar: 'Maak filterbalk zichtbaar', disableFilterBar: 'Verberg filterbalk' }, Group: { groupAscending: 'Groepeer oplopend', groupDescending: 'Groepeer aflopend', groupAscendingShort: 'Oplopend', groupDescendingShort: 'Aflopend', stopGrouping: 'Maak groepering ongedaan', stopGroupingShort: 'Maak ongedaan' }, Search: { searchForValue: 'Zoek op term' }, Sort: { sortAscending: 'Sorteer oplopend', sortDescending: 'Sorteer aflopend', multiSort: 'Meerdere sorteringen', removeSorter: 'Verwijder sortering', addSortAscending: 'Voeg oplopende sortering toe', addSortDescending: 'Voeg aflopende sortering toe', toggleSortAscending: 'Sorteer oplopend', toggleSortDescending: 'Sorteer aflopend', sortAscendingShort: 'Oplopend', sortDescendingShort: 'Aflopend', removeSorterShort: 'Verwijder', addSortAscendingShort: '+ Oplopend', addSortDescendingShort: '+ Aflopend' }, Tree: { noTreeColumn: 'Om de boomstructuur (tree) eigenschap te kunnen gebruiken zet, tree: true' }, Grid: { featureNotFound: function (e) { return "Eigenschap '".concat(e, "' is niet beschikbaar, controleer of u de optie geimporteerd heeft") }, invalidFeatureNameFormat: function (e) { return "Ongeldige functienaam '".concat(e, "', moet beginnen met een kleine letter") } }, GridBase: { loadFailedMessage: 'Laden mislukt!', syncFailedMessage: 'Gegevenssynchronisatie is mislukt!', serverResponseLabel: 'Server reactie:', unspecifiedFailure: 'Niet-gespecificeerde fout', unknownFailure: 'Onbekende fout', networkFailure: 'Netwerk fout', parseFailure: 'Kan server response niet parsen', loadMask: 'Laden...', syncMask: 'Bezig met opslaan...', noRows: 'Geen rijen om weer te geven', removeRow: 'Verwijder rij', removeRows: 'Verwijder rijen', moveColumnLeft: 'Plaats naar het linker kader', moveColumnRight: 'Plaats naar het rechter kader' }, PdfExport: { 'Waiting for response from server...': 'Wachten op antwoord van server...', 'Export failed': 'Export mislukt', 'Server error': 'Serverfout' }, ExportDialog: { width: '40em', labelWidth: '12em', exportSettings: 'Instellingen exporteren', export: 'Exporteren', exporterType: 'Paginering beheren', cancel: 'Annuleren', fileFormat: 'Bestandsformaat', rows: 'Rijen', alignRows: 'Rijen uitlijnen', columns: 'Columns', paperFormat: 'Papier formaat', orientation: 'Oriëntatatie' }, ExportRowsCombo: { all: 'Alle rijen', visible: 'Zichtbare rijen' }, ExportOrientationCombo: { portrait: 'Staand', landscape: 'Liggend' }, SinglePageExporter: { singlepage: 'Enkele pagina' }, MultiPageExporter: { multipage: "Meerdere pagina's", exportingPage: function (e) { var n = e.currentPage; var r = e.totalPages; return 'Exporteren van de pagina '.concat(n, '/').concat(r) } } }; for (var o in t)a[o] = t[o]; n.default = a }])).default }))
