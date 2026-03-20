// Complete Stock Data (All 50 stocks from your list)
const completeStocksData = [
    { rank: 1, symbol: "RELIANCE", name: "Reliance Industries Ltd", sector: "Oil & Gas - Refining & Marketing", price: 2556.50, change: 30.24, changePercent: 1.20, marketCap: 2106329.37, pe: 23.25, pb: 2.09, divYield: 0.39, volume: 45200000, prediction: "buy", predictionScore: 78 },
    { rank: 2, symbol: "HDFCBANK", name: "HDFC Bank Ltd", sector: "Private Banks", price: 1001.50, change: 21.76, changePercent: 0.53, marketCap: 1540554.49, pe: 7.73, pb: 2.86, divYield: 1.05, volume: 32450000, prediction: "buy", predictionScore: 82 },
    { rank: 3, symbol: "BHARTIARTL", name: "Bharti Airtel Ltd", sector: "Telecom Services", price: 2083.40, change: 37.22, changePercent: -0.19, marketCap: 1248790.49, pe: 29.36, pb: 8.14, divYield: 0.25, volume: 17450000, prediction: "hold", predictionScore: 65 },
    { rank: 4, symbol: "TCS", name: "Tata Consultancy Services Ltd", sector: "IT Services & Consulting", price: 3220.50, change: 24.00, changePercent: 3.77, marketCap: 1165205.09, pe: 24.00, pb: 12.17, divYield: 1.90, volume: 28500000, prediction: "sell", predictionScore: 60 },
    { rank: 5, symbol: "ICICIBANK", name: "ICICI Bank Ltd", sector: "Private Banks", price: 1366.00, change: 19.13, changePercent: -0.14, marketCap: 976253.61, pe: 19.13, pb: 2.97, divYield: 0.75, volume: 28450000, prediction: "buy", predictionScore: 76 },
    { rank: 6, symbol: "SBIN", name: "State Bank of India", sector: "Public Banks", price: 963.15, change: 11.46, changePercent: 0.55, marketCap: 889046.93, pe: 12.82, pb: 1.76, divYield: 0.58, volume: 39520000, prediction: "buy", predictionScore: 81 },
    { rank: 7, symbol: "INFY", name: "Infosys Ltd", sector: "IT Services & Consulting", price: 1598.20, change: 24.20, changePercent: 3.78, marketCap: 646557.09, pe: 24.20, pb: 6.72, divYield: 2.93, volume: 21560000, prediction: "buy", predictionScore: 72 },
    { rank: 8, symbol: "BAJFINANCE", name: "Bajaj Finance Ltd", sector: "Consumer Finance", price: 1017.30, change: 38.00, changePercent: -0.94, marketCap: 632265.68, pe: 38.00, pb: 6.39, divYield: 0.18, volume: 9850000, prediction: "sell", predictionScore: 68 },
    { rank: 9, symbol: "LT", name: "Larsen and Toubro Ltd", sector: "Construction & Engineering", price: 4074.10, change: 37.27, changePercent: 0.81, marketCap: 560425.40, pe: 37.27, pb: 4.86, divYield: 0.80, volume: 1245000, prediction: "buy", predictionScore: 74 },
    { rank: 10, symbol: "HINDUNILVR", name: "Hindustan Unilever Ltd", sector: "FMCG - Household Products", price: 2260.60, change: 49.88, changePercent: -3.57, marketCap: 531148.60, pe: 49.88, pb: 10.71, divYield: 1.08, volume: 2145000, prediction: "hold", predictionScore: 62 },
    { rank: 11, symbol: "ITC", name: "ITC Ltd", sector: "FMCG - Tobacco", price: 400.10, change: 14.43, changePercent: -1.15, marketCap: 501275.87, pe: 14.43, pb: 7.12, divYield: 3.00, volume: 21450000, prediction: "buy", predictionScore: 79 },
    { rank: 12, symbol: "KOTAKBANK", name: "Kotak Mahindra Bank Ltd", sector: "Private Banks", price: 2176.60, change: 19.56, changePercent: 3.89, marketCap: 432871.98, pe: 19.56, pb: 2.75, divYield: 0.45, volume: 8450000, prediction: "buy", predictionScore: 71 },
    { rank: 13, symbol: "AXISBANK", name: "Axis Bank Ltd", sector: "Private Banks", price: 1286.10, change: 14.23, changePercent: 3.52, marketCap: 399236.64, pe: 14.23, pb: 2.13, divYield: 0.65, volume: 15620000, prediction: "buy", predictionScore: 73 },
    { rank: 14, symbol: "SUNPHARMA", name: "Sun Pharmaceutical Industries Ltd", sector: "Pharmaceuticals", price: 1793.50, change: 39.37, changePercent: 5.29, marketCap: 430320.73, pe: 39.37, pb: 5.94, divYield: 0.75, volume: 12450000, prediction: "buy", predictionScore: 77 },
    { rank: 15, symbol: "MARUTI", name: "Maruti Suzuki India Ltd", sector: "Four Wheelers", price: 16522.00, change: 35.82, changePercent: 4.00, marketCap: 519455.93, pe: 35.82, pb: 5.40, divYield: 0.50, volume: 845000, prediction: "buy", predictionScore: 75 },
    { rank: 16, symbol: "ULTRACEMCO", name: "UltraTech Cement Ltd", sector: "Cement", price: 11723.00, change: 57.09, changePercent: -3.52, marketCap: 344760.25, pe: 57.09, pb: 4.67, divYield: 0.30, volume: 845000, prediction: "buy", predictionScore: 70 },
    { rank: 17, symbol: "TITAN", name: "Titan Company Ltd", sector: "Precious Metals, Jewellery & Watches", price: 3880.20, change: 103.14, changePercent: 0.19, marketCap: 344191.30, pe: 103.14, pb: 29.61, divYield: 0.35, volume: 2450000, prediction: "hold", predictionScore: 59 },
    { rank: 18, symbol: "WIPRO", name: "Wipro Ltd", sector: "IT Services & Consulting", price: 261.74, change: 20.78, changePercent: 6.70, marketCap: 272963.32, pe: 20.78, pb: 3.29, divYield: 1.20, volume: 25980000, prediction: "hold", predictionScore: 55 },
    { rank: 19, symbol: "ONGC", name: "Oil and Natural Gas Corporation Ltd", sector: "Oil & Gas - Exploration & Production", price: 235.35, change: 8.27, changePercent: -4.04, marketCap: 299435.81, pe: 8.27, pb: 0.80, divYield: 3.50, volume: 18450000, prediction: "hold", predictionScore: 60 },
    { rank: 20, symbol: "NTPC", name: "NTPC Ltd", sector: "Power Generation", price: 323.95, change: 13.46, changePercent: -1.19, marketCap: 315190.13, pe: 13.46, pb: 1.65, divYield: 3.20, volume: 28450000, prediction: "buy", predictionScore: 80 },
    { rank: 21, symbol: "POWERGRID", name: "Power Grid Corporation of India Ltd", sector: "Power Transmission & Distribution", price: 262.20, change: 15.80, changePercent: -3.64, marketCap: 245163.92, pe: 15.80, pb: 2.65, divYield: 4.20, volume: 19520000, prediction: "buy", predictionScore: 68 },
    { rank: 22, symbol: "NESTLEIND", name: "Nestle India Ltd", sector: "FMCG - Foods", price: 1243.50, change: 74.44, changePercent: -2.70, marketCap: 238783.16, pe: 74.44, pb: 59.54, divYield: 0.80, volume: 845000, prediction: "hold", predictionScore: 58 },
    { rank: 23, symbol: "COALINDIA", name: "Coal India Ltd", sector: "Mining - Coal", price: 384.45, change: 6.68, changePercent: -1.11, marketCap: 236248.19, pe: 6.68, pb: 2.36, divYield: 5.00, volume: 28450000, prediction: "buy", predictionScore: 82 },
    { rank: 24, symbol: "TATASTEEL", name: "Tata Steel Ltd", sector: "Iron & Steel", price: 172.87, change: 62.73, changePercent: -0.71, marketCap: 214579.42, pe: 62.73, pb: 2.35, divYield: 1.50, volume: 39520000, prediction: "buy", predictionScore: 69 },
    { rank: 25, symbol: "JSWSTEEL", name: "JSW Steel Ltd", sector: "Iron & Steel", price: 1114.80, change: 78.46, changePercent: -4.05, marketCap: 274908.70, pe: 78.46, pb: 3.36, divYield: 0.40, volume: 8450000, prediction: "buy", predictionScore: 73 },
    { rank: 26, symbol: "HCLTECH", name: "HCL Technologies Ltd", sector: "IT Services & Consulting", price: 1673.20, change: 26.03, changePercent: 5.85, marketCap: 452685.98, pe: 26.03, pb: 6.50, divYield: 2.20, volume: 8450000, prediction: "buy", predictionScore: 71 },
    { rank: 27, symbol: "INDUSINDBK", name: "IndusInd Bank Ltd", sector: "Private Banks", price: 1850.00, change: 45.60, changePercent: 2.53, marketCap: 285000.00, pe: 15.25, pb: 2.85, divYield: 0.65, volume: 8450000, prediction: "buy", predictionScore: 74 },
    { rank: 28, symbol: "TATAMOTORS", name: "Tata Motors Ltd", sector: "Four Wheelers", price: 985.45, change: 32.15, changePercent: 3.37, marketCap: 325000.00, pe: 18.45, pb: 3.15, divYield: 0.25, volume: 28450000, prediction: "buy", predictionScore: 76 },
    { rank: 29, symbol: "ASIANPAINT", name: "Asian Paints Ltd", sector: "Paints", price: 2780.20, change: 72.27, changePercent: -4.36, marketCap: 265027.71, pe: 72.27, pb: 13.21, divYield: 0.80, volume: 1245000, prediction: "hold", predictionScore: 63 },
    { rank: 30, symbol: "BAJAJFINSV", name: "Bajaj Finserv Ltd", sector: "Insurance", price: 2083.10, change: 37.49, changePercent: 2.42, marketCap: 332601.48, pe: 37.49, pb: 2.59, divYield: 0.18, volume: 8450000, prediction: "buy", predictionScore: 72 },
    { rank: 31, symbol: "DMART", name: "Avenue Supermarts Ltd", sector: "Retail", price: 3980.50, change: 85.25, changePercent: 2.19, marketCap: 258000.00, pe: 85.25, pb: 18.45, divYield: 0.15, volume: 1245000, prediction: "hold", predictionScore: 61 },
    { rank: 32, symbol: "HDFCLIFE", name: "HDFC Life Insurance Company Ltd", sector: "Insurance", price: 772.70, change: 92.58, changePercent: 0.12, marketCap: 167652.80, pe: 92.58, pb: 10.38, divYield: 0.30, volume: 8450000, prediction: "buy", predictionScore: 70 },
    { rank: 33, symbol: "SBILIFE", name: "SBI Life Insurance Company Ltd", sector: "Insurance", price: 2034.90, change: 84.17, changePercent: 1.70, marketCap: 203138.05, pe: 84.17, pb: 11.96, divYield: 0.25, volume: 8450000, prediction: "buy", predictionScore: 69 },
    { rank: 34, symbol: "BRITANNIA", name: "Britannia Industries Ltd", sector: "FMCG - Foods", price: 4850.00, change: 65.25, changePercent: 1.36, marketCap: 116500.00, pe: 65.25, pb: 35.45, divYield: 0.90, volume: 845000, prediction: "hold", predictionScore: 64 },
    { rank: 35, symbol: "SHREECEM", name: "Shree Cement Ltd", sector: "Cement", price: 25800.00, change: 325.50, changePercent: 1.28, marketCap: 92500.00, pe: 45.25, pb: 4.85, divYield: 0.35, volume: 124500, prediction: "buy", predictionScore: 71 },
    { rank: 36, symbol: "DIVISLAB", name: "Divi's Laboratories Ltd", sector: "Pharmaceuticals", price: 3850.00, change: 125.50, changePercent: 3.37, marketCap: 102500.00, pe: 55.25, pb: 12.45, divYield: 0.45, volume: 1245000, prediction: "buy", predictionScore: 74 },
    { rank: 37, symbol: "DRREDDY", name: "Dr. Reddy's Laboratories Ltd", sector: "Pharmaceuticals", price: 1280.60, change: 18.83, changePercent: 3.00, marketCap: 106505.81, pe: 18.83, pb: 3.14, divYield: 0.85, volume: 8450000, prediction: "buy", predictionScore: 73 },
    { rank: 38, symbol: "EICHERMOT", name: "Eicher Motors Ltd", sector: "Trucks & Buses", price: 7121.50, change: 41.88, changePercent: 7.94, marketCap: 198290.92, pe: 41.88, pb: 9.31, divYield: 0.60, volume: 1245000, prediction: "buy", predictionScore: 75 },
    { rank: 39, symbol: "GRASIM", name: "Grasim Industries Ltd", sector: "Cement", price: 2821.00, change: 51.94, changePercent: 1.48, marketCap: 192454.57, pe: 51.94, pb: 1.22, divYield: 0.40, volume: 1245000, prediction: "hold", predictionScore: 62 },
    { rank: 40, symbol: "HINDALCO", name: "Hindalco Industries Ltd", sector: "Metals - Aluminium", price: 847.85, change: 11.90, changePercent: 5.98, marketCap: 190455.22, pe: 11.90, pb: 1.54, divYield: 0.75, volume: 28450000, prediction: "buy", predictionScore: 78 },
    { rank: 41, symbol: "JIOFIN", name: "Jio Financial Services Ltd", sector: "Consumer Finance", price: 299.60, change: 118.49, changePercent: -4.83, marketCap: 191070.73, pe: 118.49, pb: 1.55, divYield: 0.10, volume: 28450000, prediction: "hold", predictionScore: 56 },
    { rank: 42, symbol: "M&M", name: "Mahindra and Mahindra Ltd", sector: "Four Wheelers", price: 3679.60, change: 34.15, changePercent: -2.23, marketCap: 441569.03, pe: 34.15, pb: 4.74, divYield: 0.80, volume: 8450000, prediction: "buy", predictionScore: 73 },
    { rank: 43, symbol: "NYKAA", name: "FSN E-Commerce Ventures Ltd", sector: "Online Services", price: 298.45, change: 514.60, changePercent: -1.66, marketCap: 271191.71, pe: 514.60, pb: 8.95, divYield: 0.00, volume: 28450000, prediction: "sell", predictionScore: 65 },
    { rank: 44, symbol: "PAGEIND", name: "Page Industries Ltd", sector: "Textiles", price: 38500.00, change: 1250.50, changePercent: 3.35, marketCap: 42800.00, pe: 85.25, pb: 25.45, divYield: 0.25, volume: 124500, prediction: "hold", predictionScore: 59 },
    { rank: 45, symbol: "PIDILITIND", name: "Pidilite Industries Ltd", sector: "Chemicals", price: 2580.00, change: 45.25, changePercent: 1.78, marketCap: 54800.00, pe: 65.25, pb: 18.45, divYield: 0.45, volume: 1245000, prediction: "hold", predictionScore: 63 },
    { rank: 46, symbol: "SIEMENS", name: "Siemens Ltd", sector: "Industrial Equipment", price: 4250.00, change: 85.25, changePercent: 2.05, marketCap: 152000.00, pe: 55.25, pb: 8.45, divYield: 0.65, volume: 1245000, prediction: "buy", predictionScore: 72 },
    { rank: 47, symbol: "TATACONSUM", name: "Tata Consumer Products Ltd", sector: "Tea & Coffee", price: 1157.40, change: 88.96, changePercent: -0.60, marketCap: 113728.33, pe: 88.96, pb: 5.32, divYield: 0.65, volume: 8450000, prediction: "buy", predictionScore: 70 },
    { rank: 48, symbol: "TECHM", name: "Tech Mahindra Ltd", sector: "IT Services & Consulting", price: 1575.40, change: 36.37, changePercent: 9.10, marketCap: 154629.63, pe: 36.37, pb: 5.56, divYield: 1.80, volume: 8450000, prediction: "sell", predictionScore: 67 },
    { rank: 49, symbol: "TATAPOWER", name: "Tata Power Co Ltd", sector: "Power Generation", price: 425.25, change: 8.45, changePercent: 2.03, marketCap: 135000.00, pe: 25.45, pb: 2.85, divYield: 0.85, volume: 28450000, prediction: "buy", predictionScore: 74 },
    { rank: 50, symbol: "ADANIENT", name: "Adani Enterprises Ltd", sector: "Commodities Trading", price: 2278.90, change: 41.49, changePercent: -7.07, marketCap: 295041.83, pe: 41.49, pb: 5.22, divYield: 0.15, volume: 28450000, prediction: "hold", predictionScore: 57 }
];

