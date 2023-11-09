import NumberHelpers from './number_helpers';
import moment from 'moment';

var date_helpers = {
    formatDate: function (date, separator = '/') {
        return [
            NumberHelpers.padTo2Digits(date.getDate()),
            NumberHelpers.padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join(separator);
    },
    parseDate: function (date) {
        return moment(date + 'T00:00:00-03:00', moment.ISO_8601);
    }
}

export {date_helpers};

Date.prototype.formatDDMMYYYY = function () {
    return this.getDate().toString().padStart(2, '0') +
        "/" + (this.getMonth() + 1).toString().padStart(2, '0') +
        "/" + this.getFullYear();
}