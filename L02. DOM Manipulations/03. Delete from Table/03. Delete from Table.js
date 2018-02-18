function deleteByEmail() {
    let input = document.querySelector('input[name="email"]');
    let output = document.getElementById('result');
    if (input.value !== '') {
        let targetEmail = input.value;
        let table = document.getElementById('customers');
        let rows = table.querySelectorAll('tr');
        for (let i = 1; i < rows.length; i++) {
            if (rows[i].children[1].textContent === targetEmail) {
                rows[i].parentNode.removeChild(rows[i]);
                output.textContent = 'Deleted.';
                return;
            }
        }
    }
    output.textContent = 'Not found.';
}