// Portfolio Data with Detailed Transaction History
let portfolioData = [
    {
        symbol: "RELIANCE",
        name: "Reliance Industries Ltd",
        quantity: 25,
        avgPrice: 2400.00,
        currentPrice: 2556.50,
        changePercent: 6.52,
        value: 63912.50,
        investment: 60000.00,
        profitLoss: 3912.50,
        holdingId: "HOLD001",
        purchaseDate: "2023-10-15",
        transactions: [
            { id: "TXN001", date: "2023-10-15", type: "BUY", quantity: 10, price: 2350.00, amount: 23500.00, paymentId: "PAY789123456", paymentMethod: "Bank Transfer" },
            { id: "TXN002", date: "2023-11-20", type: "BUY", quantity: 15, price: 2433.33, amount: 36500.00, paymentId: "PAY789123457", paymentMethod: "UPI" }
        ]
    },
    {
        symbol: "TCS",
        name: "Tata Consultancy Services Ltd",
        quantity: 15,
        avgPrice: 3100.00,
        currentPrice: 3220.50,
        changePercent: 3.89,
        value: 48307.50,
        investment: 46500.00,
        profitLoss: 1807.50,
        holdingId: "HOLD002",
        purchaseDate: "2023-09-10",
        transactions: [
            { id: "TXN003", date: "2023-09-10", type: "BUY", quantity: 15, price: 3100.00, amount: 46500.00, paymentId: "PAY789123458", paymentMethod: "Credit Card" }
        ]
    },
    {
        symbol: "HDFCBANK",
        name: "HDFC Bank Ltd",
        quantity: 50,
        avgPrice: 950.00,
        currentPrice: 1001.50,
        changePercent: 5.42,
        value: 50075.00,
        investment: 47500.00,
        profitLoss: 2575.00,
        holdingId: "HOLD003",
        purchaseDate: "2023-08-05",
        transactions: [
            { id: "TXN004", date: "2023-08-05", type: "BUY", quantity: 30, price: 940.00, amount: 28200.00, paymentId: "PAY789123459", paymentMethod: "Bank Transfer" },
            { id: "TXN005", date: "2023-09-15", type: "BUY", quantity: 20, price: 965.00, amount: 19300.00, paymentId: "PAY789123460", paymentMethod: "e-Wallet" }
        ]
    },
    {
        symbol: "INFY",
        name: "Infosys Ltd",
        quantity: 30,
        avgPrice: 1550.00,
        currentPrice: 1598.20,
        changePercent: 3.11,
        value: 47946.00,
        investment: 46500.00,
        profitLoss: 1446.00,
        holdingId: "HOLD004",
        purchaseDate: "2023-07-20",
        transactions: [
            { id: "TXN006", date: "2023-07-20", type: "BUY", quantity: 30, price: 1550.00, amount: 46500.00, paymentId: "PAY789123461", paymentMethod: "UPI" }
        ]
    }
];

