function normalizeWords(str) {
    const clean = String(str || "").trim();
    
    if (clean === "") return "";
    
    const words = clean.split(/\s+/);
    
    const normalized = words.map(word => {
        const lowerWord = word.toLowerCase();
        return lowerWord[0].toUpperCase() + lowerWord.slice(1);
    });
    
    return normalized.join(" ");
}

console.log(normalizeWords("  пРиВЕТ  МИР!  "));
// дз