
export function pixApi(inputValue) {
    const searchParams = new URLSearchParams({
        key: "48300565-6dad9db0463f535246b89c980",
        q: inputValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    });

    return fetch(`https://pixabay.com/api/?${searchParams}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
};