// User Account Balance
let userBalance = 1500000; // ₹15,00,000 initial balance
let transactionHistory = [];

// Trading variables
let currentTradeType = "buy"; // "buy" or "sell"
let selectedPaymentMethod = "bank";
let currentOrderId = "ORD789456123";
let lastTransactionData = null; // Store last transaction for receipt download

// Initialize variables
let selectedStock = completeStocksData[0];
let minuteChart = null;
let hourlyChart = null;
let marketOpen = false;
let marketTrend = "up";
let lastAlertTime = 0;
const ALERT_COOLDOWN = 30000;

// Initialize the application
$(document).ready(function() {
    renderStocksList();
    renderStockDetails(selectedStock);
    renderPortfolio();
    updateMarketTime();
    setupEventListeners();
    updateUserBalanceDisplay();
    
    // Update time every second
    setInterval(updateMarketTime, 1000);
    
    // Simulate market movements every 3 seconds
    setInterval(simulateMarketMovements, 3000);
    
    // Check market status every minute
    setInterval(checkMarketStatus, 60000);
});

// Render stocks list
function renderStocksList() {
    const container = $('#stocksList');
    container.empty();
    
    completeStocksData.forEach(stock => {
        const isPositive = stock.changePercent >= 0;
        const isActive = selectedStock.symbol === stock.symbol;
        
        const stockRow = `
            <div class="stock-row ${isActive ? 'active' : ''}" data-symbol="${stock.symbol}">
                <div class="stock-rank">${stock.rank}</div>
                <div class="stock-info">
                    <h4>${stock.symbol}</h4>
                    <p>${stock.name}</p>
                </div>
                <div class="stock-price">
                    <div class="price">₹${stock.price.toFixed(2)}</div>
                    <div class="change ${isPositive ? 'positive' : 'negative'}">
                        ${isPositive ? '+' : ''}${stock.changePercent.toFixed(2)}%
                    </div>
                </div>
            </div>
        `;
        
        container.append(stockRow);
    });
    
    // Add click event to stock rows
    $('.stock-row').on('click', function() {
        const symbol = $(this).data('symbol');
        const stock = completeStocksData.find(s => s.symbol === symbol);
        
        if (stock) {
            // Update active state
            $('.stock-row').removeClass('active');
            $(this).addClass('active');
            
            // Update stock details
            selectedStock = stock;
            renderStockDetails(stock);
        }
    });
}

