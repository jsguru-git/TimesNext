/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

// #####################################################################################################################
// #CKEDITOR#
/**
 * Default CKEDITOR Styles
 * Added within src/settings.py CKEDITOR_SETTINGS.stylesSet
 *
 * @module CKEDITOR
 */

CKEDITOR.stylesSet.add('default', []);

/*
 * Extend ckeditor default settings
 * DOCS: http://docs.ckeditor.com/#!/api/CKEDITOR.dtd
 */
CKEDITOR.dtd.$removeEmpty.span = 0;
