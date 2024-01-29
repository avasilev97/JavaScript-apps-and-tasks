function unCypher(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (str[i].match(/[A-Za-z]/)) {
      let base =
        str[i] === str[i].toLowerCase() ? "a".charCodeAt(0) : "A".charCodeAt(0);
      charCode = ((charCode - base + 13) % 26 + 26) % 26 + base;
    }

    result += String.fromCharCode(charCode);
  }

  return result;
}

function cypher(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (str[i].match(/[A-Za-z]/)) {
      let base =
        str[i] === str[i].toLowerCase() ? "a".charCodeAt(0) : "A".charCodeAt(0);
      charCode = ((charCode - base - 13) % 26 + 26) % 26 + base;
    }

    result += String.fromCharCode(charCode);
  }

  return result;
}

const cyphered = cypher('DID CAESAR INVENT THIS?');
console.log(cyphered);

const unCyphered = unCypher(cyphered);
console.log(unCyphered);