// Render stock details
function renderStockDetails(stock) {
    const isPositive = stock.changePercent >= 0;
    const marketCapFormatted = formatNumber(stock.marketCap) + (stock.marketCap >= 100000 ? " Cr" : "");
    
    // Update header with animation
    $('#stockName').html(`${stock.symbol} <span class="prediction-badge ${stock.prediction}">${getPredictionText(stock.prediction)}</span>`);
    $('#stockDetails').text(`${stock.sector} | Market Cap: ₹${marketCapFormatted}`);
    
    // Add price change animation
    const priceElement = $('#currentPrice');
    const oldPrice = parseFloat(priceElement.text().replace('₹', '').replace(/,/g, ''));
    const newPrice = stock.price;
    
    if (oldPrice && oldPrice !== newPrice) {
        priceElement.removeClass('price-up price-down');
        if (newPrice > oldPrice) {
            priceElement.addClass('price-up');
        } else if (newPrice < oldPrice) {
            priceElement.addClass('price-down');
        }
    }
    
    priceElement.text(`₹${stock.price.toFixed(2)}`);
    
    $('#priceChange')
        .removeClass('positive negative')
        .addClass(isPositive ? 'positive' : 'negative')
        .text(`${isPositive ? '+' : ''}${stock.change.toFixed(2)} (${isPositive ? '+' : ''}${stock.changePercent.toFixed(2)}%)`);
    
    // Update metrics
    $('#marketCap').text(`₹${formatNumber(stock.marketCap)} Cr`);
    $('#peRatio').text(stock.pe.toFixed(2));
    $('#divYield').text(`${stock.divYield.toFixed(2)}%`);
    $('#weekHigh').text(`₹${(stock.price * 1.15).toFixed(2)}`);
    $('#weekLow').text(`₹${(stock.price * 0.85).toFixed(2)}`);
    $('#volume').text(formatVolume(stock.volume));
    
    // Update prediction
    updatePredictionCards(stock);
    
    // Update charts
    updateMinuteChart(stock);
    updateHourlyChart(stock);
}

// Get prediction text
function getPredictionText(prediction) {
    switch(prediction) {
        case 'buy': return 'STRONG BUY';
        case 'sell': return 'SELL';
        case 'hold': return 'HOLD';
        default: return 'NEUTRAL';
    }
}

// Update prediction cards
function updatePredictionCards(stock) {
    let buyPercent, sellPercent, holdPercent;
    
    switch(stock.prediction) {
        case 'buy':
            buyPercent = stock.predictionScore;
            sellPercent = Math.floor((100 - stock.predictionScore) * 0.3);
            holdPercent = 100 - buyPercent - sellPercent;
            break;
        case 'sell':
            sellPercent = stock.predictionScore;
            buyPercent = Math.floor((100 - stock.predictionScore) * 0.2);
            holdPercent = 100 - buyPercent - sellPercent;
            break;
        case 'hold':
            holdPercent = stock.predictionScore;
            buyPercent = Math.floor((100 - stock.predictionScore) * 0.5);
            sellPercent = 100 - buyPercent - holdPercent;
            break;
    }
    
    $('#buyPrediction .percentage').text(`${buyPercent}%`);
    $('#sellPrediction .percentage').text(`${sellPercent}%`);
    $('#holdPrediction .percentage').text(`${holdPercent}%`);
    
    // Update prediction details
    const targetPrice = stock.price * (1 + (buyPercent - sellPercent) / 1000);
    const upside = ((targetPrice - stock.price) / stock.price * 100).toFixed(1);
    
    $('.prediction-metric:nth-child(1) .metric-value').text(`₹${targetPrice.toFixed(2)}`);
    $('.prediction-metric:nth-child(2) .metric-value').text(`${upside}%`);
}

// Update minute chart
function updateMinuteChart(stock) {
    const ctx = document.getElementById('minuteChart').getContext('2d');
    
    if (minuteChart) {
        minuteChart.destroy();
    }
    
    // Generate minute-by-minute data for last 60 minutes
    const labels = [];
    const data = [];
    let currentPrice = stock.price;
    
    for (let i = 60; i >= 0; i--) {
        const now = new Date();
        now.setMinutes(now.getMinutes() - i);
        const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        labels.push(timeStr);
        
        // Simulate minute-by-minute price movement
        const minuteChange = (Math.random() - 0.5) * 0.1;
        currentPrice *= (1 + minuteChange / 100);
        
        // Ensure realistic price range
        if (currentPrice > stock.price * 1.02) currentPrice = stock.price * 1.01;
        if (currentPrice < stock.price * 0.98) currentPrice = stock.price * 0.99;
        
        if (i === 0) currentPrice = stock.price;
        data.push(currentPrice);
    }
    
    minuteChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels.filter((_, i) => i % 5 === 0), // Show every 5th label
            datasets: [{
                label: 'Price (INR)',
                data: data,
                borderColor: stock.changePercent >= 0 ? '#4caf50' : '#f44336',
                backgroundColor: stock.changePercent >= 0 ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.3,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            return `₹${context.parsed.y.toFixed(2)}`;
                        }
                    }
                }
            },
            scales: {
                x: { 
                    grid: { display: false },
                    ticks: {
                        maxTicksLimit: 10,
                        callback: function(value, index) {
                            return labels[index * 5];
                        }
                    }
                },
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return '₹' + value.toFixed(0);
                        }
                    }
                }
            }
        }
    });
}

// Update hourly chart
function updateHourlyChart(stock) {
    const ctx = document.getElementById('hourlyChart').getContext('2d');
    
    if (hourlyChart) {
        hourlyChart.destroy();
    }
    
    // Generate hourly data for last 24 hours
    const labels = [];
    const data = [];
    let currentPrice = stock.price;
    
    for (let i = 24; i >= 0; i--) {
        const date = new Date();
        date.setHours(date.getHours() - i);
        labels.push(date.getHours().toString().padStart(2, '0') + ':00');
        
        // Simulate hourly price movement
        const hourlyChange = (Math.random() - 0.5) * 0.5;
        currentPrice *= (1 + hourlyChange / 100);
        
        // Ensure realistic price range
        if (currentPrice > stock.price * 1.05) currentPrice = stock.price * 1.03;
        if (currentPrice < stock.price * 0.95) currentPrice = stock.price * 0.97;
        
        if (i === 0) currentPrice = stock.price;
        data.push(currentPrice);
    }
    
    hourlyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels.filter((_, i) => i % 3 === 0), // Show every 3rd label
            datasets: [{
                label: 'Price (INR)',
                data: data,
                borderColor: stock.changePercent >= 0 ? '#4caf50' : '#f44336',
                backgroundColor: stock.changePercent >= 0 ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.3,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            return `₹${context.parsed.y.toFixed(2)}`;
                        }
                    }
                }
            },
            scales: {
                x: { 
                    grid: { display: false },
                    ticks: {
                        maxTicksLimit: 8,
                        callback: function(value, index) {
                            return labels[index * 3];
                        }
                    }
                },
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return '₹' + value.toFixed(0);
                        }
                    }
                }
            }
        }
    });
}

