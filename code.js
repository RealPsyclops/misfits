const pricePerBatch = 0.000258; // Updated price per batch

function updateBatchCount(change) {
    const batchCountField = document.getElementById('batchCount');
    const btcAmountField = document.getElementById('btcAmount');
    let batchCount = parseInt(batchCountField.value, 10);

    batchCount = Math.max(1, batchCount + change); // Prevent less than 1 batch
    batchCountField.value = batchCount;

    const totalBTC = (batchCount * pricePerBatch + 0.000001).toFixed(6); // Multiply correctly and format
    btcAmountField.textContent = totalBTC;

    const totalTokens = (batchCount * 2300);
    totalMisfitMindset.textContent = totalTokens;
}

function copyToClipboard() {
    const btcAmount = document.getElementById('btcAmount').textContent;
    navigator.clipboard.writeText(`${btcAmount} BTC`);
    // No popup or alert
}
