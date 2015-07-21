import Polyglot from 'node-polyglot';
import _ from 'underscore';

const defaultLocale = 'en',
      polyglot = new Polyglot();

// TODO: create better i18n mapping object or table or file or something
var translations = {
    'en': {
        'test': 'TEST',
        'reservation_form_status': 'Status',
        'reservation_form_table': 'Table',
        'reservation_form_info': 'Info',
        'reservation_form_date': 'Date',
        'reservation_form_people': 'People',
        'reservation_form_time': 'Time',
        'reservation_form_note': 'Note',
        'reservation_form_request': 'Customer Request',
        'reservation_form_empty': 'Empty',
        'back_to_reservation_list': 'Back to reservation list',
    },
    'zh': {
        'test': '測試',
        'reservation_form_status': '狀態',
        'reservation_form_table': '桌號',
        'reservation_form_info': '基本資訊',
        'reservation_form_date': '日期',
        'reservation_form_people': '人數',
        'reservation_form_time': '時間',
        'reservation_form_note': '註記',
        'reservation_form_request': '顧客要求',
        'reservation_form_empty': '無',
        'back_to_reservation_list': '回到訂位列表',
    }
}

// TODO: load locale from configStore
var locale = 'en';
// var locale = '';
/////////////////////////////////////

polyglot.extend(translations[_.find(_.keys(translations), key => locale.match(new RegExp(`^${key}`))) || defaultLocale]);

export default polyglot;