// Render portfolio
function renderPortfolio() {
    const container = $('#portfolioHoldings');
    container.empty();
    
    let totalInvestment = 0;
    let currentValue = 0;
    let totalProfitLoss = 0;
    
    portfolioData.forEach(holding => {
        // Update holding with latest price
        const stock = completeStocksData.find(s => s.symbol === holding.symbol);
        if (stock) {
            holding.currentPrice = stock.price;
        }
        
        const investment = holding.quantity * holding.avgPrice;
        const currentVal = holding.quantity * holding.currentPrice;
        const profitLoss = currentVal - investment;
        const profitLossPercent = (profitLoss / investment) * 100;
        
        totalInvestment += investment;
        currentValue += currentVal;
        totalProfitLoss += profitLoss;
        
        const holdingItem = `
            <div class="holding-item" data-symbol="${holding.symbol}" data-holding-id="${holding.holdingId}">
                <div class="holding-info">
                    <h4>${holding.symbol}</h4>
                    <p>${holding.quantity} shares @ ₹${holding.avgPrice.toFixed(2)}</p>
                </div>
                <div class="holding-value">
                    <div class="price">₹${currentVal.toFixed(0)}</div>
                    <div class="change ${profitLoss >= 0 ? 'positive' : 'negative'}">
                        ${profitLoss >= 0 ? '+' : ''}${profitLossPercent.toFixed(2)}%
                    </div>
                </div>
            </div>
        `;
        
        container.append(holdingItem);
    });
    
    // Update portfolio summary
    const totalReturnPercent = totalInvestment > 0 ? (totalProfitLoss / totalInvestment) * 100 : 0;
    
    $('#portfolioValue').text(`₹${formatNumber(currentValue)}`);
    $('#portfolioChange').html(`<span class="${totalProfitLoss >= 0 ? 'positive' : 'negative'}">${totalProfitLoss >= 0 ? '+' : ''}₹${formatNumber(totalProfitLoss)} (${totalProfitLoss >= 0 ? '+' : ''}${totalReturnPercent.toFixed(2)}%)</span>`);
    
    // Update holding click events
    $('.holding-item').on('click', function() {
        const symbol = $(this).data('symbol');
        const holdingId = $(this).data('holding-id');
        const stock = completeStocksData.find(s => s.symbol === symbol);
        const holding = portfolioData.find(h => h.holdingId === holdingId);
        
        if (stock) {
            // Update selected stock
            $(`.stock-row[data-symbol="${symbol}"]`).click();
            
            // Show holding details modal
            showHoldingDetails(holding, stock);
        }
    });
}

