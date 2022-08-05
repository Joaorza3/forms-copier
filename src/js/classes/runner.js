export default class Runner {
    fields

    constructor(fields) {
        this.fields = fields;
    }

    run() {

        const fields = JSON.parse(localStorage.getItem('fields'));

        const milisecondsToWait = 100
        let miliseconds = milisecondsToWait;

        Object.keys(fields).forEach(key => {

            setTimeout(() => {
                let input = document.getElementById(key);

                if (!input) {
                    input = document.getElementsByName(key)[0];
                }

                input.value = fields[key].content;
            }, miliseconds);

            miliseconds += milisecondsToWait;

        });

        console.log(fields);
    }
}