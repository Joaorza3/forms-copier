let fields = {}

const saveChanges = ({ target: input }) => {

    const identifier = input.id || input.name;

    fields[identifier] = {
        content: input.value,
    };

}

const recordActions = (runner) => {
    fields = runner.fields

    const inputs = document.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {
        input.addEventListener('blur', saveChanges);
    })
}

const stopRecording = (runner) => {
    let fields = runner.fields

    console.log(fields);

    localStorage.setItem('fields', JSON.stringify(fields));

    const inputs = document.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {
        input.removeEventListener('blur', saveChanges);
    })
}

const saveActualState = () => {
    const allFields = {}

    const inputs = document.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {

        const identifier = input.id || input.name;

        if (identifier && input.value) {

            allFields[identifier] = {
                content: input.value,
            };

        }

    })

    localStorage.setItem('fields', JSON.stringify(allFields));

    console.log(allFields);

}

export { recordActions, stopRecording, saveActualState };