// Show holding details modal
function showHoldingDetails(holding, stock) {
    const currentValue = holding.quantity * holding.currentPrice;
    const investment = holding.quantity * holding.avgPrice;
    const profitLoss = currentValue - investment;
    const profitLossPercent = (profitLoss / investment) * 100;
    
    const modalContent = `
        <div class="holding-details">
            <div class="detail-item">
                <h4>Holding ID</h4>
                <div class="detail-value">${holding.holdingId}</div>
            </div>
            <div class="detail-item">
                <h4>Stock Symbol</h4>
                <div class="detail-value">${holding.symbol}</div>
            </div>
            <div class="detail-item">
                <h4>Company Name</h4>
                <div class="detail-value">${holding.name}</div>
            </div>
            <div class="detail-item">
                <h4>Quantity</h4>
                <div class="detail-value">${holding.quantity} shares</div>
            </div>
            <div class="detail-item">
                <h4>Avg. Buy Price</h4>
                <div class="detail-value">₹${holding.avgPrice.toFixed(2)}</div>
            </div>
            <div class="detail-item">
                <h4>Current Price</h4>
                <div class="detail-value">₹${holding.currentPrice.toFixed(2)}</div>
            </div>
            <div class="detail-item">
                <h4>Current Value</h4>
                <div class="detail-value">₹${currentValue.toFixed(2)}</div>
            </div>
            <div class="detail-item">
                <h4>Total Investment</h4>
                <div class="detail-value">₹${investment.toFixed(2)}</div>
            </div>
            <div class="detail-item">
                <h4>Profit/Loss</h4>
                <div class="detail-value ${profitLoss >= 0 ? 'positive' : 'negative'}">
                    ${profitLoss >= 0 ? '+' : ''}₹${profitLoss.toFixed(2)} (${profitLossPercent.toFixed(2)}%)
                </div>
            </div>
            <div class="detail-item">
                <h4>Purchase Date</h4>
                <div class="detail-value">${holding.purchaseDate}</div>
            </div>
            <div class="detail-item">
                <h4>Sector</h4>
                <div class="detail-value">${stock.sector}</div>
            </div>
        </div>
        
        <div class="transaction-history">
            <h3><i class="fas fa-history"></i> Transaction History</h3>
            <table class="transaction-table">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Quantity</th>
                        <th>Price (₹)</th>
                        <th>Amount (₹)</th>
                        <th>Payment ID</th>
                        <th>Method</th>
                    </tr>
                </thead>
                <tbody>
                    ${holding.transactions.map(txn => `
                        <tr>
                            <td>${txn.id}</td>
                            <td>${txn.date}</td>
                            <td class="${txn.type.toLowerCase()}">${txn.type}</td>
                            <td>${txn.quantity}</td>
                            <td>₹${txn.price.toFixed(2)}</td>
                            <td>₹${txn.amount.toFixed(2)}</td>
                            <td><small>${txn.paymentId}</small></td>
                            <td>${txn.paymentMethod}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background: var(--light-bg); border-radius: 8px;">
            <h4><i class="fas fa-lightbulb"></i> Investment Insight</h4>
            <p style="margin-top: 10px; font-size: 14px;">
                ${profitLoss >= 0 ? 
                    `Your investment in ${holding.symbol} has gained ${profitLossPercent.toFixed(2)}%. Consider holding for long-term growth.` :
                    `Your investment in ${holding.symbol} is down ${Math.abs(profitLossPercent).toFixed(2)}%. Consider averaging down or holding for recovery.`
                }
            </p>
            <button class="action-btn sell-btn" style="margin-top: 10px; width: 100%;" onclick="openSellModal('${holding.symbol}')">
                <i class="fas fa-money-bill-wave"></i> Sell ${holding.symbol}
            </button>
        </div>
    `;
    
    $('#holdingDetailsContent').html(modalContent);
    $('#portfolioModal').fadeIn(300);
}

// Open buy modal
function openBuyModal() {
    currentTradeType = "buy";
    updateTradeModal();
    $('#tradeModal').fadeIn(300);
}

// Open sell modal
function openSellModal(symbol) {
    currentTradeType = "sell";
    if (symbol) {
        const stock = completeStocksData.find(s => s.symbol === symbol);
        if (stock) {
            selectedStock = stock;
            renderStockDetails(stock);
        }
    }
    updateTradeModal();
    $('#tradeModal').fadeIn(300);
}

// Update trade modal based on type
function updateTradeModal() {
    const isBuy = currentTradeType === "buy";
    const actionText = isBuy ? "Buy" : "Sell";
    const iconClass = isBuy ? "fa-shopping-cart" : "fa-money-bill-wave";
    const confirmText = isBuy ? "Confirm Purchase" : "Confirm Sale";
    
    $('#tradeIcon').removeClass('fa-shopping-cart fa-money-bill-wave').addClass(iconClass);
    $('#tradeTitle').text(`${actionText} Stock`);
    $('#confirmText').text(confirmText);
    $('#tradeStockName').text(`${selectedStock.symbol} - ${selectedStock.name}`);
    $('#tradeCurrentPrice').text(`₹${selectedStock.price.toFixed(2)}`);
    
    const isPositive = selectedStock.changePercent >= 0;
    $('#tradePriceChange')
        .removeClass('positive negative')
        .addClass(isPositive ? 'positive' : 'negative')
        .text(`${isPositive ? '+' : ''}${selectedStock.change.toFixed(2)} (${isPositive ? '+' : ''}${selectedStock.changePercent.toFixed(2)}%)`);
    
    // Update total amount
    calculateTotalAmount();
    
    // Check if selling and we own the stock
    if (!isBuy) {
        const holding = portfolioData.find(h => h.symbol === selectedStock.symbol);
        if (holding) {
            $('#quantityInput').val(Math.min(10, holding.quantity));
            $('#quantityInput').attr('max', holding.quantity);
        } else {
            $('#quantityInput').val(1);
            $('#quantityInput').attr('max', 0);
        }
    } else {
        $('#quantityInput').val(10);
        $('#quantityInput').removeAttr('max');
    }
    
    calculateTotalAmount();
}

// Calculate total amount
function calculateTotalAmount() {
    const quantity = parseInt($('#quantityInput').val()) || 0;
    const price = selectedStock.price;
    const total = quantity * price;
    
    $('#totalAmount').text(`₹${total.toFixed(2)}`);
    
    // Check if user has enough balance for buy
    if (currentTradeType === "buy" && total > userBalance) {
        $('#confirmTradeBtn').prop('disabled', true).css('opacity', '0.6').html('<i class="fas fa-exclamation-circle"></i> Insufficient Balance');
    } else {
        $('#confirmTradeBtn').prop('disabled', false).css('opacity', '1').html(`<i class="fas fa-check-circle"></i> ${currentTradeType === 'buy' ? 'Confirm Purchase' : 'Confirm Sale'}`);
    }
}

// Process trade
function processTrade() {
    const quantity = parseInt($('#quantityInput').val()) || 0;
    const price = selectedStock.price;
    const totalAmount = quantity * price;
    const orderType = $('#orderType').val();
    const limitPrice = $('#limitPrice').val();
    const stopPrice = $('#stopPrice').val();
    
    if (quantity <= 0) {
        showAlert("Please enter a valid quantity", "error");
        return;
    }
    
    if (currentTradeType === "buy") {
        if (totalAmount > userBalance) {
            showAlert("Insufficient balance to complete this purchase", "error");
            return;
        }
        
        // Deduct from balance
        userBalance -= totalAmount;
        updateUserBalanceDisplay();
        
        // Add to portfolio
        addToPortfolio(selectedStock, quantity, price);
        
        // Add to transaction history
        addTransactionToHistory("BUY", selectedStock, quantity, price, totalAmount);
        
        // Store transaction data for receipt
        lastTransactionData = {
            type: "BUY",
            stock: selectedStock,
            quantity: quantity,
            price: price,
            totalAmount: totalAmount,
            paymentMethod: getPaymentMethodText(selectedPaymentMethod)
        };
        
        showConfirmation("BUY", quantity, price, totalAmount);
        
    } else if (currentTradeType === "sell") {
        const holding = portfolioData.find(h => h.symbol === selectedStock.symbol);
        
        if (!holding) {
            showAlert("You don't own this stock", "error");
            return;
        }
        
        if (quantity > holding.quantity) {
            showAlert(`You only own ${holding.quantity} shares of ${selectedStock.symbol}`, "error");
            return;
        }
        
        // Add to balance
        userBalance += totalAmount;
        updateUserBalanceDisplay();
        
        // Update portfolio
        removeFromPortfolio(selectedStock, quantity, price);
        
        // Add to transaction history
        addTransactionToHistory("SELL", selectedStock, quantity, price, totalAmount);
        
        // Store transaction data for receipt
        lastTransactionData = {
            type: "SELL",
            stock: selectedStock,
            quantity: quantity,
            price: price,
            totalAmount: totalAmount,
            paymentMethod: "Bank Transfer"
        };
        
        showConfirmation("SELL", quantity, price, totalAmount);
    }
    
    // Close trade modal
    $('#tradeModal').fadeOut(300);
    
    // Update portfolio display
    renderPortfolio();
}

// Add stock to portfolio
function addToPortfolio(stock, quantity, price) {
    let holding = portfolioData.find(h => h.symbol === stock.symbol);
    const transactionId = `TXN${Date.now()}`;
    const paymentId = `PAY${Math.floor(100000000 + Math.random() * 900000000)}`;
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    
    const transaction = {
        id: transactionId,
        date: dateStr,
        type: "BUY",
        quantity: quantity,
        price: price,
        amount: quantity * price,
        paymentId: paymentId,
        paymentMethod: getPaymentMethodText(selectedPaymentMethod)
    };
    
    if (holding) {
        // Update existing holding
        const oldQuantity = holding.quantity;
        const oldAvgPrice = holding.avgPrice;
        const newQuantity = oldQuantity + quantity;
        const newInvestment = (oldQuantity * oldAvgPrice) + (quantity * price);
        holding.avgPrice = newInvestment / newQuantity;
        holding.quantity = newQuantity;
        holding.investment = newInvestment;
        holding.transactions.push(transaction);
    } else {
        // Create new holding
        holding = {
            symbol: stock.symbol,
            name: stock.name,
            quantity: quantity,
            avgPrice: price,
            currentPrice: price,
            changePercent: 0,
            value: quantity * price,
            investment: quantity * price,
            profitLoss: 0,
            holdingId: `HOLD${Math.floor(100 + Math.random() * 900)}`,
            purchaseDate: dateStr,
            transactions: [transaction]
        };
        portfolioData.push(holding);
    }
    
    // Update holding values
    updateHoldingValue(holding);
}

// Remove stock from portfolio (sell)
function removeFromPortfolio(stock, quantity, price) {
    const holding = portfolioData.find(h => h.symbol === stock.symbol);
    
    if (!holding) return;
    
    const transactionId = `TXN${Date.now()}`;
    const paymentId = `PAY${Math.floor(100000000 + Math.random() * 900000000)}`;
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    
    const transaction = {
        id: transactionId,
        date: dateStr,
        type: "SELL",
        quantity: quantity,
        price: price,
        amount: quantity * price,
        paymentId: paymentId,
        paymentMethod: "Bank Transfer" // For sells, assume bank transfer
    };
    
    // Add sell transaction
    holding.transactions.push(transaction);
    
    // Reduce quantity
    holding.quantity -= quantity;
    
    if (holding.quantity <= 0) {
        // Remove holding if no shares left
        portfolioData = portfolioData.filter(h => h.symbol !== stock.symbol);
    } else {
        // Update holding values
        updateHoldingValue(holding);
    }
}

// Update holding value
function updateHoldingValue(holding) {
    const stock = completeStocksData.find(s => s.symbol === holding.symbol);
    if (stock) {
        holding.currentPrice = stock.price;
    }
    holding.value = holding.quantity * holding.currentPrice;
    holding.profitLoss = holding.value - holding.investment;
    holding.changePercent = (holding.profitLoss / holding.investment) * 100;
}

// Add transaction to history
function addTransactionToHistory(type, stock, quantity, price, totalAmount) {
    const transaction = {
        id: `TXN${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString(),
        type: type,
        symbol: stock.symbol,
        name: stock.name,
        quantity: quantity,
        price: price,
        amount: totalAmount,
        paymentId: `PAY${Math.floor(100000000 + Math.random() * 900000000)}`,
        paymentMethod: type === "BUY" ? getPaymentMethodText(selectedPaymentMethod) : "Bank Transfer"
    };
    
    transactionHistory.unshift(transaction);
    
    // Keep only last 50 transactions
    if (transactionHistory.length > 50) {
        transactionHistory = transactionHistory.slice(0, 50);
    }
}

// Show confirmation modal
function showConfirmation(type, quantity, price, totalAmount) {
    const now = new Date();
    const dateTimeStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    
    const orderId = `ORD${Math.floor(100000000 + Math.random() * 900000000)}`;
    const paymentId = `PAY${Math.floor(100000000 + Math.random() * 900000000)}`;
    
    $('#confirmationTitle').text(type === "BUY" ? "Purchase Successful!" : "Sale Successful!");
    $('#orderId').text(orderId);
    $('#confirmationType').text(type);
    $('#confirmationStock').text(`${selectedStock.symbol} - ${selectedStock.name}`);
    $('#confirmationQuantity').text(quantity);
    $('#confirmationPrice').text(`₹${price.toFixed(2)}`);
    $('#confirmationTotal').text(`₹${totalAmount.toFixed(2)}`);
    $('#confirmationPayment').text(getPaymentMethodText(selectedPaymentMethod));
    $('#confirmationDateTime').text(dateTimeStr);
    $('#paymentId').text(paymentId);
    
    // Store data for receipt download
    lastTransactionData = {
        orderId: orderId,
        paymentId: paymentId,
        type: type,
        stockSymbol: selectedStock.symbol,
        stockName: selectedStock.name,
        quantity: quantity,
        price: price,
        totalAmount: totalAmount,
        paymentMethod: getPaymentMethodText(selectedPaymentMethod),
        dateTime: dateTimeStr
    };
    
    $('#confirmationModal').fadeIn(300);
}

