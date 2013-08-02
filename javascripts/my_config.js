pjs.addSuite({
    // single URL or array
    url: 'http://www.goodsircommercial.co.uk/agency/retail/portfolio.html?keyword=&type=&&postcode=&submit=Search',
    // single function or array, evaluated in the client
    scrapers: [
    	'img.Medium',
        'span.header',
        'span.det'
    ]
});

pjs.config({ 
    // options: 'stdout', 'file' (set in config.logFile) or 'none'
    log: 'stdout',
    // options: 'json' or 'csv'
    format: 'json',
    // options: 'stdout' or 'file' (set in config.outFile)
    writer: 'file',
    outFile: 'scrape_output.json'
});