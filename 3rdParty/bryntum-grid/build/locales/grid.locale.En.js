/*!
 *
 * Bryntum Grid 3.1.5 (TRIAL VERSION)
 *
 * Copyright(c) 2020 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
!(function (e, t) { typeof exports === 'object' && typeof module === 'object' ? module.exports = t() : typeof define === 'function' && define.amd ? define('En', [], t) : typeof exports === 'object' ? exports.En = t() : (e.bryntum = e.bryntum || {}, e.bryntum.locales = e.bryntum.locales || {}, e.bryntum.locales.En = t()) }(window, function () { return (function (e) { var t = {}; function n (r) { if (t[r]) return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports } return n.m = e, n.c = t, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }) }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (var o in e)n.d(r, o, function (t) { return e[t] }.bind(null, o)); return r }, n.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(t, 'a', t), t }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = '', n(n.s = 7) }({ 7: function (e, t, n) { 'use strict'; n.r(t); var r = { localeName: 'En', localeDesc: 'English', Object: { Yes: 'Yes', No: 'No', Cancel: 'Cancel', Custom: 'Custom' }, InstancePlugin: { fnMissing: function (e) { return 'Trying to chain fn '.concat(e.plugIntoName, '#').concat(e.fnName, ', but plugin fn ').concat(e.pluginName, '#').concat(e.fnName, ' does not exist') }, overrideFnMissing: function (e) { return 'Trying to override fn '.concat(e.plugIntoName, '#').concat(e.fnName, ', but plugin fn ').concat(e.pluginName, '#').concat(e.fnName, ' does not exist') } }, Field: { badInput: 'Invalid field value', patternMismatch: 'Value should match a specific pattern', rangeOverflow: function (e) { return 'Value must be less than or equal to '.concat(e.max) }, rangeUnderflow: function (e) { return 'Value must be greater than or equal to '.concat(e.min) }, stepMismatch: 'Value should fit the step', tooLong: 'Value should be shorter', tooShort: 'Value should be longer', typeMismatch: 'Value is required to be in a special format', valueMissing: 'This field is required', invalidValue: 'Invalid field value', minimumValueViolation: 'Minimum value violation', maximumValueViolation: 'Maximum value violation', fieldRequired: 'This field is required', validateFilter: 'Value must be selected from the list' }, DateField: { invalidDate: 'Invalid date input' }, TimeField: { invalidTime: 'Invalid time input' }, DateHelper: { locale: 'en-US', shortWeek: 'W', shortQuarter: 'q', week: 'Week', weekStartDay: 0, unitNames: [{ single: 'millisecond', plural: 'ms', abbrev: 'ms' }, { single: 'second', plural: 'seconds', abbrev: 's' }, { single: 'minute', plural: 'minutes', abbrev: 'min' }, { single: 'hour', plural: 'hours', abbrev: 'h' }, { single: 'day', plural: 'days', abbrev: 'd' }, { single: 'week', plural: 'weeks', abbrev: 'w' }, { single: 'month', plural: 'months', abbrev: 'mon' }, { single: 'quarter', plural: 'quarters', abbrev: 'q' }, { single: 'year', plural: 'years', abbrev: 'yr' }], unitAbbreviations: [['mil'], ['s', 'sec'], ['m', 'min'], ['h', 'hr'], ['d'], ['w', 'wk'], ['mo', 'mon', 'mnt'], ['q', 'quar', 'qrt'], ['y', 'yr']], parsers: { L: 'MM/DD/YYYY', LT: 'HH:mm A' }, ordinalSuffix: function (e) { return e + ({ 1: 'st', 2: 'nd', 3: 'rd' }[e[e.length - 1]] || 'th') } }, PagingToolbar: { firstPage: 'Go to first page', prevPage: 'Go to previous page', page: 'Page', nextPage: 'Go to next page', lastPage: 'Go to last page', reload: 'Reload current page', noRecords: 'No records to display', pageCountTemplate: function (e) { return 'of '.concat(e.lastPage) }, summaryTemplate: function (e) { return 'Displaying records '.concat(e.start, ' - ').concat(e.end, ' of ').concat(e.allCount) } }, List: { loading: 'Loading...' } }; var o = { TemplateColumn: { noTemplate: 'TemplateColumn needs a template', noFunction: 'TemplateColumn.template must be a function' }, ColumnStore: { columnTypeNotFound: function (e) { return "Column type '".concat(e.type, "' not registered") } }, ColumnPicker: { columnsMenu: 'Columns', hideColumn: 'Hide column', hideColumnShort: 'Hide' }, Filter: { applyFilter: 'Apply filter', filter: 'Filter', editFilter: 'Edit filter', on: 'On', before: 'Before', after: 'After', equals: 'Equals', lessThan: 'Less than', moreThan: 'More than', removeFilter: 'Remove filter' }, FilterBar: { enableFilterBar: 'Show filter bar', disableFilterBar: 'Hide filter bar' }, Group: { groupAscending: 'Group ascending', groupDescending: 'Group descending', groupAscendingShort: 'Ascending', groupDescendingShort: 'Descending', stopGrouping: 'Stop grouping', stopGroupingShort: 'Stop' }, Search: { searchForValue: 'Search for value' }, Sort: { sortAscending: 'Sort ascending', sortDescending: 'Sort descending', multiSort: 'Multi sort', removeSorter: 'Remove sorter', addSortAscending: 'Add ascending sorter', addSortDescending: 'Add descending sorter', toggleSortAscending: 'Change to ascending', toggleSortDescending: 'Change to descending', sortAscendingShort: 'Ascending', sortDescendingShort: 'Descending', removeSorterShort: 'Remove', addSortAscendingShort: '+ Ascending', addSortDescendingShort: '+ Descending' }, Tree: { noTreeColumn: 'To use the tree feature one column must be configured with tree: true' }, Grid: { featureNotFound: function (e) { return "Feature '".concat(e, "' not available, make sure you have imported it") }, invalidFeatureNameFormat: function (e) { return "Invalid feature name '".concat(e, "', must start with a lowercase letter") } }, GridBase: { loadFailedMessage: 'Data loading failed!', syncFailedMessage: 'Data synchronization failed!', serverResponseLabel: 'Server response:', unspecifiedFailure: 'Unspecified failure', unknownFailure: 'Unknown error', networkFailure: 'Network error', parseFailure: 'Failed to parse server response', loadMask: 'Loading...', syncMask: 'Saving changes, please wait...', noRows: 'No records to display', moveColumnLeft: 'Move to left section', moveColumnRight: 'Move to right section', removeRow: 'Delete record', removeRows: 'Delete records' }, PdfExport: { 'Waiting for response from server...': 'Waiting for response from server...', 'Export failed': 'Export failed', 'Server error': 'Server error' }, ExportDialog: { width: '40em', labelWidth: '12em', exportSettings: 'Export settings', export: 'Export', exporterType: 'Control pagination', cancel: 'Cancel', fileFormat: 'File format', rows: 'Rows', alignRows: 'Align rows', columns: 'Columns', paperFormat: 'Paper format', orientation: 'Orientation' }, ExportRowsCombo: { all: 'All rows', visible: 'Visible rows' }, ExportOrientationCombo: { portrait: 'Portrait', landscape: 'Landscape' }, SinglePageExporter: { singlepage: 'Single page' }, MultiPageExporter: { multipage: 'Multiple pages', exportingPage: function (e) { var t = e.currentPage; var n = e.totalPages; return 'Exporting page '.concat(t, '/').concat(n) } } }; for (var a in r)o[a] = r[a]; t.default = o } })).default }))