// Download receipt as text file
function downloadReceipt() {
    if (!lastTransactionData) {
        showAlert("No transaction data available", "error");
        return;
    }
    
    const data = lastTransactionData;
    
    // Create receipt content
    const receiptContent = `
==========================================
       STOCK TRADING RECEIPT
==========================================

Order ID: ${data.orderId}
Payment ID: ${data.paymentId}
Date & Time: ${data.dateTime}

------------------------------------------
Transaction Type: ${data.type}
Stock: ${data.stockSymbol} - ${data.stockName}
Quantity: ${data.quantity} shares
Price per Share: ₹${data.price.toFixed(2)}
------------------------------------------
Total Amount: ₹${data.totalAmount.toFixed(2)}
Payment Method: ${data.paymentMethod}
------------------------------------------

Status: COMPLETED

Thank you for trading with us!
This is a computer generated receipt.
==========================================
    `;
    
    // Create blob and download
    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Receipt_${data.orderId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showAlert("Receipt downloaded successfully!", "success");
}

// Get payment method text
function getPaymentMethodText(method) {
    switch(method) {
        case 'bank': return 'Bank Transfer';
        case 'upi': return 'UPI';
        case 'wallet': return 'e-Wallet';
        case 'card': return 'Credit Card';
        default: return 'Bank Transfer';
    }
}

// Update user balance display
function updateUserBalanceDisplay() {
    // This would update a balance display if we had one in the UI
    console.log(`User Balance: ₹${userBalance.toFixed(2)}`);
}

// Show alert
function showAlert(message, type = "info") {
    $('#alertContent').text(message);
    $('#marketAlert').fadeIn(300);
    
    setTimeout(() => {
        $('#marketAlert').fadeOut(300);
    }, 5000);
}

// Simulate market movements
function simulateMarketMovements() {
    if (!marketOpen) return;
    
    // Update market trend periodically
    if (Math.random() > 0.8) {
        const trends = ["up", "down", "neutral"];
        marketTrend = trends[Math.floor(Math.random() * trends.length)];
    }
    
    // Update all stock prices
    completeStocksData.forEach(stock => {
        // Base movement on market trend
        let trendFactor = 0;
        if (marketTrend === "up") trendFactor = 0.05;
        else if (marketTrend === "down") trendFactor = -0.05;
        
        // Stock's own movement
        const randomMove = (Math.random() - 0.5) * 0.1;
        
        // Calculate change
        const changePercent = (trendFactor + randomMove);
        const change = (stock.price * changePercent) / 100;
        
        // Update stock price
        stock.price += change;
        stock.change += change;
        stock.changePercent = (stock.change / (stock.price - stock.change)) * 100;
        
        // Update volume
        stock.volume += Math.floor(Math.random() * 100000) - 50000;
        if (stock.volume < 1000000) stock.volume = 1000000;
    });
    
    // Update portfolio prices
    portfolioData.forEach(holding => {
        const stock = completeStocksData.find(s => s.symbol === holding.symbol);
        if (stock) {
            holding.currentPrice = stock.price;
            const investment = holding.quantity * holding.avgPrice;
            const currentVal = holding.quantity * stock.price;
            holding.profitLoss = currentVal - investment;
            holding.changePercent = (holding.profitLoss / investment) * 100;
        }
    });
    
    // Update indices
    updateMarketIndices();
    
    // Re-render everything
    renderStocksList();
    renderStockDetails(selectedStock);
    renderPortfolio();
    
    // Show market alerts
    showMarketAlerts();
}

// Update market indices
function updateMarketIndices() {
    // Calculate average performance of top 30 stocks
    let totalChange = 0;
    completeStocksData.slice(0, 30).forEach(stock => {
        totalChange += stock.changePercent;
    });
    const avgChange = totalChange / 30;
    
    // Update Nifty
    const niftyElement = $('#niftyIndex');
    let niftyValue = parseFloat(niftyElement.find('.value').text().replace(/,/g, ''));
    niftyValue *= (1 + avgChange / 100);
    niftyElement.find('.value').text(niftyValue.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2}));
    
    const niftyChange = (avgChange * 20).toFixed(2);
    const niftyChangePercent = (avgChange).toFixed(2);
    niftyElement.find('.change')
        .removeClass('positive negative')
        .addClass(avgChange >= 0 ? 'positive' : 'negative')
        .text(`${avgChange >= 0 ? '+' : ''}${niftyChange} (${avgChange >= 0 ? '+' : ''}${niftyChangePercent}%)`);
    
    // Update Sensex (roughly 2.3x Nifty)
    const sensexElement = $('#sensexIndex');
    let sensexValue = parseFloat(sensexElement.find('.value').text().replace(/,/g, ''));
    sensexValue *= (1 + avgChange / 100);
    sensexElement.find('.value').text(sensexValue.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2}));
    
    const sensexChange = (avgChange * 50).toFixed(2);
    const sensexChangePercent = (avgChange).toFixed(2);
    sensexElement.find('.change')
        .removeClass('positive negative')
        .addClass(avgChange >= 0 ? 'positive' : 'negative')
        .text(`${avgChange >= 0 ? '+' : ''}${sensexChange} (${avgChange >= 0 ? '+' : ''}${sensexChangePercent}%)`);
}

// Show market alerts
function showMarketAlerts() {
    const now = Date.now();
    if (now - lastAlertTime < ALERT_COOLDOWN) return;
    
    // Randomly select a stock for alert
    const randomStock = completeStocksData[Math.floor(Math.random() * completeStocksData.length)];
    
    // Determine alert type
    let message = "";
    if (randomStock.changePercent > 2) {
        message = `${randomStock.symbol} has risen ${randomStock.changePercent.toFixed(2)}%. AI predicts a ₹${(2 + Math.random()).toFixed(2)} pullback soon.`;
    } else if (randomStock.changePercent < -2) {
        message = `${randomStock.symbol} has fallen ${Math.abs(randomStock.changePercent).toFixed(2)}%. AI predicts a ₹${(0.3 + Math.random() * 0.4).toFixed(2)} rebound soon.`;
    } else {
        return; // No alert for normal movements
    }
    
    lastAlertTime = now;
    $('#alertContent').text(message);
    $('#marketAlert').fadeIn(300);
    
    // Auto hide after 8 seconds
    setTimeout(() => {
        $('#marketAlert').fadeOut(300);
    }, 8000);
}

// Update market time
function updateMarketTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-IN', {hour: '2-digit', minute:'2-digit', second:'2-digit'});
    const dateString = now.toLocaleDateString('en-IN', {weekday: 'short', day: 'numeric', month: 'short'});
    
    $('#timeDisplay').text(`${dateString} ${timeString}`);
    $('#marketTime').text(`Today, ${now.toLocaleTimeString('en-IN', {hour: '2-digit', minute:'2-digit'})} IST`);
    
    checkMarketStatus(now);
}

