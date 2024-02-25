const extendHex = (shortHex) => {
  shortHex = shortHex.replace('#', '');
    
    // Handle case where shortHex has only one character per color
    if (shortHex.length === 3) {
        // Expand short hex code to full hex code
        shortHex = shortHex.replace(/./g, '$&$&');
    }

    // Add '#' prefix and return
    return '#' + shortHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
