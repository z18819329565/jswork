// (function () {
//     var FormBUilder = function (data) {
//         this.data = data;
//     };
//     FormBUilder.prototype.create = function () {
//         var html = '';
//         for (var k in this.data) {
//             var item = {tag:'',text:'',attr: {}, option: null};
//             for (var n in this.data[k]) {
//                 item[n] = this.data[k][n];
//             }
//             html += FormBUilder.toHTML(item);
//         }
//         return '<table>' + html + '</table>';
//     };
//     var builder = {
//         toHTML: function (obj) {
//             var html = this.item[obj.tag](this.attr(obj.attr), obj.option);
//             return '<tr><th>' + obj.text + '</th><td>' + html + '</td></tr>';
//         },
//         attr : function (attr) {
//             var html = '';
//             for (var k in attr) {
//                 html += k + '="' + attr[k] + '"';
//             }
//             return html;
//         },
//         item : {
//             input: function (attr,option) {
//                 var html = '';
//                 if (option === null) {
//                     html += '<input ' + attr + '>';
//                 } else {
//                     for (var k in option) {
//                         html += '<label><input ' + attr + 'value = "' + k + '"' + '>' + '</label>';
//                     }
//                 }
//                 return html;
//             },
//             select: function (attr,option) {
//                 for (var k in option) {
//                     html += '<option value = "' + k + '">' + option[k] +'</option>';
//                 }
//                 return '<select ' + attr + '>' + html +'</select>';
//             },
//             textarea: function (attr) {
//                 return '<textarea ' + attr + '></textarea>';
//             }
//         }
//     };
//     window.FormBUilder = FormBUilder;
// })(window);