// Check market status
function checkMarketStatus(now = new Date()) {
    const hour = now.getHours();
    const minute = now.getMinutes();
    const totalMinutes = hour * 60 + minute;
    
    const marketOpenTime = 9 * 60 + 15;
    const marketCloseTime = 15 * 60 + 30;
    
    const wasOpen = marketOpen;
    marketOpen = (totalMinutes >= marketOpenTime && totalMinutes <= marketCloseTime);
    
    if (marketOpen !== wasOpen) {
        const statusElement = $('#marketStatus');
        if (marketOpen) {
            statusElement.removeClass('closed').find('span').text('Market Open');
            statusElement.find('i').css('color', '#4caf50');
        } else {
            statusElement.addClass('closed').find('span').text('Market Closed');
            statusElement.find('i').css('color', '#f44336');
        }
    }
    
    // Auto open notification at 9:30
    if (hour === 9 && minute === 30 && !wasOpen && marketOpen) {
        $('#alertContent').text("Market has opened automatically at 9:30 AM. Trading session active.");
        $('#marketAlert').fadeIn(300);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    $('#stockSearch').on('keyup', function() {
        const searchTerm = $(this).val().toLowerCase();
        
        $('.stock-row').each(function() {
            const stockSymbol = $(this).find('h4').text().toLowerCase();
            const stockName = $(this).find('p').text().toLowerCase();
            
            if (stockSymbol.includes(searchTerm) || stockName.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    
    // Filter buttons
    $('.filter-btn').on('click', function() {
        const filter = $(this).data('filter');
        
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        applyStockFilter(filter);
    });
    
    // Timeframe buttons
    $('.timeframe-btn').on('click', function() {
        const timeframe = $(this).data('timeframe');
        
        $('.timeframe-btn').removeClass('active');
        $(this).addClass('active');
        
        updateChartTimeframe(timeframe);
    });
    
    // Refresh portfolio
    $('#refreshPortfolio').on('click', function() {
        $(this).addClass('fa-spin');
        setTimeout(() => {
            $(this).removeClass('fa-spin');
        }, 1000);
        
        // Update portfolio with latest prices
        portfolioData.forEach(holding => {
            const stock = completeStocksData.find(s => s.symbol === holding.symbol);
            if (stock) {
                holding.currentPrice = stock.price;
                const investment = holding.quantity * holding.avgPrice;
                const currentVal = holding.quantity * stock.price;
                holding.profitLoss = currentVal - investment;
                holding.changePercent = (holding.profitLoss / investment) * 100;
            }
        });
        
        renderPortfolio();
        
        $('#alertContent').text("Portfolio updated with latest market prices");
        $('#marketAlert').fadeIn(300);
    });
    
    // Buy/Sell buttons
    $('#buyStockBtn').on('click', openBuyModal);
    $('#sellStockBtn').on('click', () => openSellModal(selectedStock.symbol));
    
    // Trade modal
    $('#closeTradeModal').on('click', function() {
        $('#tradeModal').fadeOut(300);
    });
    
    // Quantity controls
    $('#decreaseQty').on('click', function() {
        const input = $('#quantityInput');
        let value = parseInt(input.val()) || 0;
        if (value > 1) {
            input.val(value - 1);
            calculateTotalAmount();
        }
    });
    
    $('#increaseQty').on('click', function() {
        const input = $('#quantityInput');
        let value = parseInt(input.val()) || 0;
        input.val(value + 1);
        calculateTotalAmount();
    });
    
    $('#quantityInput').on('input', calculateTotalAmount);
    
    // Order type change
    $('#orderType').on('change', function() {
        const orderType = $(this).val();
        $('#limitPriceGroup').toggle(orderType === 'limit');
        $('#stopPriceGroup').toggle(orderType === 'stop');
    });
    
    // Payment method selection
    $('.payment-method').on('click', function() {
        $('.payment-method').removeClass('selected');
        $(this).addClass('selected');
        selectedPaymentMethod = $(this).data('method');
    });
    
    // Trade form submission
    $('#tradeForm').on('submit', function(e) {
        e.preventDefault();
        processTrade();
    });
    
    // Download receipt button
    $('#downloadReceiptBtn').on('click', function() {
        downloadReceipt();
    });
    
    // Confirmation modal close buttons
    $('#closeConfirmationBtn').on('click', function() {
        $('#confirmationModal').fadeOut(300);
    });
    
    $('#viewPortfolioBtn').on('click', function() {
        $('#confirmationModal').fadeOut(300);
        // Scroll to portfolio or show portfolio panel
        if ($(window).width() > 1200) {
            $('.portfolio-panel').show();
        }
        // Highlight portfolio section
        $('html, body').animate({
            scrollTop: $('.portfolio-panel').offset().top
        }, 500);
    });
    
    // Close alert
    $('#closeAlert').on('click', function() {
        $('#marketAlert').fadeOut(300);
    });
    
    // Close modal
    $('#closeModal').on('click', function() {
        $('#portfolioModal').fadeOut(300);
    });
    
    // Close modal when clicking outside
    $('#portfolioModal').on('click', function(e) {
        if (e.target === this) {
            $(this).fadeOut(300);
        }
    });
    
    $('#tradeModal').on('click', function(e) {
        if (e.target === this) {
            $(this).fadeOut(300);
        }
    });
    
    $('#confirmationModal').on('click', function(e) {
        if (e.target === this) {
            $(this).fadeOut(300);
        }
    });
}

// Apply stock filter
function applyStockFilter(filter) {
    $('.stock-row').show();
    
    if (filter === 'gainers') {
        $('.stock-row').each(function() {
            const changeText = $(this).find('.change').text();
            const isPositive = !changeText.includes('-');
            if (!isPositive) $(this).hide();
        });
    } else if (filter === 'losers') {
        $('.stock-row').each(function() {
            const changeText = $(this).find('.change').text();
            const isNegative = changeText.includes('-');
            if (!isNegative) $(this).hide();
        });
    } else if (filter === 'ai') {
        $('.stock-row').each(function() {
            const symbol = $(this).data('symbol');
            const stock = completeStocksData.find(s => s.symbol === symbol);
            if (stock && stock.prediction !== 'buy') $(this).hide();
        });
    } else if (filter === 'volume') {
        // Sort by volume (simulated)
        const stocks = $('.stock-row').toArray();
        stocks.sort((a, b) => {
            const symbolA = $(a).data('symbol');
            const symbolB = $(b).data('symbol');
            const stockA = completeStocksData.find(s => s.symbol === symbolA);
            const stockB = completeStocksData.find(s => s.symbol === symbolB);
            return stockB.volume - stockA.volume;
        });
        $('#stocksList').empty().append(stocks);
    }
}

// Update chart timeframe
function updateChartTimeframe(timeframe) {
    let timeframeText = '';
    switch(timeframe) {
        case '1m': timeframeText = '1 Minute'; break;
        case '5m': timeframeText = '5 Minutes'; break;
        case '15m': timeframeText = '15 Minutes'; break;
        case '30m': timeframeText = '30 Minutes'; break;
        case '1h': timeframeText = '1 Hour'; break;
        case '4h': timeframeText = '4 Hours'; break;
        case '1d': timeframeText = '1 Day'; break;
        case '1w': timeframeText = '1 Week'; break;
    }
    
    $('.chart-header h2').html(`<i class="fas fa-chart-line"></i> ${timeframeText} Chart`);
}

// Helper functions
function formatNumber(num) {
    if (num >= 10000000) {
        return (num / 10000000).toFixed(2) + ' Cr';
    } else if (num >= 100000) {
        return (num / 100000).toFixed(2) + ' Lakh';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(2) + ' K';
    }
    return num.toFixed(2);
}

function formatVolume(volume) {
    if (volume >= 10000000) {
        return (volume / 1000000).toFixed(1) + 'M';
    } else if (volume >= 100000) {
        return (volume / 1000000).toFixed(2) + 'M';
    }
    return volume.toLocaleString();
}

// Make functions available globally for onclick handlers
window.openSellModal = openSellModal;