var name = prompt('Введіть ім’я:', 'Ваше ім’я');
var position = prompt('Введіть посаду:', 'Ваша посада');
var phone = prompt('Введіть телефон:', 'Ваш телефон');

var visitcard = `
    <table class="visit-card" border="0">
        <tr>
            <td align="center" valign="center">
            <img src="images/квадрик.png" alt="Логотип">
            </td>
            <td align="center">
                <b>${name}</b><br>
                <i>${position}</i><br>
                <font color="blue">${phone}</font>
            </td>
        </tr>
    </table>
`;

document.write('<table border="0" align="center">');
for (var y = 0; y < 12; y++) {
    document.write('<tr>');
    for (var x = 0; x < 3; x++) {
        document.write('<td>');
        document.write(visitcard);
        document.write('</td>');
    }
    document.write('</tr>');
}
document.write('</table>');