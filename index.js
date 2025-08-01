const bank = [];
const odds = [];
const evens = [];

function addNumber(num) {
 bank.push(num);
 render();
}

function sort1Number() {
    const num = bank.shift();
    if (num % 2 !== 0) {
        odds.push(num);
    } else {
        evens.push(num);
    }
    render();
}

function sortAllNumbers() {
    while (bank.length > 0) {
        sort1Number();
    }
    render();
}

function InputForm() {
    const $inputForm = document.querySelector(".input-form");
  $inputForm.innerHTML = `
    <form>
      <label>Add a number to the bank</label>
      <input type="number" name="input" />
      <button name="add-number" value="add-number">Add Number</button>
      <button name="sort-1" value="sort-1">Sort 1</button>
      <button name="sort-all" value="sort-all">Sort All</button>
    </form>
  `;
  $inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const action = e.submitter.value;
    if (action === "add-number"){
        addNumber(e.target.input.value);
    } else if (action === "sort-1") {
        sort1Number();
    } else if (action === "sort-all") {
        sortAllNumbers();
    } console.log(action)
  });
}

function render() {
    const $app = document.querySelector("#app");
    $app.innerHTML = `
    <h1>Odds and Evens</h1>
    <div class="input-form">
    </div>
    <div>
      <h2>Bank</h2>
      <div class="number-selector">${bank.join(" ")}</div>
    </div>
    <div>
      <h2>Odds</h2>
      <div class="number-selector">${odds.join(" ")}</div>
    </div>
    <div>
      <h2>Evens</h2>
      <div class="number-selector">${evens.join(" ")}</div>
    </div>
    `;
    InputForm();
};

render();