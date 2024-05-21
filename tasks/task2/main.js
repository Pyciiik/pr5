function showQuote(author) {
    var quoteText = '';
    switch (author) {
        case 1:
            quoteText = 'Л. Костенко": "Нації вмирають не від інфаркту. Спочатку їм відбирає мову.';
            break;
        case 2:
            quoteText = 'В. Голобородько": "Мова вмирає, коли наступне покоління втрачає розуміння значення слів.';
            break;
        case 3:
            quoteText = 'Репін": "Відчуваю й усвідомлюю, яка це красива й легка українська мова.';
            break;
        case 4:
            quoteText = 'О. Довженко": "Українська пісня — це бездонна душа українського народу, це його слава.';
            break;
        case 5:
            quoteText = 'Володимир Мономах": "Коли щось умієте, того не забувайте, а чого не вмієте — то того учітесь...';
            break;
    }
  
    var newWindow = window.open("", "quoteWindow", "width=400,height=200");
    newWindow.document.write("<p>" + quoteText + "</p>");
    newWindow.document.close();
  }