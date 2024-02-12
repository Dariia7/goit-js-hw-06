class StringBuilder {
  #value;

  constructor(initialValue = "") {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
    }  //.

     padStart(str) {
    this.#value = str + this.#value;
    return this;
  }

    padEnd(str) {
    this.#value = this.#value + str;
    return this;
  }

 
  padBoth(str) {
    this.#value = str + this.#value + str;
    return this;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
