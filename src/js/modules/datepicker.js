import { easepick } from '@easepick/bundle';

function datepicker () {
    const picker = new easepick.create({
        element: "#datepicker",
        css: [
            "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"
        ],
        zIndex: 10,
        lang: "en-EN",
        format: "DD MMM YYYY"
    })
}

export default datepicker;